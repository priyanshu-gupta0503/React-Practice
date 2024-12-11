import React from 'react'
import styled from "styled-components"

const Container=styled.div`
max-width: 1180px;
display: flex;
margin: 0  auto;
height: 100vh;
justify-content: center;
align-items: center;

.content{
    position:relative;
    h1{
        font-size: 96px;//This is called SAAS css
        white-space: nowrap;
    }
}`
const Button=styled.button`
position: absolute;
right: 0;
padding: 10px 18px;
background: #000000;
border-radius: 5px;
color: #fff;
min-width: 220px;
border: none;
font-size: 16px;
cursor: pointer;
&:hover{
    background-color: #000000da;
    
}`
function Home() {
  return (
<>
<Container>
    <div>
    <img src="/images/dices 1.png" alt="" />
    </div>
    
    <div className='content'>
        <h1>Dice Game</h1>
        <Button>Play Now</Button>

    </div>
</Container>
</>
  )
}

export default Home
