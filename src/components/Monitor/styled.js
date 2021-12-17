import styled from "styled-components";

export const TemplateMonitor = styled.div`
  width: 85%;
  margin: 50px auto;
`;

export const MonitorGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  margin: 50px 0;
  @media screen and (max-width: ${(props) => props.theme.screen.md}) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: ${(props) => props.theme.screen.xs}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const TitleBox = styled.div`
  background: ${(props) => props.color};
  padding: 20px;
  min-height: 60px;
  color: white;
  width: 100%;
  border-radius: 5px 5px 0 0;
  font-weight: bold;
  text-align: center;
`;

export const ExplainedBox = styled.div`
  border: 1px solid ${(props) => props.color};
  border-radius: 0 0 5px 5px;
  height: 100px;
  width: 100%;
  font-size: 25px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ButtonChange = styled.button`
  display: block;
  border-radius: 16px;
  padding: 8px 32px;
  color: white;
  margin: 25px auto 0;
  font-size: 16px;
  font-weight: bold;
  min-width: 100px;
  transition: all 0.3s ease-in;
  background-color: ${(props) => props.theme.color.blue.A700};
  &:hover {
    transform: scale(1.1);
  }
  &:disabled,
  button[disabled] {
    border: 1px solid #999999;
    background-color: #cccccc;
    color: #666666;
  }
`;
