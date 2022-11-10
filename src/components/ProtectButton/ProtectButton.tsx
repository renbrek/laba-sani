import { FC, useEffect } from 'react';
import { BsFillShieldFill, BsFillShieldSlashFill } from 'react-icons/bs';
import useProtect from '../../hooks/useProtect';

import styles from './ProtectButton.module.css';

interface ProtectButtonProps {}

const ProtectButton: FC<ProtectButtonProps> = ({}) => {
  const { isProtectionEnabled, setIsProtectionEnabled } = useProtect();

  const switchProtectMode = () => {
    document.ondragstart = noselect;
    document.onselectstart = noselect;
    document.oncontextmenu = noselect;
    document.onkeydown = (event: any) => {
      const isBadShortcut =
        (event.ctrlKey && (event.key == 'c' || event.key == 's')) ||
        event.key == 'F12';

      if (isBadShortcut) {
        return !isProtectionEnabled;
      }
    };
    function noselect() {
      return !isProtectionEnabled;
    }
  };

  useEffect(() => {
    switchProtectMode();
  }, [isProtectionEnabled]);

  return (
    <div
      className={styles.button}
      onClick={() => {
        const passwordCandidate = prompt('Введи пароль блядь');
        if (passwordCandidate === 'sanyalox') {
          setIsProtectionEnabled(!isProtectionEnabled);
        }
      }}
    >
      {isProtectionEnabled ? <BsFillShieldFill /> : <BsFillShieldSlashFill />}
    </div>
  );
};
export default ProtectButton;
