import { RummyBoardType } from "@/app/components/rummy-game-wizard/types";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ScoreboardState {
  type: string;
  board: RummyBoardType;
}

const initialState: ScoreboardState = {
  type: "",
  board: {
    name: "",
    targetScore: "250",
    level: 0,
    noOfPlayers: "0",
    players: [],
    event: { activeIndex: -1, type: "add" },
  },
};

export const scoreboardSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setBoardType: (state, action: PayloadAction<string>) => {
      state.type = action.payload;
    },
  },
});

export const { setBoardType } = scoreboardSlice.actions;

export default scoreboardSlice.reducer;
