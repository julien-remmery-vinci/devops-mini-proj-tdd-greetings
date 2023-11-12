const { table } = require("console");

function greet(name){
    if(name === null || name ===undefined || name ==="") return "Hello, my friend.";

    if(Array.isArray(name) && name.length >= 2) {
        const sortedNames = sortArray(name); 
        let out = lowerNames(sortedNames[0]);
         
         if(sortedNames[1].length > 0 ){
           out += upperNames(sortedNames[1]);
         }
         return out ; 
       
    }
    
    if(name === name.toUpperCase()) return "HELLO, "+ name +"!";

    return "Hello, "+ name +".";
}
function sortArray(name){
    const lowerCaseNames = []; 
    const upperCaseNames = [];
    for ( value  of name ){
        if (value === value.toUpperCase()) upperCaseNames.push(value); 
        else lowerCaseNames.push(value); 
    }
    return [lowerCaseNames,upperCaseNames];

}

function lowerNames(names){
    let out = "Hello, ";
    for(let i = 0;i < names.length; i++){
        out += names[i];
        if(i===names.length-2) {
            out += " and "+names[i+1];
            break;
        }
        else out += ", ";
    }
    out+=".";
    return out ; 

}
function upperNames(names){
    let out = " AND HELLO ";
    for(let i = 0; i < names.length ;i++){
        out += names[i];   
    }
    out+=" !"; 
    return out ;

}


module.exports = greet;