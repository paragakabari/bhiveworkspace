import { ReactNode } from "react";
import Footer from "../layout/Footer/Footer";
import Header from "../layout/header/Header";

interface DefaultLayoutProps {
  children: ReactNode;
}

export default function DefaultLayout({
  children,
}: DefaultLayoutProps): JSX.Element {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
