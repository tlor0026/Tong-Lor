import React from 'react';
import photo from '../../src/images/Tong.jpg'

const imgStyle = {
    padding: '20px'
}

const linkStyle = {
    color: 'white'
}

function About() {
    return(
        <div class="jumbotron">
  <h1 class="display-4">About Me</h1>
  <img class="headshot" src= {photo} width="420px" height="800px" alt="headshot" style={imgStyle}></img>
  <p class="lead">Welcome to my portfolio. I've been in the IT field for about 7 years now and decided to transition into software development/programing. Life is all about learning and being dedicated to building yourself up to new and better things. I've just completed my Coding boot camp with the University of Minnesota that went through a full stack course. This includes front and back end components, the user of server and 3rd party API's, React, Javascript, databases along with many other things. Im looking forward in life to more things to come!</p>
  <hr class="my-4"></hr>
  <p></p>
  <p class="lead">
  <button type="button" class="btn btn-dark"><a href="https://docs.google.com/document/d/0B_KPR1M86f-gajJ1WGV5Y2ZYakpnZC1XZHJyVzFwNlMtNFNV/edit?resourcekey=0-DZ-GmcLnOYbopvSUt7rfDw" style={linkStyle}>View Full Resume</a></button>
  </p>
</div>
    )
}

export default About;



