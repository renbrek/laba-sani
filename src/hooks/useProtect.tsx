import { FC, useEffect, useState } from 'react';

interface useProtectProps {}

const useProtect = () => {
  const [isProtectionEnabled, setIsProtectionEnabled] = useState(true);

  const enableProtection = () => {
    setIsProtectionEnabled(true);
  };

  const disableProtection = () => {
    setIsProtectionEnabled(false);
  };

  return {
    isProtectionEnabled,
    setIsProtectionEnabled,
    enableProtection,
    disableProtection,
  };
};
export default useProtect;
