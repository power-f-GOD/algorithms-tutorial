const log_result_with_duration = (callback) => {
  console.time();
  console.log(typeof callback === 'function' ? callback() : callback);
  console.timeEnd();
};

module.exports = log_result_with_duration;
