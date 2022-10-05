import styled from "styled-components";
import { flexCenter } from "../../styles/flexCenter";

export const ContactPage = styled(flexCenter)` 
height: auto;
min-height: 120vh;
width: 100vw;
/* background-color: #FFE69A; */
background-image: url("/PageImg/ContactPage.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
z-index: 20;

` 

export const ContactForm =styled.form`
width: 100%;
max-width: 32rem;
margin: 10% auto;
@media (max-width:612px) {
    width: 70%;
}

` 
export const ContactOuterDiv = styled.div`
display: flex;
flex-wrap: wrap;
gap:1.25rem;
margin-bottom: 1.5rem;
@media (max-width:480px) {
margin-bottom: 0.2rem;
gap: 0;
    
}
`
export const ContactInnerDiv = styled.div`
width: 100%;
padding: 0 0.75rem;

@media (max-width:480px) {
    width: 80%;
}

`

export const ContactInnerDivHalf = styled.div`
width: 43%;
padding: 0 0.75rem;
margin-bottom: 0px;
@media (max-width:480px) {
    width: 80%;
}


`
export const ContactLabel = styled.label`
display:block;
text-transform: uppercase;
color:black;
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
letter-spacing: 0.025rem;
font-size: 0.75rem;
line-height: 1rem;
margin-bottom: 0.5rem;
`
export const ContactInput = styled.input`
display: block;
width:100%;
background-color: #C1EFFF;
border: 0px;
border-radius: 10px;
padding: 0.75rem 1rem;
margin-bottom: 0.75rem;
appearance: none;
line-height: 1.25rem;
&:active{
    border: 0px;
}

`

export const ContactTextArea = styled.textarea`
resize: none;
appearance: none;
display: block;
width:100%;
background-color: #C1EFFF;
color: white;
border: 0px;
border-radius: 10px;
padding: 0.75rem 1rem;
margin-bottom: 0.75rem;
line-height: 5rem;
&:active{
    border: 0px;
}
`

export  const ContactButton = styled.button`
padding: 0.75rem 1.5rem;
background-color: lightblue;
border-radius: 10px;
border:0px;
margin-left: 3%;
width: 100%;

`
export const ContactButtonDiv =styled.button`
display:  flex;
justify-content: center;
align-items:center;
`