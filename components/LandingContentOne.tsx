'use client';

import { useRouter } from 'next/navigation';
import { Separator } from '@/components/ui/separator';
import logo from '@/public/lml_logo.png';
import svg from '@/public/takein.svg';
import Image from 'next/image';
import { Card } from './ui/card';
import { Vortex } from "@/components/ui/Vortex";
import Link from 'next/link';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import { motion } from 'framer-motion';

function LandingContentOne() {
  const router = useRouter();

  const handleProviderSelect = (value: string) => {
    // Navigate to the selected route
    router.push(value);
  };

  return (
    <motion.div
      className="flex flex-col items-center justify-center gap-10 mt-16 sm:px-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Vortex
        backgroundColor="transparent"
        className="flex items-center  flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
         
   
      {/* Logo */}
     


      {/* Main Header */}
      <motion.div
        className="flex flex-col items-center justify-center gap-2"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <div className="p-6 flex flex-col items-center justify-center space-y-10 rounded-lg shadow-xl border border-gray-200 bg-white/10 backdrop-blur-sm backdrop-saturate-150 border-gray-300 dark:bg-gray-900/30 dark:border-gray-800">
  {/* Header Section */}
  <motion.h1
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className="text-3xl font-bold text-center text-gray-800 dark:text-white"
  >
    <motion.div
      initial={{ x: '-100vw', rotate: -360, opacity: 0 }} // Start off-screen to the left with a full rotation
      animate={{ x: 0, rotate: 0, opacity: 1 }} // Move to the center and stop rotation
      transition={{
        type: 'spring',
        stiffness: 50, // Lower stiffness for a slower spring motion
        damping: 20, // Higher damping to reduce bounciness
        duration: 2, // Increase duration to make the animation slower
      }}
      className="w-full flex justify-center"
    >
      <Image
        src={svg}
        width={120}
        height={120}
        alt="logo_lml_fix"
        className="hover:scale-110 hover:delay-150 hover:duration-150 transition-all  cursor-pointer"
      />
    </motion.div>

    Find Authorized Service Locations -{' '}
    <motion.span
      initial={{ scale: 0.9 }}
      animate={{ scale: 1.1 }}
      transition={{
        repeat: Infinity,
        repeatType: 'reverse',
        duration: 1.2,
      }}
      className="text-red-600 dark:text-red-500"
    >
      Get $10 Off
    </motion.span>
  </motion.h1>

  {/* Provider Select */}
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
    className="w-full max-w-md px-6"
  >
    <Select onValueChange={handleProviderSelect}>
      <SelectTrigger className="w-full border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-500 rounded-lg transition-all duration-200">
        <SelectValue
          placeholder="Select a Provider"
          className="text-lg font-medium text-center"
        />
      </SelectTrigger>
      <SelectContent className="bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 shadow-lg rounded-lg">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <SelectItem
            value="/seattle"
            className="p-3 hover:bg-blue-50 dark:hover:bg-blue-800 text-gray-800 dark:text-white rounded-lg transition-all"
          >
            <span className="text-base font-semibold">Seattle</span>
          </SelectItem>
          <SelectItem
            value="/westseattle"
            className="p-3 hover:bg-blue-50 dark:hover:bg-blue-800 text-gray-800 dark:text-white rounded-lg transition-all"
          >
            <span className="text-base font-semibold">West Seattle</span>
          </SelectItem>
          <SelectItem
            value="/northseattle"
            className="p-3 hover:bg-blue-50 dark:hover:bg-blue-800 text-gray-800 dark:text-white rounded-lg transition-all"
          >
            <span className="text-base font-semibold">North Seattle</span>
          </SelectItem>
        </motion.div>
      </SelectContent>
    </Select>
  </motion.div>
</div>


      </motion.div>
   </Vortex>

      <Separator />

      {/* Cards Section */}
     <motion.div
  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 mt-10 w-full"
  initial="hidden"
  animate="visible"
  variants={{
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  }}
>
  {[
    {
      title: 'West Seattle',
      phone: '(206-832-5834)',
      address: '3400 Harbor Ave SW STE #301, Seattle, WA 98126, USA',
      mapSrc:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d86135.66264469302!2d-122.52284050273434!3d47.572857500000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490435d141069cd%3A0x8949cfda1da34803!2sLML%20Repair%20-%20Same%20Day%20Phone%20%26%20Tablet%20Repair!5e0!3m2!1sen!2sus!4v1722519680294!5m2!1sen!2sus',
      link: '/westseattle',
    },
    {
      title: 'Seattle',
      phone: '(206-745-2002)',
      address: '700 NW 42nd St STE #333, Seattle, WA 98107, USA',
      mapSrc:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2687.3589847913568!2d-122.36782272360401!3d47.65802217119456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490154fe786c23b%3A0x4ebd3ad31cbb95ee!2sLML%20Repair%20-%20Ballard!5e0!3m2!1sen!2sus!4v1694732382875!5m2!1sen!2sus',
      link: '/seattle',
    },
    {
      title: 'North Seattle',
      phone: '(206-745-2977)',
      address: '10015 Lake City Way NE STE #231, Seattle WA, 98125, USA',
      mapSrc:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d86029.7856478836!2d-122.41901626540476!3d47.63719469918059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549013a42b28bdbf%3A0xddf67a8bb8f93d1e!2sLML%20Repair%20-%20North%20Seattle!5e0!3m2!1sen!2sso!4v1707896875796!5m2!1sen!2sso',
      link: '/northseattle',
    },
  ].map((location, index) => (
    <motion.div
      key={index}
      className="p-5 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 ease-out shadow border border-gray-200 hover:shadow-2xl"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      <Link href={location.link}>
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-xl font-bold text-gray-800 dark:text-white">
            {location.title}
          </h1>
          <p className="text-yellow-500 text-lg font-semibold">
            {location.phone}
          </p>
          <div className="flex flex-col items-center text-center space-y-2 text-gray-600 dark:text-gray-300">
            <p className="font-medium">8am - 7pm Everyday</p>
            <p>{location.address}</p>
          </div>
          <div className="w-full overflow-hidden rounded-lg mt-4">
            <iframe
              src={location.mapSrc}
              className="w-full h-80 border-0 rounded-xl"
              aria-hidden="false"
              title={`${location.title} Location`}
            ></iframe>
          </div>
        </div>
      </Link>
    </motion.div>
  ))}
</motion.div>

    </motion.div>
  );
}

export default LandingContentOne;
