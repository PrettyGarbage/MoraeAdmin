import {useEffect,useState} from "react";

export default function useFetch(url)
{
    const [data, setData] = useState();

    //실제 DOM에 반영된 직후 useEffect 호출됨
    useEffect(()=>{
        fetch(url)
            .then(res => {
                return res.json();
            })
            .then(data => {
                setData(data);
            });
    }, [url]);

    return data;
}