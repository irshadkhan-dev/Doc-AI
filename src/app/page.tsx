import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <Link href={"/page"}>
      <div className="hover:bg-white w-60 h-40 rounded-sm border-[2px] border-indigo-500 flex items-center justify-center">
        <div className="font-semibold">Create a Blank Docuemt</div>
      </div>
    </Link>
  );
}
