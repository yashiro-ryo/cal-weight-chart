import Head from "next/head";
import Chart from "../components/Chart";

export default function Home() {
  return (
    <>
      <Head>
        <title>meta chart | グラフ</title>
        <meta
          name="description"
          content="体重・カロリー管理アプリのグラフページです"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Chart />
      </main>
    </>
  );
}
