// import { useRouter } from 'next/router';
// import { useContext } from 'react';
// import styled from 'styled-components';
// import { Store } from '../store/Store';
import Layout from '../components/Layout';
import styled from 'styled-components';
import NextLink from 'next/link';
// import jsCookie from 'js-cookie';

import movies from '../utils/data';

export default function Home() {
  // const router = useRouter();
  // const {textOne, userInfo} = state;

  return (
    <Layout title="Home">
      <FirstTitle>Mais Assistidos</FirstTitle>

      <GridLayout>
        {movies &&
          movies.map((movie) => (
            <GridChildren key={movie.id}>
              <NextLink href={movie.slug} passHref>
                <div>
                  <Image src={movie.image} alt={movie.name} />
                  <TitleMovie>{movie.name}</TitleMovie>
                  {/* <Description>Mais Detalhes...</Description> */}
                </div>
              </NextLink>
            </GridChildren>
          ))}
      </GridLayout>
    </Layout>
  );
}
const FirstTitle = styled.h2`
  margin: 10px 10px;
  font-size: 1.4rem;
  font-weight: 400;
`;

const GridLayout = styled.div`
  width: 95%;
  margin: 20px auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 12px;
  /* background-color: #fff555; */
`;
const GridChildren = styled.div`
  /* background-color: blue; */
`;
const Image = styled.img`
object-fit: cover;
  width: 80%;
  max-height: 300px;
  margin: 12px auto;
  display: block;
`;

// const Description = styled.p`
//   padding: 0 15px;
//   margin: 0 0 12px 0;

//   cursor: pointer;
//   text-decoration: underline;
// `;

const TitleMovie = styled.h3`
  text-align: center;
  font-weight: 600;
  padding: 0;
  margin: 0 0 12px 0;
  font-size: 1rem;
`;
