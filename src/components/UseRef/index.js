import {useEffect, useRef, useState} from 'react';

const UseRef = () => {
    const [name, setName] = useState("");

    const count = useRef(0);

    useEffect(() => {
        count.current = count.current + 1;
    });

    const inputRef = useRef();

    const onFocus = () =>{
        inputRef.current.focus();
    }

    const previousName = useRef();

    useEffect(() => {
        previousName.current = name;
    }, [name]);

    return (
        <div className='components--divs'>
            <input ref={inputRef} type='text' value={name} onChange={(e) => setName(e.target.value)}/>
            <p>Hi, my name is {name}!</p>
            <p>Previous name: {previousName.current}!</p>
            <p>Render's: {count.current}</p>
            <button onClick={onFocus}>Focus</button>
        </div>
    );
}

export default UseRef;