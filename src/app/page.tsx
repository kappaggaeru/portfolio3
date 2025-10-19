import Experience from "./pages/experience";
import Projects from "./pages/projects";
import WelcomePage from "./pages/welcome";
import Work from "./pages/work";

export default function Home() {
    return (
        <div className="bg-gray-background dark:bg-slate-800 px-6 py-12">
            <WelcomePage />
            <Experience />
            <Projects />
            <Work />
        </div>
    );
}
