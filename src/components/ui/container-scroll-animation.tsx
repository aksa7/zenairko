"use client";
import React, { useRef } from "react";
import {
  useScroll,
  useTransform,
  motion,
  MotionValue,
  useReducedMotion,
} from "motion/react";

export const ContainerScroll = ({
  titleComponent,
  children,
}: {
  titleComponent: string | React.ReactNode;
  children: React.ReactNode;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });
  const reduceMotion = useReducedMotion();
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const mql = window.matchMedia("(max-width: 768px)");
    const apply = () => setIsMobile(mql.matches);
    apply();
    mql.addEventListener("change", apply);
    return () => mql.removeEventListener("change", apply);
  }, []);

  // Mobile: skip the 3D rotateX (heavy on phones) and use a tighter scale
  // range so the card just gently grows into place instead of full unfold.
  const scaleRange: [number, number] = isMobile ? [0.85, 0.95] : [1.05, 1];
  const rotateRange: [number, number] = isMobile ? [0, 0] : [20, 0];
  const translateRange: [number, number] = isMobile ? [0, -40] : [0, -100];

  const rotate = useTransform(scrollYProgress, [0, 1], rotateRange);
  const scale = useTransform(scrollYProgress, [0, 1], scaleRange);
  const translate = useTransform(scrollYProgress, [0, 1], translateRange);

  return (
    <div
      className="h-[60rem] md:h-[80rem] flex items-center justify-center relative p-2 md:p-20"
      ref={containerRef}
    >
      <div
        className="py-10 md:py-40 w-full relative"
        style={{
          perspective: isMobile ? "none" : "1000px",
        }}
      >
        <Header
          translate={translate}
          titleComponent={titleComponent}
          reduceMotion={!!reduceMotion}
        />
        <Card
          rotate={rotate}
          translate={translate}
          scale={scale}
          reduceMotion={!!reduceMotion}
        >
          {children}
        </Card>
      </div>
    </div>
  );
};

export const Header = ({
  translate,
  titleComponent,
  reduceMotion,
}: {
  translate: MotionValue<number>;
  titleComponent: React.ReactNode;
  reduceMotion: boolean;
}) => {
  return (
    <motion.div
      style={
        reduceMotion
          ? undefined
          : { translateY: translate, willChange: "transform" }
      }
      className="max-w-5xl mx-auto text-center"
    >
      {titleComponent}
    </motion.div>
  );
};

export const Card = ({
  rotate,
  scale,
  children,
  reduceMotion,
}: {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  translate: MotionValue<number>;
  children: React.ReactNode;
  reduceMotion: boolean;
}) => {
  return (
    <motion.div
      style={
        reduceMotion
          ? undefined
          : { rotateX: rotate, scale, willChange: "transform" }
      }
      className="max-w-5xl -mt-12 mx-auto h-[30rem] md:h-[40rem] w-full border-4 border-[#6C6C6C] p-2 md:p-6 bg-[#222222] rounded-[30px] shadow-2xl"
    >
      <div className="h-full w-full overflow-hidden rounded-2xl bg-gray-100 dark:bg-zinc-900 md:rounded-2xl md:p-4">
        {children}
      </div>
    </motion.div>
  );
};
