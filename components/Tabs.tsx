"use client";

import Image from "next/image";
import { Tabs } from "@/components/ui/tabs";
import "@/app/globals.css"


export default function TabsDemo() {
  const tabs = [
    {
      title: "Usage",
      value: "usage",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-slate-700 to-slate-900">
          <p>Easy To Use</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Services ",
      value: "services",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-slate-700 to-slate-900">
          <p>On Site Learning</p>
          <DummyContent1 />
        </div>
      ),
    },
    {
      title: "Special",
      value: "special",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-slate-700 to-slate-900">
          <p>Online Learning</p>
          <DummyContent2 />
        </div>
      ),
    },
    {
      title: "Choicely",
      value: "choicely",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-slate-700 to-slate-900">
          <p>Money Saver</p>
          <DummyContent3 />
        </div>
      ),
    },
    {
      title: "Goal",
      value: "goal",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-slate-700 to-slate-900">
          <p>Education Quality</p>
          <DummyContent4 />
        </div>
      ),
    },
  ];

  return (
    <div className="h-[25rem] md:h-[30rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-6">
      <Tabs tabs={tabs} />
    </div>
  );
}

const DummyContent = () => {
  return <Image src="/tap1.jpg" alt="dummy image" width="1000" height="1000" className="object-cover object-left-top h-[70%]  md:h-[90%] absolute  inset-x-0 w-[90%] rounded-xl mx-auto" />;
};

const DummyContent1 = () => {
  return <Image src="/tap2.jpeg" alt="dummy image" width="1000" height="1000" className="object-cover object-left-top h-[70%]  md:h-[90%] absolute  inset-x-0 w-[90%] rounded-xl mx-auto" />;
};
const DummyContent2 = () => {
  return <Image src="/tap3.png" alt="dummy image" width="1000" height="1000" className="object-fill object-left-top h-[70%]  md:h-[90%] absolute  inset-x-0 w-[90%] rounded-xl mx-auto" />;
};
const DummyContent3 = () => {
  return <Image src="/tap4.jpeg" alt="dummy image" width="1000" height="1000" className="object-fill object-left-top h-[70%]  md:h-[90%] absolute inset-x-0 w-[90%] rounded-xl mx-auto" />;
};
const DummyContent4 = () => {
  return (
    <Image
      src="/tap5.png"
      alt="dummy image"
      width="1000"
      height="1000"
      className="object-fill object-left-top h-[70%]  md:h-[90%] absolute  inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};
