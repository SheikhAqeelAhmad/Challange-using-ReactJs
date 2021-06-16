import React from 'react';


const sum = (a,b) => {
    return a + b 
}
const subt = (a,b) => {
    return a - b 
}
const divi = (a,b) => {
    return (a / b).toFixed(2)
}

export default sum;
export {subt,divi};