import styled, { css } from "styled-components";

export const Container = styled.div`
${() => css`
flex: 1;
  max-width: calc(25% - 20px);
  height: auto;
border: 1px solid red;
  border-radius: 5px;
  box-sizing: border-box;



    `}
`;
