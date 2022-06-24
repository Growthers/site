import type { FC } from "react";
import Link from "next/link";

type Props = {
  question: string;
  answer: string;
  className?: string;
};

const QA: FC<Props> = ({ question, answer, className = "" }) => {
  const pattern = /\[.*\]\(https?:\/\/[\w!?/+\-_~=;.,*&@#$%()'[\]]+\)/g;
  const answerPlains = answer.split(pattern);
  const answerLinks = answer.match(pattern);
  let answerList = [];

  if (answerLinks) {
    // テキストとリンクを交互に配列に挿入
    for (let i = 0; i < answerPlains.length + answerLinks.length; i++) {
      if (i % 2 === 0) answerList.push(answerPlains[i / 2]);
      else answerList.push(answerLinks[Math.floor(i / 2)]);
    }
  } else answerList = answerPlains;

  return (
    <div className={`drop-shadow-lg ${className}`}>
      <div className="rounded-t bg-[#f4a460]">
        <p className="py-2 text-center text-xl font-bold text-white">{question}</p>
      </div>
      <div className="rounded-b bg-[#f1f1f1]">
        <p className="whitespace-pre-wrap py-5 text-center">
          {answerList?.map((value) => {
            if (pattern.test(value)) {
              const text = value.match(/\[.*\]/g);
              const url = value.match(/\(https?:\/\/[\w!?/+\-_~=;.,*&@#$%()'[\]]+\)/g);

              if (text !== null && url !== null) {
                return (
                  <Link key={url[0].slice(1).slice(0, -1)} href={url[0].slice(1).slice(0, -1)}>
                    <a
                      className="underline decoration-[#f4a460] underline-offset-1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {text[0].slice(1).slice(0, -1)}
                    </a>
                  </Link>
                );
              }
            }

            return <span key={value}>{value}</span>;
          })}
        </p>
      </div>
    </div>
  );
};

QA.defaultProps = {
  className: "",
};

export default QA;
