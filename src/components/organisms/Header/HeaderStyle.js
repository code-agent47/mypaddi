import styled from 'styled-components';
import {maxWidth} from '../../../helpers/mixins';

const HeaderStyle = styled.header`
    margin-top:70px;
    width:100%;
    
    ${
        maxWidth.sm`
            margin-top:27px;
        `
    }
    .logo{
        -ms-flex: 0 0 100px;
        -webkit-flex: 0 0 100px;
        flex: 0 0 100px;
        max-width: 100px;
        margin-top:5px;
        ${
            maxWidth.sm`
                -ms-flex: 0 0 75px;
                -webkit-flex: 0 0 75px;
                flex: 0 0 75px;
                max-width: 75px;
            `
        }
    }
    .auth-items{
        display:flex;
        .button{
            border-radius:6px;
            font-family: Google Sans;
            font-size: 13px;
            font-weight: bold;
            font-stretch: normal;
            font-style: normal;
            height:45px;
            line-height: 1.31;
            letter-spacing: normal;
            object-fit: contain;
            width:120px;
            ${
                maxWidth.sm`
                    font-size:11px;
                    height:30px;
                    width:70px;
                `
            }
        }
        .--login{
            background:transparent;
            border:2px solid #7d7cfc;
            color:#4d4cfb;
            margin-right:33px;
            ${
                maxWidth.sm`
                    margin-right:12px;
                `
            }
        }
        .--signup{
            background:#4d4cfb;
            color:white;
        }
    }
`

export default HeaderStyle;   