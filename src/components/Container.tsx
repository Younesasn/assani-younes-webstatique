import React from "react";

export const Container = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  return <section className={`${className} mx-auto w-full lg:w-7/8 px-4 py-10 lg:px-8`}>{children}</section>;
};
