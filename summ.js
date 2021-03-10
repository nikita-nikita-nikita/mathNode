function carriedSum(...args) {
  const arr = args.flat(Infinity);
  return arr.reduce((acc, sum) => acc + sum, 0)
}

module.exports = carriedSum;
