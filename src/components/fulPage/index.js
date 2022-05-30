import React from "react";
import { Container } from "../../assets/styles/global.styles";
import { FulPage,Image,FullPageImage, FulPageCont,FulPageContText,FulPageContTextButton } from "./fulPage.style";

export default function FullPage() {
  return (
    <FulPage>
      <Container>
      {/* {data.map((item, index) => {
            return (   );
        })} */}
        <FulPageCont>
          <FulPageContText>
            <h1>Маркетплейс ковров 
ручной работы</h1>
            <p>напрямую от производителя</p>
            <FulPageContTextButton>Выбрать ковер</FulPageContTextButton>
          </FulPageContText>
          <FullPageImage>
              <Image   style={{ transform: " matrix(-1, 0, 0, 1, 0, 0)" }} src="../../static/img/fullPageImg.svg" alt='...' />
              
          </FullPageImage>
        </FulPageCont>
      </Container>
    </FulPage>
  );
}
