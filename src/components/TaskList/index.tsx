import Clipboard from "@/assets/images/Clipboard.svg";
import { useContext } from "react";

import { TaskContext } from "@/contexts/TaskContext";

import { TaskItem } from "@/components/TaskItem";

import {
  ContainerList,
  ContainerTasks,
  Counter,
  Head,
  Subtitle,
  TaskListContainer,
} from "@/components/TaskList/styles";

export function TaskList() {
  const { tasks } = useContext(TaskContext);

  const hasTasks = tasks && tasks.length > 0 ? true : false;

  return (
    <TaskListContainer>
      <Head>
        <Subtitle status="created">
          <h3>Tarefas criadas</h3>

          <Counter>{hasTasks ? tasks.length : 0}</Counter>
        </Subtitle>

        <Subtitle status="finished">
          <h3>Concluídas</h3>

          <Counter>
            {hasTasks ? (
              <>
                {tasks.filter((task) => task.status === "finished").length} de{" "}
                {tasks.length}
              </>
            ) : (
              0
            )}
          </Counter>
        </Subtitle>
      </Head>

      <ContainerList hastasks={hasTasks}>
        {hasTasks ? (
          <ContainerTasks>
            {tasks.map((task) => (
              <TaskItem key={task.id} id={task.id}>
                {task.title}
              </TaskItem>
            ))}
          </ContainerTasks>
        ) : (
          <>
            <img src={Clipboard} alt="" />

            <div className="container-empty">
              <h4>Você ainda não tem tarefas cadastradas</h4>
              <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
          </>
        )}
      </ContainerList>
    </TaskListContainer>
  );
}
