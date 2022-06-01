import { useEffect, useState } from "react";
import CatItem from "../components/CatItem";
import classes from "./Main.module.css";

function Main() {
   
  const [isLoaded, setIsLoaded] = useState(false);
  const [cats, setCats] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://api.thecatapi.com/v1/images/search?limit=40", { "X-Api-Key": "d44ed773-f9c2-4ab8-a696-3b315fff2d0e", "limit": "60" })
      .then((response) => response.json())
      .then(
        (result) => {
          console.log(result)
          setIsLoaded(true);
          setCats(result);
        },
        (error) => {
          setError(error);
          setIsLoaded(true);
        }
      );
  }, []);

  if (error) {
    return <div>Ошибка: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Загрузка...</div>;
  } else {
    return (
      <div className={classes.list}>
          {cats.map(cat => (
              <CatItem image={cat.url} key={cat.id} id={cat.id}/>
          ))}
      </div>
    );
  }
}

export default Main;
