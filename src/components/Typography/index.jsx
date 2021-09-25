import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

// sizeとスタイルのマップ
const sizeMap = {
  xs: css`
    font-size: 12px;
    line-height: 1.66;
`,
  s: css`
    font-size: 14px;
    line-height: 1.66;
`,
  m: css`
    font-size: 16px;
    line-height: 1.66;
`,
  subtitle: css`
    font-size: 18px;
    line-height: 1.66;
`,
  title: css`
    font-size: 20px;
    line-height: 1.66;
`,
};

// colorとスタイルのマップ
const colorsMap = {
  inherit: 'inherit',
  black: '#000000',
  red: '#ff3300',
  gray: '#8c8c8c',
};

export const sizes = Object.keys(sizeMap);
export const colors = Object.keys(colorsMap);
export const displays = ['initial', 'block', 'inline', 'inline-block'];
export const aligns = ['left', 'right', 'center'];

const Root = styled.p`
  margin: 0;
  color: ${({ color }) => colorsMap[color]};
  ${({ size }) => sizeMap[size]};
  display: ${({ display }) => display};
  text-align: ${({ align }) => align};
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
`;

const Typography = ({
  className,
  size,
  color,
  display,
  align,
  bold,
  children,
}) => (
  // 各プロパティをStyled componentで作成したRootに渡す
  <Root
    className={className}
    size={size}
    color={color}
    display={display}
    align={align}
    bold={bold}
  >
    {children}
  </Root>
);

Typography.propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOf(sizes),
  color: PropTypes.oneOf(colors),
  display: PropTypes.oneOf(displays),
  align: PropTypes.oneOf(aligns),
  bold: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

Typography.defaultProps = {
  className: '',
  size: 'm',
  color: 'inherit',
  align: 'left',
  bold: false,
  display: 'block',
};

export default Typography;


// Object.keys() メソッドは、指定されたオブジェクトが持つプロパティの 名前の配列を、通常のループで取得するのと同じ順序で返す

// PropTypesはパッケージprop-typesを使った機能で、コンポーネントに渡すpropsの値についてのルール・型を設定するためのものです。コンポーネントのpropTypesにPropTypesを使ったルールを設定したオブジェクトを設定できる

// オプション	値に設定される条件の説明
// PropTypes.number	数値であること
// PropTypes.string	文字列であること
// PropTypes.arrayOf(PropTypes.string)	文字列の配列であること
// PropTypes.bool	booleanであること
// PropTypes.shape({ hoge: PropTypes.string })	hogeが文字列であるオブジェクトであること
// PropTypes.func	関数であること
// PropTypes.node	renderできるものであること
// PropTypes.oneOf(['foo', 'bar'])	fooかbarのどちらかであること
// PropTypes.oneOfType([PropTypes.string, PropTypes.array])	文字列か配列であること
// PropTypes.string.isRequired	文字列であること、値が未設定出ないこと