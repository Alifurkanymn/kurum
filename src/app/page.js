'use client'
import Blog from "@/components/blog/Blog";
import Intro from "@/components/intro/Intro";
import Loading from "@/components/Loading";
import Process from "@/components/process/Process";

export default function Home() {
  return (
    <div className="h-100">
      <Intro />
      <Blog />
      <Process />
    </div>
  );
}
