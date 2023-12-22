import { Link } from "react-router-dom";
import task from "../../assets/task.jpg";

const Banner = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center p-8">

      <div className="flex-1" style={{ flexBasis: "40%" }}>
        <div className="mx-20">
          <p className="text-base text-gray-500">Make Your Works easy with</p>
          <h1 className="text-5xl font-bold text-[#4daeef] my-3">Task Management</h1>
          <p className="text-base text-gray-500">Save Your Time</p>
          <Link to="/dashboard/personal"><button className="mt-4 px-4 py-2 bg-[#4daeef] text-white rounded-md">
            Let&apos;s Explore
          </button></Link>
        </div>
      </div>


      <div className="flex-1 pl-4" style={{ flexBasis: "60%" }}>
        <img className="" src={task} alt="Task" />
      </div>
    </div>
  );
};

export default Banner;
