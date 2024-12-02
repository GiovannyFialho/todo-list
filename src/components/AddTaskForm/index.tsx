import { zodResolver } from "@hookform/resolvers/zod";
import { PlusCircle } from "phosphor-react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { TaskContext } from "@/contexts/TaskContext";

import { defaultTheme } from "@/styles/theme/default";

import {
  AddTaskFormContainer,
  ButtonSubmit,
  ContainerField,
  Error,
} from "@/components/AddTaskForm/styles";

const taskTaskSchema = z.object({
  task: z.string().min(1, "Campo obrigatório"),
});

type TaskFormProps = z.infer<typeof taskTaskSchema>;

export function AddTaskForm() {
  const { createTask } = useContext(TaskContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TaskFormProps>({
    resolver: zodResolver(taskTaskSchema),
  });

  function handleCreateTask(data: TaskFormProps) {
    createTask(data.task);

    reset();
  }

  return (
    <AddTaskFormContainer>
      <form onSubmit={handleSubmit(handleCreateTask)}>
        <ContainerField>
          <input
            type="text"
            placeholder="Adicione uma nova tarefa"
            {...register("task")}
          />

          <Error>{errors.task?.message}</Error>
        </ContainerField>

        <ButtonSubmit type="submit">
          Criar <PlusCircle size={16} color={defaultTheme["gray-100"]} />
        </ButtonSubmit>
      </form>
    </AddTaskFormContainer>
  );
}
