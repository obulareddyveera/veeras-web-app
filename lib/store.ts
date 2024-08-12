import { configureStore } from "@reduxjs/toolkit"
import { profileSlice } from "./features/profile/slice"
import { resumeSlice } from "./features/resume/slice"


export const makeStore = () => {
    return configureStore({
        reducer: {
            profile: profileSlice.reducer,
            resume: resumeSlice.reducer
        }
    })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']