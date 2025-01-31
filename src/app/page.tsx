import Link from "next/link";

export default function Home() {
  return (
    <Link href={"/page"}>
      <div className="w-60 h-40 rounded-sm shadow-inset-sm inset-shadow-indigo-500 flex items-center justify-center">
        <div className="font-semibold">Create a Blank Docuemt</div>
      </div>
    </Link>
  );
}
