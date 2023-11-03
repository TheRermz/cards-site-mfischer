import styled, { css } from "styled-components";

export const Container = styled.div`
${() => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 99vh;
    padding-left: 1rem;
    flex-wrap: wrap;
    gap: 10px;
`}
`;
