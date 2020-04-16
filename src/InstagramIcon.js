import React from 'react';
import { SocialIcon } from 'react-social-icons';
import styled from 'styled-components';

const IconDistance = styled.div`
    margin-right: 10px;
`;
export default function SimpleCard() {

    return (
        <IconDistance>
            <SocialIcon url="https://www.instagram.com/kanta.sasaki.0111/?hl=ja" />
        </IconDistance>
    );
}
