import { Trend1 } from "./Trend1";

export const Trending = ({ trending }) => {
  return (
    <div className="flex w-[1216px] m-auto">
      {trending.map((e) => {
        return (
          <Trend1
            cover_image={e.cover_image}
            type_of={e.type_of}
            title={e.title}
          />
        );
      })}
    </div>
  );
};
