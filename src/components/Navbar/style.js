import styled from "styled-components";
import theme from "../../styles/theme";

export const Nav = styled.nav`
  background: white;
  min-height: 70px;
  justify-content: center;
  position: sticky;
  top: 0;
  z-index: 50;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
  width: 100%;
  @media screen and (max-width: 830px) {
    box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.15);
  }
`;

export const NavSet = styled.div`
  width: 95%;
  margin: 0 auto;
  display: flex;
  padding: 20px;
  align-self: center;
  align-items: center;
  color: #909daa;
`;

export const NavLogo = styled.img`
  display: block;
  width: 60px;
`;

export const NavItems = styled.div`
  display: flex;
  margin-left: auto;
  align-self: center;
  align-items: center;
  column-gap: 40px;
  @media screen and (max-width: ${(props) => props.theme.screen.sm}) {
    display: none;
  }
`;

export const NavButton = styled.button`
  display: block;
  background-color: ${(props)=>props.mon ? theme.color.white : theme.color.blue.A400};
  padding: 8px;
  color: ${(props)=>props.mon ? theme.color.black : theme.color.white};
  border-radius: 5px;
  font-family: 'Roboto',sans-serif;
  font-weight: bold;
  transition: all .3s ease-in;
  &:hover{
    transform: scale(1.1);
  }
`;

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: ${(props) => props.theme.screen.sm}) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: black;
  }
`;