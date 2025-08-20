import { Button } from "@/components/ui/button";
import { CheckCircle, MapPin, Globe, Handshake } from "lucide-react";
import { useLanguage } from "@/lib/translations";

export default function About() {
  const { t } = useLanguage();
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const features = [
    {
      icon: <CheckCircle className="mr-4" style={{ color: "var(--accent-blue)" }} size={20} />,
      text: t.ourMission,
    },
    {
      icon: <CheckCircle className="mr-4" style={{ color: "var(--accent-emerald)" }} size={20} />,
      text: t.globalReach,
    },
    {
      icon: <CheckCircle className="mr-4" style={{ color: "var(--accent-yellow)" }} size={20} />,
      text: t.expertTeam,
    },
  ];

  const expertise = [
    {
      icon: <MapPin className="text-4xl mb-4" style={{ color: "var(--accent-blue)" }} size={48} />,
      title: t.ourMission,
      description: t.aboutText1,
      bgColor: "from-blue-50 to-indigo-50",
    },
    {
      icon: <Globe className="text-4xl mb-4" style={{ color: "var(--accent-emerald)" }} size={48} />,
      title: t.globalReach,
      description: t.aboutText2,
      bgColor: "from-emerald-50 to-teal-50",
    },
    {
      icon: <Handshake className="text-4xl mb-4" style={{ color: "var(--accent-yellow)" }} size={48} />,
      title: t.expertTeam,
      description: t.expertTeamDesc,
      bgColor: "from-yellow-50 to-orange-50",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6" style={{ color: "var(--charcoal)" }}>
                {t.aboutTitle}
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                {t.aboutText1}
              </p>
              <p className="text-lg text-gray-600 mb-6">
                {t.aboutText2}
              </p>

              <div className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    {feature.icon}
                    <span className="text-gray-700">{feature.text}</span>
                  </div>
                ))}
              </div>

              <Button
                onClick={() => scrollToSection("contact")}
                className="text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                style={{ backgroundColor: "var(--primary-blue)" }}
              >
                {t.contactUs}
              </Button>
            </div>

            <div>
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Professional business team collaborating"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>

          {/* Team Expertise Highlights */}
          <div className="mt-20">
            <h3 className="text-3xl font-bold text-center mb-12" style={{ color: "var(--charcoal)" }}>
              {t.ourMission}
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {expertise.map((item, index) => (
                <div key={index} className={`text-center bg-gradient-to-br ${item.bgColor} rounded-xl p-8 flex flex-col items-center`}>
                  <div className="mb-4">{item.icon}</div>
                  <h4 className="text-xl font-semibold mb-3 text-center" style={{ color: "var(--charcoal)" }}>
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-center">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
