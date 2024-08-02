import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function AboutMe() {
  return (
    <div>
      <p className="text-justify">
        I am a graduate of Universitas Pendidikan Indonesia with a Bachelor of
        Engineering degree in Computer Engineering, specializing in Intelligent
        Devices. During my studies, I learned about both software and hardware
        development. I focused on Python programming for developing deep
        learning models using TensorFlow and PyTorch, and web development for
        backend services using the Flask framework. I have a strong interest in
        Python, which has driven my work in AI and web development.
      </p>
      <div className="mt-8 flex flex-row flex-wrap md:flex-col md:items-start">
        <Link
          href="https://mail.google.com/mail/u/1/?view=cm&to=ivannnaufal@gmail.com"
          className="flex mb-4 lg:mb-4 hover:text-blue-500 transition-colors"
        >
          <FontAwesomeIcon
            icon={faEnvelope}
            className="text-xl md:text-2xl lg:text-xl mr-4"
          />
          <span className="hidden md:inline">ivannaufal@gmail.com</span>
        </Link>

        <Link
          href="https://linkedin.com/in/ivanrajwa"
          className="flex mb-4 lg:mb-4 hover:text-blue-500 transition-colors"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            className="text-xl md:text-2xl lg:text-xl mr-4"
          />
          <span className="hidden md:inline">Ivan Rajwa Naufal</span>
        </Link>

        <Link
          href="https://github.com/Exchioz"
          className="flex mb-4 lg:mb-4 hover:text-blue-500 transition-colors"
        >
          <FontAwesomeIcon
            icon={faGithub}
            className="text-xl md:text-2xl lg:text-xl mr-4"
          />
          <span className="hidden md:inline">Exchioz</span>
        </Link>
      </div>
    </div>
  );
}
