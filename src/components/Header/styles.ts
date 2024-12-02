import styled from "styled-components";

export const ContainerHeader = styled.header`
  flex: 1;
  height: 18.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background: ${(prosp) => prosp.theme["gray-700"]};
`;
