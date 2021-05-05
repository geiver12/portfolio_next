import Link from 'next/link';
import Layout from '../components/Layout'
import { skills, experiences, projects } from '../profile';

const Index = () => (
    <Layout dark >
        <header className="row">
            <div className="col-md-12">
                <div className="card card-body bg-light ">
                    <div className="row">
                        <section className="col-md-3">
                            <img src="perfil.jpg" className="card-img-top rounded-circle" alt="not found!" />
                        </section>
                        <div className="col-md-9">
                            <div className="p-4">
                                <h1>Geiver Botello</h1>
                                <h3>Software Developer!</h3>
                                <p>I am a software developer with experience in creating websites using W3C, HTML, CSS standards, complementing with the use of technologies such as Javascript, PHP, among others.

I seek the adaptability, scalability and readability of the client's needs, trying to offer quality in the final product.</p>
                                <Link href="/about">
                                    <a className="btn  btn-success" >About More!</a>
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </header>
        {/* Skills and Experience*/}
        <section className="row py-4">

            <div className="col-md-4">
                <div className="card bg-light">
                    <div className="card-body">
                        <h1>Skills</h1>

                        {
                            skills.map(({ skill, percentage }, i) => (

                                <div className="py-3" key={i}>
                                    <h5>{skill}</h5>
                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" style={{ width: `${percentage}` }}
                                            aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>

                            ))
                        }
                        <Link href="/about">
                            <a className="btn  btn-success" >View More!</a>
                        </Link>

                    </div>
                </div>
            </div>
            <div className="col-md-8">
                <div className="card bg-light">
                    <div className="card-body">
                        <h1>Experience</h1>
                        <ul>
                            {
                                experiences.map(({ title, description, from, to }, i) => (
                                    <li key={i}>
                                        <h3>{title}</h3>
                                        <h5>{from} - {to}</h5>
                                        <p>{description}</p>
                                    </li>

                                ))
                            }
                        </ul>

                    </div>

                </div>

            </div>
        </section>
        {/* Portfolio*/}
        <section className="row py-4">
            <div className="col-md-12">
                <div className="bg-dark">
                    <div className="row">
                        <div className="col-md-12 py-4 pt-4">
                            <h1 className="text-center text-light">Portfolio</h1>
                        </div>
                        {
                            projects.map((project, i) => (
                                <div className="col-md-4 p-2" key={i}>
                                    <div className="card h-100"  >
                                        <div className="overflow">
                                            <img src={`${project.image}`} alt="img not found" className="card-img-top "></img>
                                        </div>
                                        <div className="card-body">
                                            <h3>{project.name}</h3>
                                            <p>{project.description}</p>
                                            <a href={project.url} target="_blank" className="btn btn-outline-secondary my-2">
                                                Know More!
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                </div>

            </div>
        </section>


    </Layout>
)

export default Index;