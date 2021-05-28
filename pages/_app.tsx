
// Custom components
// Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import { AppProps } from 'next/app'
import React from 'react';
import { Row } from 'reactstrap';
import Layout from '../components/Layout';

function App({ Component, pageProps }: AppProps) {
  return (
    <Layout title="Anime world | Next.js + TypeScript Example" >
      <Row className="justify-content-center mt-5">
        <Component {...pageProps} />
      </Row>
    </Layout>)
}

export default App