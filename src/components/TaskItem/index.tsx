import { Check, Trash } from "phosphor-react";
import { ReactNode, useContext, useState } from "react";

import { TaskContext } from "@/contexts/TaskContext";

import { defaultTheme } from "@/styles/theme/default";

import {
  ButtonCheck,
  ButtonDeleteTask,
  TaskContent,
  TaskItemContainer,
  TaskText,
} from "@/components/TaskItem/styles";

interface TaskItemProps {
  id: string;
  children: ReactNode;
}

export function TaskItem({ id, children }: TaskItemProps) {
  const { editTask, deleteTask } = useContext(TaskContext);

  const [isCheck, setIsCheck] = useState(false);

  return (
    <TaskItemContainer>
      <TaskContent>
        <ButtonCheck
          status={isCheck}
          onClick={() => {
            const status = isCheck ? "pending" : "finished";

            editTask(id, status);
            setIsCheck(!isCheck);
          }}
        >
          {isCheck && <Check size={15} color={defaultTheme["gray-100"]} />}
        </ButtonCheck>

        <TaskText status={isCheck ? "finished" : "pending"}>
          {children}
        </TaskText>
      </TaskContent>

      <ButtonDeleteTask onClick={() => deleteTask(id)}>
        <Trash size={20} color={defaultTheme["gray-100"]} />
      </ButtonDeleteTask>
    </TaskItemContainer>
  );
}
