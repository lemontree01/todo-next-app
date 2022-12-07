import Layout from "../components/Layout";
import "../styles/globals.css";
import Head from "next/head";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function MyApp({ Component, pageProps }) {
  const [todos, setTodos] = useState([]);
  const [currentTodo, setCurrentTodo] = useState("");
  const [currentMode, setCurrentMode] = useState("All");

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && e.target.value !== "") {
      setTodos((prev) => [
        ...prev,
        {
          isDone: false,
          value: e.target.value,
          id: uuidv4(),
        },
      ]);
      setCurrentTodo("");
    }
  };

  const handleToggle = (id, mode, value) => {
    setTodos((prev) => {
      if (mode === "toggle") {
        return prev.map((todo) =>
          todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
        );
      }
      if (mode === "delete") {
        return prev.filter((todo) => todo.id !== id);
      }
      if (mode === "edit") {
        return prev.map((todo) => (todo.id === id ? { ...todo, value } : todo));
      }
    });
  };

  const toggleAllTodos = () => {
    setTodos((prev) =>
      prev.map((todo) => ({
        ...todo,
        isDone: prev.filter((todo) => !todo.isDone).length,
      }))
    );
  };

  const clearCompleted = () => {
    setTodos((prev) => prev.filter((todo) => !todo.isDone));
  };

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>React • TodoMVC</title>
      </Head>
      <Layout
        {...{
          ...{
            currentTodo,
            todos,
            setCurrentTodo,
            handleKeyDown,
            currentMode,
            setCurrentMode,
            toggleAllTodos,
            todosLeft: todos.filter((todo) => !todo.isDone).length,
          },
          clearCompleted,
        }}
      >
        <Component {...{ ...{ pageProps, todos, handleToggle } }} />
      </Layout>
    </>
  );
}

export default MyApp;
