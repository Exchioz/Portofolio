import Introduction from "./components/Introduction";
import About from "./components/About";

export default function Home() {
  return (
    <div className="px-10 py-14 md:px-20 lg:px-28 xl:px-36">
      <Introduction />
      <About />
    </div>
  );
}
