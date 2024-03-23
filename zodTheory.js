//How to do input validation in better way than just using adding some code after taking input from user

//Use ZOD

//Zod is a library used for schema validation shit

const zod=require("zod");

const schema = zod.array(zod.number());

//So now when I parse my input through my schema it will tell me if the input is in valid schema or not..

const response = schema.safeParse([5,6,7]);
const response2 = schema.safeParse([5,6,"asdasd"]);
const response3 = schema.safeParse("[5,6,7]");

console.log(response);
console.log(response2);
console.log(response3);



if(!response.success){
    console.log("Response unsuccessfull");
}else{
    console.log("Response successfull");
}