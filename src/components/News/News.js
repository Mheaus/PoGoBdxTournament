import React from 'react';

import tempest from '../../assets/tempest-cup-promo.jpg';

import { NewsLayout, Title } from './styledComponents';
import Post from '../Post';

const News = () => (
  <NewsLayout>
    <Title>Dernières News :</Title>
    <Post
      href="https://silph.gg/tempest-cup"
      title="La Coupe Tempête ! ~🌪 1er Mars - 31 Mars 🌪"
      image={{ src: tempest, alt: 'tempest cup promo' }}
    />
  </NewsLayout>
);

export default News;
