import { useEffect, useRef, useState, useLayoutEffect} from 'react'

const UseLayoutEffect = () => {
    const [show, setShow] = useState(false);

    const popup = useRef();
    const button = useRef();
    
    useLayoutEffect( () => {
        if(!popup.current || !button.current) return;

        const { bottom } = button.current.getBoundingClientRect();

        popup.current.style.marginTop = `${bottom - 230}px`;
    }, [show])

    

    return (
        <div className='components--divs'>
            <button ref={button} onClick={() => setShow((prev) => !prev)}>Toggle popup</button>

            { show && (
                <p style={{marginTop: '5px'}} ref={popup}>
                    Hello from modal!
                </p>
            )}
        </div>
    )
}

export default UseLayoutEffect;