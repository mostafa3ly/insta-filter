import { FC, PropsWithChildren } from "react";
import styled from "styled-components";
import Backdrop from "./Backdrop";
import ReactPortal from "./ReactPortal";
import ReactDOM from "react-dom";
import { CANVAS_DIMENSIONS } from "../utils/constants";

interface Props extends PropsWithChildren {
  isOpen: boolean;
  onClose: ()=> void;
}

const StyledDialog = styled.div`
  width: ${CANVAS_DIMENSIONS+"px"};
  height: ${CANVAS_DIMENSIONS+42+"px"};
  margin: auto;
  border-radius: 10px;
  overflow: hidden;
  background: white;
`;

const Dialog: FC<Props> = ({ isOpen, children, onClose }) => {

    if(!isOpen) return null;

  return ReactDOM.createPortal(
    <ReactPortal wrapperId="react-portal-modal-container">
      <Backdrop onClick={onClose}>
        <StyledDialog onClick={(e)=> e.stopPropagation()}>{children}</StyledDialog>
      </Backdrop>
    </ReactPortal>,
    document.body
  );
};

export default Dialog;
