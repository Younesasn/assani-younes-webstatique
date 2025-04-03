"use client";

import { Hexagon } from "lucide-react";
import { Poppins } from "next/font/google";
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import clsx from 'clsx'
import { MenuIcon, X } from 'lucide-react'
import Link from "next/link";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: "400",
  subsets: ["latin"],
});

const navigation = [
  { name: 'Home', href: '/', current: false },
  { name: 'About us', href: '/', current: false },
  { name: 'Our services', href: '/tarifs', current: false },
  { name: 'Community', href: '/', current: false },
]

export default function MenuNav() {
  return (
    <Disclosure as="nav" className="bg-black text-white">
      <div className="px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
        <Link href="/">
          <h1 className={`${poppins.variable} text-2xl flex gap-2 items-center hover:text-teal-600 transition-all`}><Hexagon size={40} />Logoipsum</h1>
        </Link>
          <div className="flex flex-1 items-center justify-end">
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-8">
                {navigation.map((item) => (
                  <Link 
                    href={item.href}
                    key={item.name}
                    aria-current={item.current ? 'page' : undefined}
                    className={clsx(
                      'hover:underline transition-all active:text-teal-700',
                    )}
                    onClick={() => item.current = true}
                  >{item.name}</Link>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 left-11/12 flex items-center justify-end sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 cursor-pointer hover:text-teal-600 transition-all">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <MenuIcon aria-hidden="true" className='block size-6 group-data-open:hidden' /> 
              <X aria-hidden="true" className='hidden size-6 group-data-open:block'/>
            </DisclosureButton>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-4 px-2 py-2">
          {navigation.map((item) => (
            <Link 
              href={item.href}
              key={item.name}
              aria-current={item.current ? 'page' : undefined}
              className={clsx(
                'hover:underline transition-all active:text-teal-700 flex flex-col',
              )}
              onClick={() => item.current = true}
            >{item.name}</Link>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}
