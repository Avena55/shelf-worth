"use client";

import { Session } from "next-auth";
import Image from "next/image";
import profilePicPlaceholder from "@/assets/profile-pic-placeholder.png";
import { signIn, signOut } from "next-auth/react";
import Link from "next/link";

interface UserMenuButtonProps {
  session: Session | null;
}

export default function UserMenuButton({ session }: UserMenuButtonProps) {
  const user = session?.user;

  return (
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-circle btn-ghost">
        {user ? (
          <Image
            src={user?.image || profilePicPlaceholder}
            alt="Profile Picture"
            width={40}
            height={40}
            className="w-10 rounded-full"
          />
        ) : (
          <svg
            className="fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            version="1"
            viewBox="0 0 640 640"
          >
            <path
              d="M2930 6389c-564-49-1125-255-1584-581C355 5102-150 3897 41 2695c77-483 269-952 551-1349C1298 355 2503-150 3705 41c483 77 952 269 1349 551 698 497 1170 1257 1305 2103 132 829-66 1677-551 2359-604 849-1590 1353-2628 1345-85-1-198-5-250-10zm674-419c469-71 903-253 1285-537 153-114 430-391 544-544 285-383 464-811 538-1290 19-121 23-185 23-399 0-294-17-434-83-694-98-381-280-749-519-1048l-30-38-22 93c-78 319-238 639-441 882-210 251-453 444-735 581-72 35-136 64-142 64-24 0-11 19 43 60 30 23 97 86 148 140 186 193 300 410 359 683 31 146 31 408 0 554-59 274-173 490-361 685-208 217-439 346-734 410-146 31-408 31-554 0-274-59-490-173-685-361-217-208-346-439-410-734-31-146-31-408 0-554 59-273 173-490 359-683 51-54 118-117 148-140 53-41 67-60 45-60-20 0-221-99-309-151-276-165-540-421-721-699-122-189-234-448-290-677l-22-93-30 38c-239 299-421 667-519 1048-66 260-83 400-83 694 0 214 4 278 23 399 74 479 253 907 538 1290 114 153 391 430 544 544 385 287 829 472 1291 537 201 28 208 28 448 25 153-3 255-10 354-25zm-169-799c375-94 653-377 741-756 14-57 19-118 19-215s-5-158-19-215c-90-385-376-671-761-761-110-26-320-26-430 0-449 104-758 472-782 931-14 282 89 547 292 750 149 149 321 240 532 280 105 20 301 13 408-14zm54-2396c623-93 1181-554 1399-1155 57-156 90-313 107-502l5-67-113-85c-377-283-809-463-1288-537-208-33-590-33-798 0-479 74-911 254-1289 538l-114 86 7 76c40 452 215 833 526 1142 295 294 664 472 1074 519 106 12 357 4 484-15z"
              transform="matrix(.1 0 0 -.1 0 640)"
            ></path>
          </svg>
        )}
      </label>
      <ul
        tabIndex={0}
        className="menu dropdown-content menu-sm z-30 mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
      >
        {user ? (
          <>
            <li>
              <Link href="/profile">Profile</Link>
            </li>
            <li>
              <button onClick={() => signOut({ callbackUrl: "/" })}>
                Logout
              </button>
            </li>
          </>
        ) : (
          <li>
            <button onClick={() => signIn()}>Login</button>
          </li>
        )}
      </ul>
    </div>
  );
}
