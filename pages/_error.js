import Layout from '../components/Layout'
import Link from 'next/link'

const _error = ({ statusCode }) => {
    return (
        <Layout>
            {
                statusCode ? (
                    <p className="text-center">Could not Load your Page. status Code :{statusCode    } </p>
                ):(
                    <p className="text-center">Could not get this Page. </p>
                )
            }
        </Layout>
    )
}

export default _error;