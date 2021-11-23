import React from 'react';
import '../styles/globals.css'
import '../assets/antd.less'
import '../styles/styles.css'
import { wrapper } from "../store/index"

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default wrapper.withRedux(MyApp);
