function add(numbers) {
  if (numbers === "") {
    return 0;
  }
  const numArray = numbers.split(/[\n,]/);
  return numArray.reduce((sum, num) => sum + Number(num), 0);
}

module.exports = { add };
