import {Link} from "react-router-dom";

export default function ()
{

    return (
        <div className="header">
            <h1>
                <Link to="/">어드민 페이지</Link>
            </h1>
            <div className="menu">
                <Link to="/monster_list" className="link">
                    몬스터 리스트
                </Link>
                {/*<Link to="/create_day" className="link">*/}
                {/*    날짜 추가*/}
                {/*</Link>*/}
            </div>
        </div>
    );
}