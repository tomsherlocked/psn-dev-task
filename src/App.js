import Header from "./components/Header";
import Footer from "./components/Footer";
import ResultsPage from "./pages/ResultsPage";
import HomePage from "./pages/HomePage";
import {
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import WatchPage from "./pages/WatchPage";

function App() {
  return (
    <>
      <div className="overlay">
        <h2>I've only coded for iPhone 6, sorry!</h2>
      </div>
      <div className="App">
        <Header />
        <main>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="search/:query" element={<ResultsPage />} />
              <Route path="watch/:videoId" element={<WatchPage />} />
            </Routes>
          </BrowserRouter>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
