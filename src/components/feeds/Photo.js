import Image from '../GalleryImage';
import BL1 from '../../assets/images/photo/BL_1.jpg';
import BL2 from '../../assets/images/photo/BL_2.jpg';
import BL3 from '../../assets/images/photo/BL_3.jpg';
import BL4 from '../../assets/images/photo/BL_4.jpg';
import BL5 from '../../assets/images/photo/BL_5.jpg';
import BL6 from '../../assets/images/photo/BL_6.jpg';
import BL7 from '../../assets/images/photo/BL_7.jpg';
import BL9 from '../../assets/images/photo/BL_9.jpg';
import G1 from '../../assets/images/photo/model_4.jpg';
import G2 from '../../assets/images/photo/model_6.jpg';
import G3 from '../../assets/images/photo/model_7.jpg';
import G4 from '../../assets/images/photo/model_8.jpg';
import FM1 from '../../assets/images/photo/fm_7.jpg';
import FM3 from '../../assets/images/photo/fm_6.jpg';
import FM4 from '../../assets/images/photo/fm_8.jpg';
import FM5 from '../../assets/images/photo/fm_3.jpg';
import FM6 from '../../assets/images/photo/fm_9.jpg';
import FM8 from '../../assets/images/photo/fm_10.jpg';
import W1 from '../../assets/images/photo/wedding_1.jpg';
import W2 from '../../assets/images/photo/wedding_2.jpg';
import W3 from '../../assets/images/photo/wedding_3.jpg';
import W4 from '../../assets/images/photo/wedding_4.jpg';
import M1 from '../../assets/images/photo/music_1.jpg';
import M2 from '../../assets/images/photo/music_3.jpg';
import M3 from '../../assets/images/photo/music_2.jpeg';
import M4 from '../../assets/images/photo/music_13.jpg';
import M5 from '../../assets/images/photo/music_15.jpg';
import M6 from '../../assets/images/photo/music_12.jpg';
import M7 from '../../assets/images/photo/music_6.jpg';
import M8 from '../../assets/images/photo/music_9.jpg';
import MD1 from '../../assets/images/photo/mood_1.jpg';
import MD2 from '../../assets/images/photo/mood_5.jpg';
import MD3 from '../../assets/images/photo/mood_4.jpg';
import MD4 from '../../assets/images/photo/mood_3.jpg';
import KC1 from '../../assets/images/photo/kcmo_1.jpg';
import KC2 from '../../assets/images/photo/kcmo_2.jpg';

const Photo = () => {
  return (
    <div>
      <section id="betterlife">
        <h4>
          A Better Life{' '}
          <span style={{ color: 'plum' }}>São Paulo, Brazil</span>
        </h4>
        <hr />
        <div className="d-flex flex-row justify-content-around mb-2">
          <Image image={BL1} /> <Image image={BL2} />
          <Image image={BL3} /> <Image image={BL4} />
          <Image image={BL5} /> <Image image={BL6} />
          <Image image={BL7} /> <Image image={BL9} />
        </div>
      </section>
      <section id="goldie">
        <hr />
        <h4>
          Goldie <span style={{ color: 'plum' }}>Nashville, TN</span>
        </h4>
        <hr />
        <div className="d-flex flex-row justify-content-around mb-2">
          <Image image={G1} /> <Image image={G2} />
          <Image image={G3} /> <Image image={G4} />
        </div>
      </section>
      <section id="fm">
        <hr />
        <h4>
          Flower Mart Greenhouse{' '}
          <span style={{ color: 'plum' }}>Nashville, TN</span>
        </h4>
        <hr />
        <div className="d-flex flex-row justify-content-around mb-2">
          <Image image={FM1} /> <Image image={FM5} />
          <Image image={FM6} /> <Image image={FM3} />
          <Image image={FM4} /> <Image image={FM8} />
        </div>
      </section>
      <section id="wedding">
        <hr />
        <h4>
          Zane + Rae <span style={{ color: 'plum' }}>Eudora, KS</span>
        </h4>
        <hr />
        <div className="d-flex flex-row justify-content-around mb-2">
          <Image image={W1} /> <Image image={W2} />
          <Image image={W3} /> <Image image={W4} />
        </div>
      </section>
      <section id="music">
        <hr />
        <h4>
          Live Music{' '}
          <span style={{ color: 'plum' }}>Omaha, NE + Lawrence, KS</span>
        </h4>
        <hr />
        <div className="d-flex flex-row justify-content-around mb-2">
          <Image image={M1} /> <Image image={M2} />
          <Image image={M4} /> <Image image={M3} />
          <Image image={M5} /> <Image image={M8} />
          <Image image={M7} /> <Image image={M6} />
        </div>
      </section>
      <section id="kc">
        <hr />
        <h4>
          Local{' '}
          <span style={{ color: 'plum' }}>Kansas City, MO</span>
        </h4>
        <hr />
        <div className="d-flex flex-row justify-content-around mb-2">
          <Image image={KC1} /> <Image image={KC2} />
        </div>
      </section>
      <section id="misc">
        <hr />
        <h4>
          Moments{' '}
          <span style={{ color: 'plum' }}>Assorted</span>
        </h4>
        <hr />
        <div className="d-flex flex-row justify-content-around mb-2">
          <Image image={MD1} /> <Image image={MD2} />
          <Image image={MD3} /> <Image image={MD4} />
        </div>
      </section>
    </div>
  );
};

export default Photo;
