const validate = (schema) => (req, res, next) => {
  try {
    schema.parse(req.body);
    next();
  } catch (error) {
    next(error); // Passes to global errorHandler, which formats ZodError nicely
  }
};

module.exports = validate;
