import { css } from 'styled-components'

export const navbarResp = (props) => {
    return css`
        @media only screen and (max-width: 860px){
            ${props}
        }
    `;
};

export const discoverResp = (props) => {
    return css`
        @media only screen and (max-width: 1000px){
            ${props}
        }
    `;
};

export const howWorksResp = (props) => {
    return css`
        @media only screen and (max-width: 780px){
            ${props}
        }
    `;
};

export const sliderResp = (props) => {
    return css`
        @media only screen and (max-width: 550px){
            ${props}
        }
    `;
};

export const peopleResp = (props) => {
    return css`
        @media only screen and (max-width: 900px){
            ${props}
        }
    `;
};

export const likeOrDislikeResp = (props) => {
    return css`
        @media only screen and (max-width: 900px){
            ${props}
        }
    `;
};

export const footerResp = (props) => {
    return css`
        @media only screen and (max-width: 1000px){
            ${props}
        }
    `;
};
