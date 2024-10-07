import { FC, ReactNode } from "react";
import "./globals.css";
import ReduxProvider from "@/components/ReduxProvider";

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
};
export default RootLayout;
