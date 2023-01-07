import { Container, Button } from "react-bootstrap";
import styled from "styled-components";
import { useRouter } from "next/router";

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
  const router = useRouter();
  const onclick = (path: string) => {
    router.push(path);
  };

  return (
    <StyledNav>
      <StyledContainer>
        <StyledButton variant="light" onClick={() => onclick("/")}>
          グラフ
        </StyledButton>
        <StyledButton variant="light" onClick={() => onclick("/edit")}>
          記録
        </StyledButton>
        <StyledButton variant="light" onClick={() => onclick("/setting")}>
          設定
        </StyledButton>
      </StyledContainer>
    </StyledNav>
  );
}
