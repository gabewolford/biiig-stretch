import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  return (
    <main className="m-6 flex flex-col">
      <header className="w-full">
          <h1 className="hidden">Biiig Stretch</h1>
          <Image 
            src="/desktop-logo.svg"
            width={417}
            height={0}
            alt="Biiig Stretch Studio logo"
          >
          </Image>
      </header>
      <div className="grid grid-cols-1 mb-10 md:col-span-4 lg:col-span-2">
          <h2 className="md:text-[2rem]">
            <div>is a purposefully small design-oriented</div>
            <div>development studio based in the heart</div>
            <div>the Pacific Wonderland.</div>
          </h2>
      </div>
      
      <section className="mb-10">
        <h2 className="text-xs tracking-widest mb-4 text-gold">HIGHLIGHTED WORK</h2>
        <ul>
          <Link href="#" target="_blank" className="chunderline">
            <li>Coming soon...</li>
          </Link><br/>
        </ul>
      </section>

      <section className="flex flex-col md:flex-row w-full mb-10">
        <div className="md:mr-16 mb-10 md:mb-0">
          <h2 className="text-xs tracking-widest mb-4 text-gold">SERVICES</h2>
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
        </div>
        <div>
          <h2 className="text-xs tracking-widest mb-4 text-gold">TECHNOLOGIES</h2>
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
        </div>
      </section>

      <section className="flex flex-col md:flex-row w-full">
        <div className="md:mr-16 mb-10 md:mb-0">
          <h2 className="text-xs tracking-widest mb-2 text-gold">HAVE A JOB FOR US?</h2>
          <Link href="mailto:gabe@biiigstretch.studio">
            <h2 className="chunderline">Get in touch.</h2>
          </Link>
        </div>
      </section>
    </main>
  )
}
