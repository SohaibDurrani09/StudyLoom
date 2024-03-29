import './Gallery.css'

import gallery1 from './assets/gallery-1.png'
import gallery2 from './assets/gallery-2.png'
import gallery3 from './assets/gallery-3.png'
import gallery4 from './assets/gallery-4.png'
import whitearrow from './assets/white-arrow.png';

function Gallery() {
  return (
    <div className='gallery'>
        <div className="imgs">
            <img src={gallery1} alt="gallery-1" />
            <img src={gallery2} alt="gallery-2" />
            <img src={gallery3} alt="gallery-3" />
            <img src={gallery4} alt="gallery-4" />
        </div>
        <button className='button dark-btn'>See more here <img src={whitearrow} alt="more" /></button>
    </div>
  )
}

export default Gallery
