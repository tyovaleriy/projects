import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header.jsx";
import Promo from "./components/promo/Promo.jsx";
import Main from "./components/main/Main.jsx";
import Footer from "./components/footer/Footer.jsx";
import Reviews from "./pages/Reviews.jsx";
import { useState } from "react";

function App() {
  const [isReviewsOpen, setIsReviewsOpen] = useState(false);

  return (
    <div className="App">
      <Router>
        <Header
          setIsReviewsOpen={setIsReviewsOpen}
          isReviewsOpen={isReviewsOpen}
        />
        <Routes>
          <Route path="/reviews" element={<Reviews />} />
          <Route
            path="/"
            element={
              <>
                <Promo />
                <Main />
              </>
            }
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
