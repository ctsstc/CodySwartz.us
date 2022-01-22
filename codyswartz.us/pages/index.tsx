/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/index.module.scss";
import LinkSection from "../components/link-section";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cody Swartz</title>
        {/* <meta name="description" content="Generated by create next app" /> */}
        <link rel="icon" href="/images/favicon.png" />
      </Head>

      <main className={styles.intro}>
        <h1 className={styles.title}>
          Hello there,
          <br /> I’m <em>Cody Swartz</em>
        </h1>

        <p>
          I’m a senior developer from Bend, Oregon. When I’m not busy working, I
          like to snowboard, play video games, or travel around. I am currently
          working with the uptech crew.
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
            { title: "uptech", url: "https://upte.ch/" },
            {
              title: "Bend Custom Homes & Remodeling",
              url: "https://www.bendch.com/",
            },
          ]}
        />

        <LinkSection
          header="Relevant Links"
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
            { title: "Happy Hour" },
            { title: "EZ Menu & Delivery", url: "" },
          ]}
        />

        <LinkSection
          header="Places to Go & Things to See"
          links={[{ title: "Escape this continent" }]}
        />

        {/* <!-- <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeFyCoHrKob0oW3vQL_yTQzsKO0uPuAXqQAAe9HPSVi02BJ2w/viewform?embedded=true" width="640" height="778" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe> --> */}
      </aside>

      {/* <footer className={styles.footer}></footer> */}
    </div>
  );
};

export default Home;
