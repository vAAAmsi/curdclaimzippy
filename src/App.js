import { Route, Routes } from "react-router-dom";
import Page1 from "./Pages/homepage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/edit" element= {<>eidt page</>} />
      </Routes>
    </>
  );
}

export default App;
