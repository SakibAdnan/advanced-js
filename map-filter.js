const numbers = [3, 5, 8, 9 , 10];
// const output = [];
// for(let i = 0; i < numbers.length; i++){
//     const element = numbers[i];
//     const result  = element * element;
//     output.push(result);
// }
// console.log(output);

// numbers.map(function factoryal(habijabi, index, arrays){
//     console.log(habijabi, index, arrays );
// });

const results = numbers.map( y => y * y );
console.log( results);


const student = [
    {id:21, name:"Sakib"},
    {id:31, name:"Forid"},
    {id:41, name:"Qudush"},
    {id:51, name:"Rakib"},
    {id:61, name:"Sojib"}
];
const studentName = [];
for(let i = 0; i <student.length; i++ ){
    const elements = student[i];
    studentName.push(elements.name);

}
console.log(studentName);
//Array function
const names = student.map(sName => sName.name);
console.log(names);
names.pop();
console.log(names);











