import { useState } from 'react';
import { Button, Form, Input } from 'antd';
import AntDatePicker from '../Dates/AntDatePicker';
import styled from 'styled-components';
import getNewID from '../../Utils/newid';

const Trip = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: xx-large;
  text-transform: uppercase;
  word-spacing: 6px;
  margin: 30px;
  gap: 30px;
`

function Title({ setKey, setTripData }) {
  const [eventTitle, setEventTitle] = useState('');

  function handleTitleClick(e) {
    e.preventDefault();
    if (eventTitle) {
      setTripData({ tID: getNewID(), tTitle: eventTitle });
      setKey('events');
    }
  }
  return (
    <div>
      <Trip>
        <label className="title" htmlFor="eventTitle">Enter a title for your trip</label>
        <input className="title" type="text" name="eventTitle" value={eventTitle} onChange={e => setEventTitle(e.target.value)} required></input>
        <AntDatePicker setTripData={setTripData} />
        <Button type="primary" size="large" shape="round" onClick={handleTitleClick} style={{ marginTop: "20px", width: 150, height: 60, fontSize: "x-large" }}>Add Trip</Button>
      </Trip>
    </div>
  )
}

export default Title;
