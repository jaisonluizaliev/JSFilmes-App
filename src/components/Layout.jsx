import Head from 'next/head';
import React from 'react';
import styled from 'styled-components';

export default function Layout({ children, title }) {
  return (
    <div>
      <Head>
        <title>{title ? `${title} - JS FILMES` : `JS FILMES`}</title>
      </Head>
      <div>
        <LayoutContainer>
          <Presentation>
            <header>JS FILMES</header>
            <span>Menu</span>
          </Presentation>
          <Content>{children}</Content>
          <Footer>
            <h2 style={{ textAlign: 'center', padding: '50px' }}>
              Em construção
            </h2>
          </Footer>
        </LayoutContainer>
      </div>
    </div>
  );
}

// const ModderChanger = styled.div``;

const LayoutContainer = styled.div`
  width: 95%;
  margin: 25px auto;
  -webkit-box-shadow: 5px 2px 22px -2px rgba(0, 0, 0, 0.63);
  box-shadow: 5px 2px 22px -2px rgba(0, 0, 0, 0.63);
`;
const Presentation = styled.header`
  color: #fff;
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Sedgwick Ave', cursive;
  background-color: #1c0d3f;
  header {
    width: 20%;
    padding: 10px 15px;
  }
  span {
    width: 80%;
    padding: 10px 15px;
    margin: auto;
    display: flex;
    justify-content: center;
  }
`;
const Content = styled.main`
  min-height: 60vh;
  background-color: #1c0d3f;
  background-color: #fff;
`;

const Footer = styled.footer`
  min-height: 30vh;
  color: white;
  background-color: #1c0d3f;
`;
