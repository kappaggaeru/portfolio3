import Experience from "./pages/experience";
import Projects from "./pages/projects";
import WelcomePage from "./pages/welcome";
// import Work from "./pages/work";

export default function Home() {
    return (
        <div className="mx-auto max-w-[692px] px-6 py-12 leading-relaxed sm:py-16">
            <WelcomePage />
            <Experience />
            <Projects />
            {/* <Work /> */}
        </div>
    );
}
