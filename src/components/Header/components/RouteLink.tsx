import { FC } from "react";
import Link from "next/link";

interface Nav {
  href: string;
  title: string;
  styles: string;
  onClick?: () => void;
}

const RouteLink: FC<Nav> = ({ href, title, styles, onClick }) => {
  return (
    <Link className={`${styles} no-underline`} href={href} onClick={onClick}>
      {title}
    </Link>
  );
};

export default RouteLink;
