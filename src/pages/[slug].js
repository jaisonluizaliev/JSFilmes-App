import { useRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import NextLink from 'next/link';
import movies from '../utils/data';

function Slug() {
  const router = useRouter();
  const { slug } = router.query;

  const movie = movies.find((x) => x.slug === slug);

  if (!movie) {
    return <Layout>Filme não existe mais</Layout>;
  }
  return (
    <Layout title={movie.name}>
      <NextLink href="/" passHref>
        <Link>Retornar Ao inicio</Link>
      </NextLink>
      <GridSlug>
        <GridSlugChildren>
          <Image src={movie.image} alt={movie.name} />
        </GridSlugChildren>
        <GridSlugChildren>
          <h3>{movie.name}</h3>
          <p>
            <strong>Sinopse:</strong> <br /> {movie.description}
          </p>
          <button>Assitir</button>
        </GridSlugChildren>
      </GridSlug>
    </Layout>
  );
}

const GridSlug = styled.div`
  width: 80%;
  margin: 10px auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
const GridSlugChildren = styled.div``;

export const Image = styled.img`
  max-width: 350px;
  display: block;
  margin: 5px auto;
`;

const Link = styled.h3`
  margin: 15px;
  cursor: pointer;
  font-weight: 400;
  text-decoration: underline;

`


export default Slug;
