import SEO from "../components/SEO";
import "../styles/globals.css";
const Noop = ({ children }) => <>{children}</>;

function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout || Noop;
  return (
    <Layout pageProps={pageProps}>
      <SEO />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
