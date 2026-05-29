import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Test from "./pages/test";
import Result from "./pages/result";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Test />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
