import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import Favorites from "./pages/Favorites";
import Main from "./pages/Main";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </Layout>
  );
}

export default App;
