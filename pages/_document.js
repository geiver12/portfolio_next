import Document, { Html, Head, Main, NextScript } from 'next/document'


class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html>
                <Head>
                    <meta name="description" content="Geiver Botelo Portfolio Website"></meta>
                    <title>Geiver Botello</title>

                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.css" />
                    <link rel="icon" type="image/x-icon" href="favicon.ico" />

                </Head>
                <body>
                    <Main />
                    <NextScript />

                </body>
            </Html>
        )
    }
}

export default MyDocument