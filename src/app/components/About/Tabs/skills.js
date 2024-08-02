import Image from "next/image";
import pythonlogo from "../../../assets/python.svg";
import javascriptlogo from "../../../assets/javascript.svg";
import tensorflowlogo from "../../../assets/tensorflow.svg";

const skills = [
  {
    name: "C++",
    logo: pythonlogo,
  },
  {
    name: "Kotlin",
    logo: pythonlogo,
  },
  {
    name: "Python",
    logo: pythonlogo,
  },
  {
    name: "Flask",
    logo: pythonlogo,
  },
  {
    name: "TensorFlow",
    logo: pythonlogo,
  },
  {
    name: "JavaScript",
    logo: javascriptlogo,
  },
  {
    name: "TensorFlow",
    logo: tensorflowlogo,
  },
];

export default function Skills() {
  return (
    <div className="flex flex-wrap justify-center">
      {skills.map((skills, index) => (
        <div
          key={index}
          className="m-auto bg-gray-800 rounded-lg shadow-md flex flex-col justify-center items-center w-32 h-32"
        >
          <Image src={skills.logo} alt={skills.name} width={50} height={50} />
          <p className="text-white text-lg mt-2">{skills.name}</p>
        </div>
      ))}
    </div>
  );
}
