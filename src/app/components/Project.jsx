import Link from "next/link";

export default function Project({ website, name, description, year }) {
  const card = (
    <div className="flex flex-col gap-1 mb-4 md:mb-6 w-full">
      <Link
        href={website}
        className="text-[18px] font-medium hover:text-light-blue"
        target="_blank"
      >
        {name}
      </Link>
      <p className="text-xs text-light-blue">{year}</p>
      <p className="text-sm">{description}</p>
    </div>
  );

  return <>{card}</>;
}
