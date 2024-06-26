const { constants } = require('../constants');
const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  switch (statusCode) {
    case constants.VALIDATION_ERROR:
      res.json({
        title: 'Validation Failed',
        message: err.message,
        stackTrack: err.stack,
      });
      break;

    case constants.NOT_FOUND:
      res.json({
        title: 'Not Found',
        message: err.message,
        stackTrack: err.stack,
      });
      break;
    case constants.UNAUTHORIZED:
      res.json({
        title: 'UN AUTHORIZED',
        message: err.message,
        stackTrack: err.stack,
      });
      break;

    case constants.FORBIDDEN:
      res.json({
        title: 'FORBIDDEN',
        message: err.message,
        stackTrack: err.stack,
      });
      break;
    case constants.SERVER_ERROR:
      res.json({
        title: 'SERVER ERROR',
        message: err.message,
        stackTrack: err.stack,
      });
      break;
    default:
      console.log('Eror handler default, no error');
      break;
  }
};

module.exports = { errorHandler };
