import { useEffect, useState } from "react";

const UseEffect = () => {
    const [resourceType, setResourceType] = useState();
    const [resources, setResources] = useState(false);
    const [count, setCount] = useState(0);

    const changeResourceType = (resType) => {
        setResourceType(resType);
    }

    useEffect(() => {
        const fetchResourceTypes = async () => {
            if(resourceType){
                const response = await fetch(`https://jsonplaceholder.typicode.com/${resourceType}`);
                const responseJSON = await response.json();
                setResources(responseJSON);
            }else{
                return;
            }
            
        }   
        fetchResourceTypes()
    }, [resourceType])

    useEffect(() => {
        
        const timer = setTimeout(() => {
            console.log(`The button was pressed ${count} times`);
        }, [2000])

        return() => {
            clearTimeout(timer);
        }
    }, [count])

 return (
    <>
        <div className="components--divs">
            <h1>{resourceType || 'Select resource'}</h1>
            <span>
                <button onClick={() => changeResourceType('Posts')}>Posts</button>
                <button onClick={() => changeResourceType('Albums')}>Albums</button>
                <button onClick={() => changeResourceType('Todos')}>All</button>
            </span>
            {resources ? resources.map((item) => {
                if(item.id <= 5){
                    return <p key={item.id}>{item.title}</p>
                }
            }) : " "}
        </div>
        <div className="components--divs limit--size">
            <h1>{count}</h1>
            <button onClick={() => setCount((prevCount) => prevCount + 1)}>Increment</button>
            <button onClick={() => setCount(0)}>Reset</button>
        </div>
    </>
 )
}

export default UseEffect;