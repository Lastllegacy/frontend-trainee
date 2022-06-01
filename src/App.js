import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import Favorites from "./pages/Favorites";
import Main from "./pages/Main";
import { FavoritesContextProvider } from "./store/favorites-context";

function App() {
  return (
    <FavoritesContextProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </Layout>
    </FavoritesContextProvider>
  );
}

export default App;
