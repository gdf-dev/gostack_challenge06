import styled, { css } from 'styled-components';
import {
  Link as LinkReactDOM,
  LinkProps as LinkPropsReactDOM,
} from 'react-router-dom';

interface ContainerProps {
  size?: 'small' | 'large';
}

interface LinkProps extends LinkPropsReactDOM {
  active: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #5636d3;
  padding: 30px 0;

  header {
    width: 1120px;
    margin: 0 auto;
    padding: ${({ size }) => (size === 'small' ? '0 20px ' : '0 20px 150px')};
    display: flex;
    align-items: center;
    justify-content: space-between;

    nav {
    }
  }
`;

export const Link = styled(LinkReactDOM)<LinkProps>`
  color: #fff;
  text-decoration: none;
  font-size: 16px;
  transition: opacity 0.2s;

  & + a {
    margin-left: 32px;
  }

  &:hover {
    opacity: 0.6;
  }

  ${props =>
    props.active &&
    css`
      padding-bottom: 8px;
      border-bottom: 1px solid #ff872c;
    `}
`;
