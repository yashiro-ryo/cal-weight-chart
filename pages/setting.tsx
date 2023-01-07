import styled from "styled-components";
import { Card, Container } from "react-bootstrap";

const StyledContainer = styled(Container)`
  margin-top: 30px;
`;

export default function Setting() {
  return (
    <StyledContainer>
      <Card>
        <Card.Header>設定ページ</Card.Header>
        <Card.Body>設定できる項目がありません</Card.Body>
      </Card>
    </StyledContainer>
  );
}
