export const Trend1 = (trending) => {
  return (
    <div className="p-[11px] mt-[100px]">
      <img
        src={trending.cover_image}
        alt=""
        className=" w-[289px] h-[320px] rounded-xl"
      />
      <div className="relative bottom-[120px] left-[30px] w-[230px] h-[120px] flex flex-col justify-center items-center text-white">
        <p className="w-[66px] h-[20px] bg-blue-700 flex items-center justify-center rounded-[6px]">
          {trending.type_of}
        </p>
        <p>{trending.title}</p>
      </div>
    </div>
  );
};
