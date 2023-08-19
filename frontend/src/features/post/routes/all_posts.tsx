import { PostList } from "@/components/post_list";
import { PostUser } from "@/types";
import { Form, useLoaderData } from "react-router-dom";
import { useState } from "react";

export function AllPosts(): JSX.Element {
  const { posts } = useLoaderData() as { posts: PostUser[] };
  //投稿検索機能の実装
  const [search, setSearch] = useState("");
  const filteredPosts = posts.filter((post) => {
    return (
      post.content.toLowerCase().includes(search.toLowerCase()) ||
      post.user.name.toLowerCase().includes(search.toLowerCase())
    );
  });
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSearch(event.target.value);
  };
  return (
    <>
      <div className="main posts-index">
        <div className="container">
          <Form>
            <input
              type="text"
              placeholder="検索"
              value={search}
              onChange={handleChange}
              data-test="search-input"
            />
          </Form>
          <PostList posts={filteredPosts} />
        </div>
      </div>
    </>
  );
}
