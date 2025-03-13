import { ReactNode } from "react";

interface CardProps {
  children?: ReactNode;
}

export default function Card({ children }: CardProps) {
  return (
    <>
      <div className="flex h-fit w-full rounded-xl border-white p-4 shadow-xl backdrop-blur-md">
        {children}
      </div>
    </>
  );
}
