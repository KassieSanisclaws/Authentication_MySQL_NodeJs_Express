import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { login } from "../../Actions/userActions";
import LoadingBox from "../../Messages/LoadingBox/LoadingBox";
import MessageBox  from "../../Messages/MessageBox/MessageBox";
import { Container, Form, FormButton, FormContent, FormH1, FormInput, FormLabel, FormWrap, Icon, Text } from './LoginElements';

export default function LoginScreen(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const redirect = props.location.search
    ? props.location.search.split('=')[1]
    : '/';
    
    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo, loading, error } = userLogin;

    const dispatch = useDispatch();
    const submitHandler = (e) => {
        e.preventDefault();
         dispatch(login(email, password));
    };
    useEffect(() => {
        if(userInfo) {
            props.history.push(redirect);
        }
    }, [props.history, redirect, userInfo]);


    return (
        <Container>
            <FormWrap onSubmit={submitHandler}>
                
               <Icon to="/">Welcome Please Login</Icon>

               {loading && <LoadingBox></LoadingBox>}
                {error && <MessageBox variant="danger">{error}</MessageBox>}

               <FormContent>
                   <Form action="#">
                       <FormH1>Log Into Your Account</FormH1>

                       <FormLabel htmlFor="email">Email Address:</FormLabel>
                           <FormInput type="email" 
                                      id="email" 
                                      placeholder="Enter Email" 
                                      required 
                                      onChange={(e) => setEmail(e.target.value)}></FormInput> 

                       <FormLabel htmlFor="password">Password:</FormLabel>
                            <FormInput type="password" 
                                       id="password" 
                                       placeholder="Enter Password" 
                                       required  
                                       onChange={(e) => setPassword(e.target.value)}></FormInput>

                     <FormButton type="submit">Continue</FormButton>
                               <Text> Forgot Password </Text>

                           New Customer? {''}
                        <Link to={`/register?redirect=${redirect}`}>Create Your Account</Link>

                   </Form>
               </FormContent>
            </FormWrap>
        </Container>
    )

}


