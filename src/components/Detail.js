import React, {useEffect} from 'react'
import styled from 'styled-components'
import {useParams} from "react-router-dom"
import {useState} from "react"
import db from "../firebase"


function Detail() {
    const {id} = useParams();
    const [movie,setMovie]= useState();
      useEffect(()=>{
       db.collection("movies")
       .doc(id)
       .get()
       .then((doc)=>{
        if(doc.exist){
            setMovie(doc.data());
        }else{

        }
       })
      }, [])

  return (
    <Container>
<Background>
  <img src={movie.backgroundImg}/>
</Background>
<ImageTitle>
  <img src={movie.titleImg}/>
</ImageTitle>
<Controls>
  <PlayButton>
    <img src="/images/play-icon-black.png"/>
    <span>PLAY</span>
  </PlayButton>
  <TrailerButton>
      <img src="/images/play-icon-white.png"/>
      <span>TRAILER</span>
  </TrailerButton>
  <AddButton>
    <span>+</span>
  </AddButton>
  <GroupWatchbutton>
  <img src="/images/group-icon.png"/>
  </GroupWatchbutton>

</Controls>
<SubTitle>
{movie.subTitle}
</SubTitle>
<Description>
{movie.description}
</Description>
    </Container>
  )
}

export default Detail
const Container=styled.div`
min-hieght:calc(100vh - 70px);
padding:0 calc(3.5vw + 5px);
position:relative;
`

const Background=styled.div`
position:fixed;
top:0;
left:0;
bottom:0;
right:0;
z-index:-1;
opacity:0.8;
img{
  width:100%;
  height:100%;
  object-fit:cover;
}

`
const ImageTitle=styled.div`
height:30vh;
min-height:170px;
width:35vw;
min-width:200px;
margin-top:60px;
img{
  width:100%;
  height:100%;
  object-fit:contain;
}
`
const Controls=styled.div`
display:flex;
align-items:center;

`
const PlayButton=styled.button`
cursor:pointer;
border-radius:4px;
font-size:15px;
display:flex;
align-items:center;
height:56px;
background:rgb(249,249,249);
border:none;
padding:0px 24px;
margin-right:22px;
letter-spacing:1.8px;

&:hover {
    background: rgb(198,198,198);
  
}
`
const TrailerButton=styled(PlayButton)`
background: rgba(0,0,0,0.3);
border:1px solid rgb(249,249,249);
color:white;
text-transform:uppercase;
`
const AddButton=styled.button`
margin-right:16px;
height:44px;
width:44px;
cursor:pointer;
align-items:center;
justify-content:center;
display:flex;
border-radius:50%;
border:2px solid white;
color:white;
background-color:rgba(0,0,0,0.6);
span{
  font-size:20px;
}

&:hover {
  background: rgb(198,198,198);
}
`
const GroupWatchbutton=styled.button`
background: rgba(0,0,0,0.3);
border:2px solid white;
border-radius:50%;
cursor:pointer;
&:hover {
  background: rgb(198,198,198);
}
`

const SubTitle=styled.div`
color:rgb(249,249,249);
font-size:15px;
min-height:20px;
margin-top:26px;

`

const Description=styled.div`
line-height:1.4;
font-size:20px;
max-width:760px;
margin-top:16px;
color:rgb(249,249,249);
`