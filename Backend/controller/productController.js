const Product = require("../models/productModel");
const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");
const slugify = require("slugify");
const validateMongoDbId = require("../utils/validateMongoDbId");
const cloudinaryUploadImg = require("../utils/cloudinary");
const fs = require("fs");
const { error } = require("console");
// const { log } = require("console");

// Create a new product
const createProduct = asyncHandler(async (req, res) => {
  try {
    if (req.body.title) {
      req.body.slug = slugify(req.body.title);
    }
    const newProduct = await Product.create(req.body);
    res.json(newProduct);
  } catch (error) {
    throw new Error(error);
  }
});

// update an existing product
const updateProduct = asyncHandler(async (req, res) => {
  const id = req.params.id;
  validateMongoDbId(id);
  try {
    if (req.body.title) {
      req.body.slug = slugify(req.body.title);
    }
    const updateProduct = await Product.findOneAndUpdate(
      { _id: id },
      req.body,
      {
        new: true,
      }
    );
    res.json(updateProduct);
  } catch (error) {
    throw new Error(error);
  }
});

// Delete a product
const deleteProduct = asyncHandler(async (req, res) => {
  const id = req.params.id;
  validateMongoDbId(id);
  try {
    const deleteProduct = await Product.findOneAndDelete({ _id: id });
    res.json(deleteProduct);
  } catch (error) {
    console.error("Error deleting product:", error.message);
    throw new Error(error);
  }
});

// get a single product
const getaProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const findProduct = await Product.findById(id);
    res.json(findProduct);
  } catch (error) {
    throw new Error(error);
  }
});

// Getting all products
const getAllProduct = asyncHandler(async (req, res) => {
  // console.log(req.query);
  try {
    // Filtering
    const queryObj = { ...req.query };
    const excludeFields = ["page", "sort", "limit", "fields"];
    excludeFields.forEach((el) => delete queryObj[el]);
    console.log(queryObj);
    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);
    let query = Product.find(JSON.parse(queryStr));

    // Sorting
    if (req.query.sort) {
      const sortBy = req.query.sort.split(",").join(" ");
      query = query.sort(sortBy);
    } else {
      query = query.sort("-createdAt");
    }

    // limiting the fields
    if (req.query.fields) {
      const fields = req.query.fields.split(",").join(" ");
      query = query.select(fields);
    } else {
      query = query.select("-__v");
    }

    // Pagination
    const page = req.query.page;
    const limit = req.query.limit;
    const skip = (page - 1) * limit;
    query = query.skip(skip).limit(limit);
    if (req.query.page) {
      const productCount = await Product.countDocuments();
      if (skip >= productCount) throw new Error("This page does not exists");
    }
    console.log(page, limit, skip);

    const product = await query;
    res.json(product);
  } catch (error) {
    throw new Error(error);
  }
});

// Add to WishList Functionality
const addToWishlist = asyncHandler(async (req, res) => {
  const { _id } = req.user;
  const { prodId } = req.body;
  try {
    const user = await User.findById(_id);
    const alreadyadded = user.wishlist.find((id) => id.toString() === prodId);
    if (alreadyadded) {
      let user = await User.findByIdAndUpdate(
        _id,
        {
          $pull: { wishlist: prodId },
        },
        {
          new: true,
        }
      );
      res.json(user);
    } else {
      let user = await User.findByIdAndUpdate(
        _id,
        {
          $push: { wishlist: prodId },
        },
        {
          new: true,
        }
      );
      res.json(user);
    }
  } catch (error) {
    throw new Error(error);
  }
});

// Count to Total ratings
const rating = asyncHandler(async (req, res) => {
  const { _id } = req.user;
  const { star, prodId, comment } = req.body;

  try {
    const product = await Product.findById(prodId);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    // check if the user has already rated or not
    let alreadyRated = product.ratings.find(
      (userId) => userId.postedby.toString() === _id.toString()
    );

    if (alreadyRated) {
      // update existing rating
      const updateRating = await Product.updateOne(
        {
          ratings: { $elemMatch: alreadyRated },
        },
        {
          $set: {
            "ratings.$.star": star,
            "ratings.$.comment": comment,
          },
        },
        {
          new: true,
        }
      );
    } else {
      // add new rating
      const rateProduct = await Product.findByIdAndUpdate(
        prodId,
        {
          $push: {
            ratings: {
              star: star,
              comment: comment,
              postedby: _id,
            },
          },
        },
        {
          new: true,
        }
      );
    }
    // fetch updated product
    const getallratings = await Product.findById(prodId);
    if (!getallratings || !getallratings.ratings) {
      return res.status(404).json({ message: "Product or ratings not found" });
    }
    let totalRating = getallratings.ratings.length;
    let ratingsum = getallratings.ratings
      .map((item) => item.star)
      .reduce((prev, curr) => prev + curr, 0);
    // calculate the average of rating
    let actualRating = Math.round(ratingsum / totalRating);
    let finalproduct = await Product.findByIdAndUpdate(
      prodId,
      {
        totalrating: actualRating,
      },
      {
        new: true,
      }
    );
    res.json(finalproduct);
  } catch (error) {
    throw new Error(error.message || "An error occured");
  }
});

// upload a Images
const uploadImages = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  console.log("req.files:", req.files);

  try {
    const uploader = (path) => cloudinaryUploadImg(path, "images");
    const urls = [];
    const files = req.files;

    for (const file of files) {
      const { path } = file;

      // upload to cloudinary
      const newPath = await uploader(path);
      console.log(newPath);
      urls.push(newPath);
      // const filepath = `public/images/products/${file.filename}`;

      console.log(path);
      // delete local file after uploading
      fs.unlinkSync(path);
      // console.log(`Deleted local file: ${filepath}`);
    }

    // update the product with the image urls
    const findProduct = await Product.findByIdAndUpdate(
      id,
      { 
        images: urls.map((file)=> {
          return file;
        }),
      },
      { 
        new: true,
      }
    );
    // if (!findProduct) {
    //   return res
    //     .status(404)
    //     .json({ message: "Product not found with the given ID" });
    // }
    res.json(findProduct);
  } catch (error) {
    console.error("Error uploading images:", error.message);
    res.status(500).json({ message: error.message });
  }
});

// const uploadImages = asyncHandler(async (req, res) => {
//   const { id } = req.params;
//   validateMongoDbId(id);
//   console.log(req.files);
  
//   if (!req.files || req.files.length === 0) {
//     return res.status(400).json({ message: "No files to upload" });
//   }

//   try {
//     const urls = [];

//     for (const file of req.files) {
//       const newPath = await cloudinaryUploadImg(file.path); // Use `processedPath`
//       urls.push(newPath);

//       // Add a delay to allow cloudinary to finish processing
//       setTimeout(() => {
//         fs.unlink(file.path, (err) => {
//           if(err) {
//             console.log("Failed to delete file:", err.message);
//           } else {
//             console.log(`Deleted file: ${file.path}`);
//           }
//         });
//       },5000); // wait for 5 seconds before deleting
//     }

//     const findProduct = await Product.findByIdAndUpdate(
//       id,
//       {
//         // images: urls.map((file) => file),
//         images: urls
//       },
//       { new: true }
//     );

//     if (!findProduct) {
//       return res.status(404).json({ message: "Product not found with the given ID" });
//     }

//     res.json(findProduct);
//   } catch (error) {
//     console.error("Error uploading images:", error.message);
//     res.status(500).json({ message: error.message });
//   }
// });



module.exports = {
  createProduct,
  getaProduct,
  getAllProduct,
  updateProduct,
  deleteProduct,
  addToWishlist,
  rating,
  uploadImages,
};
