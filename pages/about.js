import Layout from '../components/Layout'
import Link from 'next/link'

const about = () => (
    <Layout footer dark title="My Experiences">
        <div className="">
            <div className="card">
                <div className="card-body">
                    <div className="container p-4">
                        <div className="row">
                            <div>
                                <p> <b>-</b> Skills in creation of games 2D in java,js and others. </p>
                                <p> <b>-</b> Knowledge in heuristic algorithms A*,A+.</p>
                                <p> <b>-</b> Data structures such as trees, graphs, stacks, queues, etc.</p>
                                <p><b>- Dependency handling in Node</b> Express (session, validator), Jes, bcryptjs, jwt, morgan, multer, uuid, pm2, webpack </p>
                                <p> <b>-</b> Icons with mdi and font-awesome</p>
                                <p> <b>-</b> Integration of payment gateways such as paypal or stripe</p>
                                <p> <b>-</b> API rest and restfull in lenguages how sql(mysql) or nosql(MONGODB)</p>
                                <p> <b>-</b> Frontend developer with css or react.js through mockups or pdf models</p>
                            </div>
                        </div>
                    </div>
                    <Link href="/">
                        <a className="btn btn-danger">Return</a>
                    </Link>
                </div>
            </div>
        </div>
    </Layout>
)

export default about;