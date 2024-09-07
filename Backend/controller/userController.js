const { generateToken } = require('../config/jwtToken');
const User = require('../models/userModel');
const asyncHandler = require("express-async-handler");

const createUser = asyncHandler(async (req,res) => {
    const email = req.body.email;
    const findUser = await User.findOne({ email: email });
    if (!findUser) {
        // create new user 
        const newUser = await User.create(req.body);
        res.json(newUser);
    } else {
        // user already exists
        throw new Error("User Already Exists");
    }
});

const loginUser = asyncHandler(async(req,res) => {
    const {email, password} = req.body;
    // check if user exists or not 
    const findUser = await User.findOne({ email  });
    if (findUser && await findUser.isPasswordMatched(password)) {
        res.json({
            _id: findUser?._id,
            firstname: findUser?.firstname,
            lastname: findUser?.lastname,
            email: findUser?.email,
            mobile: findUser?.mobile,
            token: generateToken(findUser?._id),
        });
    } else {
        throw new Error("Invalid Credentials");
    }
});

// get all users
const getallUser = asyncHandler(async(req,res)=> {
    try {
        const getUsers = await User.find();
        res.json(getUsers);
    } catch (error) {
        throw new Error(error)
    } 
});

// get a users
const getaUser = asyncHandler(async(req,res)=> {
    // console.log(req.params);
    
    const { id } = req.params;
    try {
        const getaUser = await User.findById(id);
        res.json({
            getaUser,
        })
    } catch (error) {
        throw new Error(error);
    }
    
});

// delete a users
const deleteaUser = asyncHandler(async(req,res)=> {
    // console.log(req.params);
    
    const { id } = req.params;
    try {
        const deleteaUser = await User.findByIdAndDelete(id);
        res.json({
            deleteaUser,
        })
    } catch (error) {
        throw new Error(error);
    }
    
});

module.exports = 
{
    createUser,
    loginUser,
    getallUser,
    getaUser,
    deleteaUser
};