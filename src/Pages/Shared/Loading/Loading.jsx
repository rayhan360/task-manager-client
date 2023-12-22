import loading from "../../../assets/loading.gif";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-[80vh]">
      <img src={loading} alt="" />
    </div>
  );
};

export default Loading;
