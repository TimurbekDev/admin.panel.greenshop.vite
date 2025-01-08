import React, { SetStateAction } from "react";

export declare interface IAuthContext {
    user: object | null;
    setUser: React.Dispatch<SetStateAction<object|null>>;
}