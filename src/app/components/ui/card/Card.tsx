"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export interface CardProps {
  href: string;
  image: string | null;
  title: string;
  description?: string;
  author?: string;
}

const BACKGROUND_IMAGES = [
  "/images/oyster_ice_cream.jpeg",
  "/images/cordy_ice_cream.jpeg",
  "/images/chanterelle_bun.jpg",
];

export function Card(props: CardProps) {
  const [randBgImage] = useState(() => {
    const randomIndex = Math.floor(Math.random() * BACKGROUND_IMAGES.length);
    return BACKGROUND_IMAGES[randomIndex];
  });

  return (
    <article {...props}>
      <Link
        href={props.href}
        className="hover:opacity-60 flex gap-4 mb-3 flex-col justify-center"
      >
        <div className="overflow-hidden h-full w-full flex-none">
          {props.image ? (
            <Image
              src={props.image}
              width={800}
              height={800}
              alt={props.title}
              className="h-full object-cover object-center"
            />
          ) : (
            <Image
              src={randBgImage}
              width={600}
              height={600}
              alt={props.title}
              className="h-full object-cover object-center"
            />
          )}
        </div>
        <section>
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">
            {props.title}
          </h3>
          {props.description ? (
            <p className="text-sm font-light">{props.description}</p>
          ) : null}
          {props.author ? (
            <p className="text-sm font-light">{props.author}</p>
          ) : null}
        </section>
      </Link>
    </article>
  );
}
