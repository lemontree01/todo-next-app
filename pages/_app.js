import Layout from "../components/Layout";
import "../styles/globals.css";
import Head from "next/head";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';


function MyApp({ Component, pageProps }) {
  const [todos, setTodos] = useState([]);
  const [currentTodo, setCurrentTodo] = useState('');
  const [currentMode, setCurrentMode] = useState('All')

  const handleKeyDown = e => {
    if (e.key === 'Enter' && e.target.value !== '') {
      setTodos([...todos, {
        isDone: false,
        value: e.target.value,
        id: uuidv4()
      }])
      setCurrentTodo('')
    }
  };

  const handleToggle = id => {
    setTodos(prev => prev.map(todo => todo.id === id ? {...todo, isDone: !todo.isDone,} : todo))
  }

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>React • TodoMVC</title>
      </Head>
      <Layout
        {...{...{ currentTodo, todos, setCurrentTodo, handleKeyDown, currentMode, setCurrentMode }}
      }
      >
        <Component {... {...{pageProps, todos, handleToggle}}}
        />
      </Layout>
    </>
  );
}

export default MyApp;
