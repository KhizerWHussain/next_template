import React from "react";

type ContentGridProps = {
  children: React.ReactNode;
  xs?: number; // Number of columns for xs screens (small)
  sm?: number; // Number of columns for sm screens (medium)
  md?: number; // Number of columns for md screens (large)
  lg?: number; // Number of columns for lg screens (extra large)
  xl?: number; // Number of columns for xl screens (extra extra large)
};

const ContentGrid: React.FC<ContentGridProps> = ({
  children,
  xs = 12, // Default span is 12 for xs (full width)
  sm = xs, // Default to xs for sm
  md = xs, // Default to xs for md
  lg = xs, // Default to xs for lg
  xl = xs, // Default to xs for xl
}) => {
  // Convert xs, sm, md, lg, xl into Tailwind grid classes
  const gridClass = `
    col-span-${xs} sm:col-span-${sm} md:col-span-${md} lg:col-span-${lg} xl:col-span-${xl}
  `;

  return <div className={gridClass}>{children}</div>;
};

export default ContentGrid;
