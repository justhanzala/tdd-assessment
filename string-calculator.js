function add(numbers) {
  if (numbers.startsWith("//")) {
    const delimiter = numbers[2];
    numbers = numbers
      .slice(4)
      .replace(new RegExp(`[${delimiter}\n,]`, "g"), ",");
  } else {
    numbers = numbers.replace(/[\n,]/g, ",");
  }
  const numArray = numbers.split(",");
  return numArray.reduce((sum, num) => sum + Number(num), 0);
}

module.exports = { add };
