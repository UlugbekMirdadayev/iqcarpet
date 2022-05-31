import styled from "styled-components";

export const PrimaryButtonStyled = styled.button`
   background-color: #0052b9;
   color: white;
   border: none;
   font-weight: 700;
   font-size: 14px;
   line-height: 19px;
   padding: 10px 15px;
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
