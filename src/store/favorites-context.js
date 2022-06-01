import { createContext, useState } from "react";

const FavoritesContext = createContext({
   favorites: [],
   totalFavorites:0,
   addFavorite: (favoriteCat) => {},
   removeFavorite: (catId) => {}, 
   catIsFavorite: (catId) => {},
})

export function FavoritesContextProvider (props) {

   const [userFavorites, setUserFavorites] = useState([]);

   function addFavoriteHandler (favoriteCat) {
      setUserFavorites((prevUserFavorites) => {
         return prevUserFavorites.concat(favoriteCat)
      })

   }

   function removeFavoriteHandler (catId) {
      setUserFavorites((prevUserFavorites) => {
         return prevUserFavorites.filter(cat => cat.id !== catId)
      })

   }

   function catIsFavoriteHandler (catId) {
      return userFavorites.some(cat => cat.id === catId)
   }

   const context = {
      favorites: userFavorites,
      totalFavorites: userFavorites.length,
      addFavorite: addFavoriteHandler,
      removeFavorite: removeFavoriteHandler,
      catIsFavorite: catIsFavoriteHandler
   }

   return <FavoritesContext.Provider value={context}>
      {props.children}
   </FavoritesContext.Provider>
}

export default FavoritesContext;