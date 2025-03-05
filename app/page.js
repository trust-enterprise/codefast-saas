import ButtonLogin from "@/components/ButtonLogin";
import ListItems from "@/components/ListItems";
import FAQListItems from "@/components/FAQListItems";
import Image from "next/image";
import productDemo from "@/public/assets/productDemo.jpeg";

const isLoggedIn = true;
let username = "Marc";

export default function Home() {
  return (
    <main>
      {/* {HEADER} */}
      <section className="bg-base-200">
        <div className="flex justify-between items-center px-8 py-2 max-w-3xl mx-auto">
          <div className="font-bold">CodeFast SaaS</div>
          <div className="space-x-4 max-md:hidden">
            <a className="link link-hover" href="#pricing">
              Pricing
            </a>
            <a className="link link-hover" href="#faq">
              FAQ
            </a>
          </div>
          <div>
            <ButtonLogin isLoggedIn={isLoggedIn} username={username} />
          </div>
        </div>
      </section>
      {/* {HERO} */}
      <section className="px-8 text-center py-32 max-w-3xl mx-auto">
        <Image src={productDemo} alt="Product Demo" />
        <h1 className="text-4xl lg:text-5xl font-extrabold mb-6">
          Collect customer feedback to make better products{" "}
        </h1>
        <div className="opacity-90 mb-10 ">
          Create feedback board in minutes, prioritize features, & build
          products your customers will love
        </div>

        <ButtonLogin isLoggedIn={isLoggedIn} username={username} />
      </section>{" "}
      {/* {PRICING} */}
      <section className="bg-base-200 py-32 " id="pricing">
        <div className="max-w-3xl py-32 px-8 mx-auto space-y-6">
          <p className="text-sm uppercase font-medium text-center text-primary mb-4">
            Pricing
          </p>
          <h2 className="text-3xl lg:text-4xl mb-12 text-center font-extrabold">
            A pricing that adapts to your needs
          </h2>
          <div className="p-8 bg-base-100 max-w-96 rounded-3xl mx-auto space-y-2">
            <div className="flex gap-2 items-baseline">
              <div className="text-4xl font-black ">$19</div>
              <div className="uppercase text-sm font-medium opacity-60">
                /month
              </div>
            </div>

            <ul className="space-y-2">
              <ListItems>Collect customer feedback</ListItems>
              <ListItems>Unlimited boards</ListItems>
              <ListItems>Admin Dashboard</ListItems>
              <ListItems>24/7 Customer support</ListItems>
            </ul>

            <ButtonLogin
              isLoggedIn={isLoggedIn}
              username={username}
              extraStyle="w-full"
            />
          </div>
        </div>
      </section>
      {/* {FAQ} */}
      <section className="bg-base-200" id="faq">
        <div className="py-32 px-8 mx-auto max-w-3xl">
          <p className="text-sm uppercase font-medium text-center">FAQ</p>
          <h2 className="text-3xl lg:text-4xl font-extrabold mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <ul className="max-w-lg mx-auto">
            {[
              {
                question: "first Lorem ipsum dolor sit amet.",
                answer: "blah blah",
              },
              {
                question: "second Lorem ipsum dolor sit amet.",
                answer: "blah blah",
              },
              {
                question: "third Lorem ipsum dolor sit amet.",
                answer: "blah blah",
              },
            ].map((qa) => {
              return <FAQListItems key={qa.question} qa={qa} />;
            })}
          </ul>
        </div>
      </section>
    </main>
  );
}
