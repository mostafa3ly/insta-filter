import { FC, PropsWithChildren } from "react";
import styled from "styled-components";

interface Props extends PropsWithChildren {
}

const StyledDialogContent = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
`;

const DialogContent: FC<Props> = ({ children }) => {
  return (
    <StyledDialogContent>
      {children}
    </StyledDialogContent>
  );
};

export default DialogContent;
