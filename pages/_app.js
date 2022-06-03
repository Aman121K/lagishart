
import React, { useEffect } from 'react'
import Layout from '../componenet/Layout';
import 'antd/dist/antd.css';
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
const App = ({ Component, pageProps }) => {
  return (
    <>
     <Layout>
   <Component {...pageProps} className="mrg45"/>   </Layout>
    </>
  )
}

export default App