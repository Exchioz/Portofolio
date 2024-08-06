import Introduction from "./components/Introduction";
import About from "./components/About";
import Link from "next/link";

export default function Home() {
  return (
    <div className="px-10 py-14 md:px-20 lg:px-28 xl:px-36">
      <Introduction />
      <About />
      <div className="flex justify-center mt-10">
        <Link
          href="/project"
          className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          View My Projects
        </Link>
      </div>
    </div>
  );
}
