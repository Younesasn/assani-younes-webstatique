import Link from "next/link";
import React from "react";

export const Button = ({
  text,
  href,
  icon,
  className
}: {
  text: string;
  href: string;
  icon?: React.ReactNode;
  className?: string;
}) => {
  return (
    <Link
      href={href}
      className={"px-6 py-4 inline-flex justify-center items-center gap-2 bg-white text-teal-600 border border-teal-600 rounded-lg hover:bg-teal-600 hover:text-white hover:border-4 hover:border-white transition-all active:bg-teal-700" + className}
    >
      {text}
      {icon}
    </Link>
  );
};
