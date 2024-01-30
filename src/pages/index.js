import { Header } from "@/components/Header";
import { HighLight } from "@/components/HighLight";
import { Trending } from "@/components/Trending";
import { Posts } from "@/components/Posts";

export default function Page(props) {
  const { highlight, post, trending } = props;
  console.log(highlight);
  return (
    <div>
      <Header />
      <HighLight highlight={highlight} />
      <Trending trending={trending} />
      <Posts post={post} />
    </div>
  );
}
export const getStaticProps = async (context) => {
  const highlights = await fetch(
    "https://dev.to/api/articles?per_page=1&top=1"
  );
  const highlight = await highlights.json();

  const trendings = await fetch("https://dev.to/api/articles?per_page=5&top=1");
  const trending = await trendings.json();

  const posts = await fetch("https://dev.to/api/articles?per_page=15");
  const post = await posts.json();

  return {
    props: {
      highlight,
      post,
      trending,
    },
  };
};
