/* eslint-disable react/prop-types */

import { useState } from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
const Complete = ({ todo }) => {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <div>
      <div className="my-10 shadow-sm p-2">
        <div
          onClick={() => setShowDetails(!showDetails)}
          className="mb-4 cursor-pointer flex items-center gap-5"
        >
          <div className="text-xl">
            {showDetails ? <FaArrowUp /> : <FaArrowDown />}
          </div>
          <h1 className="text-2xl font-bold mb-2">Complete Task</h1>
          <hr />
        </div>
        <div>
          {todo?.map((to) => (
            <div key={to._id} className="mb-4">
              {/* todo list */}
              {showDetails && to?.status === "completed" && (
                <div className="flex justify-between border-b pb-2">
                  <div className="flex items-center gap-5">
                  <input type="checkbox" checked="checked" className="checkbox checkbox-info size-5" />
                    <del>
                      <div className="text-gray-400">
                        <h1 className="font-semibold">{to.title}</h1>
                      </div>
                    </del>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Complete;
