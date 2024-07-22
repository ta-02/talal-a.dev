import Link from "next/link";

export function Header() {
  return (
    <aside className="-ml-[8px] mb-8 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="relative flex scroll-pr-6 flex-row items-start px-0 pb-0 md:relative md:overflow-auto"
          id="nav"
        >
          <div className="flex flex-row space-x-0 pr-10">
            <Link
              href="/"
              className="relative flex px-2 py-1 align-middle transition-all hover:text-neutral-800 dark:hover:text-neutral-200 underline decoration-wavy decoration-[0.1em] underline-offset-4"
            >
              Home
            </Link>
          </div>
        </nav>
      </div>
    </aside>
  );
}
