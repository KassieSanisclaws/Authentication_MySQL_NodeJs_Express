import styled  from "styled-components";
import { Link } from "react-router-dom";


export const Container = styled.div`
min-height: 692px;
position: fixed;
bottom: 0;
left: 0;
right: 0;
top: 0;
z-index: 0;
overflow: hidden;
background: linear-gradient(rgba(81, 205, 145, 0.527), rgba(7, 61, 35, 0.199)); /* revist to fix gradient background. */
);
`;

export const FormWrap = styled.div`
height: 100;
display: flex;
flex-direction; column;
justify-content: center;

@media screen and (max-width: 400px) {
    height: 80%;
}
`;

export const Icon = styled(Link)`
margin-left: 32px;
margin-top: 32px;
text-decoration: none;
color: #fff;
font-weight: 700;
font-size: 32px;

@media screen and (max-width: 480px){
    margin-left: 16px;
    margin-top: 8px;
}
`;

export const FormContent = styled.div`
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;

@media screen and (max-width: 480px){
    padding: 10px;
}
`;

export const Form = styled.form`
background: #2B8251;
max-width: 480px;
height: 41rem;
width: 25rem;
z-index: 1;
display: grid;
margin-right:10rem;
margin-top: 5rem;
padding: 80px 32px;
border-radius: 2rem;
border-style: double;
box-shadow: 0 2px 3px rgba(0, 0, 0, 0.9);

@media screen and (max-width; 400px) {
    padding: 32px 32px;
}
`;

export const FormH1 = styled.h1`
margin-bottom; 40px;
color: #fff;
font-size: 3rem;
font-weight: 400; 
text-align: center;
`;

export const FormLabel = styled.label`
margin-bottom: 8px;
font-size: 2rem;
color: $fff;
`;

export const FormInput = styled.input`
padding: 16px 16px;
margin-bottom: 32px;
border: none;
font-size: 1.5rem;
border-radius: 4px;
`;


export const FormButton = styled.button`
background: #01bf71;
padding: 16px 0;
border: none;
border-radius: 1rem;
color: #fff;
font-size: 2rem;
cursor: pointer;
`;

export const Text = styled.span`
text-align: center;
margin-top: 24px;
color: #fff;
font-size: 1.5rem;
cursor: pointer;
`;

