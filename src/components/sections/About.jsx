import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "PHP",
    "TailwindCSS",
  ];

  const backendSkills = [
    "Python",
    "Node.js",
    "Django",
    "Flask",
    "C",
    "C++",
    "Bash",
    "PowerShell",
    "Ansible",
    "AWS",
    "Azure",
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-10"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4 mt-0">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-[#5C4033] to-[#D2B48C] bg-clip-text text-transparent text-center">
            {" "}
            About Me
          </h2>

          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-[#5C4033] hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
  <p className="text-gray-300 mb-6">
    Étudiant en cybersécurité passionné, avec une solide expérience en
    audit de sécurité, virtualisation, infrastructure réseau et développement web.
    Capable de mettre en œuvre des solutions concrètes, de former, d’automatiser
    et de répondre à des enjeux réels grâce à une approche polyvalente
    et orientée résultat.
  </p>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {/* Bloc Cybersecurity */}
    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
      <h3 className="text-xl font-bold mb-4">Cybersécurité</h3>
      <div className="flex flex-wrap gap-2">
        {[
          "OWASP",
          "Nmap",
          "Burp Suite",
          "Active Directory",
          "Intune",
          "Audit de sécurité",
          "Durcissement",
          "EDR / SOAR",
          "OSINT",
        ].map((tech, key) => (
          <span
            key={key}
            className="bg-[#5C4033] text-[#D2B48C] py-1 px-3 rounded-full text-sm transition duration-300 hover:bg-[#D2B48C]/10 hover:text-[#FFEBCD] hover:shadow-[0_0_8px_4px_rgba(210,180,140,0.5)]"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>

    {/* Bloc Développement Web */}
    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
      <h3 className="text-xl font-bold mb-4">Développement Web</h3>
      <div className="flex flex-wrap gap-2">
        {[
          "HTML",
          "CSS",
          "JavaScript",
          "React",
          "PHP",
          "Python",
          "Node.js",
          "Django",
          "Flask",
          "TailwindCSS",
        ].map((tech, key) => (
          <span
            key={key}
            className="bg-[#5C4033] text-[#D2B48C] py-1 px-3 rounded-full text-sm transition duration-300 hover:bg-[#D2B48C]/10 hover:text-[#FFEBCD] hover:shadow-[0_0_8px_4px_rgba(210,180,140,0.5)]"
          >
            {tech}
          </span>
                  ))}
                </div>
              </div>
            </div>
          </div>


          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-[#5C4033] hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>EFREI, Paris</strong>
                  <br />
                  <p className="text-[#D2B48C] ml-6 text-sm">
                    Cycle Ingénieur en Réseaux et Sécurité
                  </p>
                  <p className="text-xs ml-6">(Sep 2024 - Present)</p>
                </li>
                <br />
                <li>
                  <strong>Université de Haute-Alsace, Colmar</strong>
                  <br />
                  <p className="text-[#D2B48C] ml-6 text-sm">
                    BUT Réseaux et Télécommunications
                  </p>
                  <p className="text-xs ml-6">(Sep 2021 - Jul 2024)</p>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-[#5C4033] hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    Cyberkure Security & Systems, Paris
                  </h4>
                  <details className="ml-6 text-sm ">
                    <summary className="cursor-pointer text-[#D2B48C]">
                      Appui au Dirigeant
                    </summary>
                    <ul className="list-disc ml-3 mt-2">
                      <li>Gestion de projets web et équipe offshore</li>
                      <li>Mise en place de LABs en cybersécurité</li>
                      <li>Participation à des appels d’offres</li>
                    </ul>
                  </details>
                  <p className="text-xs mt-0.5">(Fév 2025 - Present)</p>
                </div>

                <div>
                  <h4 className="font-semibold">Freelance, Saint-Louis</h4>
                  <details className="ml-6 text-sm ">
                    <summary className="cursor-pointer text-[#D2B48C]">
                      Web & Sécurité
                    </summary>
                    <ul className="list-disc ml-3 mt-2">
                      <li>3 sites sécurisés (TLS, anti-SQLi)</li>
                      <li>2 audits (Nmap, Wireshark)</li>
                      <li>40 % ➝ 15 % de réduction d’exposition</li>
                      <li>10+ clients sensibilisés</li>
                    </ul>
                  </details>
                  <p className="text-xs mt-0.5">(Jan 2024 - Present)</p>
                </div>

                <div>
                  <h4 className="font-semibold">ORANGE, Strasbourg</h4>
                  <details className="ml-6 text-sm ">
                    <summary className="cursor-pointer text-[#D2B48C]">
                      Pilote d’Activité Réseau et Client
                    </summary>
                    <ul className="list-disc ml-3 mt-2">
                      <li>-15 % sur les délais d’intervention</li>
                      <li>+10 % sur la satisfaction client</li>
                      <li>98 % de réussite (Wireshark, Cisco)</li>
                    </ul>
                  </details>
                  <p className="text-xs mt-0.5">(Août 2022 - Aoû 2024)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
