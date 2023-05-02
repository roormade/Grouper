import * as React from 'react';
import Stack from '@mui/material/Stack';
// import Typography from '@mui/material/Typography';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
// import { MobileDateTimePicker } from '@mui/x-date-pickers/MobileDateTimePicker';
// import { DesktopDateTimePicker } from '@mui/x-date-pickers/DesktopDateTimePicker';
import { StaticDateTimePicker } from '@mui/x-date-pickers/StaticDateTimePicker';
// import { SxProps } from '@mui/system';


function ECalendar() {
  // const [eStart, setEStart] = React.useState(null);
  const [eDate, setEDate] = React.useState({
    start: null,
    end: null,
    eStart: null,
    eEnd: null,
  });

  // React.useEffect(() => {
  //   setEDate((prev) => ({ ...prev, eStart}))
  // }, [eDate])

  function handleDateChange(name, val) {
    // console.log(currDate);
    if (name === 'start' && val) {
      const currDate = val.$d.toString().slice(4, 21);
      setEDate((prev) => ({ ...prev, eStart: currDate}))
    };
    if (name === 'end' && val) {
      const currDate = val.$d.toString().slice(4, 21)
      setEDate((prev) => ({ ...prev, eEnd: currDate}))
    };
    // console.log({ 'type: ': typeof currDate, 'date: ': currDate });
    setEDate((prev) => ({ ...prev, [name]: val }));
  }
  // console.log({ 'Start: ': eDate.eStart, 'End: ': eDate.eEnd });

  return (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack>
        <h3>
          {`Current Start Date and Time: ${eDate.eStart ? eDate.eStart : ''}`}
        </h3>
        <StaticDateTimePicker
          // defaultValue={null}
          value={eDate.start}
          onChange={(newVal) => handleDateChange('start', newVal)}
          orientation="landscape"
        />
        <h3>
          {`Current End Date and Time: ${eDate.eEnd ? eDate.eEnd : ''}`}
        </h3>
        <StaticDateTimePicker
          value={eDate.end}
          onChange={(newVal) => handleDateChange('end', newVal)}
          orientation="landscape"
        />
        {/* <DateTimePicker
              defaultValue={null}
              value={eDate.eStart}
              onChange={(newVal) => handleDateChange('eStart', newVal)}
          />
        <DateTimePicker
              defaultValue={null}
              value={eDate.eEnd}
              onChange={(newVal) => handleDateChange('eEnd', newVal)}
          /> */}
      </Stack>
  </LocalizationProvider>
  )
}

export default ECalendar;

// import { useState } from 'react';
// import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';
// import './Calendar.css';

// function ECalendar() {
//   const [date, setDate] = useState(new Date());

//   return (
//     <div className='Calendar'>
//       <h1 className='text-center'>When does your event start and end?</h1>
//       <div className='calendar-container'>
//         <Calendar
//           onChange={setDate}
//           value={date}
//           selectRange={true}
//         />
//       </div>
//       {date.length > 0 ? (
//         <p className='text-center'>
//           <span className='bold'>Start:</span>{' '}
//           {date[0].toDateString()}
//           &nbsp;|&nbsp;
//           <span className='bold'>End:</span> {date[1].toDateString()}
//         </p>
//       ) : (
//         <p className='text-center'>
//           <span className='bold'>Default selected date:</span>{' '}
//           {date.toDateString()}
//         </p>
//       )}
//     </div>
//   );
// }

// export default ECalendar;



// import React, { useState, useEffect } from "react";
// import Button from 'react-bootstrap/Button';
// import DateTimeRangePicker from "@wojtekmaj/react-datetimerange-picker";
// import 'react-calendar/dist/Calendar.css';
// import 'react-clock/dist/Clock.css';
// import '../Forms.css';

// const Calendar = ({ setEventData }) => {
//   // const [dateValue, setDateValue] = useState([new Date(), new Date()]);
//   const [value, onChange] = useState([new Date(), new Date()]);
//   // useEffect(() => {
//   //   setEventData(prev => ({ ...prev, eStart: dateValue[0], eEnd: dateValue[1] }));
//   // }, [dateValue, setEventData]);

//   const handleDateSubmit = (newDateValue) => {
//     console.log("newDateValue:", newDateValue);
//     setEventData(newDateValue);
//   }

//   return (
//     <div className="dates">
//       <DateTimeRangePicker
//           value={value}
//           onChange={onChange}
//           />
//       <Button variant="primary" size="lg" onClick={handleDateSubmit}>Add Dates</Button>
//     </div>
//   );
// };

// export default Calendar;