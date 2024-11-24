import React from "react";
import "./App.css";
import ProductCard from "./components/ProductCard";
function App() {
  return (
    <div>
      <h1 className="heading">Product Cards</h1>
      <div className="main">
        <ProductCard
          details=" The plush, low-cut collar keeps it sleek and comfortable for your world."
          name="Nike Court Vision Low"
          image="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/4284894e-e57e-4d95-ae7b-1e8fcc9eeb9a/NIKE+COURT+VISION+LO+NN.png"
          price="4995.00"
        />
        <ProductCard
          details=" Inspired by the original that debuted in 1985, it offers a classic look."
          name="Air Jordan 1 Low"
          image="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/66b1a0a7-2277-4ab5-8f94-03e52d4fcd45/AIR+JORDAN+1+LOW.png"
          price="10795.00"
        />
        <ProductCard
          details=" Jordan heritage runs deep in the New York City area."
          name="Jordan Air Ship"
          image="https://static.nike.com/a/images/w_1280,q_auto,f_auto/87f55a69-ed1e-4f32-a395-04debb24bee9/jordan-air-ship-x-awake-ny-game-royal-fn8675-104-release-date.jpg"
          price="13995.00"
        />
        <ProductCard
          details="An '80s b-ball icon returns with classic details and throwback hoops flair."
          name="Nike SB Dunk Low Pro"
          image="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/ed8d46c0-d433-467c-a72a-c850d6380c85/NIKE+SB+DUNK+LOW+PRO.png"
          price="9695.00"
        />
        <ProductCard
          details="Fast, rugged and just as at home in the city as it is in the deserts."
          name="Nike ACG Mountain Fly 2"
          image="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8832a95f-4f8e-41ce-8c21-6baac1308c3c/ACG+MOUNTAIN+FLY+2+LOW+GTX.png"
          price="16995.00 "
        />
        <ProductCard
          details="This special version encourages you to chase your own destiny."
          name="Nike Superfly 10 Elite"
          image="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3f5dec25-5062-4afa-84de-5345165b2c46/ZM+SUPERFLY+10+ELITE+MDS+FG.png"
          price="25095.00"
        />
      </div>
    </div>
  );
}

export default App;
