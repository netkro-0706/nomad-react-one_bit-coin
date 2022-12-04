import styled from "styled-components";
import { useOutletContext } from "react-router-dom";
import { PriceData } from "./Coin";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 20px;
  width: 700px;
  padding-left: 35px;
  margin: auto;
`;

const PriceBox = styled.div`
  width: 300px;
  height: 100px;
  background-color: white;
  color: black;
  border-radius: 20px;
  text-align: center;
  padding-top: 40px;
`;

// 뒤로가기 버튼 -완
// Price 리스트 출력 - 진행중
// Chart candle stick로 바꾸기

function Price() {
  const tickersData = useOutletContext<PriceData>();
  const price = tickersData.quotes.USD;
  return (
    <Container>
      <PriceBox>{price.price}</PriceBox>
      <PriceBox>{price.ath_date}</PriceBox>
      <PriceBox>{price.ath_price}</PriceBox>
      <PriceBox>{price.percent_change_15m}</PriceBox>
      <PriceBox>{price.percent_change_30m}</PriceBox>
      <PriceBox>{price.percent_change_1h}</PriceBox>
      <PriceBox>{price.percent_change_24h}</PriceBox>
      <PriceBox>{price.percent_change_7d}</PriceBox>
    </Container>
  );
}

export default Price;
