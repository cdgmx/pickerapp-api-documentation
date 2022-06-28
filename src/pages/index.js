import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div 
     >
          <Link
           style={{margin: '0 1rem'}}
            className="button button--secondary button--lg"
            to="https://app.getpostman.com/run-collection/18020859-71c50226-11d7-4a89-984e-a1f1e1088d8e?action=collection%2Ffork&collection-url=entityId%3D18020859-71c50226-11d7-4a89-984e-a1f1e1088d8e%26entityType%3Dcollection%26workspaceId%3D83331614-0d1d-4bb2-9ced-4fd593810509#?env%5Bstaging%5D=W3sia2V5IjoiYmFzZVVybCIsInZhbHVlIjoiaHR0cHM6Ly9hcGktcGNrcmFwcC1zdGFnaW5nLmNvZGVkaXNydXB0b3JzLmNvbTo0MDAzL2FwaSIsImVuYWJsZWQiOnRydWUsInR5cGUiOiJkZWZhdWx0Iiwic2Vzc2lvblZhbHVlIjoiaHR0cHM6Ly9hcGktcGNrcmFwcC1zdGFnaW5nLmNvZGVkaXNydXB0b3JzLmNvbTo0MDAzL2FwaSIsInNlc3Npb25JbmRleCI6MH1d">
            Fork Postman Collection
           
          </Link>
          <></>
          <Link
            className="button button--secondary button--lg"
            to="https://www.postman.com/speeding-shadow-103245/workspace/pickerapp-staging/request/18020859-c379a11f-ec0c-4001-8ef9-37e6fd49c276">
            View Postman Collection
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
