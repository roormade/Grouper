import React, { useState } from 'react';
import Title from './Title/Title';
import Calendar from './Dates/Calendar';
import './Forms.css';


function InitialForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <div>
      {!isSubmitted ? <Title setIsSubmitted={setIsSubmitted} /> : <Calendar />}
    </div>
  );
}

export default InitialForm;
