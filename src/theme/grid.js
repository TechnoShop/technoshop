import styled from 'styled-components';
import media from './media';

export const ContainerFluid = styled.div`
    padding: 0;
`
export const Container = styled.div`
    padding: 0 60px;
    ${media.xs`
        padding: 0 30px;
    `}
`

