import styled from "styled-components";

export const AddTaskFormContainer = styled.div`
  max-width: 735px;
  width: 100%;

  display: flex;
  align-items: center;

  margin: 0 auto;
  transform: translateY(-40%);

  form {
    flex: 1;

    display: flex;
    align-items: flex-start;
    gap: 0.5rem;
  }
`;

export const ContainerField = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  input {
    width: 100%;
    height: 3.37rem;

    padding: 1rem;
    border: 0;
    border-radius: 8px;
    background: ${(props) => props.theme["gray-500"]};

    &::placeholder {
      color: ${(props) => props.theme["gray-300"]};
    }
  }
`;

export const Error = styled.p`
  font-size: 0.75rem;
  line-height: 1rem;
  font-weight: 400;
  color: ${(props) => props.theme.danger};
`;

export const ButtonSubmit = styled.button`
  cursor: pointer;
  height: 3.37rem;

  display: flex;
  align-items: center;
  gap: 0.5rem;

  font-size: 0.87rem;
  line-height: 1rem;
  font-weight: 700;
  color: ${(props) => props.theme["gray-100"]};

  padding: 1rem;
  border: 0;
  border-radius: 8px;
  background: ${(props) => props.theme["blue-dark"]};

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${(props) => props.theme.blue};
  }
`;
