import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './PlayerSubmissionForm.css';
import _ from 'lodash';

const PlayerSubmissionForm = (props) => {
  
  const newFields = props.fields.map((field) => {
    if (field.key) {
      return {...field, userInput: ''}
    } else {
      return field
    }
  })

  const [formFields, setFormFields] = useState(newFields)

  const resetFields = () => {
    setFormFields(newFields)
  }

  const onFieldChange = (i, event) => {
    const newFormData = _.cloneDeep(formFields) // make a deep copy
    newFormData[i] = {...newFormData[i], userInput: event.target.value};
    setFormFields(newFormData)
  }

  const generateFormFields = formFields.map((field, i) => {
    if(field.key) {
      return(
        <input
          key={i}
          name={field.key}
          placeholder={field.placeholder}
          value={field.userInput}
          onChange={(event)=>{onFieldChange(i, event)}}        
          type="text" 
        />
      )
    } else {
      return (field)
    }
  })

  const submitHandler = (event) => {
    event.preventDefault()
    props.sendSubmission(formFields)
    resetFields()
  }

  return (
    <div className="PlayerSubmissionForm">
      <h3>Player Submission Form for Player #{ props.index }</h3>

      <form className="PlayerSubmissionForm__form" onSubmit={submitHandler}>

        <div className="PlayerSubmissionForm__poem-inputs">

          {generateFormFields}

        </div>

        <div className="PlayerSubmissionForm__submit">
          <input type="submit" value="Submit Line" className="PlayerSubmissionForm__submit-btn"/>
        </div>
      </form>
    </div>
  );
}

PlayerSubmissionForm.propTypes = {
  index: PropTypes.number.isRequired,
  sendSubmission: PropTypes.func.isRequired,
  fields: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      placeholder: PropTypes.string.isRequired,
    }),
  ])).isRequired,
}

export default PlayerSubmissionForm;
