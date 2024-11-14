import { intro, work, education, projects, openSource } from "@/lib/content";
import { Copy } from "./copy";

import Image from "next/image";
import Logo from "@/public/logo.svg";

export default function Home() {
  return (
    <main className="grid gap-8 max-w-4xl text-sm p-8">
      <Intro intro={intro} />

      <section className="grid gap-4">
        <h2>Work</h2>
        <div className="grid divide-y">
          {work.map((item) => (
            <Item key={item.title} {...item} />
          ))}
        </div>
      </section>

      <section className="grid gap-4">
        <h2>Education</h2>
        <div className="grid divide-y">
          {education.map((item) => (
            <Item key={item.title} {...item} />
          ))}
        </div>
      </section>

      <section className="grid gap-4">
        <h2>Projects</h2>
        <div className="grid divide-y">
          {projects.map((item) => (
            <Item key={item.title} {...item} />
          ))}
        </div>
      </section>

      <section className="grid gap-4">
        <h2>Open Source</h2>
        <div className="grid divide-y">
          {openSource.map((item) => (
            <Item key={item.title} {...item} />
          ))}
        </div>
      </section>

      <p className="text-muted-foreground text-xs">
        © {new Date().getFullYear()} {intro.name}
      </p>
    </main>
  );
}

const Intro = ({ intro }: any) => {
  return (
    <section className="grid gap-4">
      <Image
        src={Logo}
        alt={intro.name}
        width={48}
        height={39.09}
        className="invert dark:invert-0 mb-8 fade-in-up !delay-200"
      />

      <h1>{intro.name}</h1>

      <div className="dont-print flex gap-4">
        <a href={intro.href} target="_blank">
          Portfolio
        </a>
        <a href={intro.github} target="_blank">
          Github
        </a>
        <a href={intro.linkedin} target="_blank">
          LinkedIn
        </a>
        <Copy text={intro.email}>Email</Copy>
      </div>

      <p className="text-muted-foreground max-w-prose">{intro.about}</p>
    </section>
  );
};

const Item = ({
  title,
  date,
  description,
  href,
  location,
}: {
  title: string;
  date?: string;
  description: string[];
  href?: string;
  location?: string;
}) => {
  return (
    <section className="grid sm:grid-cols-[1fr_2fr] py-3 gap-2 px-3 -mx-3 hover:bg-muted/50 transition-all">
      <div>
        <h3 className="font-medium">
          {href ? (
            <a href={href} target="_blank" rel="noopener noreferrer">
              {title}
            </a>
          ) : (
            title
          )}
        </h3>
        {date && <p className="text-muted-foreground text-xs mt-1">{date}</p>}
        {location && (
          <p className="text-muted-foreground text-xs">{location}</p>
        )}
      </div>

      <ul>
        {description.map((item) => (
          <li
            key={item}
            className="grid grid-cols-[auto_1fr] items-baseline gap-1"
          >
            <p className="text-muted-foreground/50 text-xs">{">"}</p>{" "}
            <p>{item}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};
