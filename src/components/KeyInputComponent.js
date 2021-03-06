import React, {useState} from 'react';

function KeyInputComponent(){
    // there must be a better way to do this?
    // props return React elemtns describing what should appear on the screen.
    const [result, setVal] = useState("");
        return (
            <div className = "buttons">
                <button className ="operator" name="round" onClick={e => setVal(e.target.name)}>round</button>
                    <button className ="operator" name="sq" onClick={e => setVal(e.target.name)}>sq</button>
                    <button className ="operator" name="back" onClick={e => setVal(e.target.name)}>back</button>
                    <button className ="operator right" name="+" onClick={e => setVal(e.target.name)}>+</button>
                    <button className ="num" name="7" onClick={e => setVal(e.target.name)}>7</button>
                    <button className ="num" name="8" onClick={e => setVal(e.target.name)}>8</button>
                    <button className ="num" name="9" onClick={e => setVal(e.target.name)}>9</button>
                    <button className ="operator right" name="/" onClick={e => setVal(e.target.name)}>/</button><br/>
                    <button className ="num" name="4" onClick={e => setVal(e.target.name)}>4</button>
                    <button className ="num" name="5" onClick={e => setVal(e.target.name)}>5</button>
                    <button className ="num" name="6" onClick={e => setVal(e.target.name)}>6</button>
                    <button className ="operator right" name="*" onClick={e => setVal(e.target.name)}>*</button><br/>
                    <button className ="num" name="1" onClick={e => setVal(e.target.name)}>1</button>
                    <button className ="num" name="2" onClick={e => setVal(e.target.name)}>2</button>
                    <button className ="num" name="3" onClick={e => setVal(e.target.name)}>3</button>
                    <button className ="operator right" name="-" onClick={e => setVal(e.target.name)}>-</button><br/>
                    <button className ="operator" name="clear" onClick={e => setVal(e.target.name)}>ON/C</button>
                    <button className ="num" name="0" onClick={e => setVal(e.target.name)}>0</button>
                    <button className ="num" name="." onClick={e => setVal(e.target.name)}>.</button>
                    <button className ="operator right" name="=" onClick={e => setVal(e.target.name)}>=</button>
            </div>
        );
}

export default KeyInputComponent;