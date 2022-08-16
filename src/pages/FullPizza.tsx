import axios from "axios";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const FullPizza: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [pizza, setPizza] = React.useState<{
    imageUrl: string;
    title: string;
    price: number;
  }>();

  React.useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get(
          "https://62a09da9a9866630f81374d1.mockapi.io/pizzas/" + id
        );
        setPizza(data);
      } catch (error: any) {
        alert("Ошибка при получении пицц " + error.message);
        navigate("/");
      }
    }
    fetchPizza();
  }, []);

  if (!pizza) {
    return (
      <div className="container--loading">
        <div className="donut"></div>
      </div>
    );
  }

  return (
    <div className="container">
      <img className="" src={pizza.imageUrl} alt="Pizza" />
      <h2>{pizza.title}</h2>
      <p>
        Mnogo teksta djaadsdsa sad ds dasaassd asdsadsad dddsdd dsaasds asdasdsd
        sdaasad sadasd asdsadew dfsaasd asdadaswq sd sdadsda sadaq qwqe dada
        dsaasds
      </p>
      <div className="pizza-block__price">от {pizza.price} $</div>
    </div>
  );
};

export default FullPizza;
