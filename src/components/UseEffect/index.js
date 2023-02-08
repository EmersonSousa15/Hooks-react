import { useEffect, useState } from "react";

const UseEffect = () => {
    const [resourceType, setResourceType] = useState();
    const [resources, setResources] = useState(false);

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
        
        //ComponentDidMount
        console.log("componentDidMount");

        return() => {

            //ComponentWillUnmount
            console.log("ComponentWillUnmount");

        };
    }, [])

 return (
    <div style={{background: '#aaa'}}>
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
 )
}

export default UseEffect;