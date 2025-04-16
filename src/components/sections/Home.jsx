import { RevealOnScroll } from "../RevealOnScroll";
import { ComputersCanvas } from "../canvas/ComputersCanvas"; // Assurez-vous du bon chemin
import { motion } from "framer-motion";


export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center relative px-4 md:px-8 max-w-lg md:max-w-6xl mx-auto"

    >
      <RevealOnScroll>
        <div className="md:w-full w-fit md:ml-3 text-left z-10 pt-40 md:pt-20 md:pl-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#5C4033] to-[#D2B48C] bg-clip-text text-transparent leading-right md:text-left text-center">
          Tefang Ivan Andretti 
          </h1>
          <p className="text-gray-400 text-sm mb-8 max-w-lg ml-4 md:text-left md:pr-20 text-center">
            Ingénieur cybersécurité & développeur freelance — j’alterne entre audits, dev web sécurisé, LABs offensifs et solutions concrètes.<br />
            <em>« L’innovation distingue un leader d’un suiveur. »</em>
          </p>

          <div className="flex justify-center md:justify-start space-x-4">

            <a
              href="#projects"
              className="bg-[#5C4033] text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border border-[#5C4033] text-[#5C4033] py-3 px-6 rounded font-medium transition-all duration-200 
             hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-[#D2B48C]"
            >
              Contact Me
            </a>
          </div>
        </div>


      </RevealOnScroll>
        <div className="md:w-1/2 flex justify-center items-center mt-10 md:mt-0 h-110">
          <ComputersCanvas />
        </div>

    </section>
  );
};