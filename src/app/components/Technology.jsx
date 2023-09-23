import Link from "next/link";

export default function Technology({ name, website }) {
  return (
    <Link href={website}>
      <li className="hover:text-light-blue">{name}</li>
    </Link>
  );
}
