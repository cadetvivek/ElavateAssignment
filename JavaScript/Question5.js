const obj1 = { name: "John", age: 30 };
const obj2 = { age: 40, city: "New York" };

function mergeObjects(obj1, obj2){
    console.log({...obj1, ...obj2})
}

mergeObjects(obj1, obj2)


