import React from 'react';
import  './index.css';

let greeting = '' ;
let hurs = new Date();
hurs = hurs.getHours();
const cssStyle = {};
if(hurs >= 1 && hurs < 12){
   greeting = "good morning";
   cssStyle.color = 'yellow';
}else if(hurs >= 12 && hurs < 19){
    greeting = "good evening";
    cssStyle.color = 'blue';
}else{
   greeting = "good night";
   cssStyle.color = 'red';
}
const Mydate = () => {
   
    return (
      
      <h1 className="heading">HELLO SIR,<span style={cssStyle}>{greeting}</span></h1>
    )
}
export default Mydate;