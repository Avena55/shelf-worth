import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo2.png";
import UserMenuButton from "./UserMenuButton";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";

export default async function Navbar() {
  const session = await getServerSession(authOptions);
  return (
    <div
      className="navbar fixed top-0 z-50 w-full max-w-full flex-col
    justify-center gap-2 bg-base-100 bg-opacity-90 px-16 text-base-content shadow-sm backdrop-blur transition-shadow duration-100 [transform:translate3d(0,0,0)] 
    sm:flex-row
    "
    >
      <div className="flex-1">
        <Link
          href="/"
          className="btn btn-ghost no-animation text-xl normal-case"
        >
          <svg
            className="fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            version="1"
            viewBox="0 0 640 640"
          >
            <path
              d="M2035 4505c-621-294-1166-551-1209-572-194-92-289-260-288-508 1-113 18-187 62-275 37-74 89-133 145-166 23-13 586-195 1250-404l1208-381 1171 532c644 292 1179 534 1189 537 29 8 110-84 137-154 28-74 38-230 20-312-28-126-88-202-203-257-269-128-2306-1047-2322-1047-11 0-543 165-1182 366S842 2230 833 2230c-58 0-88-84-40-114 30-19 2374-756 2405-756 20 0 2225 991 2419 1087 152 75 245 257 245 478 0 117-19 203-65 290-57 107-174 203-236 192-14-2-552-244-1195-536l-1169-531-1131 355c-622 196-1159 365-1194 377-134 46-202 171-202 368 0 154 53 278 142 334 27 17 40 14 1205-353 648-204 1182-371 1186-371 16 0 2393 1083 2410 1098 25 23 22 78-5 96-37 24-2380 796-2413 795-18 0-490-218-1160-534zm2266 38c593-196 1076-360 1071-364-4-4-495-228-1091-498l-1083-492-1089 343c-598 188-1087 344-1085 346 13 12 2165 1021 2180 1021 10 1 504-160 1097-356z"
              transform="matrix(.1 0 0 -.1 0 640)"
            ></path>
            <path
              d="M3190 4420c-23-23-25-57-6-83 18-24 633-230 663-222 13 3 30 17 39 30 14 21 14 30 4 54-6 16-19 33-28 36-67 28-611 205-629 205-13 0-32-9-43-20z"
              transform="matrix(.1 0 0 -.1 0 640)"
            ></path>
          </svg>
          SHELF-WORTH.
        </Link>
      </div>
      <div className="flex-none gap-2">
        <label className="swap swap-rotate">
          <input type="checkbox" className="theme-controller" value="autumn" />

          <svg
            className="swap-off h-7 w-7 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>

          <svg
            className="swap-on h-7 w-7 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>
        </label>
        <UserMenuButton session={session} />
      </div>
    </div>
  );
}
