import { FaEdit, FaTrashAlt } from "react-icons/fa";
import noTask from "../../../assets/no-task.png";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import CreateBtn from "./createBtn";

const PersonalTask = () => {
  const { user } = useContext(AuthContext);

  const { data: task = [], refetch } = useQuery({
    queryKey: ["tasks", user?.email],
    queryFn: async () => {
      const res = await axios.get(
        `http://localhost:3000/task/user?email=${user?.email}`
      );
      return res.data;
    },
  });
  console.log(task);

  return (
    <div>
      {task.length > 0 ? (
        <div>
          <div className="mb-4">
            <h1 className="text-2xl font-bold">To-Do</h1>
            <hr />
          </div>
          <div>
            {task?.map((todo) => (
              <div key={todo._id} className="mb-4 border-b pb-2">
                {todo?.status === "to-do" && (
                  <div className="flex justify-between">
                    <div>
                      <h1 className="text-xl font-semibold">{todo.title}</h1>
                      <div className="flex gap-5">
                        <p className="text-gray-600">{todo.description}</p>
                        <p className="text-gray-600">
                          Deadline: {todo.deadline}
                        </p>
                        <p className="text-gray-600">
                          Priority: {todo.priority}
                        </p>
                      </div>
                    </div>
                    <div className="mt-2 flex items-center space-x-4">
                      <button className="text-red-500 hover:text-red-700">
                        <FaTrashAlt />
                      </button>

                      <button className="text-blue-500 hover:text-blue-700">
                        <FaEdit />
                      </button>

                      <button className="bg-blue-500 text-white px-2 py-1 rounded-md">
                        OnGoing
                      </button>
                    </div>
                  </div>
                )}
                <CreateBtn refetch={refetch}></CreateBtn>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <img className="w-[60%]" src={noTask} alt="" />
          <div className="mr-36">
            <CreateBtn refetch={refetch}></CreateBtn>
          </div>
        </div>
      )}
    </div>
  );
};

export default PersonalTask;
