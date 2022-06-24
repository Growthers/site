import type { NextPage } from "next";
import Link from "next/link";
import Layout from "components/Layout";
import QA from "components/QA";

const indexQA = [
  {
    question: "共同開発鯖(Growthers)とは？",
    answer: "高専生・高校生を中心とするDiscord鯖です.",
  },
  {
    question: "参加するには？",
    answer: `招待制となっております.\n知り合いのメンバーから招待を受けるか, [公式Twitter](https://twitter.com/UdcGrowthers)までどうぞ.`,
  },
];

const Home: NextPage = () => (
  <Layout PageTitle="Welcome | Growthers">
    <div className="mx-auto	w-11/12 md:w-3/4 lg:w-1/2">
      <div className="mb-14">
        <h1 className="text-center text-3xl font-black md:text-4xl">Welcome To Growthers!</h1>
        <p className="mt-1 text-center">共同開発鯖へようこそ！</p>
      </div>
      <div>
        {indexQA.map((value) => (
          <QA key={value.question} className="my-10" question={value.question} answer={value.answer} />
        ))}
      </div>
      <div>
        <p className="text-center">
          詳細は
          <Link href="/about">
            <a className="underline decoration-[#f4a460] underline-offset-1">こちら</a>
          </Link>
        </p>
      </div>
    </div>
  </Layout>
);

export default Home;
