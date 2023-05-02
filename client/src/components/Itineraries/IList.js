import { useState } from 'react';
import EList from './EList';
import getNewID from '../Utils/newid';
import ex from '../Utils/exampleData';
import TimeSlots from './TimeSlots';
import { DragDropContext } from 'react-beautiful-dnd';
import styled from "@emotion/styled";
// import YelpPlaces from '../Yelp/getPlaces';

const Container = styled.div`
  display: flex;
`

export default function IList() {
  const [list, setList] = useState(ex);

  function onDragEnd(result) {
    const { destination, source } = result;
    // console.log(result);
    // console.log({ 'destination: ': destination, 'source: ': source, 'dragID: ': draggableId })
    if (!destination) {
      return;
    }
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    // const trips = list
    let events = list[0].events;
    // console.log(events);
    let [reorderedEvent] = events.splice(result.source.index, 1);
    // console.log({'after splice1 events: ': events, 'source i: ': result.source.index, 'destination i: ': result.destination.index });
    events.splice(result.destination.index, 0, reorderedEvent);
    // console.log({ 'after splice2 events: ': events});

    // console.log(list);
    setList([{
      ...list[0],
      [list[0].events]: events,
    }]);
  }

  return (
    <Container>
      <TimeSlots />
      <DragDropContext onDragEnd={onDragEnd}>
          {list.map((trip) => (<EList key={getNewID()} tData={trip} />))}
      </DragDropContext>
    </Container>
  )
}