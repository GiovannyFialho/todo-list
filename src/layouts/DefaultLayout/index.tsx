import { ReactNode } from "react";

import { Header } from "@/components/Header";

import { LayoutContainer, LayoutContent } from "@/layouts/DefaultLayout/styles";

interface DefaultLayoutProps {
  children: ReactNode;
}

export function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <LayoutContainer>
      <Header />

      <LayoutContent>{children}</LayoutContent>
    </LayoutContainer>
  );
}
