import InfoPerso from "./composants/InfoPerso";
import Experience from "./composants/Experience";
import Competences from "./composants/Competences";

function App() {
  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px", fontFamily: "sans-serif" }}>
      <InfoPerso />
      <Competences />
      <Experience />
    </div>
  );
}

export default App;