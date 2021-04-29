import React from 'react';
import Image from '../../assets/images/self.jpg';

const About = () => (
  <div className="mt-4">
    <h2>About</h2>
    <hr></hr>
    <div className="my-2" id="bioWrapper">
      <img
        width="260"
        className="float-right m-4 rounded"
        src={Image}
        alt="Self portrait of Kat R. Buchanan, 27 years old, caucasian brunette."
      />
      <p className="lead mt-4">
        <span style={{ fontWeight: 400 }}>Meet</span> Kat Ruth Buchanan
        <span className="material-icons thistle">arrow_downward</span>
      </p>
      <div className="badge badge-light p-2 mb-4">
        Full-Stack Web Developer, emphasis on UI Design 🌞
      </div>
      <p>Hey, I'm Kat. A digitally-native digital creative.</p>
      <p className="text-justify">
        I'm a full-stack web developer with an emphasis on design, front-end UIs
        and simplified user experiences. I've worked for a decade in different
        fields, soaking up experiences — from stomping grapes during the
        California harvest to interviewing indie musicians backstage; from
        designing a homestyle Italian cookbook to documenting life in the
        southern Brazilian jungle. I got my start in journalism and taught
        myself the real elements of style from there. Coming from this rich and
        varied background, I'm stoked to see what I can do as a fresh eye in
        tech. I'm really just a curious young millennial who fondly recalls the
        old web and fiendishly longs for the new.
        <span style={{ fontWeight: 400 }}> So let's build it.</span>
      </p>
    </div>
    <div className="row">
      <div className="col d-flex align-items-center justify-content-center">
        <div className="badge badge-light p-2">HTML5 + CSS3</div>
        <div className="badge badge-light p-2">SCSS</div>
        <div className="badge badge-light p-2">Figma + Adobe CC</div>
        <div className="badge badge-light p-2">JavaScript</div>
        <div className="badge badge-light p-2">Node + Express</div>
        <div className="badge badge-light p-2">MySQL + NoSQL</div>
        <div className="badge badge-light p-2">React.js</div>
      </div>
    </div>
  </div>
);

export default About;
