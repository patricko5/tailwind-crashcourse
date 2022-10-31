import { useRouter } from "next/router";

const BlogItem = (props) => {
  const { title, image, description, details } = props;

  const router = useRouter();

  const onNavigate = () => {
  
  }

  return (
    <div className="max-w-sm mx-auto my-2 overflow-hidden rounded shadow-lg">
      <img className="w-full h-60" src={image} alt={title} />
      <div className="px-6 py-4">
        <div className="mb-2 text-xl font-bold"> {title}</div>
        <p className="text-base text-grey-700">{description}</p>
      </div>
      <div className="text-center">
        <button onClick={onNavigate} className="px-4 py-2 my-1 font-semibold text-blue-700 border bg-transparent border-blue-500 rounded hover:bg-blue-500 hover:text-white hover:border-transparent">
          Read More
        </button>
      </div>
    </div>
  );
};

export default BlogItem;
