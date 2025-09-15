import styled from "styled-components";

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f5f5f5;
`;

const HomeTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  border: 2px solid #ccc;
  border-radius: 10px;
  width: 80%;
  z-index: 2;
  opacity: 0.8;
  background-color: lightblue;
`;

const HomeTitle = styled.h1`
  display: flex;
  flex-direction: column;
  font-family: "Urbanist", sans-serif;
  color: #fff;
`;

const HomeDescription = styled.p`
  display: flex;
  flex-direction: column;
  font-size: 1.2rem;
  color: #fff;
  z-index: 2;
`;

export { HomeContainer, HomeTitle, HomeDescription, HomeTitleContainer };
