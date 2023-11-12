const { table } = require("console");

function greet(name){
    if(name === null || name ===undefined || name ==="") return "Hello, my friend.";

    if(Array.isArray(name) && name.length >= 2) {
        const sortedNames = sortArray(name); 
        let out = "Hello, ";
        for(let i = 0;i < sortedNames[0].length; i++){
            out += sortedNames[0][i];
            if(i===sortedNames[0].length-2) {
                out += " and "+sortedNames[0][i+1];
                break;
            }
            else out += ", ";
        }
         out+=".";
         if(sortedNames[1].length > 0 ){
            out += " AND HELLO ";
            for(let i = 0; i < sortedNames[1].length ;i++){
            out += sortedNames[1][i]; 
            
            }
            out+=" !"; 
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



module.exports = greet;