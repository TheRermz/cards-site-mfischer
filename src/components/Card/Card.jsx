import { useContext } from "react";
import { GlobalCtx } from "../../App";
import { Container } from "./style";

export const Card = () => {
  const theCtx = useContext(GlobalCtx);
  const { state } = theCtx;
  const { postPerPage } = state;

  return (
    <>
      {theCtx.posts.slice(0, postPerPage).map((post) => (
        <Container key={post.id}>
          <h2>{post.title} </h2>
          <p>{post.body}</p>
        </Container>
      ))}
    </>
  );
};
