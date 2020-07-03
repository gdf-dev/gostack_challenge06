import React from 'react';

import { Container, Link } from './styles';

import Logo from '../../assets/logo.svg';

interface HeaderProps {
  size?: 'small' | 'large';
  currentTab: 'listagem' | 'import';
}

const Header: React.FC<HeaderProps> = ({
  size = 'large',
  currentTab,
}: HeaderProps) => {
  return (
    <Container size={size}>
      <header>
        <img src={Logo} alt="GoFinances" />
        <nav>
          <Link active={currentTab === 'listagem'} to="/">
            Listagem
          </Link>
          <Link active={currentTab === 'import'} to="/import">
            Importar
          </Link>
        </nav>
      </header>
    </Container>
  );
};

export default Header;
