import React from 'react';
import JournalImage from '../JournalImage';
import IMG1 from '../../assets/images/journal/journal1.jpg';
import IMG2 from '../../assets/images/journal/journal2.jpg';
import IMG3 from '../../assets/images/journal/journal3.jpg';
import IMG4 from '../../assets/images/journal/journal4.jpg';
import IMG5 from '../../assets/images/journal/journal5.jpg';
import IMG6 from '../../assets/images/journal/journal6.jpg';

const Journal = () => (
  <div className="mt-4" id="journo">
    <h2>Visual Journal <span style={{color: 'thistle'}}>Spring 2021</span></h2>
    <hr></hr>
    <div className="d-flex flex-row justify-content-around mb-2">
      <JournalImage image={IMG3} /> <JournalImage image={IMG1} />
      <JournalImage image={IMG5} /> <JournalImage image={IMG2} />
      <JournalImage image={IMG6} /> <JournalImage image={IMG4} />
    </div>
  </div>
);

export default Journal;
