function greet(name){
    if(name === null || name ===undefined || name ==="") return "Hello, my friend.";

    if(Array.isArray(name) && name.length === 2) return `Hello, ${name[0]} and ${name[1]}.`;

    if(Array.isArray(name) && name.length > 2){
        let out = "Hello, ";
        for(let i = 0;i < name.length; i++){
            out += name[i];
            if(i===name.length-2) {
                out += " and "+name[i+1];
                break;
            }
            else out += ", ";
        }
        return out+=".";
    }
    
    if(name === name.toUpperCase()) return "HELLO, "+ name +"!";

    return "Hello, "+ name +".";
}

module.exports = greet;