import { useState } from 'react';
import Title from '../Forms/Title/Title';
import Mapbox from '../Forms/Map/getMap';
import Events from '../Forms/Events/AddEvent';
import Itineraries from '../Itineraries/IList';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import YelpPlaces from '../Yelp/getPlaces';


function Home() {
  const [key, setKey] = useState('home');
  const [tripData, setTripData] = useState([
    {
    tID: '',
    tTitle: '',
    tStart: '',
    tEnd: '',
    eIDs: [],
    events: [{
      eventID: '',
      eTitle: '',
      eStart: '',
      eEnd: '',
    }]
    },
  ]);

  return (
    <span className="Home">
      <Tabs
        id="uncontrolled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
      >
        <Tab eventKey="home" title="Home">
          <Title setKey={setKey} setTripData={setTripData} />
        </Tab>
        <Tab eventKey="events" title="Events">
          <Events setKey={setKey} tripData={tripData} setTripData={setTripData} />
        </Tab>
        <Tab eventKey="itineraries" title="Itineraries">
          <Itineraries />
        </Tab>
        <Tab eventKey="map" title="Map">
          <Mapbox />
        </Tab>
        <Tab eventKey="places" title="Places">
          <YelpPlaces />
        </Tab>
      </Tabs>
    </span>
  );
}

export default Home;
