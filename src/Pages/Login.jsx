import styled from 'styled-components'
import React, { useEffect } from 'react';
import { mobile } from '../Responsive';

function Example(title) {
    useEffect(() => {
        document.title = title;
    });
}


const Container = styled.section`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(255, 255, 255, 0.5),
        rgba(255, 255, 255, 0.5)
        ),
        url("https://images.unsplash.com/photo-1618556658017-fd9c732d1360?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80")
      center;
        background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Wrapper = styled.div`
    width: 25%;
    ${mobile({ width: "70%", padding: "20px" })};
    padding: 20px;
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
`;
const Title = styled.h1`
    font-size: 30px;
    ${mobile({ fontSize: "24px" })};
`;
const Form = styled.form`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
`;
const Input = styled.input`
    flex: 1;
    min-width: 30%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
    font-size: 18px;
    border-radius: 10px;
    border: none;
    box-shadow: 0 3px 10px rgba(0 0 0/0.2);
    outline: none;
`;

const Button = styled.button`
    width: 40%;
    margin: 10px 0;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
    box-shadow: 0 2px 5px rgba(0 128 128/0.2);
    &:hover {
        transform: scale(1.005);
    }
`;

const Link = styled.a`
  margin-bottom: 10px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Login = () => {
    return (
        <Container>
            {Example('Login')}
            <Wrapper>
                <Title>Welcome Back, Sign In</Title>
                <Form>
                    <Input required placeholder="First Name" />
                    <Input required type={'password'} placeholder='password' />
                    <Button>SIGN IN</Button>
                    <Link>FORGOT PASSWORD</Link>
                    <Link>REGISTER NEW USER</Link>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Login