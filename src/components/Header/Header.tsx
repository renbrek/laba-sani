import type { FC } from 'react';
import { Link } from 'react-router-dom';
import ProtectButton from '../ProtectButton/ProtectButton';

import styles from './Header.module.css';

interface HeaderProps {}

const Header: FC<HeaderProps> = ({}) => {
  return (
    <header className={styles.header}>
      <div className={styles.navbar}>
        <Link to={'/'}>Home</Link>
        <Link to={'/about'}>About</Link>
      </div>
      <div>
        <ProtectButton />
      </div>
    </header>
  );
};
export default Header;
