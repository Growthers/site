import type { NextPage } from "next";
import Link from "next/link";
import Layout from "components/Layout";

const links = [
  {
    title: "Blog",
    url: "https://blog.growthers.dev/",
  },
  {
    title: "GitHub",
    url: "https://github.com/Growthers",
  },
  {
    title: "Twitter",
    url: "https://twitter.com/UdcGrowthers",
  },
  {
    title: "YouTube",
    url: "https://www.youtube.com/channel/UCafZ6F2ZEyJMjcGbEzY0sVw",
  },
];

const About: NextPage = () => (
  <Layout PageTitle="Welcome | Growthers">
    <div className="mx-auto	w-11/12 md:w-3/4 lg:w-1/2">
      <div className="mb-14">
        <h1 className="text-center text-3xl font-black md:text-4xl">Welcome To Growthers!</h1>
        <p className="mt-1 text-center">共同開発鯖へようこそ！</p>
      </div>
      <div>
        {links.map((value) => (
          <div key={value.title} className="py-2 text-center text-2xl font-semibold italic">
            <Link href={value.url}>
              <a
                className="underline decoration-[#f4a460] underline-offset-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                {value.title}
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  </Layout>
);

export default About;
