import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Test from "./pages/test";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
