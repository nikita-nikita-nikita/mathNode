const min = (arr) => {
  if(Array.isArray(arr)){
    return arr.reduce( (acc, current) => acc < current ? acc : current)
  }
  else {
    throw new Error("Function must pass array as an argument ");
  }
}

module.exports = min;
