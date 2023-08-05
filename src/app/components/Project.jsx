import Link from "next/link"

export default function Project({ projectData }) {
  let website, name, description, year, card;
  if (projectData) {
      website = projectData.website
      name = projectData.name
      description = projectData.description
      year = projectData.year

      card = <article className="flex flex-col gap-1 mb-2 w-full">
                <Link
                  href={website}
                  className="text-[18px] font-medium hover:text-light-blue"
                  target="_blank"
                >
                  {name}
                </Link>
                <p className="text-sm">{description}</p>
                <p className="text-xs text-light-blue">{year}</p>
            </article>
  }

  return (
      <>
        {card}
      </>
  )
}
