import Link from "next/link"

export default function HomePage() {
  return (
    <main className="m-6 flex flex-col">
      <header className="w-full">
          <h1 className="mb-3 text-blue-300 text-5xl md:text-7xl lg:text-8xl">Biiig&nbsp;Stretch</h1>
      </header>
      <div className="grid grid-cols-1 mb-10 md:col-span-4 lg:col-span-2">
          <h2 className="text-3xl md:text-4xl lg:text-5xl">is a purposefully small<br/>design-oriented<br/>development studio<br/>based somewhere in<br/>the Pacific Wonderland.</h2>
      </div>
      
      <section className="mb-10">
        <h2 className="text-xs tracking-widest mb-4 text-blue-300">HIGHLIGHTED WORK</h2>
        <ul>
          <Link href="#" target="_blank" className="underline">
            <li>NASA Jet Propulsion Laboratory</li>
          </Link><br/>
          <Link href="https://islamoradafishingguidesandcharters.com/" target="_blank" className="underline">
            <li>Islamorada Fishing Charters</li>
          </Link><br/>
          <Link href="#" target="_blank" className="underline">
            <li>NASA Jet Propulsion Laboratory</li>
          </Link><br/>
          <Link href="https://smallhound.co/" target="_blank" className="underline">
            <li>Small Hound</li>
          </Link><br/>
        </ul>
      </section>

      <section className="flex flex-col md:flex-row w-full">
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
    </main>
  )
}
