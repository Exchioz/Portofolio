import Image from "next/image";
import elementprofile from "../../assets/elementprofile.svg";
import profilepic from "../../assets/profile.png";
import TypingEffect from "./typingeffect";

export default function Introduction() {
  return (
    <div className="flex flex-wrap-reverse items-center justify-center h-dvh w-auto py-14">
      <div className="w-full self-end text-center md:w-2/3 md:text-left md:self-center">
        <h1 className="block font-normal text-white lg:text-xl">
          Hi, It&apos;s me
          <span className="block font-bold text-3xl mb-6 md:text-5xl lg:text-7xl">
            Ivan Rajwa Naufal
          </span>
        </h1>
        <div className="font-semibold text-sky-400 leading-relaxed mb-14">
          <span className="text-white">I&apos;m </span>
          <span className="text-blue-500">
            <TypingEffect />
          </span>
        </div>
      </div>
      <div className="flex justify-center w-4/5 sm:w-3/5 h-auto self-start md:w-1/3 md:self-center">
        <div className="relative py-8">
          <Image
            className="absolute inset-0 h-full w-auto justify-center"
            src={elementprofile}
            alt=""
          />
          <Image
            className="relative z-0 h-auto flex justify-center mx-auto"
            src={profilepic}
            alt="Picture Ivan Rajwa Naufal"
          />
        </div>
      </div>
    </div>
  );
}
