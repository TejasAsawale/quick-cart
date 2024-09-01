const User = require('../models/userModel');

const createUser = async(req,res) => {
    const email = req.body.email;
    const findUser = await User.findOne({ email: email });
    if (!findUser) {
        // create new user 
        const newUser = await User.create(req.body);
    } else {
        // user already exists
        res.json({
            msg:"User Already Exists",
            success: false,
        })
    }
};

module.exports = {createUser};