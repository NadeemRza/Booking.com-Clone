export const createError = (status, message) => {
  const err = new Error();
  err.status = status;
  err.message = message;
  return err;
};

//code in file
// const failed = true;
// if (failed) return next(next(createError(401, "You are not authenticated.")));
