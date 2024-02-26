import { useState } from "react";

export const useColorGenerator = () => {
  const generateRandomColor = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`;
  };

  const [currentColor, setCurrentColor] = useState<string>(
    generateRandomColor()
  );

  const handleGenerateColor = () => {
    const newColor = generateRandomColor();
    setCurrentColor(newColor);
  };

  return {
    color: currentColor,
  };
};
