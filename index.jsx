import React, { useState } from "react";
import '../../assets/style/index.css';

const Community = () => {
    const [resule, setResule] = useState("");

    function click(arg) {
        st = st + arg;
        setResule(st);
    }

    function del() {
        let len = st.length - 1;
        st = st.slice(0, len);
        setResule(st);
    }

    function Ac() {
        setResule("");
        st = "";
    }

    function ans() {
        try {
            let result = eval(st); // Be cautious with eval() in production
            setResule(result.toString());
            st = result.toString(); // Update st to the result for further calculations
        } catch (e) {
            setResule("Error");
        }
    }

    return (
        <>
            <div id="cal">
                <input type="text" placeholder="0" id="cal1" value={resule} readOnly />
                <button onClick={() => click("1")}>1</button>
                <button onClick={() => click("2")}>2</button>
                <button onClick={() => click("3")}>3</button>
                <button onClick={() => click("4")}>4</button>
                <button onClick={() => click("5")}>5</button>
                <button onClick={() => click("6")}>6</button>
                <button onClick={() => click("7")}>7</button>
                <button onClick={() => click("8")}>8</button>
                <button onClick={() => click("9")}>9</button>
                <button onClick={() => click("0")}>0</button>
                <button onClick={() => click("00")}>00</button>
                <button onClick={() => click("+")}>+</button>
                <button onClick={() => click("-")}>-</button>
                <button onClick={() => click("*")}>*</button>
                <button onClick={() => click("/")}>/</button>
                <button onClick={() => click(".")}>.</button>
                <button onClick={() => click("%")}>%</button>
                <button onClick={ans}>=</button>
                <button onClick={del}>del</button>
                <button onClick={Ac} id="cal3">Ac</button>
            </div>
        </>
    );
}

export default Community;
