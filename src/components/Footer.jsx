import { FbIcon } from "./icons/FbIcon";
import { TwitIcon } from "./icons/TwitIcon";
import { IgIcon } from "./icons/IgIcon";
import { InIcon } from "./icons/InIcon";
import { BlogHeader } from "./icons/BlogHeader";
import { BlogIcon } from "./icons/BlogIcon";

export const Footer = () => {
  return (
    <div className="w-full bg-slate-200 ">
      <div className="mt-[100px]">
        <div className="w-[1216px] m-auto">
          <div className="flex">
            <div className="w-[280px] h-[120px]">
              <h3 className="mb-[12px]">About</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam
              </p>
              <div className="mt-[24px]">
                <p>Email : info@jstemplate.net</p>
                <p>Phone : 880 123 456 789</p>
              </div>
            </div>
            <div className="w-[600px] h-[236px] flex flex-col items-center gap-[10px]">
              <p>Home</p>
              <p>Blog</p>
              <p>Contact</p>
            </div>
            <div className="flex gap-[10px]">
              <FbIcon />
              <TwitIcon />
              <IgIcon />
              <InIcon />
            </div>
          </div>
          <div className="flex justify-between mt-[25px]">
            <div className="flex gap-[10px]">
              <div>
                <BlogIcon />
              </div>
              <div>
                <p>MetaBlog</p>
                <p>© All Rights Reserved.</p>
              </div>
            </div>
            <div className="flex gap-[32px]">
              <p>Terms of Use</p>
              <p>Privacy Policy</p>
              <p>Cookie Policy</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
