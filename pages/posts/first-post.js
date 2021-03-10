import Head from "next/head";
import Link from 'next/link';
import React from 'react';
import styled from "styled-components";
import Layout from "../../components/layout";
// import "./first-post-styles.scss";

// const FirstPost = styled.div`
//   background: pink;
// `;

function firstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <div className="firstPost">
        <h1>First Post</h1>
        <h2>
          <Link href="/">
            <a>Back to Home</a>
          </Link>
        </h2>
      </div>
    </Layout>
  );
}

export default firstPost