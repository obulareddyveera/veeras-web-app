"use client";
import React from "react";
import { FieldArray, useFormikContext } from "formik";
import { TextField } from "../fields/text-field";
import { RummyBoardType } from "./types";

export default function GameSetUp() {
  const { setFieldValue, ...props } = useFormikContext();
  const values = props.values as RummyBoardType;
  return (
    <>
      <div className="flex flex-col gap-1">
        <TextField id="name" value={values.name} label={"Board Name"} />
        <TextField
          id="targetScore"
          value={values.targetScore}
          label={"Total Score"}
        />
        <div className="w-full flex flex-col gap-2">
          <FieldArray name="players">
            {({ remove, push }) => (
              <div>
                <div className="flex justify-end m-4">
                  <button
                    onClick={() => push({ name: "", score: "" })}
                    className="inline-flex items-center justify-center h-8 gap-2 px-6 text-sm font-medium tracking-wide text-white transition duration-300 rounded whitespace-nowrap bg-emerald-500 hover:bg-emerald-600 focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none"
                  >
                    <span>Add Player</span>
                  </button>
                </div>
                {values.players.map((player, idx) => {
                  return (
                    <>
                      <div className="w-full flex relative">
                        <TextField
                          label="Player name"
                          id={`players[${idx}].name`}
                          value={player.name}
                          onChange={(e: any) => {
                            setFieldValue(
                              `players[${idx}].name`,
                              e.target.value
                            );
                            setFieldValue(
                              `players[${idx}].uuid`,
                              `${new Date().getTime()}_${idx}`
                            );
                          }}
                        />
                        <button
                          className="absolute right-0 inline-flex items-center justify-center h-10 gap-2 px-5 text-sm font-medium tracking-wide transition duration-300 rounded-full focus-visible:outline-none justify-self-center whitespace-nowrap text-indigo-500 hover:bg-indigo-100 hover:text-indigo-600 focus:bg-indigo-200 focus:text-indigo-700 disabled:cursor-not-allowed disabled:text-indigo-300 disabled:shadow-none disabled:hover:bg-transparent"
                          aria-label="close dialog"
                          onClick={() => remove(idx)}
                        >
                          <span className="relative only:-mx-5">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-5 h-5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              stroke-width="1.5"
                              role="graphics-symbol"
                              aria-labelledby="title-79 desc-79"
                            >
                              <title id="title-79">Icon title</title>
                              <desc id="desc-79">
                                A more detailed description of the icon
                              </desc>
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                              />
                            </svg>
                          </span>
                        </button>
                      </div>
                    </>
                  );
                })}
              </div>
            )}
          </FieldArray>
        </div>
      </div>
    </>
  );
}
