import React from "react";
import './counter.css'

function Counter({count, maxVal, setCount}) {



    return(
        <div class="counter-container">
            <div class="counter-button decrement" onClick={() => {
                if(count > 0) {
                    setCount(count - 1);
                }
            }}>-</div>
            <div class="counter">{count}</div>
            <div class="counter-button increment" onClick={() => {
                if(count < maxVal) {
                    setCount(count + 1);
                }
            }}>+</div>
        </div>
    )
}

export default Counter;