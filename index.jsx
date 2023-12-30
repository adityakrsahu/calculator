import React,{useState} from "react";
import '../../assets/style/index.css';
// import Home from "../home/index.jsx";
// import Blog from '../Blog/index.jsx';

let st = "";

const Community = ()=>{

    // const [ resule , setResule]=useState("");
    
    // function click(event){
    //     setResule(resule.concat(event.target.value));
    // }
    // function clear(){
    //     setResule("");
    // }
    // function calu(){
    //     setResule(eval(resule).toString());
    // }


    const [ resule , setResule]=useState("");

    function click(arg){
        st= st+arg;
        setResule(st)
    }
    
    function del(){
        let len = st.length-1;
        setResule(st.slice(0,len));
        st = st.slice(0,len)
    }
    
    function Ac(){
        setResule("");
        st="";
    }
    function ans(){
        setResule(eval);

    }


    return(
        <>
        <div id="cal">
            
            <input type="text" placeholder="0" id="cal1" value={resule}/>
            <button onClick={()=>{click("1")}}>1</button>
            <button onClick={()=>{click("2")}}>2</button>
            <button onClick={()=>{click("3")}}>3</button>
            <button onClick={()=>{click("4")}}>4</button>
            <button onClick={()=>{click("5")}}>5</button>
            <button onClick={()=>{click("6")}}>6</button>
            <button onClick={()=>{click("7")}}>7</button>
            <button onClick={()=>{click("8")}}>8</button>
            <button onClick={()=>{click("9")}}>9</button>
            <button onClick={()=>{click("0")}}>0</button>
            <button onClick={()=>{click("00")}}>00</button>
            <button onClick={()=>{click("+")}}>+</button>
            <button onClick={()=>{click("-")}}>-</button>
            <button onClick={()=>{click("*")}}>*</button>
            <button onClick={()=>{click("/")}}>/</button>
            <button onClick={()=>{click(".")}}>.</button>
            <button onClick={()=>{click("%")}}>%</button>
            <button onClick={ans}>=</button>
            <button onClick={del}>del</button>
            <button onClick={Ac} id="cal3">Ac</button>
        </div>


{/* 
        <div id="cal">
            <input type="text" placeholder="0" id="cal1" value={resule} />
            <button onClick={click} value={1}>1</button>
            <button onClick={click}  value={2}>2</button>
            <button onClick={click}  value={3}>3</button>
            <button onClick={click}  value={4}>4</button>
            <button onClick={click}  value={5}>5</button>
            <button onClick={click}  value={6}>6</button>
            <button onClick={click}  value={7}>7</button>
            <button onClick={click}  value={8}>8</button>
            <button onClick={click}  value={9}>9</button>
            <button onClick={click}  value={0}>0</button>
            <button onClick={click}  value={"00"}>00</button>
            <button onClick={click}  value={"+"}>+</button>
            <button onClick={click}  value={"-"}>-</button>
            <button onClick={click}  value={"*"}>*</button>
            <button onClick={click}  value={"/"}>/</button>
            <button onClick={click}  value={"."}>.</button>
            <button onClick={click}  value={"%"}>%</button>
            <button onClick={calu}  value={"="}>=</button>
            <button id="cal2" value={"del"}>del</button>
            <button onClick={clear} id="cal3" value={"ac"}>ac</button>
        </div> */}

        </>
    )
}
export default Community;