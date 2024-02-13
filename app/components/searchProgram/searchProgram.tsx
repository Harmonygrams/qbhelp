"use client";
import { useState } from "react";
import Link from "next/link";
import { Url } from "next/dist/shared/lib/router/router";
import { IoLogoWhatsapp } from "react-icons/io";
import { ImSearch } from "react-icons/im";

export function SearchProgram() {
  const whatsappLink: Url = process.env.NEXT_PUBLIC_WHATSAPP_LINK as string;
  const [query, setQuery] = useState({});
  function handleSubmit() {}
  return (
    <form
      className="mt-4 md:mt-6 flex bg-white px-4 rounded-lg items-center gap-4"
      onSubmit={handleSubmit}
    >
      <Link href={whatsappLink} className="text-green-500">
        <IoLogoWhatsapp className="text-2xl" />
      </Link>
      <input
        className="w-full py-3  border-none outline-none text-gray-600"
        placeholder="Search for quickbooks software"
        onChange={(ev) => {
          ev.target.value;
        }}
      />
      <button>
        <ImSearch className="text-gray-600" />
      </button>
    </form>
  );
}
