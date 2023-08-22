import React from "react";
import styles from "./Recipe.module.scss";
import Pizza from "../assets/images/Pizza.jpg";
function Recipe() {
  return (
    <div className={styles.recipe}>
      <div className={styles.imageContainer}>
        <img src={Pizza} alt="recipe" />
      </div>
      <div
        className={`${styles.recipeTitle} d-flex flex-row align-items-center justify-content-center`}
      >
        <h3>Pizza</h3>
      </div>
    </div>
  );
}

export default Recipe;
