import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { WorkHistory } from "./components/WorkHistory";
import { useTheme } from "./hooks/useTheme";

function App() {
  const { mode, toggleMode, accentIndex, setAccentIndex, themeVars } =
    useTheme();

  return (
    <div
      style={themeVars}
      className="min-h-[2100px] w-full bg-page font-sans text-[17px] leading-[1.6] text-ink"
    >
      <Header
        mode={mode}
        onToggleMode={toggleMode}
        accentIndex={accentIndex}
        onSelectAccent={setAccentIndex}
      />
      <main id="top" className="mx-auto max-w-[1120px] px-8">
        <Hero />
        <WorkHistory />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
