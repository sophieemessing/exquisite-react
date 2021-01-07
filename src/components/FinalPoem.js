import React from 'react';
import PropTypes from 'prop-types';
import './FinalPoem.css';


const FinalPoem = (props) => {

  const clickHandler = () => {
    props.revealPoem()
  }

  if (props.isSubmitted === true) {
    return (
      <div className="FinalPoem">
        <section className="FinalPoem__poem">
          <h3>Final Poem</h3>
          <ol>
            {props.submissions.map(submission => (
              <li key={submission}>{submission}</li>
            ))}
          </ol>
        </section>
      </div>
    )
  } else {
    return(
      <div className="FinalPoem__reveal-btn-container">
        <input type="button" 
        value="We are finished: Reveal the Poem" 
        className="FinalPoem__reveal-btn" 
        onClick={clickHandler}/>
      </div>
    )
  };
}

FinalPoem.propTypes = {
  isSubmitted: PropTypes.bool.isRequired,
  submissions: PropTypes.arrayOf(PropTypes.string).isRequired,
  revealPoem: PropTypes.func.isRequired,
};

export default FinalPoem;
