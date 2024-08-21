import { FieldArray, useFormikContext } from "formik";
import { RummyBoardType } from "./types";
import { RiDeleteBin2Line } from "react-icons/ri";
import { TbEdit } from "react-icons/tb";
import GameScoreCard from "./game-score-card";

export default function GameBoard() {
  const formikProps = useFormikContext();
  const values = formikProps.values as RummyBoardType;

  return (
    <>
      <div>
        <FieldArray name="scores">
          {({ remove, push }) => (
            <>
              <div className="flex justify-end m-4">
                <button
                  onClick={() =>
                    formikProps.setFieldValue("event", {
                      activeIndex:
                        values.scores?.length && values.scores?.length > 0
                          ? values.scores?.length - 1
                          : 0,
                      type: "add",
                    })
                  }
                  className="inline-flex items-center justify-center h-8 gap-2 px-6 text-sm font-medium tracking-wide text-white transition duration-300 rounded whitespace-nowrap bg-emerald-500 hover:bg-emerald-600 focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none"
                >
                  <span>Add Score</span>
                </button>
              </div>
              <div className="w-full overflow-x-auto">
                <table
                  className="w-full text-left border-collapse rounded w-overflow-x-auto "
                  cellSpacing="0"
                >
                  <tbody>
                    <tr>
                      {values.players.map((player) => {
                        return (
                          <th
                            key={player.name}
                            scope="col"
                            className="h-12 px-6 text-sm font-medium stroke-slate-700 text-slate-700"
                          >
                            {player.name}
                          </th>
                        );
                      })}
                      <th
                        scope="col"
                        className="h-12 px-6 text-sm font-medium stroke-slate-700 text-slate-700 "
                      ></th>
                    </tr>
                    {values.scores &&
                      values.scores.map((score, index) => {
                        return (
                          <tr
                            key={`${new Date().getTime()}+${index}`}
                            className="border-b border-slate-200"
                          >
                            {values.players.map((player) => {
                              return (
                                <td
                                  key={player.uuid}
                                  className="h-12 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500 "
                                >
                                  {score[player.uuid]}
                                </td>
                              );
                            })}
                            <td className="h-12 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500 ">
                              <div className="flex justify-center">
                                <div className="inline-flex overflow-hidden rounded">
                                  <button
                                    onClick={() =>
                                      formikProps.setFieldValue("event", {
                                        activeIndex: index,
                                        type: "edit",
                                      })
                                    }
                                    className="inline-flex items-center self-center justify-center h-8 gap-2 px-4 text-xs font-medium tracking-wide text-white transition duration-300 whitespace-nowrap bg-emerald-500 hover:bg-emerald-600 focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none"
                                  >
                                    <span className="relative only:-mx-4">
                                      <span className="sr-only">Edit</span>
                                      <TbEdit />
                                    </span>
                                  </button>
                                  <button
                                    onClick={() => remove(index)}
                                    className="inline-flex items-center self-center justify-center h-8 gap-2 px-4 text-xs font-medium tracking-wide text-white transition duration-300 whitespace-nowrap bg-emerald-500 hover:bg-emerald-600 focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none"
                                  >
                                    <span className="relative only:-mx-4">
                                      <span className="sr-only">Delete</span>
                                      <RiDeleteBin2Line />
                                    </span>
                                  </button>
                                </div>
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>
              {values.event && values.event.activeIndex > -1 && (
                <GameScoreCard event={values.event} handleScorePush={push} />
              )}
            </>
          )}
        </FieldArray>
      </div>
    </>
  );
}
