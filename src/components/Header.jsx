import { BlogHeader } from "./icons/BlogHeader";
import { Searchicon } from "./icons/Searchicon";
export const Header = () => {
  return (
    <div className="flex justify-center p-[32px] flex-row items-center m-auto gap-[118px]">
      <div>
        <BlogHeader />
      </div>
      <div className="flex w-[667px] justify-center items-center gap-[40px]">
        <p className="text-lg font-normal leading-6 ">Home</p>
        <p className="text-lg font-normal leading-6 ">Blog</p>
        <p className="text-lg font-normal leading-6 ">Contact</p>
      </div>
      <div className="flex w-[160px] justify-center gap-[12px]">
        <div className="border-2 p-2 rounded w-[114px]">Search</div>
        <div className="flex justify-center items-center">
          <Searchicon />
        </div>
      </div>
    </div>
  );
};
