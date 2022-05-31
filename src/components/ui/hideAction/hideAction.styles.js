import styled from "styled-components";

export const HideActionStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin: 10px 0;
`;
export const HideActionText = styled.h3`
  font-size: 14px;
  @media screen and (max-width: 450px) {
    font-size: 18px;
  }
`;
export const HideActionButton = styled.button`
  color: #0052b9;
  text-decoration: underline;
  cursor: pointer;
  font-size: 14px;
  border: 0;
  background: transparent;
  @media screen and (max-width: 450px) {
    font-size: 18px;
  }
`;
