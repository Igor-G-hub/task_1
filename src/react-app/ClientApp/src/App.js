import React, { useEffect, useState } from "react";
import "./custom.css";
import { deleteTaskApi, fetchTasksApi } from "./api";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Content } from "./components/Content";

const App = () => {
  const host = window.location.host;

  const [taskCollection, setTaskCollection] = useState(null);

  useEffect(() => {
    setData();
  }, []);

  const setData = async () => {
    const tasks = await fetchTasksApi();
    setTaskCollection(tasks);
  };

  const handleDeleteTask = async (
    id,
    title,
    description,
    isfinished,
    example
  ) => {
    const result = await deleteTaskApi(
      id,
      title,
      description,
      isfinished,
      example
    );
    if (!result) {
      const newTaskCollection = taskCollection.filter((task) => task.id !== id);
      setTaskCollection(newTaskCollection);
    }
  };

  return (
    <>
      <Header />
      <Content
        taskCollection={taskCollection}
        handleDeleteTask={handleDeleteTask}
      />
      <Footer />
    </>
  );
};

export default App;
