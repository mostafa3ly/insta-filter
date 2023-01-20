import { ChangeEvent, FC, useRef } from "react";
import styled from "styled-components";

interface Props {
  onSelectImage: (file: File) => void;
}

const StyledCreateButton = styled.button`
  background: transparent;
  border: 0;
  cursor: pointer;
  font-size: 16px;
  padding: 12px;
  margin: 16px;
  color: rgb(38, 38, 38);
  &:hover {
    background-color: rgb(250, 250, 250);
    border-radius: 24px;
    transition: background-color 0.3s;
    transition-duration: 0.3s;
    transition-timing-function: ease;
    transition-delay: 0s;
    transition-property: background-color;
  }
  &:active {
    color: rgb(150, 150, 150);
  }
`;

const CreateButton: FC<Props> = ({ onSelectImage }) => {
  const hiddenFileInput = useRef<HTMLInputElement>(null);

  const handleClick = (): void => {
    if (!hiddenFileInput.current) return;
    hiddenFileInput.current.click();
  };

  const handleChangeFile = (e: ChangeEvent<HTMLInputElement>): void => {
    const image = e.target.files?.[0];
    if (!image) return;
    onSelectImage(image);
  };

  return (
    <>
      <StyledCreateButton onClick={handleClick}>Create</StyledCreateButton>
      <input
        id="image-input"
        type="file"
        ref={hiddenFileInput}
        onChange={handleChangeFile}
        accept="image/png, image/jpeg"
        style={{ display: "none" }}
      />
    </>
  );
};

export default CreateButton;
