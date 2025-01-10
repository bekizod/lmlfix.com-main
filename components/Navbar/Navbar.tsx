'use client';

import Image from 'next/image';
import Link from 'next/link';
import logo from '@/public/lml_logo.png';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '../ui/hover-card';
import { useState } from 'react';
import { Button } from '../ui/button';
import { Menu } from 'lucide-react';

interface SubLink {
  id: number;
  title: string;
  link: string;
}

interface NavLink {
  id: number;
  title: string;
  link: string;
  hover: boolean;
  subLinks?: SubLink[];
}

const navLinks: NavLink[] = [
  { id: 1, title: 'Home', link: '/', hover: false },
  // { id: 2, title: 'Services', link: '/services', hover: false },
  {
    id: 3,
    title: 'Location',
    link: '#',
    hover: true,
    subLinks: [
      { id: 4, title: 'Seattle', link: '/seattle' },
      { id: 5, title: 'West Seattle', link: '/westseattle' },
      { id: 6, title: 'North Seattle', link: '/northseattle' },
    ],
  },
];

const NavBar: React.FC = () => {
  const [openNavbar, setOpenNavbar] = useState(false);
  const [expandedMenu, setExpandedMenu] = useState<number | null>(null);

  const handleClickLink = () => {
    setOpenNavbar(false);
    setExpandedMenu(null);
  };

  const toggleSubMenu = (id: number) => {
    setExpandedMenu((prev) => (prev === id ? null : id));
  };

  return (
    <nav className='flex items-center justify-between  bg-gray-100 z-30 shadow-lg rounded  relative md:px-4  border-b   py-2'>
      {/* Logo */}
      
      <Link href='/' onClick={handleClickLink}>
        <Image
          src={logo}
          width={60}
          height={60}
          loading='lazy'
          alt='logo'
          className='block transition-transform duration-150 rounded-xl hover:scale-110 mx-2'
        />
      </Link>

      {/* Navigation Links for Large Screens */}
      <ul className='hidden sm:flex items-center gap-8 xl:gap-10 font-semibold'>
        {navLinks.map((nav) => (
          <div key={nav.id}>
            {nav.hover ? (
              <HoverCard>
                <HoverCardTrigger asChild>
                  <span className='underline-animation text-lg hover:underline-offset-1 hover:border-b hover:border-[#e3de1e]'>
                    {nav.title}
                  </span>
                </HoverCardTrigger>
                <HoverCardContent className=' w-[rem] my-4'>
                  <div className='text-center '>
                    {nav.subLinks?.map((subLink) => (
                      <li key={subLink.id}>
                        <Link href={subLink.link}>
                          <span className='underline-animation text-lg hover:underline-offset-1 hover:border-b hover:border-[#e3de1e]'>
                            {subLink.title}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </div>
                </HoverCardContent>
              </HoverCard>
            ) : (
              <Link href={nav.link}>
                <span className='underline-animation text-lg hover:underline-offset-1 hover:border-b hover:border-[#e3de1e]'>
                  {nav.title}
                </span>
              </Link>
            )}
          </div>
        ))}
      </ul>

      {/* Mobile Navigation */}
      <div className='sm:hidden mx-2'>
        <div onClick={() => setOpenNavbar((pre) => !pre)}>
          <Menu />
        </div>
      </div>

      {openNavbar && (
  <ul className="sm:hidden absolute bg-white w-full mt-12 z-50 py-5 rounded-lg px-4 space-y-4 shadow-lg border-t border-gray-200 dark:bg-gray-800 dark:border-gray-700">
    {navLinks.map((nav) => (
      <li key={nav.id} className="space-y-3">
        <span
          className="text-lg font-semibold text-gray-800 dark:text-white flex justify-between items-center hover:text-yellow-500 cursor-pointer transition-all duration-300 ease-in-out"
          onClick={() =>
            nav.hover ? toggleSubMenu(nav.id) : handleClickLink()
          }
        >
          {nav.title}
          {nav.hover && (
            <span className="ml-2 text-sm">
              {expandedMenu === nav.id ? '▲' : '▼'}
            </span>
          )}
        </span>
        
        {/* Submenu items */}
        {nav.hover && expandedMenu === nav.id && (
          <ul className="pl-6 space-y-2">
            {nav.subLinks?.map((subLink) => (
              <li key={subLink.id}>
                <Link href={subLink.link} onClick={handleClickLink}>
                  <span className="text-lg text-gray-700 dark:text-gray-300 hover:text-yellow-500 transition-all duration-300 ease-in-out">
                    {subLink.title}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </li>
    ))}
  </ul>
)}

    </nav>
  );
};

export default NavBar;
