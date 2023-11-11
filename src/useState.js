
import {useState,React} from 'react';
 function Header(){
    const [data,updateData] = useState(5)
    function IncreaseData(){
    updateData(data+5)
    }
    return(
        <>
        <h1>Button clicked {data} times</h1>
        <button onMouseOver={IncreaseData}>click</button>
        </>
    )
}
export default Header;