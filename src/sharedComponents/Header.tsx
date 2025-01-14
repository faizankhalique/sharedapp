// Header.tsx
import React from "react";

interface HeaderProps {
  title: string;
  subtitle?: string;
  backgroundColor?: string;
  textColor?: string;
}

const Header: React.FC<HeaderProps> = ({
  title,
  subtitle,
  backgroundColor = "#f5f5f5",
  textColor = "#333",
}) => {
  const headerStyle: React.CSSProperties = {
    backgroundColor,
    color: textColor,
    padding: "1rem",
    textAlign: "center",
  };

  return (
    <header style={headerStyle}>
      <h1>{title}</h1>
      {subtitle && <h2>{subtitle}</h2>}
    </header>
  );
};

export default Header;
