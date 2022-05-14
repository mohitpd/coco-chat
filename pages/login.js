import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import logo from '../components/Images/CocoChatLogo.png';
import Image from 'next/image';
import {Button} from '@material-ui/core';
import {auth, provider} from '../firebase';
import {signInWithPopup} from 'firebase/auth';
const Login = () => {
    const signIn = async () => {
        const result = await signInWithPopup(auth, provider).catch(alert);
        console.log(result);
    };
    return (
        <Container>
            <Head>
                <title>Login</title>
            </Head>
            <LoginContainer>
                <Logo>
                    <Image
                        src={logo}
                        layout='responsive'
                        // src={`https://www.nicepng.com/png/detail/874-8743554_chat-on-the-mac-app-store-rocket-chat.png`}
                        alt='Picture of the author'
                    />
                </Logo>
                <Button variant='outlined' onClick={signIn}>
                    Sign In With Google
                </Button>
            </LoginContainer>
        </Container>
    );
};

export default Login;

const Container = styled.div`
    display: grid;
    place-items: center;
    height: 100vh;
    background-color: whitesmoke;
`;
const Logo = styled.div`
    height: 400px;
    width: 400px;
    margin-bottom: 50px;
`;
const LoginContainer = styled.div`
    padding: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    border-radius: 5px;
    box-shadow: 0px 4px 14px -3px rgba(0, 0, 0, 0.7);
`;
