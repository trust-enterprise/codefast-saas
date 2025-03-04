"use client";

import ButtonLogin from "@/components/ButtonLogin";
import { use } from "react";
const isLoggedIn = true;
let username = "Marc";

export default function Home() {
  return (
    <main>
      <section className="bg-base-200">
        <div className="flex justify-between items-center px-8 py-2 max-w-3xl mx-auto">
          <div className="font-bold">CodeFast SaaS</div>
          <div className="space-x-4">
            <a className="link link-hover">Pricing</a>
            <a className="link link-hover">FAQ</a>
          </div>
          <div>
            <ButtonLogin isLoggedIn={isLoggedIn} username={username} />
          </div>
        </div>
      </section>
      <section className="px-8 text-center py-32 max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold mb-6">
          Collect customer feedback to make better products{" "}
        </h1>
        <div className="opacity-90 mb-10 ">
          Create feedback board in minutes, prioritize features, & build
          products your customers will love
        </div>

        <ButtonLogin isLoggedIn={isLoggedIn} username={username} />
      </section>{" "}
    </main>
  );
}
