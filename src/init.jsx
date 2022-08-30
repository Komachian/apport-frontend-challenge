import React, {useState} from "react";
import Counter from "./counter";

function Init() {
    const [count, setCount] = useState(1);
    const [maxValue, setMaxValue] = useState(10);

    return(
        <div>
            <input type="number" placeholder="Value" value={count} onChange={(e) => {setCount(e.target.value);
            if(maxValue < count) {
                setMaxValue(count);
            }}}/>
            <input type="number" placeholder="Maximum Value" value={maxValue} onChange={(e) => setMaxValue(e.target.value)}/>
            <Counter count={count} maxVal={maxValue} setCount={setCount}/>
        </div>
    )
}

export default Init;