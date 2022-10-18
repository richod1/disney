import React from 'react'
import styled from 'styled-components'

function Login() {
  return (
    <Container>
        
      <CTA>
        <CTALogoOne src="/images/cta-logo-one.svg" />
        <SignUp>GET ALL THERE</SignUp>
        <Description>
        Disney+ is the streaming home of Disney, Pixar, Marvel, Star Wars, National Geographic, and more.
         From new releases to your favorite classics and exclusive Originals, there's something for everyone.
         Access unlimited entertainment with Disney+ for $7.99/month or $79.99/year.
        </Description>
        <CTALogoTwo src="/images/cta-logo-two.png" />
      </CTA>
       

    </Container>
  )
}

export default Login
const Container=styled.div`
position:relative;
height: calc(100vh - 70px);
display:flex;
justify-content: center;
align-items: top;




&:before{
position:absolute;
content:"";
top:0;
left:0;
right:0;
bottom:0;
background-image: url("/images/login-background.jpg");
background-position: top;
background-size: cover;
background-repeat: no-repeat;
z-index: -1;
opacity:0.7;

}
`

const CTA=styled.div`
 max-width: 650px;
 
 width:90%;
 padding: 80px 40px;
 display:flex;
 flex-direction:column;
 margin-top:100px;
 align-items:center;
 
`
const CTALogoOne=styled.img`

`

const SignUp=styled.a`
width:100%;
background-color:#0063e5;
font-weight:bold;
padding:17px 0;
color:#f9f9f9;
border-radius: 4px;
text-align:center;
font-size:18px;
cursor:pointer;
transision: all 250ms;
letter-spacing:1.5px;
margin-top:8px;
margin-bottom:12px;

&:hover{
    background:#0483ee;
}
`
const Description=styled.p`
font-size:15px;
letter-spacing:1.5px;
text-align:center;
line-height:1.5;
`

const CTALogoTwo=styled.img`
width:90%;
`
