import React from 'react';
import PropTypes from 'prop-types';

const Image = ({
  className,
  alt,
  src,
}) => (
  <img
    className={className}
    alt={alt}
    src={src}
  />
);

// isRequiredは型を必須にしたい時に使う
Image.propTypes = {
  className: PropTypes.string,
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};

Image.defaultProps = {
  className: '',
};

export default Image;
