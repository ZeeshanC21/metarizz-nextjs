import { Inter } from "next/font/google";
import Head from "next/head";

// CSS imports
import "../../public/assets/css/responsive.css";
import "../../public/assets/css/style.css";
<script src="https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js" async></script>;

// Plugins
import "../../public/assets/css/plugins/slick-slider/slick.css";
import "../../public/assets/css/plugins/animate.css";
// import "../../public/assets/css/plugins/jquery-ui.css";
import "../../public/assets/css/plugins/magnific-popup.css";
import "../../public/assets/css/plugins/nice-select.min.css";
import "../../public/assets/css/plugins/progress.css";

// Bootstrap
import "bootstrap/dist/css/bootstrap.css";

// Font Awesome
import "@fortawesome/fontawesome-svg-core/styles.css";
import "@fortawesome/react-fontawesome";
import "@fortawesome/free-brands-svg-icons";
import "../../public/assets/img/whatsapp_float_icon.png"; //For Whataspp Icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';//For Whataspp Icon
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';//For Whataspp Icon
import { config } from "@fortawesome/fontawesome-svg-core";
import { GoogleTagManager } from '@next/third-parties/google'

config.autoAddCss = false;

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MetaRizz Technologies | Design, Develop, Market",
  description: "The one stop solution to all your digital problems.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <meta name='keywords' content='Metarizz, Tech Service Agency, Blockchain development, Software development, Android React native Development, Marketing, Ads'></meta>
        <meta name='description' content='MetaRizz helps you right from Blockchain, AI, Web, Mobile App to complete infrastructure development. We design, develop, market to rizz up your digital presence.'></meta>
        <meta name='subject' content='Agency'></meta>
        <meta name='copyright' content='Metarizz'></meta>
        <meta name='language' content='ES'></meta>
        <meta name='robots' content='index,follow'></meta>
        <meta name='revised' content='Thursday, January 4th, 2024, 5:15 pm'></meta>
        <meta name='abstract' content='Agency Services'></meta>
        <meta name='topic' content=''></meta>
        <meta name='summary' content=''></meta>
        <meta name='Classification' content='Business'></meta>
        <meta name='author' content='Ali Solanki, inquire@metarizz.com'></meta>
        <meta name='designer' content='Shafin Shaikh'></meta>
        <meta name='reply-to' content='inquire@metarizz.com'></meta>
        <meta name='owner' content=''></meta>
        <meta name='url' content='https://metarizz.com/'></meta>
        <meta name='identifier-URL' content='https://metarizz.com/'></meta>
        <meta name='directory' content='submission'></meta>
        <meta name='pagename' content='Metarizz Tech Agency - Ali Solanki Metarizz'></meta>
        <meta name='category' content='Tech and Marketing Services'></meta>
        <meta name='coverage' content='Worldwide'></meta>
        <meta name='distribution' content='Global'></meta>
        <meta name='rating' content='General'></meta>
        <meta name='revisit-after' content='7 days'></meta>
        <meta name='subtitle' content='This is my subtitle'></meta>
        <meta name='target' content='all'></meta>
        <meta name='HandheldFriendly' content='True'></meta>
        <meta name='MobileOptimized' content='320'></meta>
        <meta name='date' content='Sep. 27, 2010'></meta>
        <meta name='search_date' content='2010-09-27'></meta>
        <meta name='DC.title' content='Unstoppable Robot Ninja'></meta>
        <meta name='ResourceLoaderDynamicStyles' content=''></meta>
        <meta name='medium' content='blog'></meta>
        <meta name='syndication-source' content='https://mashable.com/2008/12/24/free-brand-monitoring-tools/'></meta>
        <meta name='original-source' content='https://mashable.com/2008/12/24/free-brand-monitoring-tools/'></meta>
        <meta name='verify-v1' content='dV1r/ZJJdDEI++fKJ6iDEl6o+TMNtSu0kv18ONeqM0I='></meta>
        <meta name='y_key' content='1e39c508e0d87750'></meta>
        <meta name='pageKey' content='guest-home'></meta>
        <meta itemprop='name' content='jQTouch'></meta>
        <meta http-equiv='Expires' content='0'></meta>
        <meta http-equiv='Pragma' content='no-cache'></meta>
        <meta http-equiv='Cache-Control' content='no-cache'></meta>
        <meta http-equiv='imagetoolbar' content='no'></meta>
        <meta http-equiv='x-dns-prefetch-control' content='off'></meta>

        {/* Favicon files from favicon.ico */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"></link>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"></link>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"></link>
        <link rel="manifest" href="/site.webmanifest"></link>

        <title>MetaRizz Technologies | Design, Develop, Market</title>
        <link
          rel="icon"
          type="image/x-icon"
          href="../../public/assets/img/icon/tab-icon.png"
        />
        <link
          rel="stylesheet"
          href="https://unpkg.com/flickity@2/dist/flickity.min.css"
        />
        {/* <!-- Font Awesome Css --> */}
        <link
          rel="stylesheet"
          href="../../public/assets/css/plugins/font-awesome/css/all.min.css"
        />
        {/* <!-- Bootstrap Css --> */}
        <link
          rel="stylesheet"
          href="../../public/assets/css/plugins/bootstrap/bootstrap.min.css"
        />
        {/* <!-- Magnific Popup Css --> */}
        <link
          rel="stylesheet"
          href="../../public/assets/css/plugins/magnific-popup.css"
        />
        {/* <!-- Animate Css --> */}
        <link
          rel="stylesheet"
          href="../../public/assets/css/plugins/animate.css"
        />
        {/* <!-- Slick-Slide-Css --> */}
        <link
          rel="stylesheet"
          href="../../public/assets/css/plugins/slick-slider/slick.css"
        />
        {/* <!-- Style Css --> */}
        <link rel="stylesheet" href="../../public/assets/css/style.css" />
        {/* <!-- Responsive Css --> */}
        <link rel="stylesheet" href="../../public/assets/css/responsive.css" />
      </Head>
      <body className={inter.className} data-scroll-animation="false">
        {children}
        {/* WhatsApp Floating Button */}
        <a href="https://wa.link/uapt4q" target="_blank" className="whatsapp_float" title="Chat with us on WhatsApp">
          {/* <img src="../../public/assets/img/whatsapp_float_icon.png" alt="W" /> */}<FontAwesomeIcon icon={faWhatsapp} size="2x" className="whatss_float_img"/>
        </a>
      </body>
      <GoogleTagManager gtmId="GTM-PVX39Z5" />
    </html>
  );
}
