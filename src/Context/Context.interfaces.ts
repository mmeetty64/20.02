import { type } from "os";
import { ReactNode } from "react";

interface IValues {
    getUser(data: IUser): void;
    user: IUser;
    logout(): void;
}

interface IUser {
    address: string;
    login: string;
    balance: number;
    role: number;
    inWhiteList: boolean;
    investor: boolean;
    seedToken: number;
    privToken: number;
    publToken: number; 
}

interface IProps {
    children: ReactNode;
}

export type{
    IValues,
    IUser,
    IProps
}