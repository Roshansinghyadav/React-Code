import {useState,React, useEffect} from 'react'

    function MyCode(){
    const [code,setCode] = useState(0)
    const [data,setData] = useState("Ram")
    
    useEffect(()=>{
        console.log("Component Mounted")
    },[data])
    function updateCount(){
        setCode(code+1)
    }
    function myDate(){
        setData("Seeta")
    }
    return(
        <>
        <h1>Hi GUYS COUNT ME {code}</h1>
        <button onClick={updateCount}>Click me</button>
        <button onClick={myDate}>Touch me</button>
        
        </>

    )
}
export default MyCode; 

