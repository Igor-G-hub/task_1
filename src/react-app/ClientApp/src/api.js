export const fetchTasksApi = async (url) => {
  const data = await fetch("http://localhost:5001/api/task/GetTasks", {
    method: "GET",
    headers: {
      "Content-Type": "aplication/json",
    },
  })
    .then((response) => response.json())
    .then((result) => result)
    .catch((err) => console.log("err", err));
  return data;
};

export const deleteTaskApi = async (
  id,
  title,
  description,
  isfinished,
  example
) => {
  const data = { id, title, description, isfinished, example };

  const result = await fetch("http://localhost:5001/api/Task/DeleteTask", {
    method: "POST",
    headers: {
      "Content-Type": "application/problem+json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((result) => result)
    .catch((err) => console.log("err", err));
  return result;
};
