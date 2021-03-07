import React from  "react";
import style from './recipe.module.css';

const Reacipe = ({ title, calories, image, ingredients }) => {
    return (
    <div className={style.recipe}>
        <h1 className={style.recipe}>{title}</h1>
        <ol>
          {ingredients.map(ingredients =>(
            <li>{ingredients.text}</li>
          ))}
        </ol>
        <p>{calories}</p>
        <img className={style.image} src={image} alt="" />
    </div>
  );
};

export default Reacipe;