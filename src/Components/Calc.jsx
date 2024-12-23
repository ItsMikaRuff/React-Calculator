import { useState } from "react";

function Calc() {

    const [num1, setNum1] = useState(0)
    const [num2, setNum2] = useState(0)
    const [result, setResult] = useState(0)

    function getNum1(event) {
        setNum1(parseInt(event.target.value))
    }

    function getNum2(event) {
        setNum2(parseInt(event.target.value))
    }

    function sumFunc() {
        setResult(parseInt(num1+num2))
    }

    function subFunc() {
        setResult(parseInt(num1-num2))
    }

    function mulFunc() {
        setResult(parseInt(num1*num2))
    }

    function divFunc() {
        setResult(parseInt(num1/num2))
    }
    
    function ceFunc() {
        setResult(0)
        setNum1(0)
        setNum2(0)

        document.getElementById('input1').value = '';
        document.getElementById('input1').placeholder = '0';
        document.getElementById('input2').value = '';
        document.getElementById('input2').placeholder = '0';

    }


    return <div class={"inner"}>
        
        <h1>{result}</h1>
        <input type={"number"} onChange={getNum1} placeholder="Enter a number"  id="input1" ></input>
        
        <input type="number" onChange={getNum2} placeholder="Enter a number"  id="input2" ></input>

        <br></br>
        <button onClick={ceFunc}>CE</button>
        <br></br>
        <button onClick={sumFunc}>+</button>
        <button onClick={subFunc}>-</button>
        <button onClick={mulFunc}>*</button>
        <button onClick={divFunc}>:</button>
        
        

    </div>

}

export default Calc;