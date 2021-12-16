import styled from "styled-components";

export const SectionThreeTemplate = styled.div`
  margin: 100px auto;
  width: 80%;
`;

export const SectionThreeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
  align-items: center;
  @media screen and (max-width: ${(props) => props.theme.screen.sm}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: ${(props) => props.theme.screen.xs}) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const SectionThreeApart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all .3s ease-in;
  &:hover{
    transform: scale(1.1);
  }
`;

export const SectionThreePhoto = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 100%;
  object-fit: contain;
`;
