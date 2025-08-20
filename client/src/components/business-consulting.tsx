import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  BarChart3, 
  Megaphone, 
  Calculator, 
  Headphones,
  FolderOpen,
  TrendingUp,
  Network
} from "lucide-react";
import { useLanguage } from "@/lib/translations";

export default function BusinessConsulting() {
  const { t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const services = [
    {
      icon: <BarChart3 className="text-white" size={24} />,
      title: t.marketAnalysis,
      description: t.marketAnalysisDesc,
    },

    {
      icon: <Megaphone className="text-white" size={24} />,
      title: t.digitalMarketing,
      description: t.digitalMarketingDesc,
    },
    {
      icon: <Calculator className="text-white" size={24} />,
      title: t.financeSupport,
      description: t.financeSupportDesc,
    },

    {
      icon: <Headphones className="text-white" size={24} />,
      title: t.customerSupport,
      description: t.customerSupportDesc,
    },
    {
      icon: <FolderOpen className="text-white" size={24} />,
      title: t.projectManagement,
      description: t.projectManagementDesc,
    },
    {
      icon: <TrendingUp className="text-white" size={24} />,
      title: t.careerDevelopment,
      description: t.careerDevelopmentDesc,
    },
    {
      icon: <Network className="text-white" size={24} />,
      title: t.translationServices,
      description: t.translationServicesDesc,
    },
  ];

  return (
    <section id="business-consulting" className="py-12 sm:py-20 bg-gradient-to-b from-emerald-50 to-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: "var(--charcoal)" }}>
              {t.businessTitle}
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              {t.businessSubtitle}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-white shadow-lg hover-lift border border-emerald-100">
                <CardContent className="p-6 text-center">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 mx-auto"
                    style={{ backgroundColor: "var(--accent-emerald)" }}
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
              style={{ backgroundColor: "var(--accent-emerald)" }}
            >
              {t.scheduleBusinessConsultation}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
