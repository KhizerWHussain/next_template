import React, { ReactNode } from "react";

type ContainerGridProps = {
  children: ReactNode;
  spacing?: number;
};

const ContainerGrid: React.FC<ContainerGridProps> = ({
  children,
  spacing = 2,
}) => {
  return (
    <div className={`grid grid-cols-12 w-full gap-${spacing}`}>{children}</div>
  );
};

export default ContainerGrid;
