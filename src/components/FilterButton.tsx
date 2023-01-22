import { FC, PropsWithChildren } from "react";
import styled from "styled-components";

interface Props extends PropsWithChildren {
  active?: boolean;
  onClick: () => void;
}

const StyledFilterButton = styled.button<{ active: boolean }>`
  background: ${(props) =>
    props.active ? "rgba(255, 255, 255, 0.8)" : "rgba(0, 0, 0, 0.5)"};
  border: 0;
  color: ${(props) => (props.active ? "black" : "white")};
  font-size: 12px;
  padding: 8px;
  border-radius: 8px;
  min-width: 70px;
  text-align: center;
  cursor: pointer;
  font-weight: bold;
`;
const FilterButton: FC<Props> = ({ children, active = false, onClick }) => {
  return (
    <StyledFilterButton active={active} onClick={onClick}>
      {children}
    </StyledFilterButton>
  );
};

export default FilterButton;
