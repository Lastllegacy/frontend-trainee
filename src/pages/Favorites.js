import classes from "./Favorites.module.css";

import { useContext } from "react";

import FavoritesContext from "../store/favorites-context";
import CatItem from "../components/CatItem";

function Favorites() {
  const favoritesCtx = useContext(FavoritesContext);

  return (
    <div className={classes.favoritesList}>
      <section>
        <h1>My favorites</h1>
        <div className={classes.content}>
          {favoritesCtx.favorites.map((cat) => (
            <CatItem image={cat.url} key={cat.id} id={cat.id} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Favorites;
