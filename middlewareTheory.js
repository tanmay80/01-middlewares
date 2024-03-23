//How to do auth check?
//How to ensure that a input is valid?

//Answer is Middleware!!


const express=require("express");

const app=express();

app.get("/lauda",someMiddleware,someOtherMiddleware,(req,res)=>{

});

//So we can use middle ware like this in the different api calls for solving any auth or things that meeds to 
//be repeated for multiple apis

//Now let say there a auth middleware we created with name "authMiddleware" which need to be present in 
//every api request
// So that means we need to write "authMiddleware" in all the api request .
//but if we are sure that some middleware is  going to be used in all the request then we can use
//   app.use(authMiddleware);

//Middleware will take 3 parameters (req,res,next) 
//Where next is a function that we need to call like "next()" if we want the next middleware to run or
//the call back function to run in api request


//Global Catches

//So when ever a exception is raised we don't want that the user can see the exception that is being raised'
// So we use global catches at the end of all the api request to make sure that the user are not able to see the
//exception and are only able to see what we want them to see.


// TO use global catches we make a middleware  at the end of all the api requset.
//with parameters (err,req,res,next)
//These middleware are also called as ****ERROR HANDLING MIDDLEWARE****
//looks something like this

// app.use((err,req,res,next)=>{

// })