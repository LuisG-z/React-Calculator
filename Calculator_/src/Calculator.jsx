import { useState } from "react";
import { evaluate } from "mathjs"; // Correct import

function Calculator() {
    const [input, setInput] = useState(""); // State to track the current input

    const handleClick = (value) => {
        if (value === "AC") {
            setInput(""); // Clear input
        } else if (value === "Del") {
            setInput(input.slice(0, -1)); // Remove the last character
        } else if (value === "=") {
            try {
                const result = evaluate(input); // Use evaluate from mathjs
                setInput(result.toString());
            } catch (error) {
                setInput("Error");
            }
        } else {
            setInput(input + value);
        }
    };

    return (
        <div className="calculator">
            <div className="display">
                <span>{input || "0"}</span> {/* Display input or 0 if empty */}
            </div>
            <button className="Span-two" onClick={() => handleClick("AC")}>
                AC
            </button>
            <button onClick={() => handleClick("Del")}>Del</button>
            <button onClick={() => handleClick("/")}>/</button>
            <button onClick={() => handleClick("1")}>1</button>
            <button onClick={() => handleClick("2")}>2</button>
            <button onClick={() => handleClick("3")}>3</button>
            <button onClick={() => handleClick("*")}>*</button>
            <button onClick={() => handleClick("4")}>4</button>
            <button onClick={() => handleClick("5")}>5</button>
            <button onClick={() => handleClick("6")}>6</button>
            <button onClick={() => handleClick("+")}>+</button>
            <button onClick={() => handleClick("7")}>7</button>
            <button onClick={() => handleClick("8")}>8</button>
            <button onClick={() => handleClick("9")}>9</button>
            <button onClick={() => handleClick("-")}>-</button>
            <button onClick={() => handleClick(".")}>.</button>
            <button onClick={() => handleClick("0")}>0</button>
            <button className="Span-two" onClick={() => handleClick("=")}>
                =
            </button>
        </div>
    );
}

export default Calculator;
