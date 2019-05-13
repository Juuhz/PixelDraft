import Head from 'next/head'

const Page = ({ children, title = 'Desenho feito por AI | Reinaldo Amorim' }) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1, maximum-scale=1, user-scalable=no" />
      <link rel="icon" type="image/png" href="/static/images/ai.png" />
      <link rel="stylesheet" href="/static/css/style.css" />
    </Head>

    {children}
  </div>
);

export default Page;