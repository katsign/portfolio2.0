import React from 'react';
import JournalImage from '../JournalImage';
import IMG1 from '../../assets/images/journal/journal1.jpg';
import IMG2 from '../../assets/images/journal/journal3.jpg';
import IMG3 from '../../assets/images/journal/journal4.jpg';
import IMG4 from '../../assets/images/journal/journal6.jpg';

const Journal = () => (
  <div className="mt-4">
    <h2>Visual Journal</h2>
    <hr></hr>
    <div className="d-flex flex-row justify-content-around">
      <JournalImage image={IMG1} /> <JournalImage image={IMG2} />
      <JournalImage image={IMG4} /> <JournalImage image={IMG3} />
    </div>
  </div>
);

export default Journal;
