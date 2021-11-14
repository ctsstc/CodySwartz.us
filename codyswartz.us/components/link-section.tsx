import style from "./link-section.module.scss";

type Link = { title: string; url?: string };

const LinkSection = ({ header, links }: { header: string; links: Link[] }) => {
  const linkItems = links.map(({ title, url }, i) => (
    <li key={i} className={style.listItem}>
      <a className={style.link} href={url}>
        {title}
      </a>
    </li>
  ));

  return (
    <>
      <h3 className={style.header}>{header}</h3>
      <ul className={style.links}>{linkItems}</ul>
    </>
  );
};

export default LinkSection;
