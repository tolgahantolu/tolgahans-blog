import React from "react";
import { useRouter } from "next/router";
import { posts_data } from "../../constants/constant";
import Head from "next/head";

const PostDetails = () => {
  const router = useRouter();
  const { title } = router.query;

  const existingPost = posts_data
    .map((post) => {
      return {
        id: post.id,
        title: post.title,
        desc: post.desc,
        date: post.date,
        tags: post.tags,
      };
    })
    .filter((postDetail) => postDetail.title === title);

  return (
    <>
      <Head>
        <title>Tolgahan's Blog | {title}</title>
      </Head>
      <div>
        <div className="pb-2">
          {existingPost.map((post) => (
            <div className="mb-16" key={post.id}>
              <h1 className="text-[28px] text-black leading-8 font-bold">
                {post.title}
              </h1>

              <p className="py-5 border-b-2 text-lg border-black leading-7">
                {post.desc}
              </p>
              <small className="text-black font-medium text-sm">
                {post.date}
              </small>
              <div className="mt-8 flex gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-white text-xs bg-gray-700 border-color-navy border-2 px-3 py-1 font-medium "
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PostDetails;
