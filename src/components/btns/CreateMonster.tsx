import userFetch from "../../hooks/useFetch";
import {useNavigate} from "react-router-dom";
import * as events from "events";
import React from "react";

function CreateMonster() {
    const days = userFetch("http://localhost:3001/monsters");
    const history = useNavigate();

    function onSubmit(event: React.FormEvent<HTMLFormElement>)
    {
        event.preventDefault();

        // fetch(`http://localhost:3001/words/`, {
        //     method : "POST",
        //     headers : {
        //         'Content-Type' : 'application/json',
        //     },
        //     body : JSON.stringify({
        //         day : dayRef.current.value,
        //         eng : engRef.current.value,
        //         kor : korRef.current.value,
        //         isDone : false
        //     }),
        // }).then(res => {
        //     if(res.ok)
        //     {
        //         alert("생성이 완료 되었습니다.")
        //         history(`/day/${dayRef.current.value}`)
        //     }
        // })
    }
}

export default CreateMonster;