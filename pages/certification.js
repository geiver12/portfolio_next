import Layout from '../components/Layout'
import { posts } from '../profile';
import Link from 'next/link';

const PostCard = ({ post }) => (
  <div className="col-md-6">
    <div className="card">
      <div className="overflow">
        <img src={post.imageURL} alt="" className="card-img-top" />
      </div>
      <div className="card-body">
        <h1>{post.title}</h1>
        <p>{post.content}</p>
        <Link href={`/post?title=${post.title}`}>
          <button className="btn btn-outline-primary">Show</button>
        </Link>
      </div>
    </div>
  </div>
);

const Blog = () => (
  <Layout footer dark title="My Certifications!">
    <div className="row pt-4">
      {posts.map((post, i) => (
        <PostCard post={post} key={i} />
      ))}
    </div>
  </Layout>
)

export default Blog;