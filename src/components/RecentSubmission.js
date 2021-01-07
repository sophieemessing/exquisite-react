import React from 'react';
import PropTypes from 'prop-types';
import './RecentSubmission.css';

const RecentSubmission = (props) => {

  if(props.submission) {
    return(
      <div className="RecentSubmission">
        <h3>The Most Recent Submission</h3>
        <p className="RecentSubmission__submission">{ props.submission }</p>
      </div>
    )
  } else {
    return (<h3>Greetings.</h3>)
  }
}

RecentSubmission.propTypes = {
  submission: PropTypes.string.isRequired,
};

export default RecentSubmission;
