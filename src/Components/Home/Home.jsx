import React from "react";
import "./Home.scss";

const Card = ({ img }) => <img className="card" src={img} alt="cover" />;

const Row = ({ title, arr = [{ img: "https://placebear.com/g/200/200" }] }) => (
  <div className="row">
    <h2>{title}</h2>
    <div>
      {arr.map((item) => (
        <Card img={item.img} />
      ))}
    </div>
  </div>
);

const Home = () => {
  return (
    <section className="home">
      <div className="banner"></div>
      <Row title={"Popular on Netflix"} />
      <Row title={"Movies"} />
      <Row title={"Tv Shows"} />
      <Row title={"Recently Viewed"} />
      <Row title={"My List"} />
    </section>
  );
};

export default Home;
