// src/pages/_app.js
// import '/var/www/cases/datacase/styles/globals.css'; // Adjust the path based on your directory structure
import '../../styles/global.css';

function MyApp({ Component, pageProps }) {
    return (
        <Component {...pageProps} />
    );
}

export default MyApp;
