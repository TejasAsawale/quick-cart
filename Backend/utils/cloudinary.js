const cloudinary = require('cloudinary');

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.SECRET_KEY,
});

const cloudinaryUploadImg = async (filePath, foldername = "default") => {
    return new Promise((resolve, reject) => {
      cloudinary.uploader.upload(
        filePath,
        { resource_type: "auto", folder: `images/${foldername}` },
        (error, result) => {
          if (error) {
            reject(error);
          } else {
            resolve({ url: result.secure_url });
          }
        }
      );
    });
  };
  

module.exports = cloudinaryUploadImg;