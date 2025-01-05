import { isTokenValid } from "../utils/jwt.js";

export const authenticateUser = async (req, res, next) => {
  const { jwt } = req.signedCookies;

  if (!jwt) {
    return res.status(401).json({ message: "Authentication Invalid" });
  }
  try {
    const { userId } = isTokenValid(jwt);
    req.user = { userId };
    next();
  } catch (err) {
    console.log(err);

    return res.status(401).json({ message: "Authentication Invalid" });
  }
};
