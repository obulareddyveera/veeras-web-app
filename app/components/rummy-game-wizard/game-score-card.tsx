import { useFormikContext } from "formik";
import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { BoardScoreEvent, RummyBoardType, ScoreFeed } from "./types";
import { TextField } from "../fields/text-field";

export default function GameScoreCard({
  event = { activeIndex: -1, type: "add" },
  handleScorePush,
}: {
  event: BoardScoreEvent;
  handleScorePush: (action: any) => void;
}) {
  const formikProps = useFormikContext();
  const { players, scores } = formikProps.values as RummyBoardType;

  useEffect(() => {
    if (event.type === "add") {
      console.log("--==scores::event ", event, scores);
      const emptyScoreBoardRow: ScoreFeed = {};

      players.forEach((player) => {
        const uuidEntity: string = player.uuid as string;
        emptyScoreBoardRow[uuidEntity] = "";
      });
      handleScorePush(emptyScoreBoardRow);
    }
  }, []);

  return (
    <>
      {event.activeIndex > -1 && typeof document !== "undefined"
        ? ReactDOM.createPortal(
            <div
              className="fixed top-0 left-0 z-20 flex h-screen w-screen items-center justify-center bg-slate-300/20 backdrop-blur-sm"
              aria-labelledby="header-4a content-4a"
              aria-modal="true"
              tabIndex={-1}
              role="dialog"
            >
              <div
                className="flex max-h-[90vh] max-w-sm flex-col gap-4 overflow-hidden rounded bg-white p-6 text-slate-500 shadow-xl shadow-slate-700/10"
                id="modal"
                role="document"
              >
                <header id="header-4a" className="flex items-center">
                  <h3 className="flex-1 text-lg font-medium text-slate-700">
                    Add Score
                  </h3>
                  <button
                    onClick={() =>
                      formikProps.setFieldValue("event", {
                        activeIndex: -1,
                        type: "",
                      })
                    }
                    className="inline-flex h-10 items-center justify-center gap-2 justify-self-center whitespace-nowrap rounded-full px-5 text-sm font-medium tracking-wide  text-emerald-500 transition duration-300 hover:bg-emerald-100 hover:text-emerald-600 focus:bg-emerald-200 focus:text-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:text-emerald-300 disabled:shadow-none disabled:hover:bg-transparent"
                    aria-label="close dialog"
                  >
                    <span className="relative only:-mx-5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        role="graphics-symbol"
                        aria-labelledby="title-79 desc-79"
                      >
                        <title id="title-79">Icon title</title>
                        <desc id="desc-79">
                          A more detailed description of the icon
                        </desc>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </span>
                  </button>
                </header>
                <div id="content-4a" className="flex-1">
                  <div className="flex flex-col gap-6">
                    {scores?.length &&
                      scores.length > 0 &&
                      players.map((member, inx) => {
                        const val = scores
                          ? scores[event.activeIndex][member.uuid]
                          : "0";
                        return (
                          <>
                            <TextField
                              label={member.name}
                              id={`scores[${event.activeIndex}].${member.uuid}`}
                              value={val}
                            />
                          </>
                        );
                      })}
                  </div>
                </div>
                <div className="flex justify-center gap-2">
                  <button
                    onClick={() => {
                      formikProps.setFieldValue("event", {
                        activeIndex: -1,
                        type: "",
                      });
                    }}
                    className="inline-flex h-10 w-full items-center justify-center gap-2 whitespace-nowrap rounded bg-emerald-500 px-5 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-emerald-600 focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none"
                  >
                    <span>Save</span>
                  </button>
                </div>
              </div>
            </div>,
            document.body
          )
        : null}
    </>
  );
}
