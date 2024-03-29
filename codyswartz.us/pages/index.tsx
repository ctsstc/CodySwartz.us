/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import Head from 'next/head';

import LinkSection from '../components/link-section';
import styles from '../styles/index.module.scss';

const Home: NextPage = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div>
      <Head>
        <title>Cody Swartz</title>
        {/* <meta name="description" content="Generated by create next app" /> */}
        <link rel="icon" href="/images/favicon.png" />
      </Head>

      <div className={styles.container}>
        <main className={styles.intro}>
          <h1 className={styles.title}>
            Hello there,
            <br /> I'm <em>Cody Swartz</em>
          </h1>

          <p>
            I'm a senior developer born and raised in Bend, Oregon. When I'm not
            busy working, I like to snowboard, play video games, or travel
            around. I am currently working with the Uptech Studio crew.
          </p>
          <img
            className={styles.snowboarder}
            alt="snowboarder avatar giving a thumbs up"
            src="/images/snowboarder.svg"
          ></img>
        </main>

        <aside className={styles.links}>
          <LinkSection
            header="What I'm Working On"
            links={[
              { title: "Uptech Studio", url: "https://upte.ch/" },
              {
                title: "Discord Chat with Logic Happens",
                url: "https://github.com/LogicHappens",
              },
              // {
              //   title: "Bend Custom Homes & Remodeling",
              //   url: "https://www.bendch.com/",
              // },
            ]}
          />

          <LinkSection
            header="Social & Community"
            links={[
              {
                title: "LinkedIn",
                url: "https://www.linkedin.com/in/codyswartz/",
              },
              { title: "GitHub", url: "https://github.com/ctsstc" },
              {
                title: "StackOverflow",
                url: "https://stackoverflow.com/users/349659/cts-ae",
              },
            ]}
          />

          <LinkSection
            header="Side Projects & Dreams"
            links={[
              {
                title: "Kumoricon Website & IT Crew",
                url: "https://www.kumoricon.org/",
              },
              { title: "Happy Hour" },
              { title: "EZ Menu & Delivery" },
            ]}
          />

          <LinkSection
            header="Places to Go & Things to See"
            links={[{ title: "Escape this continent" }]}
          />

          <LinkSection
            header="Classically Trained"
            links={[
              {
                title: "Last Decade's Site",
                url: "/wp",
              },
            ]}
          />

          {/* <!-- <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeFyCoHrKob0oW3vQL_yTQzsKO0uPuAXqQAAe9HPSVi02BJ2w/viewform?embedded=true" width="640" height="778" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe> --> */}
        </aside>
      </div>

      <div className={styles.container}>
        <span>&copy; 2012-{currentYear} Cody Swartz. All rights reserved.</span>
      </div>

      {/* <footer className={styles.footer}></footer> */}
    </div>
  );
};

export default Home;
