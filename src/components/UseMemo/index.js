import { useMemo, useState } from "react";

const UseMemo = () => {
    const [number, setNumber] = useState(1);
    const [text, setText] = useState("");

    const slowFunction = (num) => {
        console.log('Slow function is being called!');
        for (let index = 0; index < 1000; index++) {}
    }


    const callSlowFunction = useMemo(() => {
        slowFunction(number);
    }, [number]);

    return (
        <div className="components--divs limit--size">
            <p>{number}</p>
            <button onClick={() => setNumber(prev => prev * 2)}>Increment</button>
            <input type='text' onChange={(event) => setText(event.target.value)}/>
            <p>Text: {text}</p>
        </div>
    )
}

export default UseMemo;