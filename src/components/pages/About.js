import Image from '../../assets/images/self.jpg';
import ContactBtns from '../ContactBtns';

const About = () => (
  <div className="mt-4" id="bio">
    <div className="d-flex flex-row align-items-center justify-content-between">
      <h2>About</h2>
      <ContactBtns />
    </div>
    <hr></hr>
    <div>
      <img
        width="260"
        className="m-4 rounded float-right"
        src={Image}
        id="self"
        alt="Self portrait of Kat R. Buchanan, 27 years old, caucasian brunette."
      />
      <p className="lead mt-4">
        <span style={{ fontWeight: 400 }}>Meet</span> Kat Ruth Buchanan
        <span className="material-icons thistle">arrow_downward</span>
      </p>
      <div className="badge badge-light text-center p-2 mb-4">
        Multimedia Designer + Front-End Web Dev 🌞
      </div>
      <p>Hey! I'm Kat. A digitally-native digital creative.</p>
      <p className="text-justify">
        I'm a Kansas City based multimedia designer and front-end web developer
        specializing in UI design and simplified user experiences. I've worked
        for a decade in different fields, soaking up experiences — from stomping
        grapes during the California harvest to interviewing indie musicians
        backstage; from designing a homestyle Italian cookbook to documenting
        life in the southern Brazilian jungle. Coming from this rich and varied
        background, I'm stoked to see what I can do as a fresh eye in tech. This
        portfolio showcases my recent professional and personal work that I
        look forward to expanding with new creative opportunities. <br /><br />I'm
        really just a curious young millennial who fondly recalls the old web
        and longs for the new.
        <span style={{ fontWeight: 400 }}> So let's build it.</span>
      </p>
      <div className="row" style={{ margin: 'auto' }}>
        <div className="col d-flex align-items-center justify-content-center my-2">
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
  </div>
);

export default About;
