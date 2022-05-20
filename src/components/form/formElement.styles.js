import styled from "styled-components";

export const SelectWrapper = styled.div`
  position: relative;
  min-width: 70px;
  z-index: 22;
`;

export const SelectedOption = styled.div`
  color: #fff;
  font-weight: 400;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  gap: 10px;
  width: max-content;
  user-select: none;
`;
export const SelectStyled = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  background: none;
  border: none;
  appearance: none;
  position: absolute;
  background: #000;
  user-select: none;

  option {
    color: #fff;
    font-weight: 400;
    font-size: 14px;
    position: relative;
    padding: 5px;
    user-select: none;

    &:hover {
      background-color: #fff;
      color: #000;
    }
  }
`;
