import styled, { css } from "styled-components";

export const AsideStyled = styled.aside`
${() => css`
    display: block;
    text-align: center;
    height: 100vh;
    width: 10%;
    background-color: ${(props) => props.theme.colors.stoneGrey};
    border-top-right-radius: 1rem;
    >ul{
        list-style: none;
        padding: 0;
        margin: 0.8rem 0;
        padding: 0 1rem ;

            >li{
            padding:  0.3rem 0;
            margin: 0.8rem 0;
            border: 1px solid red;
            border-radius: 1rem;
            cursor: pointer;
            &:hover{
                background-color: ${(props) => props.theme.colors.primary}

            }
        }
    }

`}
`;
