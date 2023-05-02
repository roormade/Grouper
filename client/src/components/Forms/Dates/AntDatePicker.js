import { useState } from 'react';
import styled from 'styled-components';
import dayjs from 'dayjs';
import objSupp from 'dayjs/plugin/objectSupport';
import { DatePicker } from 'antd';
const { RangePicker } = DatePicker;
dayjs.extend(objSupp);

const Container = styled.div`
  display: flex;
  justify-content: center;
`

export default function AntDatePicker({ setEventData }) {
  const [dateRange, setDateRange] = useState([]);

  const onChange = (value, dateString) => {
    // console.log('Selected Time: ', value);
    // console.log('Formatted Selected Time: ', dateString);
    setDateRange([value[0].$d, value[1].$d]);
  };
  // console.log(dateRange);

  const onOk = (value, dateString) => {
    // console.log('onOk: ', value);
    if (dateString) {
      console.log('string: ', dateString);
      // setDateRange({ start: dateString[0], end: dateString[1] })
      setEventData((prev) => ({ ...prev, tStart: dateString[0], tEnd: dateString[1] }));
    }
  };

  // useEffect(() => {
  //   if (dateRange[0]) {
  //     rangePresets.forEach((pre) => pre.value[0] = )
  //   }
  // })

  const rangePresets = [
    {
      label: 'Add 3 Days',
      value: [dayjs(), dayjs().add(3, 'd')]
    },
    {
      label: 'Add 1 Week',
      value: [dayjs(), dayjs().add(1, 'w')]
    },
    {
      label: 'Add 1 Month',
      value: [dayjs(), dayjs().add(1, 'M')]
    },
  ];

  return (
    <Container>
      <RangePicker
        presets={rangePresets}
        showTime={{
          format: 'hh:mm A',
          use12Hours: true,
          minuteStep: 5,
        }}
        format="YYYY-MM-DD hh:mm A"
        size="large"
        onChange={onChange}
        onOk={onOk}
        allowClear
        use12Hours
        />
    </Container>
  )
};
