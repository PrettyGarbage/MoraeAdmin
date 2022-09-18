import {Link} from "react-router-dom";
import useFetch from "../hooks/useFetch";

export default function DayList() {

    const days = useFetch("http://localhost:3001/days");

    return (
            <ul className="list_day">
                {
                    days && days.map(days => (
                        <li key={days.id}>
                            <Link to={`/day/${days.day}`}> Day {days.day} </Link>
                        </li>
                    ))
                }
            </ul>
    );
}