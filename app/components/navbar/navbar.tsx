//import nextjs essentials
import Link from "next/link";
import { SearchProgram } from "../searchProgram/searchProgram";
export function Navbar() {
  return (
    <nav className="nav__bg">
      <div className="w-[90%] mx-auto">
        <div className="flex items-center justify-between">
          <Link className="flex items-center gap-2 text-white" href={"/"}>
            <svg
              className="w-12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 128 128"
            >
              <path
                d="M64 128c35.346 0 64-28.654 64-64S99.346 0 64 0 0 28.654 0 64s28.654 64 64 64z"
                fill="#2ca01c"
              />
              <path
                d="M17.778 64a24.889 24.889 0 0 0 24.889 24.889h3.555v-9.245h-3.555a15.645 15.645 0 1 1 0-31.289H51.2v48.356a9.248 9.248 0 0 0 9.244 9.245V39.111H42.667A24.889 24.889 0 0 0 17.777 64zm67.555-24.889h-3.555v9.245h3.555a15.645 15.645 0 0 1 0 31.288H76.8V31.29a9.244 9.244 0 0 0-9.244-9.245V88.89h17.777a24.888 24.888 0 0 0 0-49.778z"
                fill="#fff"
              />
            </svg>
            <span className="text-xl font-semibold">QBHelp</span>
          </Link>
          <ul>
            <li className="text-white">
              <Link href="/blogs font-medium">Blog</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col mt-10 md:w-[700px] md:mx-auto">
          <h1 className="text-white font-semibold text-xl md:text-3xl">
            Download Quickbooks, Photoshop, IDM, games, coreldraw, and office.
            <br />
            Whatsapp: +1(315)284-1484
          </h1>
          <SearchProgram />
        </div>
      </div>
    </nav>
  );
}
