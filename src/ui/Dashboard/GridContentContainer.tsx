import { ReactNode } from "react";

interface GridContentContainerProps {
  children?: ReactNode;
}

export default function GridContentContainer({
  children,
}: GridContentContainerProps) {
  return (
    <div className="mx-12 grid h-full max-h-full min-h-0 grid-cols-1 place-items-center items-stretch gap-4 py-6 lg:grid-cols-2">
      {children}
    </div>
  );
}
