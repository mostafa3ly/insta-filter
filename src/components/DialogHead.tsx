import { FC } from "react";
import styled from "styled-components";

interface Props {
  title: string;
}

const StyledDialogHead = styled.div`
  height: 45px;
  display: flex;
  align-items: center;
  background: white;
  border-bottom: 1px solid rgb(219, 219, 219);
  justify-content: center;
`;

const StyledTitle = styled.h1`
  font-size: 16px;
  margin: 0;
`;

const DialogHead: FC<Props> = ({ title }) => {
  return (
    <StyledDialogHead>
      <StyledTitle>{title}</StyledTitle>
    </StyledDialogHead>
  );
};

export default DialogHead;
