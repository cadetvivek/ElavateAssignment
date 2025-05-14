const obj = {
    name: "John",
    address: {
      city: "New York",
      zip: 10001
    }
  };
  

  function deepCopy(obj){
    return JSON.parse(JSON.stringify(obj))
  }
const copy = deepCopy(obj)
console.log(copy)