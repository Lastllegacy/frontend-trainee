import classes from './CatItem.module.css';

import { useContext } from 'react';
import FavoritesContext from '../store/favorites-context';

function CatItem (props) {

   const favoritesCtx = useContext(FavoritesContext);

   const itemIsFavorite = favoritesCtx.catIsFavorite(props.id);

   function toggleFavoriteStatusHandler() {
      if(itemIsFavorite) {
         favoritesCtx.removeFavorite(props.id)
      } else {
         favoritesCtx.addFavorite({
            id: props.id,
            url: props.image,
            alt: 'loading smth',
         })
      }
   }
   return <div className={classes.card} >
      <img src={props.image} alt='loading cat' />
      <div onClick={toggleFavoriteStatusHandler} className={itemIsFavorite ? classes.focus :  classes.heart  }>
      </div>
   </div>
}

export default CatItem;