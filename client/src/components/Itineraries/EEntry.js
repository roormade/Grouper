import * as React from 'react';
// import CardHeader from '@mui/material/CardHeader';
// import CardMedia from '@mui/material/CardMedia';
import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';

const Container = styled.div`
  border: 1px solid black;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
  background-color: ${props => (props.isDragging ? '#67E8F9' : 'white')};
`

const Event = styled.div`
  border: 1px solid black;
  border-radius: 2px;
  padding: 50px;
`

export default function EEntry({ eData, index }) {
  // const [list, setList] = React.useState();

  return (
    <Draggable
        draggableId={eData.eventID}
        index={index}
        type="TASK"
    >
      {(provided, snapshot) => (
        <Container sx={{ maxWidth: 345 }}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
        >
          <div>
            {eData.eTitle}
            <Event>Event Starts: {eData.eStart}</Event>
            <Event>Event Ends: {eData.eEnd}</Event>
          </div>
        </Container>
      )}
    </Draggable>
    // <Draggable
    //     draggableId={eData.eventID}
    //     index={index}
    //     type="TASK"
    // >
    //   {(provided) => (
    //     <Card sx={{ maxWidth: 345 }}
    //       {...provided.draggableProps}
    //       {...provided.dragHandleProps}
    //       ref={provided.innerRef}
    //     >
    //       <CardActionArea>
    //         <CardContent>
    //           <Typography gutterBottom variant="h5" component="div">
    //             {eData.eTitle}
    //           </Typography>
    //           <Typography variant="body2" color="text.secondary">
    //             Event Starts: {eData.eStart}
    //           </Typography>
    //           <Typography variant="body2" color="text.secondary">
    //             Event Ends: {eData.eEnd}
    //           </Typography>
    //         </CardContent>
    //       </CardActionArea>
    //       <CardActions>
    //         <Button size="small" color="primary">
    //           Share
    //         </Button>
    //       </CardActions>
    //     </Card>
    //   )}
    // </Draggable>
  );
}
