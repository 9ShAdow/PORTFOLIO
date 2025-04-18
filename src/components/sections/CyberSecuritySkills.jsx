import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";

const CyberSecuritySkills = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimation();

  const sections = [
    {
      title: "🛠️ Outils & environnements",
      content:
        "Wireshark, Metasploit, Proxychains, VMware, Kali Linux,\nWazuh, Splunk, Crowdstrike, SentinelOne.\nOS : Ubuntu, Debian, Kali.\nFirewalls : pfSense, Stormshield.\nVirtualisation : KVM, VirtualBox.\nMicrosoft Defender for Endpoint.",
    },
    {
      title: "📜 Certifs & Objectifs",
      content:
        "✅ MOOC ANSSI obtenu.\n🔒 En préparation : CompTIA Security+.\nSensibilité aux standards ISO/OWASP.\nVeille continue sur les bonnes pratiques cybersécurité.",
    },
    {
      title: "💡 Réalisations concrètes",
      content:
      "🔸 Mise en place d’une segmentation réseau pour une PME.\n🔸 Durcissement complet d’un poste Debian.\n🔸 Sensibilisation d’équipes techniques & non-techniques à la sécurité.",
    },
  ];

  const repeated = [...sections, ...sections, ...sections];

  useEffect(() => {
    const updateSize = () => setIsMobile(window.innerWidth < 768);
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  // Scroll auto
  useEffect(() => {
    controls.start({
      x: "100%", // si tu veux aller de gauche ➝ droite
      transition: {
        duration: isMobile ? 30 : 70,
        ease: "linear",
        repeat: Infinity,
      },
    });
  }, [controls, isMobile]);

  // Stop au hover
  useEffect(() => {
    if (isHovered) {
      controls.stop();
    } else {
      controls.start({
        x: "-50%",
        transition: {
          duration: isMobile ? 40 : 30,
          ease: "linear",
          repeat: Infinity,
        },
      });
    }
  }, [isHovered, controls, isMobile]);

  return (
    <section
      id="cybersecurity"
      className="py-20 bg-black border-t border-[#5C4033]/30"
    >
      <RevealOnScroll>
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-[#5C4033] to-[#D2B48C] bg-clip-text text-transparent">
            Compétences Cybersécurité & Infrastructure
          </h2>

          {/* Défilement fluide, stoppé au hover */}
          <div
            className="overflow-hidden [mask-image:linear-gradient(to_right,_transparent,_black_25%,_black_75%,_transparent)]"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <motion.div className="flex gap-10 pr-20" animate={controls}>
              {repeated.map((section, index) => (
                <div
                  key={index}
                  className="min-w-[320px] md:min-w-[360px] bg-[#000000] p-6 rounded-xl border border-white/10 text-center hover:border-[#5C4033] hover:shadow-[0_2px_8px_rgba(92,64,51,0.5)] transition"
                >
                  <h3 className="text-lg font-semibold text-[#FFEBCD] mb-4">
                    {section.title}
                  </h3>
                  <p className="text-sm text-[#FFEBCD] leading-relaxed whitespace-pre-line">
                    {section.content}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Mentalité */}
          <div className="mt-16 px-6 md:px-12">
            <div className="bg-[#000000] py-6 px-4 rounded-xl text-center">
              <h3 className="text-lg font-semibold text-[#FFEBCD] mb-4 italic tracking-wide">
                Mentalité & approche
              </h3>
              <p className="text-gray-400 text-sm max-w-2xl mx-auto italic leading-relaxed tracking-wide transition duration-300 hover:text-[#FFEBCD]">
                Approche offensive (red team) & défensive (blue team) — je
                priorise la compréhension des vecteurs d’attaque pour mieux les
                anticiper côté défensif. Ma logique est orientée remédiation
                concrète, durcissement réel et sensibilisation pragmatique.
              </p>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default CyberSecuritySkills;
