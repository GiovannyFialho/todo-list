import styled, { css } from "styled-components";

export const TaskItemContainer = styled.div`
  width: 100%;
  min-height: 4.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.75rem;

  padding: 1rem;
  border: 1px solid ${(props) => props.theme["gray-400"]};
  border-radius: 8px;
  background: ${(props) => props.theme["gray-500"]};
`;

export const TaskContent = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

interface ButtonCheckProps {
  status: boolean;
}

export const ButtonCheck = styled.div<ButtonCheckProps>`
  cursor: pointer;

  width: 25px;
  height: 25px;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 2px solid ${(props) => props.theme.blue};
  border-radius: 50%;
  background-color: ${(props) => props.theme["gray-500"]};

  ${(props) =>
    props.status &&
    css`
      border-color: ${props.theme.purple};
      background: ${props.theme.purple};
    `}
`;

interface TaskTextProps {
  status?: "pending" | "finished";
}

export const TaskText = styled.p<TaskTextProps>`
  font-size: 0.87rem;
  line-height: 1rem;
  font-weight: 400;
  color: ${(props) =>
    props.status === "finished"
      ? props.theme["gray-300"]
      : props.theme["gray-100"]};
  text-decoration: ${(props) =>
    props.status === "finished" ? "line-through" : ""};
`;

export const ButtonDeleteTask = styled.button`
  cursor: pointer;
  width: 30px;
  height: 30px;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 0;
  border-radius: 8px;
  background: ${(props) => props.theme["gray-500"]};

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${(props) => props.theme["gray-700"]};
  }
`;
