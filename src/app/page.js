import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  return (
    <main className="grid mx-8 my-14 md:mx-16 lg:my-40 gap-x-8 grid-cols-2 md:grid-cols-4 lg:grid-cols-12">
      
      <header className="col-span-2 md:col-span-4 lg:col-start-2 lg:col-span-12 mb-16 lg:mb-32">
          <h1 className="hidden">Biiig Stretch</h1>
          <figure classNa>
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
    
      <div className="grid col-span-2 lg:col-start-2 md:col-span-6 md:gap-8 mb-8 md:mb-12">
        <section className="col-start-1 flex flex-col mb-8">
          <header className="text-gold text-2xl font-medium md:text-4xl lg:text-5xl mb-2 md:mb-4">Services</header>
            <ul>
              <li>Full Stack Development</li>
              <li>Front-End Development</li>
              <li>Headless Development</li>
              <li>Marketing & Portfolio Sites</li>
              <li>Landing Pages</li>
              <li>Domains & Hosting</li>
              <li>Webmaster Services</li>
              <li>Technical SEO</li>
              <li>Consulting & Support</li>
              <li>Digital Strategy</li>
              <li>& more</li>
            </ul>
        </section>
        <section className="col-start-1 md:col-start-2 lg:col-start-4 flex flex-col">
          <header className="text-gold text-2xl font-medium md:text-4xl lg:text-5xl mb-2 md:mb-4">Technologies</header>
            <ul>
              <li>NextJS</li>
              <li>React</li>
              <li>Node</li>
              <li>Sanity</li>
              <li>Tailwind</li>
              <li>Vercel</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript</li>
              <li>Typescript</li>
              <li>& more</li>
            </ul>
        </section>
      </div>

      <section className="grid col-span-2 md:col-span-4 lg:col-start-2 lg:col-span-12 gap-4">
        <header className="text-gold text-[2rem] font-medium md:text-4xl lg:text-5xl">Highlighted work</header>
        <article className="flex flex-col gap-1 w-full">
          <Link
            href="https://islamoradafishingguidesandcharters.com"
            className="text-[18px] font-semibold"
          >
            Islamorada Fishing Guides
          </Link>
          <p className="text-sm">Full Stack Development, Webmaster Services, Domains & Hosting, NextJS, React, Sanity, Vercel</p>
          <p className="text-sm">2023</p>
        </article>

        <article className="flex flex-col gap-1 w-full">
          <Link
            href="https://islamoradafishingguidesandcharters.com"
            className="text-[18px] font-semibold"
          >
            Islamorada Fishing Guides
          </Link>
          <p className="text-sm">Full Stack Development, Webmaster Services, Domains & Hosting, NextJS, React, Sanity, Vercel</p>
          <p className="text-sm">2023</p>
        </article>

        <article className="flex flex-col gap-1 w-full">
          <Link
            href="https://islamoradafishingguidesandcharters.com"
            className="text-[18px] font-semibold"
          >
            Islamorada Fishing Guides
          </Link>
          <p className="text-sm">Full Stack Development, Webmaster Services, Domains & Hosting, NextJS, React, Sanity, Vercel</p>
          <p className="text-sm">2023</p>
        </article>

        <article className="flex flex-col gap-1 w-full">
          <Link
            href="https://islamoradafishingguidesandcharters.com"
            className="text-[18px] font-semibold"
          >
            Islamorada Fishing Guides
          </Link>
          <p className="text-sm">Full Stack Development, Webmaster Services, Domains & Hosting, NextJS, React, Sanity, Vercel</p>
          <p className="text-sm">2023</p>
        </article>
      </section>
  
    </main>
  )
}
