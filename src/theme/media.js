import { css } from 'styled-components';

const sizes = {
    xs: 376,
    sm: 768,
    md: 992,
    xl: 1170
};

const media = Object.keys(sizes).reduce((finalMedia, size) => {
    return {
        ...finalMedia,
        [size]: function (...args) {
            return css`
                @media(max-width: ${sizes[size]}px) {
                    ${css(...args)}
                }`;
        }
    };
}, {});

/* function xs(...args) {
    return css`
            @media(max - width: ${ sizes.xs }px) {
                ${ css(...args) }
            }
            `;
}
function sm(...args) {
    return css`
            @media(max - width: ${ sizes.sm }px) {
                ${ css(...args) }
            }
            `;
}
function md(...args) {
    return css`
            @media(max - width: ${ sizes.md }px) {
                ${ css(...args) }
            }
            `;
}
function xl(...args) {
    return css`
            @media(max - width: ${ sizes.xl }px) {
                ${ css(...args) }
            }
            `;
}

const media = {
    xs,
    sm,
    md,
    xl
} */

export default media; 