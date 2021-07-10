import { Tabs, Tab } from 'react-bootstrap';
import WebDev from '../feeds/WebDev';
import Photo from '../feeds/Photo';

const Projects = () => (
  <div className="mt-4" id="proj">
    <h2>Featured Projects</h2>
    <hr />
    <div className="d-flex flex-row">
      <Tabs defaultActiveKey="webdev" variant="pills" id="projectFeeds">
        <Tab eventKey="webdev" title="Web Development">
          <hr />
          <WebDev />
        </Tab>
        <Tab eventKey="graphics" title="Graphic Design">
          <hr />
        </Tab>
        <Tab eventKey="photo" title="Photography">
          <hr />
          <Photo />
        </Tab>
        <Tab eventKey="published" title="Published">
          <hr />
        </Tab>
      </Tabs>
    </div>
  </div>
);

export default Projects;
