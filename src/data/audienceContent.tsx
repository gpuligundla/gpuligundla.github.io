import type { AudienceContent, AudienceType } from "../types";

export const audienceContent: Record<AudienceType, AudienceContent> = {
  recruiters: {
    title: "Recruiters",
    description: (
      <>
        <div className="flex items-center gap-2 justify-center mt-4">
          <div className="relative">
            <div className="w-2 h-2 bg-[#fefeff] rounded-full animate-pulse"></div>
            <div className="absolute top-0 left-0 w-2 h-2 bg-[#fefeff] rounded-full animate-[ping_1.5s_ease-in-out_infinite] opacity-90"></div>
          </div>
          <p className="text-base text-[#969696]">Looking for new opportunities.</p>
        </div>
        Software engineer with 3+ years of experience building software
        solutions. My expertise includes{" "}
        <span className="hover:text-[#3776AB] transition-colors cursor-default">
          Java
        </span>
        {", "}
        <span className="hover:text-[#F7DF1E] transition-colors cursor-default">
          Python
        </span>{" "}
        <span className="hover:text-[#ff7073] transition-colors cursor-default">
          Javascript/Typescript
        </span>{" "}
        etc.
      </>
    ),
    links: [
      <a
        href="https://www.linkedin.com/in/gpuligundla/"
        className="hover:text-[#fefeff] transition-colors"
      >
        {" "}
        LinkedIn
      </a>,
      <a
        href="https://drive.google.com/file/d/1TsylLVdSXfqbrd4rvmzgk027mFX2uO7_/view?usp=sharing"
        download
        className="hover:text-[#fefeff] transition-colors"
      >
        Resume
      </a>,
    ],
  },
  "engineering-managers": {
    title: "Engineering Managers",
    description:
      "A curiosity-driven, first-principles engineer leveraging technical expertise to build thoughtful software solutions — currently exploring Generative AI.",
    links: [
      <a
        href="https://www.linkedin.com/in/gpuligundla/"
        className="hover:text-[#fefeff] transition-colors"
      >
        {" "}
        LinkedIn
      </a>,
      <a
        href="https://github.com/gpuligundla"
        className="hover:text-[#fefeff] transition-colors"
      >
        {" "}
        GitHub
      </a>,
      <a
        href="https://leetcode.com/u/gpuligundla/"
        className="hover:text-[#fefeff] transition-colors"
      >
        {" "}
        Leetcode
      </a>,
      <a
        href="https://drive.google.com/file/d/1TsylLVdSXfqbrd4rvmzgk027mFX2uO7_/view?usp=sharing"
        download
        className="hover:text-[#fefeff] transition-colors"
      >
        Resume
      </a>,
    ],
  },
  anyone: {
    title: "For Anyone",
    description:
      "Hi there — I'm a software engineer strives to solve the real-world problems. Yes, I can probably fix your wifi issues.",
    links: [
      <a
        href="https://www.linkedin.com/in/gpuligundla/"
        className="hover:text-[#fefeff] transition-colors"
      >
        {" "}
        LinkedIn
      </a>,
      <a
        href="https://gk.bearblog.dev/"
        className="hover:text-[#fefeff] transition-colors"
      >
        {" "}
        Blog{" "}
      </a>,
      <a
        href="https://x.com/geethakrishna_p"
        className="hover:text-[#fefeff] transition-colors"
      >
        {" "}
        X
      </a>,
    ],
  },
};
