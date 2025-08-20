import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Truck, Handshake, Globe2 } from "lucide-react";
import { useLanguage } from "@/lib/translations";
import carImage from "@assets/carles-rabada-wGMm96WAq4E-unsplash_1751521440904.jpg";

export default function InternationalTrade() {
  const { t } = useLanguage();
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const globalServices = [
    {
      icon: <Truck className="text-4xl mb-4" style={{ color: "var(--accent-yellow)" }} size={48} />,
      title: t.productSourcing,
      description: t.productSourcingDesc,
    },
    {
      icon: <Handshake className="text-4xl mb-4" style={{ color: "var(--accent-yellow)" }} size={48} />,
      title: t.proxyPurchasing,
      description: t.proxyPurchasingDesc,
    },
    {
      icon: <Globe2 className="text-4xl mb-4" style={{ color: "var(--accent-yellow)" }} size={48} />,
      title: t.marketEntry,
      description: t.marketEntryDesc,
    },
  ];

  const productCategories = [
    {
      image: carImage,
      title: t.carsVehicles,
      description: t.carsVehiclesDesc,
    },
    {
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
      title: t.homeAppliances,
      description: t.homeAppliancesDesc,
    },
    {
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
      title: t.furniture,
      description: t.furnitureDesc,
    },
    {
      image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
      title: t.electronics,
      description: t.electronicsDesc,
    },
    {
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
      title: t.clothesShoes,
      description: t.clothesShoesDesc,
    },
    {
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
      title: t.industrialMachines,
      description: t.industrialMachinesDesc,
    },
  ];

  return (
    <section id="international-trade" className="py-12 sm:py-20 text-white relative overflow-hidden" style={{ backgroundColor: "var(--charcoal)" }}>
      {/* Background */}
      <div className="absolute inset-0 opacity-5">
        <img
          src="https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080"
          alt="International shipping containers"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">{t.tradeTitle}</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              {t.tradeSubtitle}
            </p>
          </div>

          {/* Global Map Visualization */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 sm:p-8 mb-8 sm:mb-12">
            <div className="text-center mb-6 sm:mb-8">
              <h3 className="text-xl sm:text-2xl font-semibold mb-4">{t.globalReach}</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {globalServices.map((service, index) => (
                  <div key={index} className="text-center">
                    <div className="flex justify-center mb-4">{service.icon}</div>
                    <h4 className="text-base sm:text-lg font-semibold mb-2">{service.title}</h4>
                    <p className="text-sm text-gray-300">{service.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Product Categories Grid */}
          <div className="mb-8 sm:mb-12">
            <h3 className="text-xl sm:text-2xl font-semibold text-center mb-6 sm:mb-8">{t.services}</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {productCategories.map((category, index) => (
                <Card key={index} className="bg-white/10 backdrop-blur-lg border-none text-white hover-lift">
                  <CardContent className="p-0">
                    <div className="relative h-24 sm:h-32 overflow-hidden rounded-t-lg">
                      <img
                        src={category.image}
                        alt={category.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    </div>
                    <div className="p-3 sm:p-4 text-center">
                      <h4 className="text-sm sm:text-base font-semibold mb-2">{category.title}</h4>
                      <p className="text-xs sm:text-sm text-gray-300">{category.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="text-center">
            <Button
              onClick={() => scrollToSection("contact")}
              className="text-black font-semibold px-8 py-4 rounded-full text-lg shadow-xl hover:shadow-2xl hover-lift"
              style={{ backgroundColor: "var(--accent-yellow)" }}
            >
              {t.startTradeJourney}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}