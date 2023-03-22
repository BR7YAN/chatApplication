const mongoose = require("mongoose");
const User = mongoose.model("User");
const sha256 = require("js-sha256");
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
    const {name, email, password} = req.body;

    const emailRegex = /[@gmail.com|@yahoo.com|@hotmail.com|@live.com]$/;
    console.log("email == ", email);
    console.log("res == ", emailRegex.test(email))
    console.log("name == ", name)
    console.log("password == ", password)
    if (!emailRegex.test(email))
        throw "Email is not supported from the domain."
    if (password.lenght < 6)
        throw "Password must be at least 6 characters long."
    const userExist = await  User.findOne({
        email,
    });
    console.log("User == ", userExist);

    if (userExist)
        throw "User with same email already exist.";

    const user = new User({
        name,
        email,
        password: sha256(password + process.env.SALT )});
    await user.save();

    res.status(201).json({
        message: "User [" + name + "] registered successfully"
    });
};

exports.login = async (req, res) => {
    const { email, password } = req.body;
    
    const user = await  User.findOne({
        email,
        password: sha256(password + process.env.SALT),
    });

    if (!user)
        throw "Email and Password did not match.";
    const token = await jwt.sign({id: user.id}, process.env.SECRET);

    res.status(200).json({
        message: "User logged in succesfully.",
        token,
    })
}