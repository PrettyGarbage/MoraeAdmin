import {useEffect, useState, useReducer} from "react";

const initialState: IFetchState = {
    isLoading: false,
    err: null
}

const FETCH_INIT: string = "FETCH_INIT"; //페치 초기화
const FETCH_SUCCESS: string = "FETCH_SUCCESS"; //페치 성공
const FETCH_FAILURE: string = "FETCH_FAILURE"; //페치 실패

//Reducer란 현재 상태와 액션의 파라미터를 전달받아 상태를 변화 시키는 녀석 State Pattern??
function fetchReducer(state: IFetchState, action : IAction) : IFetchState
{
    switch (action.type)
    {
        case FETCH_INIT:
            return {
                isLoading: true,
                err: null
            };
        case FETCH_SUCCESS:
            return {
                isLoading: false,
                err: null
            };
        case FETCH_FAILURE:
            return {
                isLoading: false,
                err: action.payLoad? action.payLoad.err : 'action payload is null'
            };
        default:
            throw new Error('Unexpected action type');

    }
}

function useFetch(url: string)
{
    //ts에서 가능 상태가 null일 수도 있고 아닐 수도 있다. 초기값은 Null
    const [data, setData] = useState<any | null>(null);
    const [fetchState, dispatch] = useReducer(fetchReducer, initialState);

    //실제 DOM에 반영된 직후 useEffect를 호출
    useEffect(() => {
        let didCancel = false;

        async function fetchData()
        {
            try {
                dispatch({type: FETCH_INIT});
                const res = await fetch(url);
                const data = await res.json();
                if (!didCancel) {
                    setData(data);
                    dispatch({type: FETCH_SUCCESS});
                }
            } catch (err : any) {
                if (!didCancel) {
                    dispatch({type: FETCH_FAILURE, payLoad: {err}});
                }
            }
        }

        fetchData();

        return () => {
            didCancel = true;
        };
    }, [setData, dispatch, url]);
}

export default useFetch;