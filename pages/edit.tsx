import Head from "next/head";
import EditForm from "../components/EditForm";

export default function Edit() {
  return (
    <>
      <Head>
        <title>meta chart | 記録ページ</title>
        <meta
          name="description"
          content="体重・カロリー管理アプリの記録画面です"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <EditForm />
    </>
  );
}
