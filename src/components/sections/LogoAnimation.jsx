import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Logos
import github from "../../assets/github-removebg-preview.png";
import python from "../../assets/python-removebg-preview.png";
import react from "../../assets/react-removebg-preview.png";
import cisco from "../../assets/cisco-removebg-preview.png";
import git from "../../assets/git.png";

const logos = [
  github,
  python,
  react,
  git,
  cisco,
  github,
  python,
  react,
  git,
  cisco,
];

export const LogoAnimation = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateSize = () => setIsMobile(window.innerWidth < 768);
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div className="py-10 bg-black opacity-100">
      <div className="container mx-auto">
        <div className="overflow-hidden [mask-image:linear-gradient(to_right,_transparent,_black_25%,_black_75%,_transparent)]">
          <motion.div
            className="flex gap-20 flex-none pr-20"
            animate={{ translateX: "-50%" }}
            transition={{
              duration: isMobile ? 40 : 35, // 💨 mobile plus rapide
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {logos.map((src, index) => (
              <motion.img
                key={index}
                src={src}
                alt={`logo-${index}`}
                className="h-[90px] w-auto object-contain transition duration-300 
                  filter sepia hue-rotate-[10deg] saturate-[600%] brightness-[95%] 
                  hover:scale-110"
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
