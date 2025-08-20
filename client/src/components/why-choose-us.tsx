import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Globe, Rocket, Quote, User } from "lucide-react";
import { useLanguage } from "@/lib/translations";

export default function WhyChooseUs() {
  const { t } = useLanguage();
  const valueProps = [
    {
      icon: <Award className="text-white text-2xl" size={32} />,
      title: t.expertiseTitle,
      description: t.expertiseDesc,
      color: "var(--accent-blue)",
      secondaryColor: "var(--primary-blue)",
    },
    {
      icon: <Users className="text-white text-2xl" size={32} />,
      title: t.supportTitle,
      description: t.supportDesc,
      color: "var(--accent-emerald)",
      secondaryColor: "var(--primary-teal)",
    },
    {
      icon: <Globe className="text-white text-2xl" size={32} />,
      title: t.globalTitle,
      description: t.globalDesc,
      color: "var(--accent-yellow)",
      secondaryColor: "#f97316",
    },
    {
      icon: <Rocket className="text-white text-2xl" size={32} />,
      title: t.innovationTitle,
      description: t.innovationDesc,
      color: "#8b5cf6",
      secondaryColor: "#6366f1",
    },
  ];

  const testimonials = [
    {
      quote: t.testimonial1,
      icon: <User className="w-12 h-12 p-3 rounded-full bg-blue-100" style={{ color: "var(--accent-blue)" }} />,
      color: "var(--accent-blue)",
    },
    {
      quote: t.testimonial2,
      icon: <User className="w-12 h-12 p-3 rounded-full bg-emerald-100" style={{ color: "var(--accent-emerald)" }} />,
      color: "var(--accent-emerald)",
    },
    {
      quote: t.testimonial3,
      icon: <User className="w-12 h-12 p-3 rounded-full bg-yellow-100" style={{ color: "var(--accent-yellow)" }} />,
      color: "var(--accent-yellow)",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" style={{ color: "var(--charcoal)" }}>
              {t.whyChooseTitle}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.whyChooseSubtitle}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {valueProps.map((prop, index) => (
              <div key={index} className="text-center">
                <div
                  className="w-20 h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center"
                  style={{
                    background: `linear-gradient(135deg, ${prop.color} 0%, ${prop.secondaryColor} 100%)`,
                  }}
                >
                  {prop.icon}
                </div>
                <h4 className="text-xl font-semibold mb-3" style={{ color: "var(--charcoal)" }}>
                  {prop.title}
                </h4>
                <p className="text-gray-600">{prop.description}</p>
              </div>
            ))}
          </div>

          {/* Client Testimonials */}
          <Card className="shadow-xl">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-center mb-8" style={{ color: "var(--charcoal)" }}>
                {t.clientTestimonials}
              </h3>
              <div className="grid md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="text-center">
                    <div className="mb-4">
                      <Quote className="text-2xl mb-4 mx-auto" style={{ color: testimonial.color }} size={32} />
                      <p className="text-gray-600 italic">"{testimonial.quote}"</p>
                    </div>
                    <div className="flex justify-center">
                      {testimonial.icon}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
