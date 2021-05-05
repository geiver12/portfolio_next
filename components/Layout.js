import Navbar from './Navbar'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import NProgress from 'nprogress'
import Classnames from 'classnames'



const Layout = ({ children, title, footer = true, dark = false }) => {
    const [form, setForm] = useState(true);

    const registerUser = async event => {

        event.preventDefault()

        const res = await fetch('/api/register', {
            body: JSON.stringify({
                name: event.target.name.value,
                email: event.target.email.value,
                message: event.target.message.value
            }),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        })

        const result = await res.json()

        setForm(result.status)
    }

    const router = useRouter();

    useEffect(() => {

        const handleRouteChange = url => {
            NProgress.start();
        }

        router.events.on('routeChangeStart', handleRouteChange)

        router.events.on('routeChangeComplete', () => NProgress.done());
        return () => {
            router.events.off('routeChangeStart', handleRouteChange)
        }
    }, [])

    return (
        <div className={dark ? 'bg-dark' : 'bg-light'}>
            <Navbar />
            <main className='py-4 container'>
                {title && (
                    <h1 className={Classnames('text-center', { 'text-light': dark })}>
                        {title}
                    </h1>
                )}
                {children}
            </main>
            {
                footer && (
                    <footer className="text-light bg-dark pt-4 py-4 container">
                        <section className="row">
                            <div className="col-md-6">
                                {form ?
                                    (
                                        <form className=" pt-4 py-4" onSubmit={registerUser}>
                                            <h1>Contact {form}</h1>
                                            <div className="form-group">
                                                <input type="email" name='email' className="form-control" placeholder="Your Email" />
                                            </div>
                                            <div className="form-group">
                                                <input type="text" name='name' className="form-control" placeholder="Your Name" />
                                            </div>
                                            <div className="form-group">
                                                <textarea className="form-control" name='message' id="exampleFormControlTextarea1" rows="3" placeholder="Content Message"></textarea>
                                            </div>
                                            < button type='submit' className="btn btn-success" >Submit
                                </button>
                                        </form>)
                                    :
                                    (
                                        <h1>Your message is submit successfully!</h1>
                                    )
                                }

                            </div>
                            <div className="col-md-6 d-flex align-items-center float-right">
                                <div className="container p-4">
                                    <h1>&copy; Geiver Botello </h1>
                                    <p>(+58) 414 7275626</p>
                                    <p> 2018 - {new Date().getFullYear()}</p>
                                    <p>All Rights Reseserved!</p>
                                </div>
                            </div>
                        </section>
                    </footer>
                )
            }
        </div>)

}


export default Layout;