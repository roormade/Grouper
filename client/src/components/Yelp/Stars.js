import S0 from '../Utils/stars/large_0.png';
import S1 from '../Utils/stars/large_1.png';
import S2 from '../Utils/stars/large_2.png';
import S3 from '../Utils/stars/large_3.png';
import S4 from '../Utils/stars/large_4.png';
import S5 from '../Utils/stars/large_5.png';
import styled from 'styled-components';

const Img = styled.img`
  margin-top: 20px;
`
const Reviews = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  font-weight: 100;
`

export default function Stars({ rating, reviews }) {
  const starImg = rating === 0 ? S0
    : rating === 1 ? S1
    : rating === 2 ? S2
    : rating === 3 ? S3
    : rating === 4 ? S4
    : S5;

  return (
    <Reviews>
      <Img src={starImg} alt="Stars" />
      <div>{reviews}</div>
    </Reviews>
  )
}