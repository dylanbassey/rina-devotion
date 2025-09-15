import React from "react";
import {
  HomeContainer,
  HomeDescription,
  HomeTitle,
  HomeTitleContainer,
} from "./HomeStyles";
import logo from "../../rina2.jpeg";

const Home: React.FC = () => {
  return (
    <HomeContainer>
      <img
        src={logo}
        alt="Logo"
        style={{
          width: "100%",
          height: "100%",
          marginBottom: 20,
          position: "absolute",
          zIndex: 1,
        }}
      />
      <HomeTitleContainer>
        <HomeTitle>Rina Devotion</HomeTitle>
      </HomeTitleContainer>
      <HomeDescription>spoil me rotten x</HomeDescription>
    </HomeContainer>
  );
};

export default Home;
