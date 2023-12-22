/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import axios from "axios";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { FaPlus } from "react-icons/fa";


const CreateBtn = ({refetch, refetch:refe}) => {
    const { user } = useContext(AuthContext);
    const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    // Handle form submission here
    console.log(data);

    const taskItems = {
      title: data.title,
      description: data.description,
      deadline: data.deadlines,
      priority: data.priority,
      user: user?.email,
      status: "to-do",
    };

    axios
      .post("https://task-manager-server-eight-flame.vercel.app/task", taskItems)
      .then((res) => {
        if (res.data.insertedId) {
          toast.success("task added successfully");
          refetch()
          refe()
        }
      })
      .catch((error) => console.log(error));

    reset();
    // Close the modal
    document.getElementById("my_modal_3").close();
  };

    return (
        <div>
            <button
            onClick={() => document.getElementById("my_modal_3").showModal()}
            className="bg-[#4daeef] text-white px-4 py-2 rounded-md flex items-center gap-2"
          >
            <FaPlus className="" />
            Create a New Task
          </button>
          <dialog id="my_modal_3" className="modal">
            <div className="modal-box p-8">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="max-w-md mx-auto"
              >
                {/* Close button */}
                <button
                  type="button"
                  onClick={() => document.getElementById("my_modal_3").close()}
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
    );
};

export default CreateBtn;