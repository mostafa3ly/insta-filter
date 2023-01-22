import { ChangeEvent, FC } from "react";
import styled from "styled-components";

interface Props {
  title: string;
  onDownload: () => void;
  onChangeImageType: (e: ChangeEvent<HTMLSelectElement>) => void;
}

const StyledDialogHead = styled.div`
  height: 42px;
  display: flex;
  align-items: center;
  background: white;
  border-bottom: 1px solid rgb(219, 219, 219);
  justify-content: center;
  padding: 0 8px;
  position: relative;
`;

const StyledTitle = styled.h1`
  font-size: 16px;
  margin: 0;
  flex-grow: 1;
  text-align: center;
`;

const StyledButton = styled.button`
  border: 0;
  background: transparent;
  color: rgb(0, 149, 246);
  font-weight: bold;
  &:hover {
    color: black;
  }
`;

const StyledSelect = styled.select`
  background: transparent;
  font-weight: bold;
  border-radius: 8px;
  padding: 4px 8px;
  border-color: rgba(0,0,0, 0.2);
`;

const DialogHead: FC<Props> = ({ title, onDownload, onChangeImageType }) => {
  return (
    <StyledDialogHead>
      <StyledSelect onChange={onChangeImageType}>
        <option value="jpeg">JPEG</option>
        <option value="png">PNG</option>
      </StyledSelect>
      <StyledTitle>{title}</StyledTitle>
      <StyledButton onClick={onDownload}>Download</StyledButton>
    </StyledDialogHead>
  );
};

export default DialogHead;
