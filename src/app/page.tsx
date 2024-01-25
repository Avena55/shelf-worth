/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

export default function Home() {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1642548083429-2283c4af718c?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <p className="mb-5 text-justify">
            Welcome to Shelf-Worth, where your bookshelf becomes a reflection of
            your unique journey and interests. Our platform goes beyond mere
            cataloging; it's a celebration of literary self-discovery. Showcase
            your most cherished titles, curate themed collections, and explore
            the shelves of like-minded bibliophiles. With Shelf-Worth, each book
            on your virtual shelf is a chapter in the story of you.{" "}
          </p>
          <button className="btn">Get Started</button>
        </div>
      </div>
    </div>
  );
}
