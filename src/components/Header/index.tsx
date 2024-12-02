import { ContainerHeader } from "@/components/Header/styles";

import Logo from "@/assets/images/Logo.svg";

export function Header() {
  return (
    <ContainerHeader>
      <img src={Logo} alt="" />
    </ContainerHeader>
  );
}
