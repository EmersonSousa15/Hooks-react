import { useCallback, useState } from "react";
import List from "./List";

const UseCallback = () => {
    const [text, setText] = useState();
    const [resourceType, setResourceType] = useState();

    const getItems = useCallback(async () => {
        if(resourceType){
            const response = await fetch(`https://jsonplaceholder.typicode.com/${resourceType}`);
            const responseJSON = await response.json();
            
            return responseJSON
        } 
    }, [resourceType]) 

    return(
        <div className="components--divs"> 
            <input type='text' onChange={(event) => setText(event.target.value)}/>
            <button onClick={() => setResourceType('Posts')}>Posts</button>
            <button onClick={() => setResourceType('Albums')}>Albums</button>
            <button onClick={() => setResourceType('Todos')}>All</button>

            <List getItems={getItems}/>
        </div>
    )
}

export default UseCallback;