import './Title.css'
import PropTypes from 'prop-types';

function Title({subTitle , title}) {
  return (
    <div className='title'>
      <h4>{subTitle}</h4>
      <h2>{title}</h2>
    </div>
  )
}
Title.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
  };
export default Title
