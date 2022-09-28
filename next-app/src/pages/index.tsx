import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next app</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="p-4">
          <h1 className="font-bold text-2xl text-blue-700">Hello NextJS</h1>
          <p>Test</p>
        </div>
      </main>
    </div>
  );
}
