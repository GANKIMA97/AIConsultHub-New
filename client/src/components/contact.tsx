import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { Mail, Phone, MapPin, Clock, Languages } from "lucide-react";
import { useLanguage } from "@/lib/translations";
import WeChatModal from "./wechat-modal";

export default function Contact() {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [isWeChatModalOpen, setIsWeChatModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceInterest: "",
    message: "",
  });

  const contactMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      return await apiRequest("POST", "/api/contacts", data);
    },
    onSuccess: () => {
      toast({
        title: "Success!",
        description: "Your message has been sent successfully. We'll get back to you soon!",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        serviceInterest: "",
        message: "",
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Error",
        description: error.message || "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.serviceInterest || !formData.message) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }
    contactMutation.mutate(formData);
  };

  const handleInputChange = (field: keyof typeof formData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: <Mail className="text-white" size={24} />,
      label: t.emailUs,
      value: "contact@aiconsulthub.com",
      color: "var(--accent-blue)",
    },
    {
      icon: <Phone className="text-white" size={24} />,
      label: t.callUs,
      value: "+86 199 8086 7510",
      color: "var(--accent-emerald)",
    },
    {
      icon: <MapPin className="text-white" size={24} />,
      label: t.address,
      value: "China",
      color: "var(--accent-yellow)",
    },
    {
      icon: <Clock className="text-white" size={24} />,
      label: t.services,
      value: "24/7",
      color: "#8b5cf6",
    },
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
    <section id="contact" className="py-12 sm:py-20 gradient-bg relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <img
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080"
          alt="Global business network connections"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">{t.contactTitle}</h2>
            <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto">
              {t.contactSubtitle}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Form */}
            <Card className="bg-white/10 backdrop-blur-lg border-white/20">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-white">{t.sendMessage}</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label className="text-white text-sm font-medium mb-2 block">{t.fullName} *</Label>
                      <Input
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        className="bg-white/20 border-white/30 text-white placeholder-white/70 focus:border-yellow-400 focus:ring-yellow-400/50"
                        placeholder={t.fullName}
                        required
                      />
                    </div>
                    <div>
                      <Label className="text-white text-sm font-medium mb-2 block">{t.email} *</Label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className="bg-white/20 border-white/30 text-white placeholder-white/70 focus:border-yellow-400 focus:ring-yellow-400/50"
                        placeholder={t.email}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label className="text-white text-sm font-medium mb-2 block">{t.phone}</Label>
                      <Input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        className="bg-white/20 border-white/30 text-white placeholder-white/70 focus:border-yellow-400 focus:ring-yellow-400/50"
                        placeholder={t.phone}
                      />
                    </div>
                    <div>
                      <Label className="text-white text-sm font-medium mb-2 block">{t.serviceInterest} *</Label>
                      <Select onValueChange={(value) => handleInputChange("serviceInterest", value)} value={formData.serviceInterest}>
                        <SelectTrigger className="bg-white/20 border-white/30 text-white focus:border-yellow-400 focus:ring-yellow-400/50">
                          <SelectValue placeholder={t.selectService} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="it-consulting">{t.itConsulting}</SelectItem>
                          <SelectItem value="business-consulting">{t.businessConsulting}</SelectItem>
                          <SelectItem value="international-trade">{t.internationalTrade}</SelectItem>
                          <SelectItem value="multiple">{t.services}</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label className="text-white text-sm font-medium mb-2 block">{t.message} *</Label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      rows={4}
                      className="bg-white/20 border-white/30 text-white placeholder-white/70 focus:border-yellow-400 focus:ring-yellow-400/50"
                      placeholder={t.messagePlaceholder}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={contactMutation.isPending}
                    className="w-full text-black py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                    style={{ backgroundColor: "var(--accent-yellow)" }}
                  >
                    {contactMutation.isPending ? t.sendMessage + "..." : t.sendMessage}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="bg-white/10 backdrop-blur-lg border-white/20">
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold text-white">{t.getInTouch}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center">
                      <div
                        className="w-12 h-12 rounded-lg flex items-center justify-center mr-4"
                        style={{ backgroundColor: info.color }}
                      >
                        {info.icon}
                      </div>
                      <div>
                        <p className="text-white font-medium">{info.label}</p>
                        <p className="text-blue-200">{info.value}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-lg border-white/20">
                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold text-white mb-4">{t.languageSupport}</h4>
                  <div className="flex items-center space-x-2 sm:space-x-4 flex-wrap">
                    <div className="flex items-center">
                      <Languages className="mr-2" style={{ color: "var(--accent-yellow)" }} size={20} />
                      <span className="text-white">English</span>
                    </div>
                    <div className="flex items-center">
                      <Languages className="mr-2" style={{ color: "var(--accent-emerald)" }} size={20} />
                      <span className="text-white">中文 (Chinese)</span>
                    </div>
                    <div className="flex items-center">
                      <Languages className="mr-2" style={{ color: "var(--accent-blue)" }} size={20} />
                      <span className="text-white">Français (French)</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-lg border-white/20">
                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold text-white mb-4">{t.followUs}</h4>
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
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      
      {/* WeChat Modal */}
      <WeChatModal 
        isOpen={isWeChatModalOpen} 
        onClose={() => setIsWeChatModalOpen(false)} 
      />
    </section>
  );
}
