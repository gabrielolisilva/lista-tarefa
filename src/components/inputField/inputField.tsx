import React, { useRef } from "react";
import "./inputField.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const inputField = ({ todo, setTodo, handleAdd }: Props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form
      className="input"
      onSubmit={(e) => {
        handleAdd(e);
        inputRef.current?.blur();
      }}
    >
      <input
        ref={inputRef}
        type="input"
        placeholder="Tarefa..."
        className="inputBox"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button className="inputSubmit" type="submit">
        Enviar
      </button>
    </form>
  );
};

export default inputField;
