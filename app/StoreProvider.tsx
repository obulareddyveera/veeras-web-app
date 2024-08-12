'use client'
import {useRef} from "react"
import { Provider } from "react-redux"
import { makeStore, AppStore } from "@/lib/store"

export default function StoreProvider({Children}: {Children: React.ReactNode}) {
    const storeRef = useRef<AppStore>()
    if (!storeRef.current) {
        storeRef.current = makeStore()
    }
    console.log("--== I am getting called automatically dude !! ==--")
    return (
        <>
            <Provider store={storeRef.current}>{Children}</Provider>
        </>
    )
}