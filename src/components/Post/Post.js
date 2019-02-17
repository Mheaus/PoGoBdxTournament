import React from 'react';
import PropTypes from 'prop-types';

import { PostLayout, Image, Title } from './styledComponents';

const Post = ({ image, title, href }) => (
  <PostLayout href={href} target="_blank" rel="noopener noreferrer">
    <Title>{title}</Title>
    <Image {...image} />
  </PostLayout>
);

Post.defaultProps = {
  href: undefined,
  image: {},
  title: '',
};

Post.propTypes = {
  href: PropTypes.string,
  image: PropTypes.shape({
    alt: PropTypes.string,
    src: PropTypes.string,
  }),
  title: PropTypes.string,
};

export default Post;
