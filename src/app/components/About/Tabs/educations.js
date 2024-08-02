const educations = [
  {
    major: "Computer Engineering",
    institution: "Universitas Pendidikan Indonesia",
    date: "Sep 2020 - Aug 2024",
    points: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ],
  },
  {
    major: "AI Mastery Program",
    institution: "Orbit Future Academy",
    date: "Aug 2022 - Dec 2022",
    points: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ],
  },
];
export default function Educations() {
  return (
    <div>
      <div className="overflow-y-scroll no-scrollbar h-80 relative w-full px-2 md:pl-0">
        {educations.map((educations, index) => (
          <div key={index} className="flex flex-col md:flex-row mb-2">
            <div className="hidden md:flex w-1/12 flex-col items-center justify-center relative">
              <div className="relative bg-gray-200 w-1 h-full translate-y-4"></div>
              <div className="absolute bg-blue-500 w-6 h-6 rounded-full top-0 mt-1.5"></div>
            </div>
            <div className="w-11/12 pb-5">
              <h3 className="text-3xl font-bold">{educations.major}</h3>
              <h4 className="text-xl font-semibold text-blue-500">
                {educations.institution}
              </h4>
              <p className="text-xs mb-4 font-thin">{educations.date}</p>
              <ul className="list-disc list-inside">
                {educations.points.map((point, idx) => (
                  <li key={idx} className="text-sm mb-1">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
