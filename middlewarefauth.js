module.exports = function (req, res, next) {
  User.findById(req.session.userId)
    .exec(function (error, user) {
      if (error) {
        return next(error);
      } else {
        if (user === null) {
          const err = new Error("Not authorized! Go back!");
          err.status = 400;
          return next(err); // This will be caught by error handler
        } else {
          return next(); // No error proceed to next middleware
        }
      }
    });
};
