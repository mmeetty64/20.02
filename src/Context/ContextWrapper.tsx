import { createContext, FC, useState } from "react";
import { IProps, IUser, IValues } from "./Context.interfaces";

export const Context = createContext({} as IValues);

export const ContextWrapper: FC<IProps> = ({ children }) => {
    const initialState = {
        address: '',
        login: '',
        balance: 0,
        role: 0,
        inWhiteList: false,
        investor: false,
        seedToken: 0,
        privToken: 0,
        publToken: 0 
    }

    const [user, setUser] = useState(initialState);

    const getUser = (user: IUser) => {
        setUser(user);
    }

    const logout = () => {
        setUser(initialState);
    }

    const values = {
        user, 
        getUser, 
        logout
    }

    return(
        <Context.Provider value={values}>
            {children}
        </Context.Provider>
    )
}