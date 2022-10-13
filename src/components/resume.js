import React from 'react';

const linkStyle = {
  color: 'white',
  padding: '20px'
}

const padding = {
  padding: '10px'
}

const titleStyle = {
  backgroundColor: 'grey',
  padding: '20px'
}

function Resume() {
  return (
    <section class="mb-4" style={padding}>
      {/* <h1 className="resume" style={titleStyle}>RESUME</h1> */}

      <h2 className="skills" style={titleStyle}>FRONT END SKILLS</h2>

      <p>HTML</p>
      <p>CSS</p>
      <p>jQuery</p>
      <p>IndexedDB</p>

      <h2 className="skills" style={titleStyle}>BACK END SKILLS</h2>

      <p>Express.js</p>
      <p>SQL (mySQL, sequelize)</p>
      <p>noSQL (mongoDB, mongoose)</p>
      <p>APIs (RESTful, server-side, third-party)</p>

      <button type="button" class="btn btn-dark"><a href="https://docs.google.com/document/d/0B_KPR1M86f-gajJ1WGV5Y2ZYakpnZC1XZHJyVzFwNlMtNFNV/edit?resourcekey=0-DZ-GmcLnOYbopvSUt7rfDw" style={linkStyle}>View Full Resume</a></button>


    </section>
  )
}

export default Resume;