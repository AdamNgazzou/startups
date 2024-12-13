<<<<<<< HEAD
'use client';
import { X } from 'lucide-react';
import Link from 'next/link';
const SearchFormReset = () => {
    const reset = () => {
        const form = document.querySelector('search-form') as HTMLFormElement;
        if (form) form.reset();
    }
  return (
        <button type="reset" onClick={reset}>
            <Link href='/' className='search-btn text-white'>
              <X className='size-5'/>
            </Link>
        </button>
  )
}

export default SearchFormReset
=======
"use client";

import Link from "next/link";
import { X } from "lucide-react";

import { Button } from "@/components/ui/button";

const SearchFormReset = () => {
  const reset = () => {
    const form = document.querySelector(".search-form") as HTMLFormElement;
    if (form) form.reset();
  };

  return (
    <Button type="reset" asChild onClick={reset}>
      <Link href="/" className="search-btn">
        <X className="size-5 text-white" />
      </Link>
    </Button>
  );
};

export default SearchFormReset;
>>>>>>> main
