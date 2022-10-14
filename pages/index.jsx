import Head from "next/head";
import Link from "next/link";
import { posts_data } from "../constants/constant";

export default function Home() {
  return (
    <>
      <Head>
        <title>Tolgahan's Blog</title>
      </Head>
      {/*<div className="w-4/5 h-full mx-auto">
        <div className="py-20">*/}
      <div className="pb-2">
        {posts_data.map((post) => (
          <div className="mb-16" key={post.id}>
            <Link href={`/post/${post.title}`}>
              <a>
                <h1 className="text-[28px] text-black leading-8 font-bold decoration-[3px] hover:underline">
                  {post.title}
                </h1>
              </a>
            </Link>
            <p className="py-5 border-b-2 text-lg border-black leading-7">
              {post.desc.length > 500
                ? post.desc.substring(0, 500) + "..."
                : post.desc}
            </p>
            <small className="text-black font-medium text-sm">
              {post.date}
            </small>
          </div>
        ))}
      </div>
    </>
  );
}
