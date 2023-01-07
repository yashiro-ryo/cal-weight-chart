import { Container, Card, Form, Button } from "react-bootstrap";
import styled from "styled-components";
import DatePicker from "./DatePicker";

const StyledCard = styled(Card)`
  margin-top: 30px;
`;

export default function EditForm() {
  return (
    <Container>
      <StyledCard>
        <Card.Header>記録</Card.Header>
        <Card.Body>
          <DatePicker />
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>体重(Kg)</Form.Label>
              <Form.Control type="number" placeholder="未入力" />
              <Form.Label>運動内容</Form.Label>
              <Form.Control type="text" placeholder="未入力" />
              <Form.Label>消費カロリー(cal)</Form.Label>
              <Form.Control type="number" placeholder="未入力" />
            </Form.Group>
            <Button variant="primary" type="submit">
              登録する
            </Button>
          </Form>
        </Card.Body>
      </StyledCard>
    </Container>
  );
}
