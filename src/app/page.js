import Image from "next/image";
import Link from "next/link";
import Technology from "./components/Technology";
import Service from "./components/Service";
import Project from "./components/Project";

export default function HomePage() {
  return (
    <>
      <main className="grid mx-8 mt-14 md:mx-16 lg:mt-40 gap-x-8 grid-cols-2 md:grid-cols-4 lg:grid-cols-12">
        <header className="col-span-2 md:col-span-6 lg:col-start-2 lg:col-span-12 mb-16 lg:mb-32">
          <h1 className="hidden">Biiig Stretch</h1>
          <figure>
            <Image
              src="/desktop-logo.svg"
              width={425}
              height={0}
              alt="Biiig Stretch Studio logo"
              className="hidden md:block"
            ></Image>
            <Image
              src="/mobile-logo.svg"
              width={315}
              height={0}
              alt="Biiig Stretch Studio logo"
              className="block md:hidden"
            ></Image>
          </figure>
          <section className="text-[28px] w-[310px] md:text-[32px] md:w-[555px]">
            <h2>
              a purposefully small design-oriented development studio based in
              the heart of the Pacific Wonderland.
            </h2>
          </section>
        </header>

        <div className="col-start 1 col-span-2 md:col-span-6 lg:col-start-2 lg:col-span-12 flex flex-col lg:flex-row mb-16">
          <section className="mb-8 lg:mr-20">
            <header className="text-gold mb-2 md:mb-4 liteweight text-2xl md:text-3xl">
              Services
            </header>
            <ul>
              <Service name="Full&nbsp;Stack&nbsp;Development" />
              <Service name="Front&nbsp;End&nbsp;Development" />
              <Service name="Headless&nbsp;Development" />
              <Service name="Marketing&nbsp;Sites" />
              <Service name="Portfolio&nbsp;Sites" />
              <Service name="Microsites" />
              <Service name="Landing&nbsp;Pages" />
              <Service name="Web&nbsp;Design" />
              <Service name="Domains&nbsp;&&nbsp;Hosting" />
              <Service name="Webmaster&nbsp;Services" />
              <Service name="Consulting&nbsp;&&nbsp;Support" />
              <Service name="Digital&nbsp;Strategy" />
              <li>& more</li>
            </ul>
          </section>
          <section className="mb-8 lg:mr-36">
            <header className="text-gold mb-2 md:mb-4 liteweight text-2xl md:text-3xl">
              Technologies
            </header>
            <ul>
              <Technology name="Next" website="https://nextjs.org/" />
              <Technology name="React" website="https://react.dev/" />
              <Technology name="Vue" website="https://vuejs.org/" />
              <Technology name="Nuxt" website="https://nuxt.com/" />
              <Technology name="Node" website="https://nodejs.org/" />
              <Technology name="Sanity CMS" website="https://www.sanity.io/" />
              <Technology name="Tailwind" website="https://tailwindcss.com/" />
              <Technology name="Vercel" website="https://vercel.com/" />
              <Technology name="Figma" website="https://www.figma.com/" />
              <li className="hover:text-light-blue">HTML5</li>
              <li className="hover:text-light-blue">CSS / SCSS</li>
              <li className="hover:text-light-blue">Javascript</li>
              <li className="hover:text-light-blue">& more</li>
            </ul>
          </section>

          <section className="gap-4">
            <header className="text-gold font-medium liteweight text-2xl md:text-3xl mb-2 md:mb-4">
              Highlighted work
            </header>
            <div>
              <Project
                name="VERT Outdoors"
                website="https://vert-outdoors.vercel.app/"
                year="2023"
                description="Headless Development, Front End Development, Technical SEO, Digital Strategy, Webmaster Services, Domains & Hosting, Nuxt, Sanity, Tailwind, Figma, Vercel"
              />
              <Project
                name="Islamorada Fishing Guides"
                website="https://islamoradafishingguidesandcharters.com/"
                year="2023"
                description="Headless Development, Front End Development, Site Migration, Technical SEO, Digital Strategy, Webmaster Services, Domains & Hosting, NextJS, React, Sanity, Tailwind, Figma, Vercel"
              />
              <Project
                name="Team Oregon"
                website="https://team-oregon.vercel.app/"
                year="2023"
                description="Full Stack Development, Headless Development, Web Design, Technical SEO, Digital Strategy, Webmaster Services, Domains & Hosting, NextJS, React, Sanity, NextAuth, MongoDB, Paypal, Tailwind, Figma, Vercel"
              />
              <Project
                name="Small Hound"
                website="https://smallhound.co/"
                year="2023"
                description="Front-End Development, Webmaster Services, Domains & Hosting, NextJS, React, Tailwind, Figma, Vercel"
              />
            </div>
            <article className="flex flex-col gap-1 w-full">
              <h3 className="text-[18px] font-semibold">More coming soon...</h3>
            </article>
          </section>
        </div>

        <section className="col-span-2 md:col-span-6 lg:col-start-2 lg:col-span-12">
          <header className="text-gold font-medium liteweight text-2xl md:text-3xl mb-2 md:mb-4">
            Got a project for us?
          </header>
          <span>
            <Link
              href="mailto:hello@biiigstretch.studio"
              className="hover:text-light-blue"
            >
              hello@biiigstretch.studio
            </Link>
          </span>
        </section>
      </main>

      <footer className="grid place-content-center mt-16 mb-4">
        <p className="text-sm text-light-blue text-center">
          ©&nbsp;2023&nbsp;Biiig&nbsp;Stretch&nbsp;Studio.&nbsp;All&nbsp;Rights&nbsp;Reserved.
        </p>
      </footer>
    </>
  );
}
