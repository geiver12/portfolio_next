import Layout from '../components/Layout'
import error from './_error'
import Skeleton from 'react-loading-skeleton';

const Github = ({ user, statusCode }) => {

    if (statusCode) {
        return <Error statusCode={statusCode || <Skeleton />} />
    }

    return (
        <Layout footer dark>
            <div className="row">
                <section className="col-md-12 ">
                    <article className="card card-body rounded">
                        <div className="row">
                            <div className="col-md-6">
                                <div className=" text-center">
                                    <section className="col-md-8 offset-md-2 p-4">
                                    <img src={user.avatar_url || <Skeleton />} alt="not found!" className="card-img-top rounded-circle" />
                                    </section>
                                </div>
                            </div>
                            <div className="col-md-6 p-4">
                                <div className="text-left">
                                    <h1>{user.name || <Skeleton />}</h1>
                                    <p>Location: {user.location || <Skeleton />}</p>
                                    <p>Academic: {user.company || <Skeleton />}</p>
                                    <p>Biography: {user.bio || <Skeleton />}</p>
                                    <p>Followers: {user.followers || <Skeleton />}</p>
                                    <p>Following: {user.following || <Skeleton />}</p>
                                    <p>Repositories: {user.public_repos || <Skeleton />}</p>
                                    <a href={user.html_url || <Skeleton />} target="_blank" className="btn btn-outline-primary my-2">
                                        Go Github!
                        </a>
                                </div>
                            </div>

                        </div>
                    </article>
                </section>
            </div>
        </Layout >
    )
}   

export async function getServerSideProps() {
    const res = await fetch('https://api.github.com/users/geiver12')

    const statusCode = res.status > 200 ? res.status : false

    const data = await res.json()

    return {
        props: {
            user: data,
            statusCode
        }
    }
}

export default Github;