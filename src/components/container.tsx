import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

const Container = ({ children, className }: ContainerProps) => {
  const defaulClass = "w-full max-w-container mx-auto px-3";
  return <div className={twMerge(defaulClass, className)}>{children}</div>;
};

export default Container;
