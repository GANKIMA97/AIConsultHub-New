import logoPath from "@assets/AIConsult Hub Logo - Black with White Background - 5000x5000_1751191957519.png";
import { useLanguage } from "@/lib/translations";
import { useState } from "react";
import WeChatModal from "./wechat-modal";

export default function Footer() {
  const { t } = useLanguage();
  const [isWeChatModalOpen, setIsWeChatModalOpen] = useState(false);
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const serviceLinks = [
    { name: "IT Consulting", href: "#it-consulting" },
    { name: "Business Consulting", href: "#business-consulting" },
    { name: "International Trade", href: "#international-trade" },
    { name: "AI Tools Training", href: "#contact" },
    { name: "Digital Marketing", href: "#contact" },
  ];

  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Contact", href: "#contact" },
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Careers", href: "#" },
  ];

  const socialLinks = [
    { platform: "linkedin", icon: "fab fa-linkedin", color: "var(--accent-blue)", url: "https://www.linkedin.com/company/aiconsult-hub/" },
    { platform: "x", icon: "fab fa-twitter", color: "var(--accent-blue)", url: "https://x.com/GANKIMA_GOLI", isX: true },
    { platform: "instagram", icon: "fab fa-instagram", color: "var(--accent-emerald)", url: "https://instagram.com/aiconsult_hub" },
    { platform: "wechat", icon: "fab fa-weixin", color: "var(--accent-emerald)", url: "#", title: "Click to view WeChat QR Code", onClick: () => {
      setIsWeChatModalOpen(true);
    }},
    { platform: "whatsapp", icon: "fab fa-whatsapp", color: "var(--accent-yellow)", url: "https://wa.me/8619980867510" },
  ];

  return (
    <footer className="text-white py-12 sm:py-16" style={{ backgroundColor: "var(--charcoal)" }}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
            {/* Company Info */}
            <div className="sm:col-span-2 lg:col-span-2">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-white rounded-lg flex items-center justify-center p-2">
                  <img 
                    src={logoPath} 
                    alt="AIConsult Hub Logo" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">AIConsult Hub</h3>
                  <p className="text-sm text-gray-300 font-medium">Comprehensive Solutions</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6 max-w-md">
                {t.footerDescription}
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target={social.platform === 'wechat' ? '_self' : '_blank'}
                    rel={social.platform === 'wechat' ? '' : 'noopener noreferrer'}
                    className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                    style={{ backgroundColor: social.color }}
                    title={social.title || `Follow us on ${social.platform}`}
                    onClick={social.onClick ? (e) => { e.preventDefault(); social.onClick(); } : undefined}
                  >
                    {social.isX ? (
                      <div className="text-white font-bold text-lg" style={{ fontFamily: 'Arial, sans-serif' }}>
                        𝕏
                      </div>
                    ) : (
                      <i className={`${social.icon} text-white`}></i>
                    )}
                  </a>
                ))}
              </div>
            </div>

            {/* Services Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">{t.servicesFooter}</h4>
              <ul className="space-y-3">
                <li>
                  <button
                    onClick={() => scrollToSection('it-consulting')}
                    className="text-gray-300 hover:text-white transition-colors duration-300 text-left"
                  >
                    {t.itConsulting}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('business-consulting')}
                    className="text-gray-300 hover:text-white transition-colors duration-300 text-left"
                  >
                    {t.businessConsulting}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('international-trade')}
                    className="text-gray-300 hover:text-white transition-colors duration-300 text-left"
                  >
                    {t.internationalTrade}
                  </button>
                </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">{t.quickLinks}</h4>
              <ul className="space-y-3">
                <li>
                  <button
                    onClick={() => scrollToSection('about')}
                    className="text-gray-300 hover:text-white transition-colors duration-300 text-left"
                  >
                    {t.about}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="text-gray-300 hover:text-white transition-colors duration-300 text-left"
                  >
                    {t.contact}
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
                {t.copyright}
              </p>
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <span>{t.multiLanguage}</span>
                <span>{t.chinaOperations}</span>
                <span>{t.globalReachFooter}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* WeChat Modal */}
      <WeChatModal 
        isOpen={isWeChatModalOpen} 
        onClose={() => setIsWeChatModalOpen(false)} 
      />
    </footer>
  );
}
