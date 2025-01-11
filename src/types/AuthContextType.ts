import React, { SetStateAction } from "react";
import { IUser } from "./UserType";

export declare interface IAuthContext {
    user: IUser | null;
    setUser: React.Dispatch<SetStateAction<object|null>>;
}