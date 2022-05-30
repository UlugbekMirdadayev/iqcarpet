import styled from "styled-components";

export const FulPage = styled.div`
width: 100%;
height: 90vh;
background: linear-gradient(180deg, #f6f9fe 76.7%, #ffffff 100%);
display: flex;
justify-content: space-between;
align-items: center;


@media (max-width: 1150px) {
  max-width: 850px;
}
@media screen and (max-width: 920px) {
  max-width: 720px;
  padding: 0 20px;
}
@media screen and (max-width: 768px) {
  max-width: 100%;
  padding: 0 10px;
}
@media screen and (max-width: 450px) {
  max-width: 100%;
  padding: 0 5px;
}
`;
export const FulPageCont = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;

`;

export const FulPageContTextButton= styled.button`
background-color: #0052b9;
color: white;
border: none;
font-weight: 700;
font-size: 16px;
line-height: 19px;
padding: 12px 55px;
border-radius: 2px;
color: #ffffff;
cursor: pointer;
display: flex;
align-items: center;
justify-content: center;
gap: 10px;
transition: all 0.2s ease-in-out;
&:hover {
    background-color: #0071ff;
    }
    &:active {
        transform: translateY(0.5px);
        }
        `;
export const FulPageContText=styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
h1{
    font-size: 60px;
    font-weight: 700;
    line-height: 1.2;
    color: #000;
}
`;    

export const FullPageImage = styled.div`
  width: 100%;
  height: 100%;
  img{
      width: 650px;
      height: auto;
  }
  `
export const Image = styled.img`
object-fit: cover;
`;