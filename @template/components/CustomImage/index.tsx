"use client";
import Image from "next/image";
import { ForwardedRef } from "react";
import ReplaceableImage from "../../assets/images/A1.jpg";

interface customImageProps {
  image?: any | undefined | string;
  alt?: string;
  loadingEase?: "lazy" | "eager";
  width?: number;
  height?: number;
  className?: string; // optional to style with a custom class
  havePriority?: boolean;
  styles?: React.CSSProperties;
  fetchPriority?: "auto" | "high" | "low" | undefined;
  imageLoader?: any;
  imageFill?: boolean;
  imageQuality?: number;
  ClickFunction?: () => void | any;
  blurDataURL?: string;
  sizes?: string;
  optimizeImage?: boolean;
  color?: string | undefined;
  caption?: string;
  ariaLabelledBy?: string;
  ariaDescribedBy?: string;
  title?: string;
  role?: string;
  dataAttributes?: { [key: string]: string };
  ref?: ForwardedRef<HTMLImageElement>;
  captionStyle?: string;
}

export default function CustomImage({
  image,
  alt,
  loadingEase,
  width = 0,
  height = 0,
  className = "", // optional className for styling
  havePriority = false,
  styles,
  fetchPriority = "low",
  imageLoader,
  imageFill,
  imageQuality,
  ClickFunction,
  blurDataURL,
  sizes,
  optimizeImage = false,
  color,
  caption,
  ariaLabelledBy,
  ariaDescribedBy,
  title,
  role,
  dataAttributes = {},
  ref,
  captionStyle,
}: customImageProps) {
  return (
    <figure>
      <Image
        src={image || ReplaceableImage}
        alt={alt || "Image"}
        unoptimized={optimizeImage}
        priority={havePriority && loadingEase === "eager" ? true : false}
        suppressContentEditableWarning={true}
        suppressHydrationWarning={true}
        width={width}
        height={height}
        className={className} // allows passing of custom className
        loading={havePriority && loadingEase === "eager" ? "eager" : "lazy"} // lazy load non-priority images
        about={alt}
        aria-readonly="true"
        aria-required="true"
        style={styles}
        draggable={false}
        fetchPriority={fetchPriority}
        loader={imageLoader || undefined}
        fill={imageFill || undefined}
        quality={imageQuality || undefined}
        onClick={ClickFunction}
        title={alt || title}
        blurDataURL={blurDataURL || ReplaceableImage.blurDataURL}
        sizes={sizes}
        hidden={false}
        aria-label={alt}
        color={color}
        aria-labelledby={ariaLabelledBy}
        aria-describedby={ariaDescribedBy}
        role={role}
        ref={ref}
        {...dataAttributes}
      />
      {caption ? (
        <figcaption className={captionStyle}>{caption}</figcaption>
      ) : null}
    </figure>
  );
}
