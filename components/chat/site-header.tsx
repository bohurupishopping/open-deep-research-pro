import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export function Header() {
  const router = useRouter();

  const handleNewChat = () => {
    if (window.location.pathname === "/") {
      window.location.reload();
    } else {
      router.push("/");
    }
  };

  return (
    <>
      <header className="pt-4 fixed left-0 top-0 z-50 w-full translate-y-[-1rem] animate-fade-in border-b border-base-200 backdrop-blur-[12px] [--animation-delay:600ms]">
        <div className="container flex h-[3.5rem] items-center justify-between">
          <div className="flex-1 flex justify-center">
            <Link
              className="flex items-center text-md text-black"
              href="https://bohurupi.com"
              target="_blank"
            >
              <Image
                src="/logo-text.png"
                alt="Bohurupi ReSearch Logo"
                width={400}
                height={100}
                className="w-48"
              />
            </Link>
          </div>
          <button
            onClick={handleNewChat}
            className="absolute right-4 p-1 bg-red-500 hover:bg-red-600 rounded-full transition-colors flex items-center gap-1 text-white"
            aria-label="Start new chat"
            tabIndex={0}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
            <span className="text-sm font-medium">New Chat</span>
          </button>
        </div>
      </header>
    </>
  );
}
