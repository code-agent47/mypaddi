import styled from 'styled-components';
import {maxWidth} from '../../../helpers/mixins';

const FeaturedOnStyle = styled.section`
    background:#fcfdff;
    margin-top:125px;
    width:100%;

    ${
        maxWidth.sm`
            margin-top:60px;
        `
    }
    
    .featured-on{
        height:250px;
        ${
            maxWidth.sm`
                height:100px;
            `
        }
    }
`

export default FeaturedOnStyle;   