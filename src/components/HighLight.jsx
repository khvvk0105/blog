export const HighLight = ({ highlight }) => {
  console.log(highlight);
  return (
    <div className="w-[1216px] shrink-0 mt-[100px] m-auto">
      <div className="text-2xl mb-[30px]">Trending</div>
      <img
        src={highlight[0].cover_image}
        alt=""
        className="flex absolute  w-[1216px] h-[600px] rounded-xl"
      />
      ;
      <div className="relative flex flex-col w-[598px] p-10 items-start gap-6 bg-white rounded-xl ml-[11px] mt-[310px]">
        <div className="flex flex-col items-start gap-4 self-stretch">
          <p className="w-[66px] h-[20px] bg-blue-700 flex items-center justify-center rounded-[6px] text-white">
            {highlight[0].type_of}
          </p>
          <p className="text-3xl font-semibold">{highlight[0].title}</p>
        </div>
        <div className="flex items-center gap-5">
          <p>{highlight[0].published_timestamp}</p>
        </div>
      </div>
    </div>
  );
};
