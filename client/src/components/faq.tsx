import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLanguage } from "@/lib/translations";

export default function FAQ() {
  const { t } = useLanguage();
  const faqs = [
    t.faqQuestions.industries,
    t.faqQuestions.quality,
    t.faqQuestions.timeline,
    t.faqQuestions.support,
    t.faqQuestions.language,
    t.faqQuestions.difference,
  ];

  return (
    <section className="py-12 sm:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: "var(--charcoal)" }}>
              {t.faqTitle}
            </h2>
            <p className="text-lg sm:text-xl text-gray-600">
              {t.faqSubtitle}
            </p>
          </div>

          <Card className="shadow-lg">
            <CardContent className="p-4 sm:p-8">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left hover:no-underline">
                      <span className="text-base sm:text-lg font-semibold" style={{ color: "var(--charcoal)" }}>
                        {faq.question}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
