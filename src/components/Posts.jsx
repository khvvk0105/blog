import { Post1 } from "./Post1";
export const Posts = ({ post }) => {
  // console.log(post);
  return (
    <div className=" w-[1216px] m-auto">
      <div className="text-2xl mb-[30px]">All Blog Post</div>
      <div className="flex flex-wrap gap-[10px]">
        {post.map((e) => {
          return (
            <Post1
              cover_image={e.social_image}
              type_of={e.type_of}
              title={e.title}
              readable_publish_date={e.readable_publish_date}
            />
          );
        })}
      </div>
      <div className=" flex items-center justify-center mt-[100px]">
        <p className="flex items-center justify-center rounded-xl w-[200px] h-[80px] text-3xl border-2 border-gray p-[10px]">
          Load More
        </p>
      </div>
    </div>
  );
};
