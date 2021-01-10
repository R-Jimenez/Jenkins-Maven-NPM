import Head from 'next/head'
import { v4 as uuidv4 } from 'uuid';

const time = new Date().toLocaleString();
const uuid = uuidv4();

export default function Home() {
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

        <p>ID: {uuid}</p>
        <p>Built: {time}</p>
      </main>
    </div>
  )
}
