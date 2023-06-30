import Chanceofrain from "./components/detailCards/Chanceofrain";
import Feelslike from "./components/detailCards/Feelslike";
import Humidity from "./components/detailCards/Humidity";
import Precipitation from "./components/detailCards/Precipitation";
import Uv from "./components/detailCards/Uv";
import Wind from "./components/detailCards/Wind";
import Graph from "./components/graph/Graph";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-outer-container">
        <div className="main-container">
          <Header />
          <section>
            <Graph />
            <div className="details">
              <h2>More details of today's weather</h2>
              <div className="details-grid">
                <Humidity />
                <Wind />
                <Precipitation />
                <Uv />
                <Feelslike />
                <Chanceofrain />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
