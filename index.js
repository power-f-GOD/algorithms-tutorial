const { limit, list, log_result_with_duration } = require('./utils');
const linear_search = require('./linear-search');
const binary_search = require('./binary-search');
const recursive_binary_search = require('./recursive-binary-search');

const target = 800 || limit;

log_result_with_duration(linear_search(list, target));
log_result_with_duration(binary_search(list, target));
log_result_with_duration(recursive_binary_search(list, target));
