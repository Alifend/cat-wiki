import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <Link href="/">
      <a style={{ paddingBlock: "10px" }}>
        <img
          width="150"
          height="50"
          src="/static/CatwikiLogo.svg"
          alt="Cat Wiki logo"
        />
      </a>
    </Link>
  );
};

export default Header;
