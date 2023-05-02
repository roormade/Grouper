

export default function getHours(times) {
  const sTime = {
    h: Number(times[0].slice(-5, -3)),
    m: Number(times[0].slice(-2)),
  };
  const eTime = {
    h: Number(times[1].slice(-5, -3)),
    m: Number(times[1].slice(-2)),
  }
  // console.log(sTime, eTime);
  const hours = {
    start: (sTime.h + (sTime.m / 60)),
    end: (eTime.h + (eTime.m / 60)),
  }
  hours.total = hours.end - hours.start;

  return hours;
}

// eStart: 'May 19 2023 19:30',
// eEnd: 'May 19 2023 22:30',

// const ex = ['May 19 2023 19:30', 'May 19 2023 22:30'];
// getHours(ex);
// console.log(getHours(ex));
