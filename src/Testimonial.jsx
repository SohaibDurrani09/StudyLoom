import { useRef } from 'react'
import './Testimonial.css'
import next from './assets/next-icon.png'
import back from './assets/back-icon.png'
import user1 from './assets/user-1.jpeg'
import user2 from './assets/user-2.png'
import user3 from './assets/user-3.png'
import user4 from './assets/user-4.png'

function Testimonial() {
    const slider = useRef();
    let tx = 0 ;

    const slideForward = () =>{
        if (tx > -50){
            tx-=25;
            
        }
        slider.current.style.transform =`translateX(${tx}%)`;
    }
    const slideBackward = () =>{
        if (tx < 0){
            tx+=25;
            
        }
        slider.current.style.transform =`translateX(${tx}%)`;
    }
  return (
    <div className="testimonials">
    
    
    <div className='testimonial'>
        <img src={next} alt="icon" className='next-btn' onClick={slideForward}/>
        <img src={back} alt="icon" className='back-btn' onClick={slideBackward}/>
        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className="slide">
                    <div className="user-info">
                        <img src={user1} alt="user" />
                        <div>
                            <h3>M Sohaib</h3>
                            <span>StudyLoom UK</span>
                        </div>
                    </div>
                    <p>Choosing to pursue my degree at Edusity was one of the best decisions I have ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                    </div>    
                </li>    
                <li>
                    <div className="slide">
                    <div className="user-info">
                        <img src={user2} alt="user" />
                        <div>
                            <h3>Emily Williams</h3>
                            <span>StudyLoom UK</span>
                        </div>
                    </div>
                    <p>Choosing to pursue my degree at Edusity was one of the best decisions I have ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                    </div>    
                </li>    
                <li>
                    <div className="slide">
                    <div className="user-info">
                        <img src={user3} alt="user" />
                        <div>
                            <h3>Emily Williams</h3>
                            <span>StudyLoom UK</span>
                        </div>
                    </div>
                    <p>Choosing to pursue my degree at Edusity was one of the best decisions I have ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                    </div>    
                </li>    
                <li>
                    <div className="slide">
                    <div className="user-info">
                        <img src={user4} alt="user" />
                        <div>
                            <h3>William Jackson</h3>
                            <span>StudyLoom UK</span>
                        </div>
                    </div>
                    <p>Choosing to pursue my degree at Edusity was one of the best decisions I have ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                    </div>    
                </li>    
            </ul>
        </div>
    </div>
    </div>
  )
}

export default Testimonial
