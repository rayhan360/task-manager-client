/* eslint-disable react/prop-types */
import { FaTrashAlt } from "react-icons/fa";
import UpdateTask from "./UpdateTask";

const OnGoing = ({ todo,  handleComplete, handleDeleteTask, refetch}) => {
  return (
    <div className="my-10">
      <div className="mb-4">
        <h1 className="text-2xl font-bold mb-2">On Going Task</h1>
        <hr />
      </div>
      <div>
        {todo?.map((to) => (
          <div key={to._id} className="mb-4">
            {/* todo list */}
            {to?.status === "ongoing" && (
              <div className="md:flex justify-between border-b pb-2 text-sm">
                <div className="flex items-center gap-5">
                  <input
                    type="radio"
                    name="radio-7"
                    className="radio radio-info"
                    onClick={() => handleComplete(to._id)}
                  />
                  <div>
                    <h1 className="text-lg font-semibold">{to.title}</h1>
                    <div className="flex gap-5">
                      <p className="text-gray-600">{to.description}</p>
                      <p className="text-gray-600">Deadline: {to.deadline}</p>
                      <p className="text-gray-600">Priority: {to.priority}</p>
                    </div>
                  </div>
                </div>
                <div className="mt-2 flex items-center space-x-4">
                  <button onClick={() => handleDeleteTask(to._id)} className="text-red-500 hover:text-red-700">
                    <FaTrashAlt />
                  </button>
                  <UpdateTask task={to} refetch={refetch}></UpdateTask>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default OnGoing;
