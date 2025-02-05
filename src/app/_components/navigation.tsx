import Link from "next/link";

export default function Headingnav() {
  return (
    <nav className="flex justify-between items-center p-4 bg-white shadow-md text-indigo-800">
       <div className="flex gap-6">
        <Link className="hover:text-indigo-500 transition-colors" href="/">Home</Link>
        <Link className="hover:text-indigo-500 transition-colors" href="/about">About</Link>
        <Link className="hover:text-indigo-500 transition-colors" href="/contact">Contact</Link>
      </div>
    </nav>
  );
}
