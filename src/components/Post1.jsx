export const Post1 = (post) => {
  return (
    <div className=" border-2 border-gray rounded-xl w-[392px] h-[476px] p-[10px]">
      <div className=" w-[355px] h-[240px] ">
        <img
          src={post.cover_image}
          alt=""
          className="rounded-xl w-[360px] h-[240px]"
        />
      </div>
      <div className="flex flex-col gap-[15px] ">
        <p className="flex items-center justify-center w-[66px] h-[20px] bg-blue-700 mt-[20px] text-white rounded-[6px]">
          {post.type_of}
        </p>
        <p className="text-2xl">{post.title}</p>
        <p>{post.readable_publish_date}</p>
      </div>
    </div>
  );
};
