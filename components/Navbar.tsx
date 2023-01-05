import { Container, Button } from "react-bootstrap";
import styled from "styled-components";

const StyledNav = styled.nav`
  width: 100%;
  height: 60px;
  position: absolute;
  left: 0;
  bottom: 0;
  background-color: #f8f9fa;
`;

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
`;

const StyledButton = styled(Button)`
  height: 60px;
  width: 80px;
`;

export default function Navbar() {
  return (
    <StyledNav>
      <StyledContainer>
        <StyledButton variant="light">グラフ</StyledButton>
        <StyledButton variant="light">記録</StyledButton>
        <StyledButton variant="light">設定</StyledButton>
      </StyledContainer>
    </StyledNav>
  );
}
