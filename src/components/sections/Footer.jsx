import { ExternalLink, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-black border-t border-[#5C4033]/30">
      <div className="max-w-5xl mx-auto px-4 py-6 text-[#D2B48C] text-sm text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs">
          &copy; {new Date().getFullYear()} Ivan Tefang · Tous droits réservés.
        </p>

        <div className="flex flex-wrap justify-center md:justify-end gap-6 items-center">
          <a
            href="mailto:ivantefang@gmail.com"
            className="flex items-center gap-2 hover:text-[#FFEBCD] transition"
          >
            <Mail size={16} /> ivantefang@gmail.com
          </a>

          <a href="mailto:ivantefang@gmail.com?subject=Bonjour%20je%20souhaiterais%20recevoir%20votre%20num%C3%A9ro%20personnel" className="flex items-center gap-2 hover:text-[#FFEBCD] transition">
            <Phone size={16} /> Demander mon numéro
          </a>


          <a
            href="https://www.linkedin.com/in/ivan-andretti-tefang/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-[#FFEBCD] transition"
          >
            <ExternalLink size={16} /> LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
