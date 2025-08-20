import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Palette, 
  Bot, 
  Cpu, 
  Shield, 
  Cloud,
  BarChart3,
  Zap
} from "lucide-react";
import { useLanguage } from "@/lib/translations";

export default function ITConsulting() {
  const { t } = useLanguage();
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const services = [
    {
      icon: (
        <div className="text-white font-bold" style={{ fontSize: '20px', fontFamily: 'monospace' }}>
          &lt;/&gt;
        </div>
      ),
      title: t.webDevelopment,
      description: t.webDevDesc,
    },
    {
      icon: <Palette className="text-white" size={24} />,
      title: t.uiuxDesign,
      description: t.uiuxDesc,
    },
    {
      icon: <Bot className="text-white" size={24} />,
      title: t.chatbotIntegration,
      description: t.chatbotDesc,
    },
    {
      icon: <Cpu className="text-white" size={24} />,
      title: t.aiToolsTraining,
      description: t.aiToolsDesc,
    },
    {
      icon: <Shield className="text-white" size={24} />,
      title: t.cybersecurity,
      description: t.cybersecurityDesc,
    },
    {
      icon: <Cloud className="text-white" size={24} />,
      title: t.cloudComputing,
      description: t.cloudDesc,
    },
    {
      icon: <BarChart3 className="text-white" size={24} />,
      title: t.dataAnalysis,
      description: t.dataAnalysisDesc,
    },
    {
      icon: <Zap className="text-white" size={24} />,
      title: t.roboticsEngineering,
      description: t.roboticsEngineeringDesc,
    },
  ];

  return (
    <section id="it-consulting" className="py-12 sm:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: "var(--charcoal)" }}>
              {t.itTitle}
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              {t.itSubtitle}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 hover-lift border border-blue-100">
                <CardContent className="p-6 text-center">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 mx-auto"
                    style={{ backgroundColor: "var(--accent-blue)" }}
                  >
                    {service.icon}
                  </div>
                  <h4 className="text-lg font-semibold mb-2 text-center" style={{ color: "var(--charcoal)" }}>
                    {service.title}
                  </h4>
                  <p className="text-gray-600 text-sm text-center">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              onClick={() => scrollToSection("contact")}
              className="text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              style={{ backgroundColor: "var(--accent-blue)" }}
            >
              {t.scheduleITConsultation}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
