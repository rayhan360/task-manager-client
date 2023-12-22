/* eslint-disable react/prop-types */
const BlogPost = ({ title, date, image, content }) => {
  return (
    <div className="mb-8">
      <img
        src={image}
        alt={title}
        className="mb-4 rounded-md w-full h-64 object-cover"
      />
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="text-gray-500">{date}</p>
      <p className="text-gray-700">{content}</p>
      <a className="text-blue-500 hover:underline">
        Read more
      </a>
    </div>
  );
};
export default BlogPost;
