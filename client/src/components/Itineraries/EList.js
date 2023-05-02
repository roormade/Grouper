import EEntry from './EEntry';
import styled from 'styled-components';
import { Droppable } from 'react-beautiful-dnd';
import getNewID from '../Utils/newid';
// import * as Droppable from '../Utils/Droppable';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
  border: 1px solid black;
  border-radius: 4px;
`
const Title = styled.h3`
  padding: 10px;
`

const EventsList = styled.div`
  padding: 8px;
  background-color: ${props => (props.isDraggingOver ? '#4ADE80' : 'white')}
`

export default function EList({ tData }) {
  function listEvents() {
    // const eventsArr = Object.values(tData.events);
    return tData.events.map((ev, index) => <EEntry key={getNewID()} eData={ev} index={index} />)
  }
  return (
    <Container>
      <Title>{tData.tTitle}</Title>
      <Droppable
        droppableId={tData.tripID}
        index={tData.index}
        >
        {(provided, snapshot) => (
          <EventsList
          ref={provided.innerRef}
          isDraggingOver={snapshot.isDraggingOver}
          {...provided.droppableProps}
          // style={}
          >
              {listEvents()}
              {provided.placeholder}
          </EventsList>
        )}
      </Droppable>
    </Container>
  )
}
