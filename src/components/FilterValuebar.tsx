import { ChangeEvent, FC } from "react";
import styled from "styled-components";

interface Props {
  value: number;
  onChangeValue: (value: number) => void;
}

const StyledFilterValuebar = styled.div`
  margin: 8px auto;
`;

const FilterValuebar: FC<Props> = ({ value, onChangeValue }) => {
  const handleChangeValue = (e: ChangeEvent<HTMLInputElement>): void => {
    const value = +e.target.value;
    onChangeValue(Math.max(0, Math.min(value, 100)));
  };

  return (
    <StyledFilterValuebar>
      <input
        type="range"
        value={value}
        onChange={handleChangeValue}
        min="0"
        max="100"
      />
    </StyledFilterValuebar>
  );
};

export default FilterValuebar;
