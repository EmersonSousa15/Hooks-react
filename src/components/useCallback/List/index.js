import { useEffect, useState } from "react";

const List = ({getItems}) => {
    const [list, setList] = useState([]);

    useEffect(() => {
        getItems().then((items) => setList(items));
    }, [getItems])

    return (
        <> 
            {list && list.map((item) => (item.id<=5 && <p key={item.id}>{item.title}</p>)) }
        </>
    )
}

export default List;