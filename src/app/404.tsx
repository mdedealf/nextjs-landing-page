"use client";
import { FC } from "react";
import Link from "next/link";

const PageNotFound: FC = () => {
  return (
    <section className="flex flex-col items-center justify-center h-screen w-screen gap-32px text-60px ">
      <div>404 Page Not Found</div>
      <Link className="hover:text-light-gray" href="/">
        Back to Home
      </Link>
    </section>
  );
};

export default PageNotFound;
