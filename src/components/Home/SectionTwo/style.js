import styled from "styled-components";

export const SectionTwoTemplate = styled.div`
  margin: 100px auto;
  width: 80%;
  display: flex;
  @media screen and (max-width: ${(props) => props.theme.screen.md}) {
    flex-direction: column;
  }
`;

export const SectionTwoExplained = styled.div`
  width: 38%;
  @media screen and (max-width: ${(props) => props.theme.screen.md}) {
    width: 100%;
  }
`;

export const SectionTwoEmbedYT = styled.div`
  margin-left: auto;
  @media screen and (max-width: ${(props) => props.theme.screen.md}) {
    margin: 10px auto;
  }
`;
