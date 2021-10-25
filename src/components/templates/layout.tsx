import type { FC, ReactNode } from "react";
import Head from "next/head";

import Footer from "../organisms/footer";
import Header from "../organisms/header";

const DefaultDescription = "共同開発鯖のホームぺージ";

interface Information {
  PageTitle: string;
  PageDescription: string;
}

type Props = {
  PageTitle: string;
  PageDescription?: string;
  children: ReactNode;
};

const Metas: FC = () => (
  <>
    <meta charSet="utf-8" />
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <meta name="theme-color" content="#ffffff" />
  </>
);

const SeoMetas: FC<Information> = ({ PageTitle, PageDescription }) => (
  <>
    <meta name="name" content={PageTitle} />
    {/* <meta name="image" content="" /> */}
    <meta name="description" content={PageDescription} />
  </>
);

const OgpMetas: FC<Information> = ({ PageTitle, PageDescription }) => (
  <>
    <meta property="og:title" content={PageTitle} />
    <meta property="og:description" content={PageDescription} />
    {/* <meta property="og:image" content="" />
      <meta property="og:image:alt" content="共同開発鯖" /> */}
    <meta property="og:site_name" content="共同開発鯖" />
  </>
);

const TwitterMetas: FC<Information> = ({ PageTitle, PageDescription }) => (
  <>
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content={PageTitle} />
    <meta name="twitter:description" content={PageDescription} />
    {/* <meta name="twitter:image" content="" /> */}
  </>
);

const Layout: FC<Props> = ({ PageTitle, children, PageDescription = DefaultDescription }) => (
  <>
    <Head>
      <title>{PageTitle}</title>
      <Metas />
      <SeoMetas PageTitle={PageTitle} PageDescription={PageDescription} />
      <OgpMetas PageTitle={PageTitle} PageDescription={PageDescription} />
      <TwitterMetas PageTitle={PageTitle} PageDescription={PageDescription} />
    </Head>
    <main>
      <div>
        <Header />
        {children}
      </div>
      <Footer />
    </main>
  </>
);

Layout.defaultProps = {
  PageDescription: DefaultDescription,
};

export default Layout;
