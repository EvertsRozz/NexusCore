import { PlusIcon } from "@heroicons/react/24/outline";
import logo from "../assets/logo.webp";

export default function Navbar() {
  return (
    <nav className="flex max-w-screen items-center justify-between p-4 backdrop-blur-md">
      <div className="flex items-center gap-4">
        <img src={logo} alt="" className="h-12 w-12 rounded-full" />
        <h1 className="text-xl text-white">NexusCore</h1>
      </div>
      <div>
        <button
          type="button"
          className="flex cursor-pointer flex-row items-center gap-2 rounded-xl border-2 border-white px-3 py-2 text-white opacity-90 shadow-2xl backdrop-blur-3xl backdrop-saturate-150 transition-all duration-200 hover:scale-105"
        >
          <PlusIcon className="h-7 w-7 stroke-white" />
          Add New
        </button>
      </div>
    </nav>
  );
}
