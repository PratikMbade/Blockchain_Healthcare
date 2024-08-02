"use client";
import { sidebarOpen } from "@/store/atoms/sidebar";
import { MenuList } from "@/utils/MenuList";
import { useDisconnect, useWeb3Modal } from "@web3modal/ethers5/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { GoSidebarExpand } from "react-icons/go";
import { IoIosLock } from "react-icons/io";
import { MdOutlineTipsAndUpdates } from "react-icons/md";
import { RiLogoutCircleLine } from "react-icons/ri";
import { useRecoilState } from "recoil";

const Sidebar = () => {
  const pathname = usePathname();

  const [isOpen, setOpen] = useRecoilState(sidebarOpen);
  const router = useRouter();
  const { disconnect } = useDisconnect();

  const [menuState, setMenuState] = useState<{
    [id: number]: { isOpen: boolean; isArrowUp: boolean };
  }>({});

  const handleDisconnectWallet = () => {
    disconnect();
    router.push("/");
  };

  return (
    <div
      className={` hidden ${
        isOpen ? "lg:block" : "lg:hidden"
      } h-screen w-72  border-r-[.5px] border-r-stone-700`}
    >
      <div className="flex items-center justify-between border-b-[.5px] border-b-stone-700 h-16">
        <div className="flex flex-col items-center justify-center ml-5">
          <h1 className="font-extrabold text-xl">Blockchain</h1>
          in Healthcare
        </div>

        <div className="mr-5 cursor-pointer" onClick={() => setOpen(!isOpen)}>
          {isOpen ? <GoSidebarExpand className="text-xl" /> : ""}
        </div>
      </div>

      <div className="mt-2 ">
        <ul className="flex flex-col p-3 pl-5 text-stone-400 text-md font-medium">
          {MenuList.map((menu) => (
            <li key={menu.id} className=" pb-3  cursor-pointer ">
              <Link
                href={menu.path}
                className={`flex items-center ${
                  pathname == menu.path
                    ? `bg-zinc-800`
                    : "hover:bg-zinc-900 duration-400"
                } px-2 py-2 rounded-md mr-4 gap-x-3`}
              >
                <span className="text-lg">{menu.icon}</span>
                <p className="">{menu.title}</p>
              </Link>
            </li>
          ))}

          <li>
            <div
              onClick={handleDisconnectWallet}
              className={`flex items-center cursor-pointer ${
                pathname == `/dashboard/updateprofile`
                  ? `bg-zinc-800`
                  : "hover:bg-zinc-900 duration-400"
              } px-2 py-2 rounded-md mr-4 gap-x-3`}
            >
              <span>
                <RiLogoutCircleLine />
              </span>
              <p>Log out</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
