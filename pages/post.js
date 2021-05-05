import Layout from "../components/Layout";
import { useRouter } from "next/router";
import { posts } from "../profile";
import Skeleton from 'react-loading-skeleton';
import Link from 'next/link';

const Post = () => {
  const router = useRouter();

  const currentPost = posts.filter(
    (post) => post.title === router.query.title
  )[0];

  return (
    <Layout title={router.query.title || <Skeleton /> }  dark >
      <div className="text-center text-light">
        <img
        src={currentPost && currentPost.imageURL || <Skeleton />}
          alt=""
          style={{ width: "100%" || <Skeleton /> }}
          className="img-fluid"
        />
        <p className="p-4">{ currentPost && currentPost.content || <Skeleton />}</p>
        <Link href="/certification">
          <a className="btn  btn-danger" >Return!</a>
        </Link>
      </div>
    </Layout>
  )
};

export default Post;