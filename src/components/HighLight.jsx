export const HighLight = ({ highlight }) => {
  return (
    <div className="w-[1216px] shrink-0 mt-[100px]">
      <img
        src={highlight[0].cover_image}
        alt=""
        className="flex absolute -z-50 w-[1216px] h-[600px] rounded-xl"
      />
      ;
      <div className="flex flex-col w-[598px] p-10 items-start gap-6 bg-white rounded-xl ml-[11px] mt-[310px]">
        <div className="flex flex-col items-start gap-4 self-stretch">
          <p>{highlight[0].type_of}</p>
          <p className="text-3xl font-semibold">{highlight[0].title}</p>
        </div>
        <div className="flex items-center gap-5">
          <p>{highlight[0].published_timestamp}</p>
        </div>
      </div>
      {/* <div className="flex justify-end mt-4 gap-2">
        <div className="inline-flex justify-center items-center rounded-md w-10 h-10 border">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={9}
            height={17}
            viewBox="0 0 9 17"
            fill="none"
          >
            <path
              d="M8.5 16L1 8.5L8.5 1"
              stroke="black"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="inline-flex justify-center items-center rounded-md w-10 h-10 border">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={9}
            height={17}
            viewBox="0 0 9 17"
            fill="none"
          >
            <path
              d="M1 1L8.5 8.5L1 16"
              stroke="black"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div> */}
    </div>
  );
};
