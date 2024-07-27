"use client"

import { navOptions } from "@/utils";
import Link from "next/link";
import { usePathname } from 'next/navigation';

export default function Options() {

    const pathname = usePathname();
    
    return (
        <ul className="flex text-xl space-x-6">
            {navOptions.map((option, index) => (
                <li key={index}>
                    <Link className={`${pathname !== option.link ? 'opacity-70' : 'opacity-100'} hover:cursor-pointer`} href={option.link}>{option.title}</Link>
                </li>
            ))}
        </ul>
    )
}