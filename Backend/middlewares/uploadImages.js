const multer = require('multer');
const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

const multerStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../public/images"));
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix + ".jpeg");
  },
});

const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb(
      {
        message: "Unsupported file format",
      },
      false
    );
  }
};

const uploadPhoto = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
  limits: { fieldSize: 2000000 },
});

// const productImgResize = async (req, res, next) => {
//   if (!req.files) return next();

//   try {
//     await Promise.all(
//       req.files.map(async (file) => {
//         const buffer = file.buffer || fs.readFileSync(file.path); // Use buffer for memoryStorage
//         const outputPath = `public/images/products/${file.filename}`;
    
//         await sharp(buffer)
//           .resize(300, 300)
//           .toFormat("jpeg")
//           .jpeg({ quality: 90 })
//           .toFile(outputPath);
    
//         // Delete the file if diskStorage is used
//         if (file.path) {
//           fs.unlinkSync(file.path);
//         }
//       })
//     );
//     next();
//   } catch (error) {
//     console.error("Error in image resizing:", error.message);
//     res.status(500).json({ message: "Error processing images" });
//   }
// };

const productImgResize = async (req, res, next) => {
  if (!req.files || req.files.length === 0) {
    return res.status(400).json({ message: "No files uploaded" });
  }

  try {
    await Promise.all(
      req.files.map(async (file) => {
        const outputPath = path.join(__dirname, "../public/images/products", file.filename);

        await sharp(file.path) // Use `file.path` for disk storage
          .resize(300, 300)
          .toFormat("jpeg")
          .jpeg({ quality: 90 })
          .toFile(outputPath);

        fs.unlinkSync(file.path); // Clean up original file after processing
        file.processedPath = outputPath; // Add a custom field for further processing
      })
    );
    next();
  } catch (error) {
    console.error("Error in image resizing:", error.message);
    res.status(500).json({ message: error.message });
  }
};


const blogImgResize = async (req, res, next) => {
  if (!req.files) return next();
  await Promise.all(
    req.files.map(async (file) => {
      await sharp(file.path)
        .resize(300, 300)
        .toFormat("jpeg")
        .jpeg({ quality: 90 })
        .toFile(`public/images/blogs/${file.filename}`);
    })
  );
  next();
};

module.exports = { uploadPhoto, productImgResize, blogImgResize };
