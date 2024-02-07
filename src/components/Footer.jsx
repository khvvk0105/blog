import { FbIcon } from "./icons/FbIcon";
import { TwitIcon } from "./icons/TwitIcon";
import { IgIcon } from "./icons/IgIcon";
import { InIcon } from "./icons/InIcon";
import { BlogHeader } from "./icons/BlogHeader";
import { BlogIcon } from "./icons/BlogIcon";

export const Footer = () => {
  return (
    <div>
      <div className="flex">
        <div>
          <h3>About</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </p>
        </div>
        <div>
          <p>Home</p>
          <p>Blog</p>
          <p>Contact</p>
        </div>
        <div className="flex">
          <FbIcon />
          <TwitIcon />
          <IgIcon />
          <InIcon />
        </div>
      </div>
      <div>
        <p>Email : info@jstemplate.net</p>
        <p>Phone : 880 123 456 789</p>
      </div>
      <div className="flex">
        <div>
          <div className="flex ">
            <div>
              <BlogIcon />
            </div>
            <div>
              <p>MetaBlog</p>
              <p>© All Rights Reserved.</p>
            </div>
          </div>
        </div>
        <div className="flex">
          <p>Terms of Use</p>
          <p>Privacy Policy</p>
          <p>Cookie Policy</p>
        </div>
      </div>
    </div>
  );
};
