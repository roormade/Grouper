import { Button, Form, Input } from 'antd';
import AntDatePicker from '../Dates/AntDatePicker';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export default function AddEvent({ tripData, setTripData, setKey }) {
  const [form] = Form.useForm();

  function onFinish(values) {
    console.log(values);
    // setTripData((prev) => ({ ...prev, events: {}}))
  }

  return (
    <Container>
      <h1>
        {tripData.tTitle}
      </h1>
      <Form
        form={form}
        style={{
          maxWidth: 600,
          display: 'flex',
          flexDirection: 'column',
          // alignItems: 'center',
        }}
        onFinish={onFinish}
      >
        <Form.Item
          label="Event Title: "
          name="etitle"
          style={{

          }}
          rules={[
            {
              required: true,
              message: 'Please enter a title for your event!',
            },
          ]}
          >
          <Input placeholder="Vegas Trip" />
        </Form.Item>
        {/* <Form.item label="Select Dates & Times of Event" name="daterange"> */}
          <AntDatePicker setTripData={setTripData} />
        {/* </Form.item> */}
        <Button type="primary" htmlType="submit" style={{margin: 20}}>Add Event</Button>
      </Form>
    </Container>
  );
};