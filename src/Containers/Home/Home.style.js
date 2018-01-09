import styled, { css } from 'styled-components';
import media from 'Src/theme/media';


export const Image = styled.img`
    width: 100%;
`;
export const HeroImage = styled.div`
    height: 100vh;
    background: url('${require('Src/assets/street-cropped.gif')}') no-repeat center;
    background-size: cover;

    display: flex;
    flex-direction: column;
    align-content: center;
    text-align: center;
    justify-content: center;

    color: #ffffff;
    font-weight: bold;
    font-size: 2em;

    padding: 0 60px;
    ${media.xs`
    padding: 0 30px;

    `}


    h1 {
        margin-bottom: 0;
    }
    h2{
        ${media.sm`
        font-size:1.25em;
        `}
        ${media.xs`
        font-size:1em;
        `}
    }
    h1,h2{
        background-color: rgba(0,0,0, .5);
        padding: 20px;
        display: inline-block;
        width:auto;
        
    }
    `;

export const RevealP = styled.p`
    position: relative;
    &:after {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #000;
        content: '';


        transform-origin: left;
        transition: transform 3s;

        transform: rotateY(90deg);
        
    }
    ${({ hide }) => hide && css`
         &:after {
             transform: rotateY(0deg);
         }
    `}
`;    