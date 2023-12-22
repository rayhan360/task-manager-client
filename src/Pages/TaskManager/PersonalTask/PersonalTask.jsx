import { FaEdit, FaTrashAlt } from "react-icons/fa";
import noTask from "../../../assets/no-task.png";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import CreateBtn from "./createBtn";
import OnGoing from "./OnGoing";
import toast, { Toaster } from "react-hot-toast";
import Complete from "./Complete";

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

  const handleOnGoing = async (id) => {
    try {
      const res = await axios.patch(`http://localhost:3000/task/${id}`);
      if (res.data.modifiedCount) {
        toast.success("Your Task On Going Now");
        refetch();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleComplete = async (id) => {
    try{
      const res = await axios.patch(`http://localhost:3000/task/complete/${id}`);
      if(res.data.modifiedCount) {
        toast.success("Task Complete")
        refetch()
      }
    }catch (error) {
      console.log(error);
    }
  };

  const handleDeleteTask = id => {
    axios.delete(`http://localhost:3000/task/${id}`).then(res => {
      console.log(res.data)
      if(res.data.deletedCount > 0){
        toast.error('task deleted');
        refetch();
      }
    })
  }



  return (
    <div>
      {task.length > 0 ? (
        <div>
          <div>
            <div className="mb-4">
              <h1 className="text-2xl font-bold mb-2">To-Do</h1>
              <hr />
            </div>
            {task?.map((todo) => (
              <div key={todo._id} className="mb-4">
                {/* todo list */}
                {todo?.status === "to-do" && (
                  <div className="flex justify-between border-b pb-2 text-sm">
                    <div className="flex items-center gap-5">
                      <input
                      onClick={() => handleComplete(todo._id)}
                        type="radio"
                        name="radio-7"
                        className="radio radio-info"
                      />
                      <div>
                        <h1 className="text-lg font-semibold">{todo.title}</h1>
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
                    </div>
                    <div className="mt-2 flex items-center space-x-4">
                      <button onClick={() => handleDeleteTask(todo._id)} className="text-red-500 hover:text-red-700">
                        <FaTrashAlt />
                      </button>

                      <button className="text-blue-500 hover:text-blue-700">
                        <FaEdit />
                      </button>

                      <button
                        onClick={() => handleOnGoing(todo._id)}
                        className="bg-blue-500 text-white px-2 py-1 rounded-md"
                      >
                        OnGoing
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
            <OnGoing todo={task} handleComplete={handleComplete} handleDeleteTask={handleDeleteTask}></OnGoing>
            <Complete todo={task}></Complete>
            <CreateBtn refetch={refetch}></CreateBtn>
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
      <Toaster></Toaster>
    </div>
  );
};

export default PersonalTask;
