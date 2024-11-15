import React, { isValidElement, ReactNode } from "react";

type NextCardProps = {
  title?: string | ReactNode;
  titleStyle?: any;
  contentStyle?: any;
  headerStyle?: any;
  actionComponent?: React.ReactNode | null;
  footerComponent?: React.ReactNode | null;
  footerStyle?: any;
  children: ReactNode;
  CardStyles?: any;
  footerPosition?: "r" | "l" | "c";
};

const NextCard: React.FC<NextCardProps> = ({
  CardStyles,
  title = "",
  titleStyle,
  headerStyle,
  contentStyle,
  actionComponent,
  footerComponent,
  footerStyle,
  children,
  footerPosition,
}) => {
  let PositionOfFooter = "justify-start";

  if (footerPosition === "r") {
    PositionOfFooter = "justify-end";
  } else if (footerPosition === "l") {
    PositionOfFooter = "justify-start";
  } else if (footerPosition === "c") {
    PositionOfFooter = "justify-center";
  } else {
    PositionOfFooter = "justify-start";
  }

  return (
    <div
      className={`flex flex-col shadow-lg rounded-xl min-w-40 w-full ${CardStyles}`}
    >
      {title || actionComponent ? (
        <CardHeader
          className={`px-6 pb-0 overflow-hidden ${headerStyle}`}
          title={
            typeof title === "object" ? (
              title
            ) : (
              <div
                className={`font-semibold text-base text-ellipsis w-full whitespace-nowrap ${titleStyle}`}
              >
                {title}
              </div>
            )
          }
          action={actionComponent ? actionComponent : null}
        />
      ) : null}
      <div className={`h-full w-full px-6 ${contentStyle}`}>{children}</div>
      {footerComponent ? (
        <div className={`px-6 pb-4 flex ${footerStyle} ${PositionOfFooter}`}>
          {isValidElement(footerComponent) ? footerComponent : null}
        </div>
      ) : null}
    </div>
  );
};

export default NextCard;

interface CardHeaderProp {
  className?: string;
  title?: null | React.ReactNode;
  action?: null | React.ReactNode;
}

const CardHeader = ({ className, title, action }: CardHeaderProp) => {
  return (
    <div className={`${className} flex w-full justify-between`}>
      <div>{title}</div>
      <div>{action}</div>
    </div>
  );
};
