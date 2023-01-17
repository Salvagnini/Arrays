// **************1***************
let arr = [
    'Mike',
    'Nikola',
    'Tom',
]
console.log(arr[1]);

arr[1] = 'Alex';
console.log(arr[1]);
console.log(arr);

arr.splice(1, 2);
console.log(arr);

console.log(arr.length);



// **************2****************
let a = [5, 3, -4, 25, 32, -16, 6];
let b = [21, -30, 9, 5, 12, -19, 5, 25];
if (a.length > b.length) {
    console.log('a > b');
}
if (a.length < b.length) {
    console.log('a < b');
} else {
    console.log('a == b');
}



// **************** 3 ******************
let phrase = 'I am learning JavaScript right now';
let array = phrase.split(' ');
console.log(array);





//****************** 4 ********************
let a1 = [5, 3, 8, 5, 3, 2, 1, 2];
let b1 = [];
a1.forEach((Element) => {
    if (!b1.includes(Element)) {
        b1.push(Element);
    }
});
console.log(b1);



// ***************5*******************
let users = [
  {id: 1, age: 17}, 
  {id: 2, age: 18}, 
  {id: 3, age: 19}, 
  {id: 4, age: 21},
  {id: 5, age: 17},
  {id: 6, age: 20},
  {id: 7, age: 25},
];
function ageId(users) {
    users.forEach((user) => {
        if (user.age > 18 && user.age < 21) {
            console.log(user.id);
        }
    })
}
ageId(users);