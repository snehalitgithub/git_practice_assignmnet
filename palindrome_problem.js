// Q.2  Check whether a string is palindrome or not.

let str="naman"
let rev_str="";
    
    for(let i=str.length-1;i>=0;i--){
        
        rev_str+=str[i];
    }
    if(rev_str==str){
        console.log("Yes");
    }else{
        console.log("No");
    }


