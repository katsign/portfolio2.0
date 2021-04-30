import React from 'react';

const Resume = () => (
  <div className="mt-4" id="reso">
    <div className="d-flex flex-row align-items-center justify-content-between">
      <h2>Resume</h2>
      <div className="btn-group btn-group-sm mr-2" role="group">
        <a
          rel="noreferrer"
          target="_blank"
          className="btn btn-primary"
          href="mailto:mailtokatsign@gmail.com?subject=Development%20Inquiry"
        >
          Email Me
        </a>
        <a
          rel="noreferrer"
          target="_blank"
          className="btn btn-primary"
          href="https://www.linkedin.com/in/katsigndev/"
        >
          LinkedIn
        </a>
        <a
          rel="noreferrer"
          target="_blank"
          className="btn btn-primary"
          href="https://github.com/katsign"
        >
          GitHub
        </a>
      </div>
      </div>
    <hr></hr>
    <table className="table table-responsive-stack mb-0">
      <thead>
        <tr>
          <th>
            <span className="material-icons thistle">east</span>
          </th>
          <th>
            <strong>Experience</strong>
          </th>
          <th>
            <strong>About</strong>
          </th>
          <th>
            <strong>Skills Learned</strong>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">
            <span className="material-icons thistle">timeline</span>
          </th>
          <td>Certificate in Full-Stack Web Development</td>
          <td>
            Currently on track to graduate from a full-stack coding bootcamp in
            May 2021. Polishing skills working with the MERN stack.
          </td>
          <td>
            <small>
              JavaScript<br></br>HTML5 + CSS3<br></br>Node + Express<br></br>
              MySQL + NoSQL<br></br>React.js
            </small>
          </td>
        </tr>
        <tr>
          <th scope="row">
            <span className="material-icons thistle">camera_alt</span>
          </th>
          <td>Multimedia Freelance</td>
          <td>
            For the past decade I've been taking freelance gigs and internships to expand and sharpen my various skillsets. I started my first marketing internship when I was 17 at BNIM, a local architecture firm. 
          </td>
          <td>
            <small>
              Photography<br></br>Adobe CC + Figma<br></br>Signage
              <br></br>Branding
            </small>
          </td>
        </tr>
        <tr>
          <th scope="row">
            <span className="material-icons thistle">wine_bar</span>
          </th>
          <td>Wine Production</td>
          <td>
            I've worked three crush seasons during the Northern California grape
            harvest, assisting as the main cellarhand to a family-owned winery,
            The Meeker Vineyard.
          </td>
          <td>
            <small>
              Resourcefulness<br></br>Commitment<br></br>Endurance
            </small>
          </td>
        </tr>
        <tr>
          <th scope="row">
            <span className="material-icons thistle">ramen_dining</span>
          </th>
          <td>High Volume Service</td>
          <td>
            I started in restaurant service when I was a teenager and continued
            to take positions up until the lockdowns of Spring 2020. My experience in the industry shaped me into the hard worker I am today.
          </td>
          <td>
            <small>
              Efficiency<br></br>Organization<br></br>Collaboration<br></br>
              Attentiveness<br></br>Multitasking
            </small>
          </td>
        </tr>
        <tr>
          <th scope="row">
            <span className="material-icons thistle">web</span>
          </th>
          <td>Web Design 1.0</td>
          <td>
            In 2014 and '15 I worked as the head designer for a self-owned
            front-end web development company (sadly, it is now defunct). We focused on branding for clients and search engine optimization.
          </td>
          <td>
            <small>
              Adobe Muse<br></br>Banner Ads<br></br>Hosting<br></br>PPC/SEO
            </small>
          </td>
        </tr>
        <tr>
          <th scope="row">
            <span className="material-icons thistle">create</span>
          </th>
          <td>Journalism</td>
          <td>
            In high school and for a year of college (The University of
            Nebraska-Lincoln), I worked in news and editorial journalism,
            winning national awards and a travel grant to São Paulo, Brazil. I interned with Hear Nebraska, a local music journalism site and shot photos for the Daily Nebraskan.
          </td>
          <td>
            <small>
              Writing + Copyediting<br></br>Layout Design<br></br>
              Photojournalism
            </small>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default Resume;
