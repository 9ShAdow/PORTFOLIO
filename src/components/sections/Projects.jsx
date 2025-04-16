import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-[#5C4033] to-[#D2B48C] bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Projet LABs Cyberkure */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-[#5C4033] hover:shadow transition">
              <h3 className="text-xl font-bold mb-2">Cybersecurity Training LABs</h3>
              <p className="text-gray-400 mb-4">
                Mise en place de laboratoires de formation avec scénarios d’attaque (Kali Linux, SEToolkit) et supervision (Centreon, Wireshark, Nmap).
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["KVM", "Wireshark", "Nmap", "Centreon", "Kali Linux"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-[#5C4033] text-[#D2B48C] py-1 px-3 rounded-full text-sm transition duration-300 
                    hover:bg-[#D2B48C]/10 hover:text-[#FFEBCD] hover:shadow-[0_0_8px_4px_rgba(210,180,140,0.5)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Projet YOLOv8 */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-[#5C4033] hover:shadow transition">
              <h3 className="text-xl font-bold mb-2">Object Detection System</h3>
              <p className="text-gray-400 mb-4">
                Déploiement d’un modèle YOLOv8 pour la détection en temps réel (200 ms/image), avec annotation et entraînement personnalisé.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["YOLOv8", "Python", "OpenCV", "NVIDIA", "Flask"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-[#5C4033] text-[#D2B48C] py-1 px-3 rounded-full text-sm transition duration-300 
                    hover:bg-[#D2B48C]/10 hover:text-[#FFEBCD] hover:shadow-[0_0_8px_4px_rgba(210,180,140,0.5)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Projet Tracker GPS */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-[#5C4033] hover:shadow transition">
              <h3 className="text-xl font-bold mb-2">IoT GPS Tracker</h3>
              <p className="text-gray-400 mb-4">
                Développement d’un tracker GPS avec Arduino & Raspberry Pi, traitement temps réel en C++/Python et visualisation via API cartographique.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Arduino", "Raspberry Pi", "Node-RED", "C++", "Python", "API REST"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-[#5C4033] text-[#D2B48C] py-1 px-3 rounded-full text-sm transition duration-300 
                    hover:bg-[#D2B48C]/10 hover:text-[#FFEBCD] hover:shadow-[0_0_8px_4px_rgba(210,180,140,0.5)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Projet Audit web */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-[#5C4033] hover:shadow transition">
              <h3 className="text-xl font-bold mb-2">Security Audit & Hardening</h3>
              <p className="text-gray-400 mb-4">
                Audit de sécurité de sites web avec Nmap, Wireshark, logs et implémentation de correctifs (réduction du taux de pénétration de 40 % à 15 %).
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Nmap", "Wireshark", "TLS", "Firewall", "PHP", "Linux"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-[#5C4033] text-[#D2B48C] py-1 px-3 rounded-full text-sm transition duration-300 
                    hover:bg-[#D2B48C]/10 hover:text-[#FFEBCD] hover:shadow-[0_0_8px_4px_rgba(210,180,140,0.5)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
