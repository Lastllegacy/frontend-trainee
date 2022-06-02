import { Link } from "react-router-dom";

import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <div> 
      <header className={classes.header}>
        <nav className={classes.pages}>
            <Link to="/frontend-trainee"> Все котики </Link>
            <Link to="/frontend-trainee/favorites"> Любимые котики </Link>
        </nav>
      </header>
    </div>
  );
}

export default MainNavigation;
