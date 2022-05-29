import styled, { css } from "styled-components";

export const PrimaryButtonStyle = css`
    display: block;
    padding:    1rem 1.2rem;
    border-radius: 12px;
    font-weight:    bold;
    fonz-size:  1.2em;
    text-transform: uppercase;
    background-color:   navy;
    color:  #fff;
    cursor: pointer;
`;

export const SecondayButtonStyle = css`
    font-weight: boldt;
    text-decoration:    underline;
    text-transform: uppercase;
    text-decoration-thickness:  3px;
    background: transparent;
    color:  inherit;
    boder:0;
    font-size : 1.2em;
    display: inline-block;
`;

export const LinkPrimaryButton = styled.a`
    ${PrimaryButtonStyle}
`;

export const PrimaryButton = styled.button`
    ${PrimaryButtonStyle}
`;

export const LinkSecondaryButton = styled.a`
    ${SecondayButtonStyle}
`;

export const SecondayButton = styled.button`
    ${SecondayButtonStyle}
`;
