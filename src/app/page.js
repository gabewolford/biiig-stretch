import Link from "next/link"

export default function HomePage() {
  return (
    <main className="m-6 flex flex-col">
      <header className="w-full">
          <h1 className="mb-3 text-blue-300 text-5xl md:text-7xl lg:text-8xl">Biiig&nbsp;Stretch</h1>
      </header>
      <div className="grid grid-cols-1 mb-10 md:col-span-4 lg:col-span-2">
          <h2 className="text-3xl md:text-4xl lg:text-5xl">
            <div className="mb-1.5">is a purposefully small</div>
            <div className="mb-1.5">design-oriented</div>
            <div className="mb-1.5">development studio</div>
            <div className="mb-1.5">based in the heart of</div>
            <div className="mb-1.5">the Pacific Wonderland.</div>
          </h2>
      </div>
      
      <section className="mb-10">
        <h2 className="text-xs tracking-widest mb-4 text-blue-300">HIGHLIGHTED WORK</h2>
        <ul>
          <Link href="#" target="_blank" className="chunderline">
            <li>Coming soon...</li>
          </Link><br/>
        </ul>
      </section>

      <section className="flex flex-col md:flex-row w-full mb-10">
        <div className="md:mr-16 mb-10 md:mb-0">
          <h2 className="text-xs tracking-widest mb-4 text-blue-300">SERVICES</h2>
            <ul>
              <li>Full Stack Development</li>
              <li>Front-End Development</li>
              <li>Headless Development</li>
              <li>Marketing & Portfolio Sites</li>
              <li>Domains & Hosting</li>
              <li>Webmaster Services</li>
              <li>Technical SEO</li>
              <li>Consulting & Support</li>
              <li>Digital Strategy</li>
              <li>& more</li>
            </ul>
        </div>
        <div>
          <h2 className="text-xs tracking-widest mb-4 text-blue-300">TECHNOLOGIES</h2>
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
            <li>& more</li>
          </ul>
        </div>
      </section>

      <section className="flex flex-col md:flex-row w-full">
        <div className="md:mr-16 mb-10 md:mb-0">
          <h2 className="text-xs tracking-widest mb-2 text-blue-300">HAVE A JOB FOR US?</h2>
          <Link href="mailto:gabe@biiigstretch.studio">
            <h2 className="chunderline">Get in touch.</h2>
          </Link>
        </div>
      </section>
    </main>
  )
}
