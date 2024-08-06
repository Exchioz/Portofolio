import Image from "next/image";
import pythonlogo from "../../../assets/python.svg";
import javascriptlogo from "../../../assets/javascript.svg";
import tensorflowlogo from "../../../assets/tensorflow.svg";
import kotlinlogo from "../../../assets/kotlin.svg";
import cpplogo from "../../../assets/cpp.svg";
import flasklogo from "../../../assets/flask.svg";
import pytorchlogo from "../../../assets/pytorch.svg";
import mysqllogo from "../../../assets/mysql.svg";
import sqlitelogo from "../../../assets/sqlite.svg";
import mongodblogo from "../../../assets/mongodb.svg";
import htmllogo from "../../../assets/html.svg";
import bootstraplogo from "../../../assets/bootstrap.svg";
import tailwindlogo from "../../../assets/tailwind.svg";
import phplogo from "../../../assets/php.svg";
import nextlogo from "../../../assets/next.svg";
import gitlogo from "../../../assets/git.svg";

const skills = [
  { name: "C++", logo: cpplogo },
  { name: "Kotlin", logo: kotlinlogo },
  { name: "Python", logo: pythonlogo },
  { name: "Flask", logo: flasklogo },
  { name: "TensorFlow", logo: tensorflowlogo },
  { name: "PyTorch", logo: pytorchlogo },
  { name: "MySQL", logo: mysqllogo },
  { name: "SQLite", logo: sqlitelogo },
  { name: "MongoDB", logo: mongodblogo },
  { name: "HTML", logo: htmllogo },
  { name: "Bootstrap", logo: bootstraplogo },
  { name: "Tailwind CSS", logo: tailwindlogo },
  { name: "PHP", logo: phplogo },
  { name: "JavaScript", logo: javascriptlogo },
  { name: "NextJS", logo: nextlogo },
  { name: "Git", logo: gitlogo },
];

export default function Skills() {
  return (
    <div className="flex flex-wrap justify-center gap-4 overflow-y-auto">
      {skills.map((skill, index) => (
        <div
          key={index}
          className=" bg-gray-700 rounded-lg shadow-md flex flex-col justify-center items-center w-32 h-32 hover:bg-blue-500 transition duration-300 ease-in-out"
        >
          <Image src={skill.logo} alt={skill.name} width={50} height={50} />
          <p className="text-white text-md mt-4">{skill.name}</p>
        </div>
      ))}
    </div>
  );
}
