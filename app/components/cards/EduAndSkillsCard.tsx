export default function EduAndSkillsCard() {
  return (
    <div className="relative mt-4 bg-emerald-500">
      <div className="flex flex-col items-center">
        <div className="w-full md:w-2/3 font-medium  text-center text-white mt-8">
          <div className="py-2">
            <p className="bg-teal-accent-400 mb-2 inline-block rounded-full bg-emerald-300 hover:bg-emerald-500 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
              Education
            </p>
          </div>
          <p className="text-xl md:text-2xl px-6">
            Bachelor of Technology (BTech) in Computers Science and Engineering
            from Sri Venkateswara University, Tirupati, Andhra Pradesh, India.
          </p>
          <div className="py-4">
            <p className="bg-teal-accent-400 mb-2 inline-block rounded-full bg-emerald-300 hover:bg-emerald-500 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
              Technical Skills
            </p>
          </div>
          <div className="flex flex-row flex-wrap py-4 justify-center items-center px-4 gap-2">
            {[
              { className: "bg-emerald-100 text-emerald-700", skill: "Node.JS", exp: "6" },
              { className: "bg-emerald-100 text-emerald-700", skill: "Express.JS", exp: "6" },
              { className: "bg-emerald-100 text-emerald-700", skill: "GraphQL", exp: "6" },
              { className: "bg-emerald-100 text-emerald-700", skill: "Prisma (ORM)", exp: "6" },
              { className: "bg-emerald-100 text-emerald-700", skill: "PostgresSQL", exp: "6" },
              { className: "bg-red-100 text-red-700", skill: "Next.JS", exp: "6" },
              { className: "bg-red-100 text-red-700", skill: "Remix", exp: "6" },
              { className: "bg-purple-100 text-purple-700", skill: "React.JS", exp: "6" },
              { className: "bg-purple-100 text-purple-700", skill: "Redux", exp: "6" },
              { className: "bg-purple-100 text-purple-700", skill: "Formik", exp: "6" },
              { className: "bg-purple-100 text-purple-700", skill: "React-Hook-Form", exp: "6" },
              { className: "bg-purple-100 text-purple-700", skill: "Apollo Client", exp: "6" },
              { className: "bg-purple-100 text-purple-700", skill: "Redux-Thunk", exp: "6" },
              { className: "bg-purple-100 text-purple-700", skill: "Redux-Saga", exp: "6" },
              { className: "bg-pink-100 text-pink-700", skill: "D3.JS", exp: "6" },
              { className: "bg-pink-100 text-pink-700", skill: "Highcharts", exp: "6" },
              { className: "bg-blue-100 text-blue-700", skill: "CSS3", exp: "6" },
              { className: "bg-blue-100 text-blue-700", skill: "SASS", exp: "6" },
              { className: "bg-blue-100 text-blue-700", skill: "Bootstrap4", exp: "6" },
              { className: "bg-blue-100 text-blue-700", skill: "TailwindCSS", exp: "6" },
              { className: "bg-blue-100 text-blue-700", skill: "Material-UI", exp: "6" },
              { className: "bg-orange-100 text-orange-700", skill: "HTML5", exp: "6" },
            ].map((entity) => {
              return (
                <>
                  <span
                    className={`inline-flex items-center justify-center rounded-full ${entity.className} px-2.5 py-0.5`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="-ms-1 me-1.5 size-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>

                    <p className="whitespace-nowrap text-sm">{entity.skill}</p>
                  </span>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
