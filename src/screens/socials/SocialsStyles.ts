import styled from "styled-components";

const SocialsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f5f5f5;
`;

const SocialsTitle = styled.h1`
  font-size: 2.5rem;
  color: #333;
  font-family: "Urbanist", sans-serif;
`;

const SocialsDescription = styled.p`
  font-size: 1.2rem;
  color: #666;
`;

export { SocialsContainer, SocialsTitle, SocialsDescription };
