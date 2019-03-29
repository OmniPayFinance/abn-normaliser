module.exports = function(value, previousValue) {
  if (!value) {
    return value;
  }
  const onlyNums = value.replace(/[^\d]/g, '');
  if (!previousValue || value.length > previousValue.length) {
    // typing forward
    if (onlyNums.length === 2) {
      return `${onlyNums} `;
    }
    if (onlyNums.length === 5) {
      return `${onlyNums.slice(0, 2)} ${onlyNums.slice(2)} `;
    }
  }
  if (onlyNums.length <= 1) {
    return onlyNums;
  }
  if (onlyNums.length <= 5) {
    return `${onlyNums.slice(0, 2)} ${onlyNums.slice(2, 5)}`;
  }
  if (onlyNums.length <= 8) {
    return `${onlyNums.slice(0, 2)} ${onlyNums.slice(2, 5)} ${onlyNums.slice(5, 8)}`;
  }
  return `${onlyNums.slice(0, 2)} ${onlyNums.slice(2, 5)} ${onlyNums.slice(5, 8)} ${onlyNums.slice(8, 11)}`;
};
