const experiences = [
  {
    title: "AI Engineer",
    company: "Soca AI",
    date: "Feb 2023 - Jun 2023",
    points: [
      "Developed AI models for detecting offensive words using TensorFlow over a period of three months. This process involved collecting datasets, performing data preprocessing, and building and fine-tuning the models.",
      "Created backend services using Flask and integrated with a MongoDB as a database, which took one month. The backend services were designed to interface with the AI models for offensive words.",
      "Projects were uploaded on GitLab and involved collaboration with other team members.",
    ],
  },
];

export default function Experience() {
  return (
    <div>
      <div className="overflow-y-scroll no-scrollbar h-80 relative w-full px-2 md:pl-0">
        {experiences.map((experiences, index) => (
          <div key={index} className="flex flex-col md:flex-row mb-2">
            <div className="hidden md:flex w-1/12 flex-col items-center justify-center relative">
              <div className="relative bg-gray-200 w-1 h-full translate-y-4"></div>
              <div className="absolute bg-blue-500 w-6 h-6 rounded-full top-0 mt-1.5"></div>
            </div>
            <div className="w-11/12 pb-5">
              <h3 className="text-3xl font-bold">{experiences.title}</h3>
              <h4 className="text-xl font-semibold text-blue-500">
                {experiences.company}
              </h4>
              <p className="text-xs mb-4 font-thin">{experiences.date}</p>
              <p>{experiences.description}</p>
              <ul className="mb-3 list-disc pl-5 font-normal text-justify">
                {experiences.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
