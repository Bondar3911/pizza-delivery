import React from "react";

const CartEmpty = () => {
  return (
    <>
      <div className="cart cart--empty">
        <h2>Корзина пустая</h2>
        <p>
          Вероятней всего, вы не заказывали ещё пиццу.
          <br />
          Для того, чтобы заказать пиццу, перейди на главную страницу.
        </p>
        <img
          src="https://react-pizza-v2.vercel.app/static/media/empty-cart.db905d1f4b063162f25b.png"
          alt="Empty"
        />
        <a href="/" className="button">
          <span>Вернуться домой</span>
        </a>
      </div>
    </>
  );
};
export default CartEmpty;
