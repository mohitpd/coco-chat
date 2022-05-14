import React from 'react';
import styled from 'styled-components';
import {FadingCircle} from 'better-react-spinkit';
import logo from '../components/Images/CocoChatLogo.png';
import Image from 'next/image';

const Logo = styled.div`
    height: 400px;
    width: 400px;
    margin-bottom: 50px;
`;
const Loading = () => {
    return (
        <center style={{display: 'grid', placeItems: 'center', height: '100vh'}}>
            <Logo>
                <Image src={logo} height={400} width={500} alt='Picture of the author' />
                <FadingCircle color='blue' size={50} />
            </Logo>
        </center>
    );
};

export default Loading;
