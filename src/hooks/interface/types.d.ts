interface IAction
{
    type: string;
    payLoad?: {err:Error | string | null};
}

interface IFetchState
{
    isLoading: boolean;
    err: Error | string | null;
}

interface IObject<T>
{
    [key: string]: T;
}