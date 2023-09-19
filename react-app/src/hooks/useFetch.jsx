import { useEffect, useState } from "react";

const useFetch = (URL) => {
    const [data, setData] = useState([]);

    useEffect(()=>{ 
        fetch(URL)
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.log(error));
    }, []);
    return [data, setData];
};

export default useFetch;