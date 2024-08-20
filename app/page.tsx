import Assistent from "./components/assistent";
import Help_assistent from "./components/help_assistent";

export default function Home() {
  return (
    <div>
      <div className="absolute bottom-6 right-6">
        <Assistent/>
        {/* <Help_assistent/> */}
      </div>
    </div>
  );
}
