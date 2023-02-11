import { useState } from "react";

const UseState = () => {
    const themes = [
        {
            theme: 'Light',
            color: '#000',
            backGround: '#aaa'
        },
        {
            theme: 'Dark',
            color: '#fff',
            backGround: '#000'
        }
    ]

    const [count, setCount] = useState(0);
    const [toggle, setToggle] = useState(true)
    const [theme, setTheme] = useState(themes[1]);

    const incrementCount = () => {
        setCount((prev) => prev + 1);
    }

    const changeTheme = () => {
        toggle ? setTheme(themes[0]) : setTheme(themes[1]);
    }

    return(
        <div className="components--divs limit--size" style={{background: theme.backGround, transition: '1s'}}>
            <h1 style={{color: theme.color}}>{count}</h1>
            <button onClick={incrementCount}>To add</button>
            <button onClick={() => changeTheme(setToggle(!toggle))}>changeTheme</button>
        </div>
    )
}

export default UseState;