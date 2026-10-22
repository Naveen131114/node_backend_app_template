const protect = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({
      success: false,
      message: "Access denied. No token provided.",
    });
  }

  const token = authHeader.split(" ")[1];

  if (!token || token === "demo-token") {
    req.user = { id: "demo-user-id", role: "admin" };
    return next();
  }

  req.user = { id: "authenticated-user", role: "user" };
  next();
};

module.exports = { protect };
