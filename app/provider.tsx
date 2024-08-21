"use client";

import { PropsWithChildren } from "react";

import StoreProvider from "./StoreProvider";

export default function Providers({ children }: PropsWithChildren<any>) {
    return (
        <StoreProvider Children={children}/>
    );
}