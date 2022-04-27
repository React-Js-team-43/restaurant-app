import FriedRice from "../../images/product/jollof_fried.jpg";
import Semo from "../../images/product/semo.png";
import YamPottage from "../../images/product/Yam-pottage.jpg";
import JollofRice from "../../images/product/jollof-rice.jpg";
import YamEgg from "../../images/product/yam_egg.jpg";
import Fufu from "../../images/product/fufu.jpg";
import PageTitle from "../PageTitle";

const ProductsPage = () => {
  const foods = [
    { id: 1, foodname: "FriedRice", image: FriedRice, price: "$12" },
    { id: 2, foodname: "Semo", image: Semo, price: "$20" },
    { id: 3, foodname: "Yam Pottage", image: YamPottage, price: "$8" },
    { id: 4, foodname: "JollofRice", image: JollofRice, price: "$10" },
    { id: 5, foodname: "Yam & Egg", image: YamEgg, price: "$10" },
    { id: 6, foodname: "Fufu", image: Fufu, price: "$20" },
  ];

  return (
    <section>
      <PageTitle title={"Products"} />
      <p className="text-center">This are the list of available foods!</p>
      <div className="cards">
        {foods &&
          foods.map((food, index) => (
            <div className="card-box" key={index}>
              <div className="card-image">
                <img src={food.image} alt="" />
              </div>
              <p className="detail">{food.foodname}</p>
              <p className="detail">{food.price}</p>
            </div>
          ))}
      </div>
    </section>
  );
};

export default ProductsPage;
