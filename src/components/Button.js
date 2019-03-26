import styled from 'styled-components';

export const ButtonContainer = styled.button`
text-transform: capitalize;
text-align: center;
font-size:1.4rem;
background: transparent;
border: 0.05rem solid var(--mainWhite);
color: var(--mainWhite);
border-radius: 0.5rem;
padding: 0.2rem 0.5rem;
cursor: pointer;
margin: 0.2rem 0.5rem 0.2rem 0;
transition: all 0.5s ease-in-out;
&:hover{
    background:var(--mainWhite);
    color:var(--mainDark);
}
&:focus{
    outline:none;
}

`;


export const ButtonContainer2 = styled.button`
text-transform: capitalize;
text-align: center;
font-size:1.4rem;
background: transparent;
border: 0.05rem solid var(--mainPink);
border-color: ${props=>props.cart? "var(--mainYellow)":"var(--mainPink)"};
color: ${props=>props.cart? "var(--mainYellow)": "var(--mainDark)"};
border-radius: 0.5rem;
padding: 0.2rem 0.5rem; 
cursor: pointer; 
margin: 0.2rem 0.5rem 0.2rem 0;
transition: all 0.5s ease-in-out;
&:hover{
    background: ${props=>props.cart? "var(--mainOrange)":"var(--mainPink)"};
    color:var(--mainWhite);
}
&:focus{
    outline:none;
}

`;
