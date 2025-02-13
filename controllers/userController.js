const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

// signup a user
exports.signup = async (req, res) => {
  try {
    const { username, password, fullname, gender, dateOfBirth, country } =
      req.body;

    if (
      !username ||
      !password ||
      !fullname ||
      !gender ||
      !dateOfBirth ||
      !country
    ) {
      return res
        .status(400)
        .json({ message: "Please provide all required fields" });
    }

    // check if user already exists
    const user = await User.findOne({ username });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({
      username,
      fullname,
      gender,
      dateOfBirth,
      country,
      password: hashedPassword,
    });

    res.status(201).json({
      message: "User created successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// login a user
exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res
        .status(400)
        .json({ message: "Please provide username and password" });
    }

    // check if user exists
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ message: "User does not exist" });
    }

    // check if password is correct
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // create token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.status(200).json({
      message: "User logged in successfully",
      token,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// search a user by username
exports.searchUser = async (req, res) => {
  try {
    const { username } = req.body;

    if (!username) {
      return res
        .status(400)
        .json({ message: "Please provide username to search" });
    }

    // check if user exists
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ message: "User does not exist" });
    }

    // make password private
    user.password = undefined;

    res.status(200).json({
      message: "User found successfully",
      user,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
