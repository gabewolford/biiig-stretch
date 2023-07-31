import Image from "next/image"
import Link from "next/link"

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
            >
            </Image>
            <Image 
              src="/mobile-logo.svg"
              width={315 }
              height={0}
              alt="Biiig Stretch Studio logo"
              className="block md:hidden"
            >
            </Image>
          </figure>
          <section className="text-[28px] w-[310px] md:text-[32px] md:w-[555px]">
            <h2>a purposefully small design-oriented development studio based in the heart of the Pacific Wonderland.</h2>
          </section>
      </header>
    

      <div className="col-start 1 col-span-2 md:col-span-6 lg:col-start-2 lg:col-span-12 flex flex-col lg:flex-row mb-16">
        <section className="mb-8 lg:mr-20">
          <header className="text-gold mb-2 md:mb-4 liteweight text-2xl md:text-3xl">Services</header>
            <ul>
              <li>Full&nbsp;Stack&nbsp;Development</li>
              <li>Front-End&nbsp;Development</li>
              <li>Headless&nbsp;Development</li>
              <li>Marketing&nbsp;&&nbsp;Portfolio&nbsp;Sites</li>
              <li>Landing&nbsp;Pages</li>
              <li>eCommerce&nbsp;Sites</li>
              <li>Domains&nbsp;&&nbsp;Hosting</li>
              <li>Webmaster&nbsp;Services</li>
              <li>Technical&nbsp;SEO</li>
              <li>Consulting&nbsp;&&nbsp;Support</li>
              <li>Digital&nbsp;Strategy</li>
              <li>& more</li>
            </ul>
        </section>
        <section className="mb-8 lg:mr-36">
          <header className="text-gold mb-2 md:mb-4 liteweight text-2xl md:text-3xl">Technologies</header>
            <ul>
              <li>NextJS</li>
              <li>React</li>
              <li>Node</li>
              <li>Sanity</li>
              <li>Hydrogen</li>
              <li>Tailwind</li>
              <li>Vercel</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript</li>
              <li>Typescript</li>
              <li>& more</li>
            </ul>
        </section>

        <section className="gap-4">
          <header className="text-gold font-medium liteweight text-2xl md:text-3xl mb-2 md:mb-4">Highlighted work</header>
          <article className="flex flex-col gap-1 mb-2 w-full">
            <Link
              href="https://islamoradafishingguidesandcharters.com"
              className="text-[18px] font-medium hover:text-light-blue"
              target="_blank"
            >
              Islamorada Fishing Guides
            </Link>
            <p className="text-sm">Headless Development, Information Architecture, Site Migration, Technical SEO, Digital Strategy, Webmaster Services, Domains & Hosting, NextJS, React, Sanity, Tailwind, Vercel</p>
            <p className="text-xs text-light-blue">2023</p>
          </article>
          <article className="flex flex-col gap-1 mb-4 w-full">
            <Link
                href="https://teamoregon.net"
                className="text-[18px] font-medium hover:text-light-blue"
                target="_blank"
              >
                Team Oregon
              </Link>
              <p className="text-sm">Full Stack Development, Technical SEO, Digital Strategy, Webmaster Services, Domains & Hosting, NextJS, React, Tailwind, Vercel</p>
              <p className="text-xs text-light-blue">in progress</p>
          </article>
          <article className="flex flex-col gap-1 mb-4 w-full">
            <Link
                href="https://smallhound.co"
                className="text-[18px] font-medium hover:text-light-blue"
                target="_blank"
              >
                Small Hound
              </Link>
              <p className="text-sm">Front-End Development, Webmaster Services, Domains & Hosting, NextJS, React, Tailwind, Vercel</p>
              <p className="text-xs text-light-blue">in progress</p>
          </article>
          <article className="flex flex-col gap-1 w-full">
            <h3 className="text-[18px] font-semibold">More coming soon...</h3>      
          </article>
        </section>
      </div>

      <section className="col-span-2 md:col-span-6 lg:col-start-2 lg:col-span-12">
        <header className="text-gold font-medium liteweight text-2xl md:text-3xl mb-2 md:mb-4">Got a project for us?</header>
        <span><Link href="mailto:hello@biiigstretch.studio" className="hover:text-light-blue">hello@biiigstretch.studio</Link></span>
      </section>
      
    </main>
    
    <footer className="grid place-content-center mt-16 mb-4">
        <p className="text-sm text-light-blue text-center">©&nbsp;2023&nbsp;Biiig&nbsp;Stretch&nbsp;Studio.&nbsp;All&nbsp;Rights&nbsp;Reserved.</p>
    </footer>
    </>
  )
}
