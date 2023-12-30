import { Route, Routes } from "react-router-dom";
import Page1 from "./Pages/homepage";
import  EditPage  from "./Pages/editpage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/edit" element= {<EditPage />} />
      </Routes>
    </>
  );
}

export default App;
