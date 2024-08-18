import Image from "next/image";
import ScoreboardAppCard from "./ScoreboardAppCard";
import DowloadResumeOptButton from "../buttons/DownloadResume";

function renderExpInfoCard(entity: Record<string, any>) {
  if (entity.isActive) {
    return (
      <div className={entity.className}>
        <div className="absolute -left-1 top-0 -z-10 h-5 w-5 skew-x-[28deg] bg-indigo-600"></div>
        <div className="text-white text-sm">
          <div>
            {entity.company}, {entity.location}
          </div>
          <div>{entity.position}</div>
          <div>{`${entity.from} to ${entity.to}`}</div>
        </div>
      </div>
    );
  }
  return (
    <>
      <div className="relative rounded-xl bg-white p-4 shadow-md">
        <div className="text-gray-600 text-sm">
          <div>
            {entity.company}, {entity.location}
          </div>
          <div>{entity.position}</div>
          <div>{`${entity.from} to ${entity.to}`}</div>
        </div>
      </div>
    </>
  );
}

export default function HomeDetailsCard() {
  return (
    <>
      <div className="relative mx-auto">
        <div className="mx-auto flex flex-col px-4 sm:max-w-xl md:h-fit md:max-w-screen-xl md:flex-row">
          <div className="mx-auto mt-10 w-full max-w-xl md:mt-36 lg:max-w-screen-xl">
            <div className="mb-4 lg:mb-0 lg:max-w-lg">
              <div className="mb-6 max-w-xl">
                <div className="flex relative gap-1">
                  <Image
                    src="/veera_profile.jpg"
                    alt="user name"
                    title="user name"
                    width="40"
                    height="40"
                    className="max-w-full rounded-full mb-2"
                  />
                  <div className="absolute left-10 top-4">
                    <p className="bg-teal-accent-400 mb-4 inline-block rounded-full px-3 py-px text-xs font-semibold uppercase tracking-wider text-indigo-900">
                      INTRODUCING
                    </p>
                  </div>
                </div>
                <h2 className="mb-1 max-w-lg text-xl font-profilePlugFont  text-slate-700 sm:text-2xl sm:leading-snug">
                  Hi, I`m Veera Obulareddy. Nice to meet you.
                </h2>
                <p className="text-base text-gray-700 md:text-lg">
                  A{" "}
                  <span className="inline-block text-indigo-600">
                    Senior Javascript Developer
                  </span>{" "}
                  having 9+ years of emphasize experience with Node.js,
                  Express.js, GraphQL web-services, Next.js, React.js, and Redux
                  libraries.
                </p>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <DowloadResumeOptButton />
              </div>
            </div>
          </div>
          <div className="xl:1/2 flex flex-col md:flex-row h-full w-full justify-end space-x-3 overflow-hidden px-2 lg:w-2/3">
            <div className="flex flex-col space-y-3 md:w-72">
              {[
                {
                  isEmptySlot: true,
                  className:
                    "-mt-10 hidden h-20 flex-shrink-0 rounded-xl bg-indigo-50 md:block",
                },
                {
                  isActive: true,
                  className: "relative rounded-xl bg-indigo-600 p-4 shadow-md",
                  company: "Fiserv",
                  location: "Apharetta, Georgia.",
                  position: "React Lead",
                  from: "March 2024",
                  to: "Till Date",
                },
                {
                  className: "relative rounded-xl bg-indigo-600 p-4 shadow-md",
                  company: "TCS",
                  location: "Bangalore, India",
                  position: "Senior UI Developer",
                  from: "November 2022",
                  to: "December 2023",
                },
                {
                  className: "relative rounded-xl bg-indigo-600 p-4 shadow-md",
                  company: "Envestnet Yodlee",
                  location: "Bangalore, India",
                  position: "Member Of Technical Staff",
                  from: "April 2020",
                  to: "November 2022",
                },
              ].map((entity) => {
                return (
                  <>
                    {entity.isEmptySlot ? (
                      <div className={entity.className}></div>
                    ) : (
                      <>{renderExpInfoCard(entity)}</>
                    )}
                  </>
                );
              })}
            </div>

            <div className="flex flex-col space-y-3 md:w-72">
              {[
                {
                  isEmptySlot: true,
                  className:
                    "-mt-10 hidden h-20 flex-shrink-0 rounded-xl bg-indigo-50 md:block",
                },
                {
                  className: "relative rounded-xl bg-indigo-600 p-4 shadow-md",
                  company: "GE DIGITAL",
                  location: "Bangalore, India",
                  position: "Senior Software Developer",
                  from: "September 2016",
                  to: "August 2019",
                },
                {
                  className: "relative rounded-xl bg-indigo-600 p-4 shadow-md",
                  company: "Wipro Technologies",
                  location: "Bangalore, India",
                  position: "Senior Software Developer",
                  from: "September 2016",
                  to: "August 2019",
                },
                {
                  isEmptySlot: true,
                  className:
                    "-mt-10 hidden h-20 flex-shrink-0 rounded-xl bg-indigo-50 md:block",
                },
              ].map((entity) => {
                return (
                  <>
                    {entity.isEmptySlot ? (
                      <div className={entity.className}></div>
                    ) : (
                      <>{renderExpInfoCard(entity)}</>
                    )}
                  </>
                );
              })}
            </div>
          </div>
        </div>
        <ScoreboardAppCard />
      </div>
    </>
  );
}
