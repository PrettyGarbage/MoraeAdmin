import useFetch from "../hooks/useFetch";
import axios from 'axios';
import { useEffect, useState } from "react";

export default function MonsterPage()
{
    const url :string = "http://localhost:3001/monsters";
    const [monsters, setData] = useState<any[]>();

    async function getMonsters() {
        try {
            const response = await axios.get(url);

            console.log(JSON.stringify(response.data, null, 4));
            //"response status is: 200"
            console.log('response status is: ', response.status);
            setData(response.data);

        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.log('error message: ', error.message);
                return error.message;
            } else {
                console.log('unexpected error: ', error);
                return 'An unexpected error occurred';
            }
        }
    }

    useEffect(() => {
       getMonsters();
    }, []);

    return (
        <ul className="monster_list">
            <h3>몬스터 리스트 페이지</h3>
            {
                monsters && monsters.map((monsters: any) => (
                    <li key={monsters.id}>
                        타입 : {monsters.type} / 이름 : {monsters.name} / 체력 : {monsters.hp} / 스피드 : {monsters.spd}
                    </li>
                ))
            }
        </ul>
    )
}