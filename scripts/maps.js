/*eslint-disable*/
// Object
const obj = new Object({ // const obj = {};
  name: 'Mohamed',
  last: 'Ahmed',
  experience: 10,
});

Object.entries(obj).forEach(entry => console.log(entry))

obj.name = 'Zaki';

if(obj.last){
    console.log("Object True");
}

delete obj.last;

console.log(obj);

// Map
const map = new Map([[obj, `5/10`], ['last', 'Ahmed'], ['experience', 10]]);

// map.forEach((entry,key) => console.log(`${key}: ${entry}`))
for(const entry of map){
    console.log(entry[1]);
}
map.set('name', 'Zaki');

if(map.has("last")){
    console.log("Map True");
}
map.delete("last")

console.log(map);
