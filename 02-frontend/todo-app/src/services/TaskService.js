import axios from "axios";

const BASE_URL = "http://localhost:8080/api";

const TaskService = {
  getTasks: async () => {
    try {
      const response = await axios.get(`${BASE_URL}/tasks`);
      return response.data;
    } catch (error) {
      console.error("Error fetching tasks:", error);
      throw error;
    }
  },
};

export default TaskService;
