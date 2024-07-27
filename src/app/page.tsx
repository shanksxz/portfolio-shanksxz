import fetchImg from "@/actions"
import Button from "@/components/Button";
import Image from "next/image";
import { inter } from "@/utils";
import Link from "next/link";
import Animated from "@/components/animations/Animated";

export default async function Page() {

  const url = await fetchImg("shanksxz");

  return (
    <section>
      <div className="flex flex-col gap-5">
        <Image
          className="rounded-full"
          src={url}
          alt="shanksxz"
          width={100}
          height={100}
        />
        <Animated>
          <div className="flex flex-col gap-5">
            <p className="text-xl opacity-70 uppercase">
              Hey There! I'm Somya
            </p>
            <p className={`${inter.className} text-4xl leading-normal opacity-90`}>
              Digital craftsman from India, turning <span className='opacity-70'>caffeine</span> into code and ideas into <span className="opacity-70">interfaces</span>. Exploring the ever-evolving web, one <span className="opacity-70">keypress</span> at a time
            </p>
            <Link href={'https://github.com/shanksxz'}>
              <Button
                icon={githubIcon()}
                content="GitHub"
                className="border-2 border-gray-600 w-[120px] text-white py-2 rounded-md"
              />
            </Link>
          </div>
        </Animated>
      </div>
    </section>
  )
}


function githubIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-github"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" /></svg>
  )
}
