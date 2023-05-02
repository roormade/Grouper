import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import yelpAPI from '../Utils/AccessToken';
import corsAnywhere from '../Utils/cors';
import getNewID from '../Utils/newid';
import { Card, Col, Row } from 'antd';
import styled from 'styled-components';
import Stars from './Stars'
import Loading from './LoadingCards';

const { Meta } = Card;

// const Address = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: space evenly;
// `
const Img = styled.img`
  aspect-ratio: 1 / 1;
`

corsAnywhere();


export default function GetPlaces() {
  const [places, setPlaces] = useState([]);
  const locationSearched = 'miami beach, fl 33141'
  // const locationSearched = 'south miami, fl'
  // const locationSearched = 'san jose, ca'

  function axGetBusi(target) {
    axios.get(`https://api.yelp.com/v3/businesses/search`, {
      headers: {
        Authorization: 'Bearer gCR0G_Tgt827us0LVi4q3EZMZRxxhwPEm9INQstIQNWtyQ-ouSGel89qGdi1f6IFke4wdS1K0y6He1KMI-c-ZXlOPsxqPgHMFhwymDiqo62CW9WFlCCI31-o091CZHYx',
        accept: 'application/json',
      },
        params: {
          term: 'restaurants',
          radius: 1500,
          location: target,
          // categories: 'sushi',
          // sort_by: 'rating',
          // sort_by: 'best_match',
          sort_by: 'review_count',
          limit: 5,
      }
      })
      .then((res) => {
      console.log(res.data);
      setPlaces(res.data.businesses);
      })
      .catch((err) => {
      console.log ('error')
      });
  }

  useEffect(() => {
    axGetBusi(locationSearched);
  }, [locationSearched]);

  return (
    <Row gutter={16}>
      {places ? places.map(p => (
        <Col span={4} key={getNewID()}>
          <Card
            hoverable
            style={{
              width: 200,
            }}
            cover={<Img alt="Business" src={p.image_url} />}
            >
            <Meta title={p.name} description={Object.values(p.location).join(' ')} />
            <Stars rating={Math.round(p.rating)} reviews={p.review_count} />
          </Card>
        </Col>
      )) : <Loading />}
    </Row>
  )
};
