<<<<<<< HEAD
import Link from 'next/link'
import Image from 'next/image'
import { auth, signOut, signIn } from "@/auth";


const Navbar = async() => {
    const session = await auth();
    return (
        <div className='px-5 py-3 bg-white shadow-sm font-work-sans'>
            <nav className='flex justify-between items-center'>
                <Link href="/">
                    <Image src="/logo.png" alt="logo" width={144} height={30}/>
                </Link>
                <div className="flex items-center gap-5 text-black">
                    {session && session?.user ?(
                        <>
                            <Link href='/startup/create'>
                                <span>Create</span>
                            </Link>
                            <form action={async () =>{
                                'use server';
                                await signOut({redirectTo: "/"})
                                }}>
                                <button type="submit">Logout</button>
                            </form>
                            <Link href={`/user/${session?.id}`}>
                                <span>{session?.user?.name}</span>
                            </Link>
                        </>
                    ) : (

                        <form action={async () =>{
                            'use server';
                            await signIn('github')}}>
                            <button type='submit'>
                                Login
                            </button>
                        </form>

                    )}
                </div>
            </nav>
        </div>
    )
    }

export default Navbar

=======
import Link from "next/link";
import Image from "next/image";
import { auth, signIn, signOut } from "@/auth";
import { Github, BadgePlus, LogOut } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Navbar = async () => {
  const session = await auth();

  return (
    <header className="px-5 py-3 bg-white shadow-sm font-work-sans">
      <nav className="flex justify-between items-center">
        <Link href="/">
          <Image src="/logo.png" alt="logo" width={143} height={30} />
        </Link>

        <div className="flex items-center gap-5">
          {session && session?.user ? (
            <>
              <Link
                href="/startup/create"
                className="font-semibold text-black-100"
              >
                <span className="max-sm:hidden">Create</span>
                <BadgePlus className="size-6 sm:hidden" />
              </Link>

              <form
                action={async () => {
                  "use server";
                  await signOut({
                    redirectTo: "/",
                  });
                }}
                className="font-semibold text-red-500 cursor-pointer"
              >
                <button type="submit">
                  <span className="max-sm:hidden">Logout</span>
                  <LogOut className="size-6 sm:hidden text-red-500" />
                </button>
              </form>

              <Link href={`/user/${session?.id}`} className="avatar">
                <Avatar className="size-10">
                  <AvatarImage
                    src={session?.user?.image || ""}
                    alt={session?.user?.name || ""}
                  />
                  <AvatarFallback>UN</AvatarFallback>
                </Avatar>
              </Link>
            </>
          ) : (
            <form
              action={async () => {
                "use server";
                await signIn("github");
              }}
            >
              <Button type="submit" className="login">
                <Github className="size-5 mr-2" />
                Login
              </Button>
            </form>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
>>>>>>> main
