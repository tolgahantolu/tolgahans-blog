import React from "react";
import { useRouter } from "next/router";
import { posts_data } from "../../constants/constant";
import Link from "next/link";

const Tag = () => {
  const router = useRouter();
  const { tag } = router.query;

  //   !existing tag?
  const existingTag = posts_data
    .map((post) => {
      return post.tags.find((postTag) => postTag === tag);
    })
    .find((postTag) => postTag === tag);
  console.log(existingTag);

  // !existing post?
  const existingPosts = posts_data.filter((post) => {
    if (post.tags.includes(existingTag)) {
      return {
        id: post.id,
        title: post.title,
        desc: post.desc,
        date: post.date,
      };
    }
  });
  console.log(existingPosts);

  return (
    <div>
      <h1 className="block text-center text-4xl underline font-bold uppercase mb-8">
        {tag}
      </h1>

      <div className="pb-2">
        {existingPosts.map((post) => (
          <div className="mb-16" key={post.id}>
            <Link href={`/post/${post.title}`}>
              <a>
                <h1 className="text-[28px] text-black leading-8 font-bold decoration-[3px] hover:underline">
                  {post.title}
                </h1>
              </a>
            </Link>

            <p className="py-5 border-b-2 text-lg border-black leading-7">
              {post.desc}
            </p>
            <small className="text-black font-medium text-sm">
              {post.date}
            </small>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tag;
