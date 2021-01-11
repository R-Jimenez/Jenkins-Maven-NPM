import Head from 'next/head'
import { v4 as uuidv4 } from 'uuid';

export function buildHash() {
  const time = new Date();
  const uuid = uuidv4();
  return [uuid, time];
}

export default function Home() {
  const hash = buildHash();
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          Welcome to the Jenkins Test!
        </h1>

        <p>ID: {hash[0]}</p>
        <p>Built: {hash[1].toLocaleString()}</p>
      </main>
    </div>
  )
}
