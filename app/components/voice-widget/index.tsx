import React, { useEffect, useState } from "react";
import { useLeopard } from "@picovoice/leopard-react";
import modelParams from "./voice-driver64";

export default function VoiceWidget() {
  const [isBusy, setIsBusy] = useState(false);

  const {
    result,
    isLoaded,
    error,
    init,
    startRecording,
    stopRecording,
    isRecording,
    recordingElapsedSec,
  } = useLeopard();

  async function loadVoiceToSpeechBuilder() {
    setIsBusy(true);
    try {
      const response = await init(
        "s6rhshHXEnmzSxU6sdZ3fKsWN9R1F2XdoisvLq83/6ULMAxk7JYWDw==",
        {
          base64: modelParams,
        },
        {
          enableAutomaticPunctuation: true,
          enableDiarization: true,
        }
      );
      setIsBusy(false);
      console.log("--== Driver Loaded Successfully ", response);
    } catch (e) {
      console.log("--== Driver Error ", e);
    }
  }

  const toggleRecord = async () => {
    setIsBusy(true);
    if (isRecording) {
      await stopRecording();
    } else {
      await startRecording();
    }
    setIsBusy(false);
  };

  return (
    <>
      <div className="overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200">
        <div className="p-6">
          <div className="flex justify-between border-b-2">
            <h3 className="mb-4 text-xl font-medium text-slate-700">
              Voice Widget
            </h3>
            <button
              disabled={isLoaded}
              onClick={loadVoiceToSpeechBuilder}
              className="inline-flex items-center justify-center h-10 gap-2 px-5 text-sm font-medium tracking-wide text-white transition duration-300 rounded focus-visible:outline-none whitespace-nowrap bg-red-500 hover:bg-red-600 focus:bg-red-700 disabled:cursor-not-allowed disabled:border-red-300 disabled:bg-red-200 disabled:shadow-none"
            >
              <span>{isLoaded ? "Driver Loaded" : "Load the Driver"}</span>
              {!isLoaded && isBusy && (
                <span className="relative only:-mx-5">
                  <svg
                    className="w-5 h-5 text-white animate-spin"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    role="graphics-symbol"
                    aria-labelledby="title-10 desc-10"
                  >
                    <title id="title-10">Icon title</title>
                    <desc id="desc-10">
                      A more detailed description of the icon
                    </desc>
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      stroke-width="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                </span>
              )}
            </button>
          </div>
          <div className="flex justify-end py-2">
            <button
              onClick={toggleRecord}
              disabled={!isLoaded || isBusy}
              className="inline-flex items-center justify-center h-10 gap-2 px-5 text-sm font-medium tracking-wide text-white transition duration-300 rounded focus-visible:outline-none whitespace-nowrap bg-emerald-500 hover:bg-emerald-600 focus:bg-emerald-700 disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none"
            >
              <span>{isRecording ? "Stop Recording" : "Start Recording"}</span>
              {isRecording && (
                <span className="relative only:-mx-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-record-circle-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-8 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                  </svg>
                  <span className="absolute -top-2 inline-flex items-center justify-center gap-1 rounded-full bg-pink-500 px-1.5 text-xs text-white">
                    {recordingElapsedSec}
                    <span className="sr-only"> recording</span>
                  </span>
                </span>
              )}
            </button>
          </div>
          <div className="w-full overflow-x-auto">
            <table
              className="w-full text-left border border-separate rounded border-slate-200"
              cellSpacing="0"
            >
              <tbody>
                <tr>
                  <th
                    scope="col"
                    className="h-10 px-4 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100"
                  >
                    #
                  </th>
                  <th
                    scope="col"
                    className="h-10 px-4 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100"
                  >
                    Time (Seconds)
                  </th>
                  <th
                    scope="col"
                    className="h-10 px-4 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100"
                  >
                    Intent
                  </th>
                </tr>
                {error ? (
                  <tr>
                    <td colSpan={2}>
                      <div className="w-full flex justify-around">
                       <p className="m-3">{error.toString()}</p>
                      </div>
                    </td>
                  </tr>
                ) : (
                  <tr>
                    <td className="h-10 px-4 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
                      1
                    </td>
                    <td className="h-10 px-4 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
                      <span className="inline-flex items-center justify-center gap-1 rounded bg-emerald-500 px-1.5 text-xs text-red-400 p-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="3"
                          height="3"
                          fill="currentColor"
                          className="bi bi-record-circle-fill w-3 h-3"
                          viewBox="0 0 16 16"
                        >
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-8 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                        </svg>
                        <span className="text-white">
                          {recordingElapsedSec}s
                        </span>
                        <span className="sr-only"> new emails</span>
                      </span>
                    </td>
                    <td className="h-10 px-4 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
                      <p>{result?.transcript}</p>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
