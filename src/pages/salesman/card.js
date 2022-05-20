import React from "react";
import { LikeIcon } from "../../components/icon";

function Card({ data }) {
  const [like, setLike] = React.useState(false);
  const [buy, setBuy] = React.useState(false);
  return (
    <div className="card">
      <img
        src="https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg"
        alt=""
      />
      <h2>Название ковра</h2>
      <h1>86 560 ₽</h1>
      <div className="flex__card">
        <button
          className={`like ${buy && "active"}`}
          onClick={() => setBuy(!buy)}
        >
          {buy ? "В корзине" : " В корзину"}
        </button>
        <div
          className={`like ${like && "active"}`}
          onClick={() => setLike(!like)}
        >
          <LikeIcon />
        </div>
      </div>
    </div>
  );
}

export default Card;
