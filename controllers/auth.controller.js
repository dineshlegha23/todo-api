import User from "../models/user.model.js";
import { attachCookiesToResponse } from "../utils/jwt.js";

export const register = async (req, res) => {
  const { email, name, password } = req.body;

  try {
    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(400).json({ error: "Email already exists." });
    }

    const user = await User.create({ email, password, name });

    attachCookiesToResponse({ res, userId: user._id.toString() });
    res.status(201).json({ id: user._id, email: user.email, name: user.name });
  } catch (error) {
    console.log(error);

    res.status(500).json({ error: error.message });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: "Please provide email and password" });
  }

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: "Invalid credentials" });
    }
    const isPasswordCorrect = await user.comparePassword(password);
    if (!isPasswordCorrect) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    attachCookiesToResponse({ res, userId: user._id });
    res.status(200).json({ id: user._id, email: user.email, name: user.name });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const logout = async (req, res) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(Date.now()),
  });
  res.status(200).json({});
};
