import styled from "styled-components";
import { Link } from "react-router-dom";

export const SectionOneHomeBg = styled.div`
  height: 550px;
  width: 100%;
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-color: #808080;
  margin-bottom: 4px;
`;

export const SectionOneWelcomed = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  background-color: #000000aa;
  justify-content: center;
  align-items: center;
`;

export const SectionOneButton = styled(Link)`
  display: block;
  border-radius: 16px;
  padding: 8px 32px;
  color: white;
  margin-top: 25px;
  font-size: 16px;
  font-weight: bold;
  min-width: 100px;
  transition: all .3s ease-in;
  background-color: ${(props)=>props.theme.color.blue.A700};
  &:hover{
    transform: scale(1.1);
  }
`;
