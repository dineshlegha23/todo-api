import jwt from "jsonwebtoken";

const createJWT = ({ userId }) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_LIFETIME,
  });
  return token;
};

export const isTokenValid = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET);
};

export const attachCookiesToResponse = ({ res, userId }) => {
  const token = createJWT(userId);
  const oneMonth = 1000 * 60 * 60 * 24 * 30;

  res.cookie("jwt", token, {
    httpOnly: true,
    expires: new Date(Date.now() + oneMonth),
    secure: process.env.NODE_ENV === "production",
    signed: true,
  });
};
