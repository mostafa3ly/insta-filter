import { FC, PropsWithChildren } from "react";
import styled from "styled-components";

interface Props extends PropsWithChildren {
  onClick?: () => void;
}

const StyledBackdrop = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  z-index: 100;
  position: absolute;
  background: rgba(0, 0, 0, 0.6);
  left: 0;
  top: 0;
`;

const Backdrop: FC<Props> = ({ onClick = () => {}, children }) => {
  return <StyledBackdrop onClick={onClick}>{children}</StyledBackdrop>;
};

export default Backdrop;
