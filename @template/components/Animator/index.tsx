"use client";
import {
  AnimationControls,
  motion,
  Target,
  TargetAndTransition,
  VariantLabels,
} from "framer-motion";
import React from "react";

interface AnimatorProp {
  children: React.ReactNode;
  animationProps?: any;
  className?: string;
  animate?: AnimationControls | TargetAndTransition | VariantLabels | boolean;
  initial?: boolean | Target | VariantLabels;
  whileInView?: VariantLabels | TargetAndTransition;
  transition?: any;
}

const Animator = ({
  children,
  animationProps,
  className,
  animate,
  initial,
  whileInView,
  transition,
}: AnimatorProp) => (
  <motion.div
    initial={initial || { opacity: 0 }}
    animate={animate || { opacity: 1 }}
    whileInView={whileInView || undefined}
    transition={
      transition || { duration: 0.35, delay: 0.1, ease: [0.4, 0.0, 0.2, 1] }
    }
    className={className}
    {...animationProps}
  >
    {children}
  </motion.div>
);

export default Animator;
