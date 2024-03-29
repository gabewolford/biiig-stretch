import Image from "next/image";
import "animate.css";
import Technology from "./components/Technology";
import Service from "./components/Service";
import Project from "./components/Project";
import desktopLogo from "../../public/desktop-logo.svg";
import mobileLogo from "../../public/mobile-logo.svg";
import ContactForm from "./components/ContactForm";
import { client } from "../../sanity/lib/client";

export default async function HomePage() {
  const data = await client.fetch(`
  *[type == document && _type == "projects"]{
    name,
    uRL,
    year,
    description,
  } | order(year desc)
  `);

  return (
    <>
      <main className="grid mx-8 mt-14 md:mx-16 lg:mt-40 gap-x-8 grid-cols-2 md:grid-cols-4 lg:grid-cols-12 animate__animated animate__fadeIn animate__slower">
        <header className="col-span-2 md:col-span-6 lg:col-start-2 lg:col-span-12 mb-16 lg:mb-32">
          <h1 className="hidden">Biiig Stretch Studio</h1>
          <Image
            src={desktopLogo}
            alt="Biiig Stretch Studio logo"
            className="hidden md:block w-[650px] animate__animated animate__rubberBand"
            priority={true}
          ></Image>
          <Image
            src={mobileLogo}
            alt="Biiig Stretch Studio logo"
            className="block md:hidden animate__animated animate__rubberBand"
          />
          <section className="text-[28px] w-[310px] md:text-[32px] md:w-[555px]">
            <h2>
              a purposefully small design-minded development studio based in the
              heart of the Pacific Wonderland.
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
              <Service name="eCommerce&nbsp;Sites" />
              <Service name="Portfolio&nbsp;Sites" />
              <Service name="Microsites" />
              <Service name="Landing&nbsp;Pages" />
              <Service name="Web&nbsp;Design" />
              <Service name="Brand&nbsp;Design" />
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
              <Technology name="Next.js" website="https://nextjs.org/" />
              <Technology name="React" website="https://react.dev/" />
              <Technology name="Vue.js" website="https://vuejs.org/" />
              <Technology name="Nuxt" website="https://nuxt.com/" />
              <Technology name="Node" website="https://nodejs.org/" />
              <Technology name="Sanity CMS" website="https://www.sanity.io/" />
              <Technology name="Shopify" website="https://www.shopify.com/" />
              <Technology name="Tailwind" website="https://tailwindcss.com/" />
              <Technology name="Vercel" website="https://vercel.com/" />
              <Technology name="Figma" website="https://www.figma.com/" />
              <li className="hover:text-light-blue">HTML</li>
              <li className="hover:text-light-blue">CSS</li>
              <li className="hover:text-light-blue">Javascript</li>
              <li className="hover:text-light-blue">Typescript</li>
              <li className="hover:text-light-blue">& more</li>
            </ul>
          </section>

          <section className="gap-4">
            <header className="text-gold font-medium liteweight text-2xl md:text-3xl mb-2 md:mb-4">
              Highlighted work
            </header>
            <ul>
              {data?.map((project, index) => (
                <li key={index}>
                  <Project
                    name={project.name}
                    website={project.uRL}
                    year={project.year}
                    description={project.description}
                  />
                </li>
              ))}
            </ul>

            <div className="flex flex-col gap-1 w-full">
              <h3 className="text-[18px] font-semibold">More coming soon...</h3>
            </div>
          </section>
        </div>

        <ContactForm />
      </main>

      <footer className="grid place-content-center mt-16 mb-4">
        <p className="text-sm text-light-blue text-center">
          ©&nbsp;2024&nbsp;Biiig&nbsp;Stretch&nbsp;Studio.&nbsp;All&nbsp;Rights&nbsp;Reserved.
        </p>
      </footer>
    </>
  );
}
