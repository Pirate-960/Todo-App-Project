// _app.js (in the root directory)
import Layout from '../components/Layout';
import { AuthProvider } from '../context/AuthContext';
import { useEffect } from 'react';
//import { useRouter } from 'next/router';
//import { auth } from '../firebaseConfig';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  /*const router = useRouter();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // User is signed in.
      } else {
        // User is signed out.
        router.push('/auth/signin');
      }
    });

    return () => unsubscribe();
  }, [router]);*/

  return (
    //<AuthProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    //</AuthProvider>
  );
}

export default MyApp;
