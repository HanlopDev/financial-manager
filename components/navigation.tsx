"use client"
import { usePathname } from 'next/navigation'
import React from 'react'
import { Navbutton } from './nav-button'

const route = [
    {
        href: "/",
        label: "Overview"
    },
    {
        href: "/trasactions",
        label: "Transactions"
    },
    {
        href: "/accounts",
        label: "Accounts"
    },
    {
        href: "/categories",
        label: "Categories"
    },
    {
        href: "/settings",
        label: "Settings"
    },
]

export const Navigation = () => {
    const pathname  = usePathname();
  return (
    <nav className='hidden lg:flex items-center gap-x-2 overflow-x-auto'>
        {route.map((route) => (
            <Navbutton
            key={route.href}
            href={route.href}
            label={route.label}
            isActive = {pathname === route.href}
            />
        ))}
    </nav>
  )
}
