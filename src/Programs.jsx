import './Programs.css'
import program1 from './assets/program-1.png';
import program2 from './assets/program-2.avif';
import program3 from './assets/program-3.png';
import program4 from './assets/program-icon-1.png';
import program5 from './assets/program-icon-2.png';
import program6 from './assets/program-icon-3.png';

function Programs() {
  return (
    <div className='programs'>
      <div className="program">
        <img src={program1} alt="program-img" />  
        <div className="caption">
            <img src={program4}  alt="" />
            <p>Graduation Degree</p>
        </div>
      </div>
      <div className="program">
        <img src={program2}  alt="program-img" />  
        <div className="caption">
            <img src={program5}  alt="" />
            <p>Masters Degree</p>
        </div>
      </div>
      <div className="program">
        <img src={program3}  alt="program-img" />  
        <div className="caption">
            <img src={program6}  alt="" />
            <p>Post Graduation</p>
        </div>
      </div>
    </div>
  )
}

export default Programs
