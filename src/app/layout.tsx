import { FC, ReactNode } from "react";
import "./globals.css";
import Header from "@/components/Header";
// import ScrollToTop from "@/components/ScrollToTop";

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        {/* <ScrollToTop /> */}
        <Header bg={"bg-light-gray"} />
        {children}
      </body>
    </html>
  );
};
export default RootLayout;
