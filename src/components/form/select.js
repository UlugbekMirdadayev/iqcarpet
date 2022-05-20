import React from "react";
import { SelectArrowIcon } from "../icon";
import {
  SelectedOption,
  SelectStyled,
  SelectWrapper,
} from "./formElement.styles";

function Select({ options = [], ...props }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selected, setSelected] = React.useState(options[0]);
  const handleClickOutside = React.useCallback(() => {
    setIsOpen(false);
  }, []);
  const handleClick = React.useCallback(() => {
    setIsOpen(true);
  }, []);
  const handleSelect = React.useCallback(
    (option) => {
      setSelected(option);
      setIsOpen(false);
    },
    [setSelected, setIsOpen]
  );
  React.useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);
  return (
    <SelectWrapper {...props} onClick={handleClick}>
      <SelectedOption>
        {selected.label}
        <SelectArrowIcon />
      </SelectedOption>
      {isOpen && (
        <SelectStyled>
          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
              onMouseDown={() => handleSelect(option)}
            >
              {option.label}
            </option>
          ))}
        </SelectStyled>
      )}
    </SelectWrapper>
  );
}

export default Select;
