const jwt = require("jsonwebtoken");
const { UserModel } = require("../models/user.model");

const Authentication = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];

      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      let findUser = await UserModel.findById(decoded.userId);
      if (!findUser) {
        return res.status(400).json({
          status: "fail",
          message: "Please login first",
        });
      }
      (req.userId = decoded.userId),
       next();
    } catch (error) {
      res.status(400).json({
        status: "fail",
        message: "Token not verified",
      });
    }
  }

  if (!token) {
    res.status(400).json({
      status: "fail",
      message: "Token must be sended to headers",
    });
  }
};

module.exports = {
  Authentication,
};
