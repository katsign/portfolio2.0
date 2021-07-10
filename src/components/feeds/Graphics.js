import Graphic from '../Graphic';
import Image from '../GalleryImage';
import T1 from '../../assets/images/graphics/d_type1.JPG';
import T2 from '../../assets/images/graphics/d_type2.JPG';
import T3 from '../../assets/images/graphics/d_type3.JPG';
import L1 from '../../assets/images/graphics/d_logo1.png';
import L2 from '../../assets/images/graphics/d_logo2.png';
import L3 from '../../assets/images/graphics/d_logo3.png';
import L4 from '../../assets/images/graphics/d_logo4.png';
import G1 from '../../assets/images/graphics/d_graphic1.png';
import G2 from '../../assets/images/graphics/d_graphic2.png';
import G3 from '../../assets/images/graphics/d_graphic3.png';
import G4 from '../../assets/images/graphics/d_graphic4.png';
import G5 from '../../assets/images/graphics/d_graphic5.jpg';
import G6 from '../../assets/images/graphics/d_graphic6.jpg';
import G7 from '../../assets/images/graphics/d_graphic7.png';
import G8 from '../../assets/images/graphics/d_graphic8.png';
import G9 from '../../assets/images/graphics/d_graphic9.png';
import G10 from '../../assets/images/graphics/d_graphic10.png';
import G11 from '../../assets/images/graphics/d_graphic11.png';
import G12 from '../../assets/images/graphics/d_graphic12.png';

const Graphics = () => {
  return (
    <div>
      <section id="type">
        <h4>
          Hand-Drawn Typography{' '}
          <span style={{ color: 'plum' }}>Adobe Illustrator</span>
        </h4>
        <hr />
        <div className="d-flex flex-row justify-content-around mb-2">
          <Graphic image={T1} /> <Graphic image={T2} /> <Graphic image={T3} />
        </div>
      </section>
      <section id="graphics">
        <hr />
        <h4>
          Graphic Work{' '}
          <span style={{ color: 'plum' }}>Figma + Adobe Illustrator</span>
        </h4>
        <hr />
        <div className="d-flex flex-row justify-content-around mb-2">
          <Image image={G1} /> <Image image={G2} />
          <Image image={G6} /> <Image image={G12} />
          <Image image={G3} /> <Image image={G4} />
          <Image image={G11} /> <Image image={G8} />
          <Image image={G9} /> <Image image={G10} />
          <Image image={G7} /> <Image image={G5} />
        </div>
      </section>
      <section id="logo">
        <hr />
        <h4>
          Logos <span style={{ color: 'plum' }}>Adobe Illustrator</span>
        </h4>
        <hr />
        <div className="d-flex flex-row justify-content-around mb-2">
          <Image image={L1} /> <Image image={L2} />
          <Image image={L3} /> <Image image={L4} />
        </div>
      </section>
    </div>
  );
};

export default Graphics;
