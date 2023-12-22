/* eslint-disable react/prop-types */
import axios from "axios";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaEdit } from "react-icons/fa";

const UpdateTodo = ({ task:todo, refetch }) => {
  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    reset({
      title: todo.title || "",
      description: todo.description || "",
      priority: todo.priority || "low",
      deadlines: todo.deadlines || "",
    });
  }, [todo, reset]);

  const onSubmit = (data) => {
    // Handle form submission here
    console.log(data);
    axios.patch(`http://localhost:3000/task/allTask/${todo._id}`, data).then((res) => {
      console.log(res.data);
      if(res.data.modifiedCount > 0){
        toast.success('task updated')
        refetch()
      }
    });

    reset();
    // Close the modal
    document.getElementById(`my_modal_${todo._id}`).close();
  };
  return (
    <div>
      <div>
        <button
          onClick={() =>
            document.getElementById(`my_modal_${todo._id}`).showModal()
          }
          className="text-blue-500 hover:text-blue-700"
        >
          <FaEdit />
        </button>
        <dialog id={`my_modal_${todo._id}`} className="modal">
          <div className="modal-box p-8">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="max-w-md mx-auto"
            >
              {/* Close button */}
              <button
                type="button"
                onClick={() =>
                  document.getElementById(`my_modal_${todo._id}`).close()
                }
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
              {/* Form fields */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Title
                </label>
                <input
                  {...register("title")}
                  type="text"
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                  placeholder="Task Name"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Description
                </label>
                <textarea
                  {...register("description")}
                  rows="4"
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                  placeholder="Task Description"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Priority
                </label>
                <select
                  {...register("priority")}
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                >
                  <option value="low">Low</option>
                  <option value="moderate">Moderate</option>
                  <option value="high">High</option>
                </select>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Deadlines
                </label>
                <input
                  {...register("deadlines")}
                  type="date"
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                />
              </div>

              {/* Submit button */}
              <button
                type="submit"
                className="bg-[#4daeef] text-white px-4 py-2 rounded-md hover:bg-blue-700"
              >
                Submit
              </button>
            </form>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default UpdateTodo;
