import React from 'react'; 

const imgStyle = {
    width: '75px',
    height: '75px',
    padding: '10px'
}

const copyStyle = {
    padding: '10px',
    fontWeight: 'bold',
}

function Footer() {
    return(
        <div class="footer" id="footer">
            <a href="https://www.linkedin.com/in/tong-lor-360220238/"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/800px-LinkedIn_logo_initials.png" alt="LinkedIn" style={imgStyle}></img></a>
            <p style={copyStyle}>© Nou Vue 2022</p>
            <a href="https://github.com/tlor0026/Tong-Lor"><img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="Github" style={imgStyle}></img></a>
        </div>
    )
}

export default Footer;