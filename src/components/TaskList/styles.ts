import styled, { css } from "styled-components";

export const TaskListContainer = styled.div`
  max-width: 735px;
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  margin: 0 auto;
`;

export const Head = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 15px;
`;

interface SubtitleProps {
  status: "created" | "finished";
}

export const Subtitle = styled.div<SubtitleProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  h3 {
    font-size: 0.87rem;
    line-height: 1rem;
    font-weight: 700;
    color: ${(props) =>
      props.status === "created" ? props.theme.blue : props.theme.purple};
  }
`;

export const Counter = styled.div`
  width: max-content;
  height: 1.18rem;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 0.75rem;
  line-height: 0;
  font-weight: 700;
  color: ${(props) => props.theme["gray-200"]};

  padding: 0.12rem 0.5rem;
  border-radius: 999px;
  background: ${(props) => props.theme["gray-400"]};
`;

interface ContainerListProps {
  hastasks: boolean;
}

export const ContainerList = styled.div<ContainerListProps>`
  flex: 1;

  ${(props) =>
    props.hastasks === false &&
    css`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      padding: 4rem 1.5rem;
      border-radius: 8px;
      border-top: 1px solid ${props.theme["gray-400"]};

      .container-empty {
        margin-top: 1rem;

        h4 {
          font-size: 1rem;
          line-height: 1.2rem;
          font-weight: 700;
          color: ${(props) => props.theme["gray-300"]};
        }

        p {
          font-size: 1rem;
          line-height: 1.2rem;
          font-weight: 700;
          font-weight: 400;
          color: ${(props) => props.theme["gray-300"]};
        }
      }
    `}
`;

export const ContainerTasks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;
