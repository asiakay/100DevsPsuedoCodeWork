
// Create a function truncate(str, maxlength) that checks the length of the str and, if it exceeds maxlength – replaces the end of str with the ellipsis character "…", to make its length equal to maxlength.

// The result of the function should be the truncated (if needed) string.

// For instance:

// truncate("What I'd like to tell on this topic is:", 20) = "What I'd like to te…"

// truncate("Hi everyone!", 20) = "Hi everyone!"

//given a string, positive integer
//return a string 

//123456789123456789...

const truncate = (str, maxlength) => {
  // if the str's length is greater than maxlength
  if(str.length>maxlength){
    return str.slice(0, 18) + "..."
  }
  //first 17 characters + "..."
  //else return str
  else{
    return str;
  }

}

console.log(truncate("What I'd like to tell on this topic is:", 20))
console.log(truncate("Hi everyone!", 20))




// Questions to ask Interviewer during Prep
/* 
Current Problem

To Clarify, "..." will add length to the 20th char? 
I'm given a string and want to return a string that is 20 characters? 
Will it be an positive integer?
Wil the string have numbers or special characters?
If the length of the string is longer than X, we want to return __________ ? 
If the string is less than 20 chars, do i just return the string?









Problem 1 
To verify, we want to create a function that return a string?  
Will the string have any numbers or special characters?
can we use regex ?
might there be an array of strings? 



 */