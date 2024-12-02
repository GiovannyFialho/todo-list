import { ThemeProvider } from "styled-components";

import { GlobalStyle } from "@/styles/global";
import { defaultTheme } from "@/styles/theme/default";

import { TaskContextProvider } from "@/contexts/TaskContext";

import { DefaultLayout } from "@/layouts/DefaultLayout";

import { AddTaskForm } from "@/components/AddTaskForm";
import { TaskList } from "@/components/TaskList";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <TaskContextProvider>
        <DefaultLayout>
          <AddTaskForm />
          <TaskList />
        </DefaultLayout>
      </TaskContextProvider>

      <GlobalStyle />
    </ThemeProvider>
  );
}
