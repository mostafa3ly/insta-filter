import { FC } from "react";
import styled from "styled-components";
import Dialog from "./Dialog";
import DialogContent from "./DialogContent";
import DialogHead from "./DialogHead";

interface Props {
  image: string;
  isOpen: boolean;
  onClose: () => void;
}

const StyledImage = styled.img`
  object-fit: cover;
`;

const PreviewDialog: FC<Props> = ({ image, isOpen, onClose }) => {
  return (
    <Dialog isOpen={isOpen} onClose={onClose}>
      <DialogHead title="Create new post" />
      <DialogContent>
        <StyledImage src={image} width="100%" height="100%" />
      </DialogContent>
    </Dialog>
  );
};

export default PreviewDialog;
