import { intro, work, education, projects, openSource } from "@/lib/content";
import type { Intro } from "@/lib/content";
import { Copy } from "@/components/copy";
import Image from "next/image";
import Logo from "@/public/logo.svg";
import { DownloadPDF } from "@/components/download";

export default function Home() {
  return (
    <main className="grid gap-8 max-w-4xl text-sm p-8">
      <Intro intro={intro} />

      <section className="grid gap-4 fade-in-up !delay-300">
        <h2>Work</h2>
        <div className="grid divide-y">
          {work.map((item) => (
            <Item key={item.title} {...item} />
          ))}
        </div>
      </section>

      <section className="grid gap-4 fade-in-up !delay-500">
        <h2>Education</h2>
        <div className="grid divide-y">
          {education.map((item) => (
            <Item key={item.title} {...item} />
          ))}
        </div>
      </section>

      <section className="grid gap-4 fade-in-up !delay-700">
        <h2>Projects</h2>
        <div className="grid divide-y">
          {projects.map((item) => (
            <Item key={item.title} {...item} />
          ))}
        </div>
      </section>

      <section className="grid gap-4 fade-in-up !delay-1000">
        <h2>Open Source</h2>
        <div className="grid divide-y">
          {openSource.map((item) => (
            <Item key={item.title} {...item} />
          ))}
        </div>
      </section>

      <p className="text-muted-foreground text-xs fade-in-up !delay-1000">
        &copy; {new Date().getFullYear()} {intro.name}
      </p>
    </main>
  );
}

interface IntroProps {
  intro: Intro;
}

function Intro({ intro }: IntroProps) {
  return (
    <section className="grid gap-4">
      <Image
        src={Logo}
        alt={intro.name}
        width={48}
        height={39.09}
        className="invert dark:invert-0 mb-8 fade-in-up"
      />

      <h1 className="fade-in-up !delay-100">{intro.name}</h1>

      <div className="dont-print flex gap-4 fade-in-up !delay-200">
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
        <DownloadPDF
          pdfUrl="../resume.pdf"
          fileName={`${intro.name
            .toString()
            .toLowerCase()
            .replace(/\s/g, "_")}_resume_2024.pdf`}
        />
      </div>

      <p className="text-muted-foreground max-w-prose fade-in-up !delay-300">
        {intro.about}
      </p>
    </section>
  );
}

type ItemProps = {
  title: string;
  date?: string;
  description: string[];
  href?: string;
  location?: string;
};

function Item({ title, date, description, href, location }: ItemProps) {
  return (
    <section className="grid sm:grid-cols-[1fr_2fr] py-3 gap-5 sm:gap-2 px-3 -mx-3 hover:bg-muted/50 transition-all">
      <div>
        <h3 className="font-medium mb-4 sm:mb-0">
          {href ? (
            <a href={href} target="_blank" rel="noopener noreferrer">
              {title}
            </a>
          ) : (
            title
          )}
        </h3>
        {date && (
          <p className="text-muted-foreground text-xs sm:text-sm">{date}</p>
        )}
        {location && (
          <p className="text-muted-foreground text-xs sm:text-sm">{location}</p>
        )}
      </div>
      <div className="grid gap-1">
        {description.map((item, i) => (
          <p key={i} className="text-muted-foreground">
            {item}
          </p>
        ))}
      </div>
    </section>
  );
}
