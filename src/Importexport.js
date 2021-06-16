import React from 'react';
import sum,{subt,divi} from './Importfunvtion';

const Importexport = () => {
    return (
        <>
        <h2>some of two number is:{sum(3,3)} </h2>
        <h2>Div of two number is: {subt(5,3)}</h2>
        <h2>sub of two number is: {divi(5,3)}</h2>
        </>
    )
}
export default Importexport;