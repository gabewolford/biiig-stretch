import Link from "next/link"

export default function Project({ url, title, description, year }) {
  return (
        <article className="flex flex-col gap-1 mb-2 w-full">
            <Link
              href={url}
              className="text-[18px] font-medium hover:text-light-blue"
              target="_blank"
            >
              {title}
            </Link>
            <p className="text-sm">{description}</p>
            <p className="text-xs text-light-blue">{year}</p>
        </article>
  )
}
