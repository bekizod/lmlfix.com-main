"use client"
import React from "react";
import logo from "@/public/lml_logo.png";
import bg from "@/public/broken-iphone.png";
import quick from "@/public/add.png";
import quality from "@/public/app-development.png";
import fast from "@/public/clock.png";
import Image from "next/image";
import { motion } from "framer-motion";
import PrimaryButton from "../Buttons/PrimaryButton";
import { PhoneCall, Send, Signpost } from "lucide-react";
//  
import EntranceHelp from "./EntranceHelp";
import RepairType, { RepairTypeProps } from "../Cards/RepairType";
import Link from "next/link";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "../ui/text-reveal-card";
import { BackgroundBeams } from "../ui/background-beams";
import { GlareCard } from "../ui/glare-card";
import { Button } from "../ui/button";
import { SparklesCore } from "../ui/sparkles";

export type LocationLandingProps = {
  location: string;
  address: string;
  near: string;
  building: string;
  floor: string;
  number: string;
  steps: string[];
  position: string;
  direction: string;
};

export default function LocationLanding({
  data,
}: {
  data: LocationLandingProps;
}) {
  const repairType: RepairTypeProps[] = [
    {
      title: "Quick Diagnostic",
      logo: quick,
      description:
        "Need a service? Save time and find out what's wrong with your device.",
    },
    {
      title: "Fast Turnaround",
      logo: fast,
      description:
        "Our techs are here to deliver high-quality and service so you don’t have to wait long.",
    },
    {
      title: "Premium Quality Parts",
      logo: quality,
      description:
        "For the best quality services, we use premium quality and replacement parts.",
    },
  ];
  return (
    <div
      className="min-h-screen bg-center bg-cover bg-fixed relative text-white"
      style={{
        backgroundImage: `url(${bg.src})`,
      }}
    >
      <div className="min-h-[90vh] gap-2.5 flex flex-col justify-center items-center px-5 sm:px-14 bg-black/55">
        <div className="text-4xl sm:text-5xl font-bold px-10 text-center">
          <TextGenerateEffect className="" words="Issues With Your" />{" "}
          <div className="text-red-400">
            <TextGenerateEffect className="text-red-600" words="Devices?" />
          </div>
          {/* <span className="text-red-600">Devices?</span> */}
        </div>
        <BackgroundBeams />
        {/* <div className="flex items-center justify-center bg-[#0E0E10] h-[40rem] rounded-2xl w-full">
          <TextRevealCard
            text="You know the business"
            revealText="I know the chemistry "
          >
            <TextRevealCardTitle>
              Sometimes, you just need to see it.
            </TextRevealCardTitle>
            <TextRevealCardDescription>
              This is a text reveal card. Hover over the card to reveal the
              hidden text.
            </TextRevealCardDescription>
          </TextRevealCard>
        </div> */}
        <p className="text-2xl font-semibold">We Got You Covered!</p>
        <p className="font-bold text-sm">{data.address}</p>
        <div className="gap-3 text-black flex flex-wrap items-center justify-center">
          <Link href={`tel: ${data.number}`}>
            <PrimaryButton
              title="Call Us"
              icon={<PhoneCall size={23} aria-label="Call Us" />}
            />
          </Link>
          <Link href={`sms: ${data.number}`}>
            <PrimaryButton
              title="Text Us"
              icon={<Send aria-label="Text Us" />}
            />
          </Link>
          <Link href={data.direction} target="blank">
            <PrimaryButton
              title="Get Direction"
              icon={<Signpost aria-label="Get Directions" />}
            />
          </Link>
        </div>
        <div className="w-full h-60 mt-60 absolute">
          {/* Gradients */}
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

          {/* Core component */}
        </div>
      </div>

      <div className="bg-white p-5 py-7 flex flex-col items-center text-black font-bold text-3xl">
        <div>GET $10 OFF YOUR SERVICE</div>
      </div>

      <div className="flex justify-center items-center py-8  bg-white">
        <div className="grid sm:grid-col-2 md:grid-cols-2 scale-95  lg:grid-cols-3 gap-5">
          {repairType.map((item, index) => (
            <GlareCard
              className="flex flex-col   items-center justify-center"
              key={index}
            >
              <div>
                <Image
                  src={item.logo}
                  width={150}
                  height={150}
                  alt="logo_lml_fix"
                  className="rounded-2xl"
                />
              </div>
              <div className="text-2xl font-bold my-3 text-gray-600 text-center">
                {item.title}
              </div>
              <div className="text-center font-semibold text-gray-600">
                {item.description}{" "}
              </div>
            </GlareCard>
            // <RepairType
            //   key={index}
            //   title={item.title}
            //   logo={item.logo}
            //   description={item.description}
            // />
          ))}
        </div>
      </div>

      <motion.div
        className="bg-gray-50 gap-5 text-black grid grid-cols-1 sm:grid-cols-2 p-6  shadow-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Left Section */}
        <motion.div
          className="sm:border-r-4 border-gray-300 flex flex-col items-center p-4 space-y-6"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-3xl font-extrabold  my-3 text-center">
            {data.location}
          </p>
          <div className="space-y-6 text-gray-800 dark:text-gray-300 w-full">
            <div className="flex flex-col items-start sm:items-start gap-1">
              <p className="text-lg font-semibold">Business Hours:</p>
              <p className="text-sm">8am - 7pm Everyday</p>
            </div>
            <div className="flex flex-col items-start sm:items-start gap-1">
              <p className="text-lg font-semibold">Location:</p>
              <p className="text-sm">{data.near}</p>
            </div>
            <div className="flex flex-col items-start sm:items-start gap-1">
              <p className="text-lg font-semibold">Building:</p>
              <p className="text-sm">{data.building}</p>
            </div>
            <div className="flex flex-col items-start sm:items-start gap-1">
              <p className="text-lg font-semibold">Floor:</p>
              <p className="text-sm">{data.floor}</p>
            </div>

            {/* Steps Section */}
            <div className="mt-6 space-y-3">
              <p className="text-lg font-semibold mb-2">Steps to Enter:</p>
              <div className="space-y-2">
                {data.steps.map((step, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                  >
                    <p className="font-semibold text-sm min-w-[4rem] text-center sm:text-left">
                      Step {index + 1}:
                    </p>
                    <p className="text-sm truncate">{step}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Section */}
        <motion.div
          className="flex flex-col items-center justify-center sm:items-start"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="w-full text-3xl font-extrabold  text-center   flex justify-center">
            Our Location
          </div>
          <div className="mt-3 w-full">
            <iframe
              src={data.position}
              className="w-full h-80 sm:h-96 border-0 rounded-xl shadow-lg"
              aria-hidden="false"
              title="Shop Location"
            ></iframe>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
