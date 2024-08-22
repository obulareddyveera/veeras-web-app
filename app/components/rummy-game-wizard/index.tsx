"use client";
import { useState } from "react";
import { Formik, Field, Form } from "formik";
import GameSetUp from "./game-set-up";
import { RummyBoardType } from "./types";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import GameBoard from "./game-board";

export default function RummyGameScoreWizard() {
  const { scoreboard } = useSelector((state: RootState) => state);
  const [wizardIndex, setWizardIndex] = useState<number>(0);
  function handleWizardNav(src?: string) {
    const val = src === "next" ? wizardIndex + 1 : wizardIndex - 1;
    setWizardIndex(val);
  }
  const initialValues: RummyBoardType = {
    name: "",
    noOfPlayers: "",
    targetScore: "250",
    level: 0,
    event: {activeIndex: -1, type: "add"},
    players: [{ name: "", uuid: "" }],
  };
  return (
    <>
      <div className="overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200">
        <Formik
          initialValues={initialValues}
          onSubmit={async (values) => {
            await new Promise((r) => setTimeout(r, 500));
          }}
        >
          {({ values, setFieldValue }) => {
            return (
              <>
                {scoreboard.type ? (
                  <>
                    <div className="m-4 flex justify-end gap-2">
                      <button
                        onClick={() => setFieldValue("level", values.level === 0 ? 1 : 0)}
                        className="inline-flex items-center justify-center h-8 gap-2 px-6 text-sm font-medium tracking-wide text-white transition duration-300 rounded whitespace-nowrap bg-indigo-500 hover:bg-indigo-600 focus:bg-indigo-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-indigo-300 disabled:bg-indigo-300 disabled:shadow-none"
                      >
                        <span>{values.level === 0 ? "Start" : "Back"}</span>
                      </button>
                    </div>
                    <div className="p-6">
                      {values.level === 0 && <GameSetUp />}
                      {values.level === 1 && <GameBoard />}
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex text-2xl justify-center p-4 font-profilePlugFont">
                      <div>Select the game</div>
                    </div>
                  </>
                )}
              </>
            );
          }}
        </Formik>
      </div>
    </>
  );
}
