import { FC } from "react";
import styled from "styled-components";
import FilterButton from "./FilterButton";
import FilterValuebar from "./FilterValuebar";

interface Props {
  activeFilter: string;
  value: number;
  onChangeValue: (value: number) => void;
  onSelectFilter: (filter: string) => void;
}

const StyledFilterbar = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  bottom: 65px;
`;
const StyledFilterList = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-around;
  & > button {
    margin: 8px;
  }
`;

const Filterbar: FC<Props> = ({ activeFilter, onSelectFilter, value, onChangeValue }) => {
  return (
    <StyledFilterbar>
      {activeFilter === "Blur" && <FilterValuebar value={value} onChangeValue={onChangeValue}/>}
      <StyledFilterList>
        {["None", "Vintage", "Sepia", "Blur"].map((filter) => {
          return (
            <FilterButton
              onClick={() => onSelectFilter(filter)}
              key={filter}
              active={filter === activeFilter}
            >
              {filter}
            </FilterButton>
          );
        })}
      </StyledFilterList>
    </StyledFilterbar>
  );
};

export default Filterbar;
