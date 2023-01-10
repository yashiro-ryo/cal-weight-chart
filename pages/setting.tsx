import Head from "next/head";
import styled from "styled-components";
import { Card, Container } from "react-bootstrap";

const StyledContainer = styled(Container)`
  margin-top: 30px;
`;

export default function Setting() {
  return (
    <>
      <Head>
        <title>meta chart | 設定</title>
        <meta
          name="description"
          content="体重・カロリー管理アプリの設定ページです"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <StyledContainer>
        <Card>
          <Card.Header>設定ページ</Card.Header>
          <Card.Body>設定できる項目がありません</Card.Body>
        </Card>
      </StyledContainer>
    </>
  );
}
