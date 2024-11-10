import { useState } from "react";

export const useNow = () => {
  const [isNow, setIsNow] = useState(false);

  const now = 2024;

  if (now === 2023) {
    setIsNow(true);
  } else {
    setIsNow(false);
  }

  return isNow;
};
