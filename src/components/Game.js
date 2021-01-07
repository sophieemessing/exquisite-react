import React, { useState } from 'react';
import './Game.css';
import PlayerSubmissionForm from './PlayerSubmissionForm';
import FinalPoem from './FinalPoem';
import RecentSubmission from './RecentSubmission';

const Game = () => {
  const exampleFormat = FIELDS.map((field) => {
    if (field.key) {
      return field.placeholder;
    } else {
      return field;
    }
  }).join(' ');


  // Wave 1 - Handle Submissions
  const [submissions, setSubmissions] = useState([])

  const [isSubmitted, setSubmittedStatus] = useState(false)
  
  const sendSubmission = (formFields) => {

    const submission = formFields.map(field => {
      if (field.key) {
        return field.userInput;
      } else {
        return field;
      }
    }).join(' ');

    setSubmissions([...submissions, submission])
  }
  
  // Wave 2 - Final Poem
  const revealPoem = () => {    
    setSubmittedStatus(true)
  }
  

  if (!isSubmitted) {
  return (
    <div className="Game">
      <h2>Game</h2>

      <p>Each player should take turns filling out and submitting the form below. Each turn should be done individually and <em>in secret!</em> Take inspiration from the revealed recent submission. When all players are finished, click the final button on the bottom to reveal the entire poem.</p>

      <p>Please follow the following format for your poetry submission:</p>

      <p className="Game__format-example">
        { exampleFormat }
      </p>

      <RecentSubmission submission={submissions[submissions.length - 1] || ''}/>

      <PlayerSubmissionForm index={submissions.length+1} fields={FIELDS} sendSubmission={sendSubmission}/>

      <FinalPoem isSubmitted={isSubmitted} submissions={submissions} revealPoem={revealPoem} />  

    </div>
  );
  } else {
    return (
      <FinalPoem isSubmitted={isSubmitted} submissions={submissions} revealPoem={revealPoem} />  
    )
  }
}


const FIELDS = [
  'The',
  {
    key: 'adj1',
    placeholder: 'adjective1',
  },
  {
    key: 'noun1',
    placeholder: 'noun1',
  },
  {
    key: 'adverb1',
    placeholder: 'adverb1',
  },
  {
    key: 'verb1',
    placeholder: 'verb1',
  },
  'the',
  {
    key: 'adj2',
    placeholder: 'adjective2',
  },
  {
    key: 'noun2',
    placeholder: 'noun2',
  },
  '.',
];

export default Game;
