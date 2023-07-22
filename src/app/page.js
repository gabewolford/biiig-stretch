import Link from "next/link"

export default function HomePage() {
  return (
    <main className="m-6 flex flex-col">
      <header className="w-full">
          <h1 className="tracking-wide mb-3 text-blue-300 text-5xl md:text-7xl lg:text-8xl">Biiig&nbsp;Stretch</h1>
      </header>
      <div className="grid grid-cols-1 mb-10 md:col-span-4 lg:col-span-2">
          <h2 className="text-3xl md:text-4xl lg:text-5xl">is a purposefully small<br/>design-oriented<br/>development studio<br/>based somewhere in<br/>the Pacific Wonderland.</h2>
      </div>
      
      <section className="mb-10">
        <h2 className="text-xs tracking-wide mb-4 text-blue-300">HIGHLIGHTED WORK</h2>
        <ul>
          <Link href="#" target="_blank" className="underline mb-1">
            <li className="text-xl">NASA Jet Propulsion Laboratory</li>
          </Link><br/>

          <Link href="https://smallhound.co/" target="_blank" className="underline mb-1">
            <li className="text-xl mb-1">Small Hound</li>
          </Link><br/>

          <Link href="https://islamoradafishingguidesandcharters.com/" target="_blank" className="underline mb-1">
            <li className="text-xl mb-1">Islamorada Fishing Charters</li>
          </Link><br/>
          <Link href="#" target="_blank" className="underline mb-1">
            <li className="text-xl">NASA Jet Propulsion Laboratory</li>
          </Link><br/>

          <Link href="https://smallhound.co/" target="_blank" className="underline mb-1">
            <li className="text-xl mb-1">Small Hound</li>
          </Link><br/>

          <Link href="https://islamoradafishingguidesandcharters.com/" target="_blank" className="underline mb-1">
            <li className="text-xl mb-1">Islamorada Fishing Charters</li>
          </Link><br/>
        </ul>
      </section>

      <section className="flex flex-row w-full">
        <div className="mr-16">
          <h2 className="text-xs tracking-wide mb-4 text-blue-300">SERVICES</h2>
            <ul>
              <li className="text-xs tracking-wide">Full Stack Development</li>
              <li className="text-xs tracking-wide">Front-End Development</li>
              <li className="text-xs tracking-wide">Headless Development</li>
              <li className="text-xs tracking-wide">Marketing & Portfolio Sites</li>
              <li className="text-xs tracking-wide">Domains & Hosting</li>
              <li className="text-xs tracking-wide">Webmaster Services</li>
              <li className="text-xs tracking-wide">Technical SEO</li>
              <li className="text-xs tracking-wide">Consulting & Support</li>
              <li className="text-xs tracking-wide">Digital Strategy</li>
              <li className="text-xs tracking-wide">& more</li>
            </ul>
        </div>
        <div>
          <h2 className="text-xs tracking-wide mb-4 text-blue-300">TECHNOLOGIES</h2>
          <ul>
            <li className="text-xs tracking-wide">NextJS</li>
            <li className="text-xs tracking-wide">React</li>
            <li className="text-xs tracking-wide">Node</li>
            <li className="text-xs tracking-wide">Sanity</li>
            <li className="text-xs tracking-wide">Tailwind</li>
            <li className="text-xs tracking-wide">Vercel</li>
            <li className="text-xs tracking-wide">HTML</li>
            <li className="text-xs tracking-wide">CSS</li>
            <li className="text-xs tracking-wide">Javascript</li>
            <li className="text-xs tracking-wide">& more</li>
          </ul>
        </div>
      </section>

    </main>
  )
}
