import { createContext, useContext } from 'react';

export type Language = 'en' | 'zh' | 'fr';

export interface Translations {
  // Navigation
  home: string;
  services: string;
  about: string;
  contact: string;
  getConsultation: string;

  // Hero Section
  heroTitle: {
    comprehensive: string;
    technology: string;
    business: string;
    globalTrade: string;
  };
  heroSubtitle: string;
  exploreServices: string;
  contactUs: string;

  // Services Overview
  servicesTitle: string;
  servicesSubtitle: string;
  itConsulting: string;
  businessConsulting: string;
  internationalTrade: string;

  // IT Consulting
  itTitle: string;
  itSubtitle: string;
  webDevelopment: string;
  webDevDesc: string;
  uiuxDesign: string;
  uiuxDesc: string;
  chatbotIntegration: string;
  chatbotDesc: string;
  aiToolsTraining: string;
  aiToolsDesc: string;
  cybersecurity: string;
  cybersecurityDesc: string;
  cloudComputing: string;
  cloudDesc: string;
  dataAnalysis: string;
  dataAnalysisDesc: string;
  roboticsEngineering: string;
  roboticsEngineeringDesc: string;

  // Business Consulting
  businessTitle: string;
  businessSubtitle: string;
  marketAnalysis: string;
  marketAnalysisDesc: string;
  digitalMarketing: string;
  digitalMarketingDesc: string;
  financeSupport: string;
  financeSupportDesc: string;
  operationsOptimization: string;
  operationsDesc: string;
  businessStrategy: string;
  businessStrategyDesc: string;
  performanceAnalytics: string;
  performanceDesc: string;
  customerSupport: string;
  customerSupportDesc: string;
  projectManagement: string;
  projectManagementDesc: string;
  careerDevelopment: string;
  careerDevelopmentDesc: string;
  translationServices: string;
  translationServicesDesc: string;

  // International Trade
  tradeTitle: string;
  tradeSubtitle: string;
  productSourcing: string;
  productSourcingDesc: string;
  proxyPurchasing: string;
  proxyPurchasingDesc: string;
  marketEntry: string;
  marketEntryDesc: string;
  startTradeJourney: string;

  // Product Categories
  carsVehicles: string;
  carsVehiclesDesc: string;
  homeAppliances: string;
  homeAppliancesDesc: string;
  furniture: string;
  furnitureDesc: string;
  electronics: string;
  electronicsDesc: string;
  clothesShoes: string;
  clothesShoesDesc: string;
  industrialMachines: string;
  industrialMachinesDesc: string;

  // About Section
  aboutTitle: string;
  aboutText1: string;
  aboutText2: string;
  ourMission: string;
  globalReach: string;
  expertTeam: string;
  expertTeamDesc: string;
  provenResults: string;

  // Why Choose Us
  whyChooseTitle: string;
  whyChooseSubtitle: string;
  testimonial1: string;
  testimonial2: string;
  testimonial3: string;
  clientTestimonials: string;
  expertiseTitle: string;
  expertiseDesc: string;
  innovationTitle: string;
  innovationDesc: string;
  supportTitle: string;
  supportDesc: string;
  globalTitle: string;
  globalDesc: string;

  // FAQ
  faqTitle: string;
  faqSubtitle: string;
  faqQuestions: {
    industries: { question: string; answer: string; };
    quality: { question: string; answer: string; };
    timeline: { question: string; answer: string; };
    support: { question: string; answer: string; };
    language: { question: string; answer: string; };
    difference: { question: string; answer: string; };
  };

  // Contact Section
  contactTitle: string;
  contactSubtitle: string;
  getInTouch: string;
  fullName: string;
  email: string;
  phone: string;
  serviceInterest: string;
  selectService: string;
  message: string;
  sendMessage: string;
  messagePlaceholder: string;

  // Action Buttons
  learnMore: string;
  scheduleITConsultation: string;
  scheduleBusinessConsultation: string;
  proven: string;
  languageSupport: string;

  // Footer
  footerDescription: string;
  quickLinks: string;
  servicesFooter: string;
  contactInfo: string;
  emailUs: string;
  callUs: string;
  address: string;
  addressText: string;
  followUs: string;
  copyright: string;
  multiLanguage: string;
  chinaOperations: string;
  globalReachFooter: string;
}

export const translations: Record<Language, Translations> = {
  en: {
    // Navigation
    home: "Home",
    services: "Services",
    about: "About",
    contact: "Contact",
    getConsultation: "Get Free Consultation",

    // Hero Section
    heroTitle: {
      comprehensive: "Comprehensive Solutions Across",
      technology: "Technology",
      business: "Business",
      globalTrade: "Global Trade"
    },
    heroSubtitle: "Helping clients leverage technology, optimize business operations, and expand into global markets through expert consulting services.",
    exploreServices: "Explore Services",
    contactUs: "Contact Us",

    // Services Overview
    servicesTitle: "Our Core Services",
    servicesSubtitle: "Comprehensive solutions tailored to your business needs",
    itConsulting: "IT Consulting",
    businessConsulting: "Business Consulting", 
    internationalTrade: "International Trade",

    // IT Consulting
    itTitle: "IT Consulting Services",
    itSubtitle: "Transforming businesses through innovative technology solutions",
    webDevelopment: "Web Development",
    webDevDesc: "Custom websites and web applications built with modern technologies",
    uiuxDesign: "UI/UX Design",
    uiuxDesc: "User-centered design for optimal digital experiences",
    chatbotIntegration: "Chatbot Integration",
    chatbotDesc: "AI-powered conversational interfaces for customer support",
    aiToolsTraining: "AI Tools Training",
    aiToolsDesc: "Comprehensive training on AI technologies and implementation",
    cybersecurity: "Cybersecurity",
    cybersecurityDesc: "Protecting your digital assets with advanced security measures",
    cloudComputing: "Cloud Computing",
    cloudDesc: "Scalable cloud solutions for modern business infrastructure",
    dataAnalysis: "Data Analysis",
    dataAnalysisDesc: "Transform raw data into actionable insights for informed business decisions",
    roboticsEngineering: "Robotics Engineering", 
    roboticsEngineeringDesc: "Advanced robotics solutions and automation systems for industrial applications",

    // Business Consulting
    businessTitle: "Business Consulting Services",
    businessSubtitle: "Strategic guidance for sustainable growth and optimization",
    marketAnalysis: "Market Analysis",
    marketAnalysisDesc: "In-depth market research and competitive analysis",
    digitalMarketing: "Digital Marketing",
    digitalMarketingDesc: "Comprehensive digital marketing strategies and campaigns",
    financeSupport: "Finance & Accounting Support",
    financeSupportDesc: "Financial planning, analysis, optimization, and bookkeeping services",
    operationsOptimization: "Operations Optimization",
    operationsDesc: "Streamlining processes for maximum efficiency",
    businessStrategy: "Business Strategy",
    businessStrategyDesc: "Long-term strategic planning and execution",
    performanceAnalytics: "Performance Analytics",
    performanceDesc: "Data-driven insights for business intelligence",
    customerSupport: "Customer Support",
    customerSupportDesc: "24/7 customer service and support solutions",
    projectManagement: "Project Management",
    projectManagementDesc: "End-to-end project planning and execution",
    careerDevelopment: "Career Development",
    careerDevelopmentDesc: "Professional growth and training programs",
    translationServices: "Translation Services",
    translationServicesDesc: "Document translation in English, Chinese, and French",

    // International Trade
    tradeTitle: "International Trade Services",
    tradeSubtitle: "Bridging global markets with comprehensive trade solutions and China expertise",
    productSourcing: "Product Sourcing",
    productSourcingDesc: "Direct connections with verified Chinese manufacturers",
    proxyPurchasing: "Proxy Purchasing",
    proxyPurchasingDesc: "Complete procurement and quality assurance services",
    marketEntry: "Market Entry",
    marketEntryDesc: "Strategic guidance for international expansion",
    startTradeJourney: "Start Global Trade Journey",

    // Product Categories
    carsVehicles: "Cars & Vehicles",
    carsVehiclesDesc: "Automotive sourcing and import facilitation",
    homeAppliances: "Home Appliances",
    homeAppliancesDesc: "Smart home and kitchen appliance sourcing",
    furniture: "Furniture",
    furnitureDesc: "Quality furniture and interior design products",
    electronics: "Electronics",
    electronicsDesc: "Consumer electronics and technology products",
    clothesShoes: "Clothes & Shoes",
    clothesShoesDesc: "Fashion and apparel sourcing solutions",
    industrialMachines: "Industrial Machines",
    industrialMachinesDesc: "Manufacturing and industrial equipment sourcing",

    // About Section
    aboutTitle: "About AIConsult Hub",
    aboutText1: "Founded on the principle of providing comprehensive solutions across technology, business, and international trade, AIConsult Hub has emerged as a trusted partner for businesses seeking growth and innovation.",
    aboutText2: "Our mission is to help clients leverage technology, optimize business operations, and expand into global markets through expert consulting services. We bridge the gap between innovative technology solutions and practical business applications.",
    ourMission: "Our Mission",
    globalReach: "Global Reach",
    expertTeam: "Expert Team",
    expertTeamDesc: "Seasoned professionals with extensive experience in technology, business consulting, and international trade.",
    provenResults: "Proven Results",

    // Why Choose Us
    whyChooseTitle: "Why Choose AIConsult Hub?",
    whyChooseSubtitle: "We combine deep expertise with innovative solutions to deliver exceptional results",
    testimonial1: "AIConsult Hub transformed our digital presence and streamlined our operations. Exceptional service!",
    testimonial2: "Their market analysis and financial advisory services helped us expand internationally. Professional and reliable!",
    testimonial3: "Outstanding product sourcing and trade support. They made our import process seamless and cost-effective!",
    clientTestimonials: "What Our Clients Say",
    expertiseTitle: "Deep Expertise",
    expertiseDesc: "Specialized knowledge and proven experience across technology, business consulting, and global trade",
    innovationTitle: "Innovation Focus",
    innovationDesc: "Cutting-edge solutions tailored to your specific business needs",
    supportTitle: "24/7 Support",
    supportDesc: "Round-the-clock assistance and dedicated account management",
    globalTitle: "Global Network",
    globalDesc: "Worldwide partnerships and local market expertise",

    // FAQ
    faqTitle: "Frequently Asked Questions",
    faqSubtitle: "Get answers to common questions about our consulting services",
    faqQuestions: {
      industries: {
        question: "What industries do you serve?",
        answer: "We serve businesses across all industries, with particular expertise in technology, business and International Trade."
      },
      quality: {
        question: "How do you ensure quality in international trade services?",
        answer: "We maintain strict quality control processes, including supplier verification, product inspections, and comprehensive due diligence on all trade partners. Our team in China conducts on-site visits and maintains long-term relationships with verified manufacturers."
      },
      timeline: {
        question: "What is your typical project timeline?",
        answer: "Project timelines vary based on scope and complexity. IT consulting projects like web development or app creation typically take 1-8 weeks, while business consulting engagements range from 1-4 weeks. International trade projects vary significantly - product sourcing may take 1-4 weeks, while comprehensive market entry strategies can span 1-3 months. We provide detailed project plans and milestone schedules during our initial consultation phase."
      },
      support: {
        question: "Do you offer ongoing support after project completion?",
        answer: "Yes, we provide comprehensive post-project support including maintenance, training, and consultation services to ensure long-term success. We offer various support packages tailored to your specific needs and budget."
      },
      language: {
        question: "How do you handle language barriers in international business?",
        answer: "Our multilingual team is fluent in English, Chinese, and French, enabling seamless communication across international markets."
      },
      difference: {
        question: "What makes your IT consulting different from other providers?",
        answer: "We uniquely combine comprehensive IT expertise—including web and mobile app development, UI/UX design, chatbot integration, AI tools training, data analysis, Machine Learning, cybersecurity, cloud computing, and robotics engineering."
      }
    },

    // Contact Section
    contactTitle: "Get In Touch",
    contactSubtitle: "Ready to transform your business? Let's discuss your specific needs and create a customized solution.",
    getInTouch: "Contact Information",
    fullName: "Full Name",
    email: "Email Address",
    phone: "Phone Number",
    serviceInterest: "Service Interest",
    selectService: "Select a service",
    message: "Message",
    sendMessage: "Send Message",
    messagePlaceholder: "Tell us about your project or requirements...",

    // Action Buttons
    learnMore: "Learn More",
    scheduleITConsultation: "Schedule IT Consultation",
    scheduleBusinessConsultation: "Schedule Business Consultation",
    proven: "Proven",
    languageSupport: "Language Support",

    // Footer
    footerDescription: "Empowering businesses through technology, strategic consulting, and global trade solutions. Your trusted partner for comprehensive growth strategies.",
    quickLinks: "Quick Links",
    servicesFooter: "Services",
    contactInfo: "Contact Info",
    emailUs: "Email Us",
    callUs: "Call Us",
    address: "Address",
    addressText: "Global Operations Center, International Business District",
    followUs: "Follow Us",
    copyright: "© 2025 AIConsult Hub. All rights reserved.",
    multiLanguage: "🌐 Multi-language Support",
    chinaOperations: "🇨🇳 China Operations",
    globalReachFooter: "🌍 Global Reach"
  },

  zh: {
    // Navigation
    home: "首页",
    services: "服务",
    about: "关于我们",
    contact: "联系我们",
    getConsultation: "获取免费咨询",

    // Hero Section
    heroTitle: {
      comprehensive: "跨技术、商业和国际贸易的",
      technology: "综合解决方案",
      business: "",
      globalTrade: ""
    },
    heroSubtitle: "帮助客户通过专业咨询服务利用技术、优化业务运营并扩展至全球市场。",
    exploreServices: "探索服务",
    contactUs: "联系我们",

    // Services Overview
    servicesTitle: "我们的核心服务",
    servicesSubtitle: "为您的业务需求量身定制的综合解决方案",
    itConsulting: "IT咨询",
    businessConsulting: "商业咨询",
    internationalTrade: "国际贸易",

    // IT Consulting
    itTitle: "IT咨询服务",
    itSubtitle: "通过创新技术解决方案改变企业",
    webDevelopment: "网站开发",
    webDevDesc: "使用现代技术构建的定制网站和网络应用程序",
    uiuxDesign: "UI/UX设计",
    uiuxDesc: "以用户为中心的设计，优化数字体验",
    chatbotIntegration: "聊天机器人集成",
    chatbotDesc: "AI驱动的对话界面，用于客户支持",
    aiToolsTraining: "AI工具培训",
    aiToolsDesc: "AI技术和实施的综合培训",
    cybersecurity: "网络安全",
    cybersecurityDesc: "通过先进的安全措施保护您的数字资产",
    cloudComputing: "云计算",
    cloudDesc: "适用于现代业务基础设施的可扩展云解决方案",
    dataAnalysis: "数据分析",
    dataAnalysisDesc: "将原始数据转换为可操作的洞察，以做出明智的业务决策",
    roboticsEngineering: "机器人工程",
    roboticsEngineeringDesc: "先进的机器人解决方案和工业应用自动化系统",

    // Business Consulting
    businessTitle: "商业咨询服务",
    businessSubtitle: "可持续增长和优化的战略指导",
    marketAnalysis: "市场分析",
    marketAnalysisDesc: "深入的市场研究和竞争分析",
    digitalMarketing: "数字营销",
    digitalMarketingDesc: "综合数字营销策略和活动",
    financeSupport: "财务支持",
    financeSupportDesc: "财务规划、分析、优化和记账服务",
    operationsOptimization: "运营优化",
    operationsDesc: "简化流程以实现最大效率",
    businessStrategy: "商业战略",
    businessStrategyDesc: "长期战略规划和执行",
    performanceAnalytics: "绩效分析",
    performanceDesc: "商业智能的数据驱动洞察",
    customerSupport: "客户支持",
    customerSupportDesc: "24/7客户服务和支持解决方案",
    projectManagement: "项目管理",
    projectManagementDesc: "端到端项目规划和执行",
    careerDevelopment: "职业发展",
    careerDevelopmentDesc: "专业成长和培训项目",
    translationServices: "翻译服务",
    translationServicesDesc: "英语、中文和法语文档翻译",

    // International Trade
    tradeTitle: "国际贸易服务",
    tradeSubtitle: "通过综合贸易解决方案和中国专业知识连接全球市场",
    productSourcing: "产品采购",
    productSourcingDesc: "与经过验证的中国制造商直接联系",
    proxyPurchasing: "代理采购",
    proxyPurchasingDesc: "完整的采购和质量保证服务",
    marketEntry: "市场进入",
    marketEntryDesc: "国际扩张的战略指导",
    startTradeJourney: "开始全球贸易之旅",

    // Product Categories
    carsVehicles: "汽车及车辆",
    carsVehiclesDesc: "汽车采购和进口便利化",
    homeAppliances: "家用电器",
    homeAppliancesDesc: "智能家居和厨房电器采购",
    furniture: "家具",
    furnitureDesc: "优质家具和室内设计产品",
    electronics: "电子产品",
    electronicsDesc: "消费电子和技术产品",
    clothesShoes: "服装鞋类",
    clothesShoesDesc: "时尚和服装采购解决方案",
    industrialMachines: "工业机械",
    industrialMachinesDesc: "制造和工业设备采购",

    // About Section
    aboutTitle: "关于AIConsult Hub",
    aboutText1: "AIConsult Hub基于跨技术、商业和国际贸易提供综合解决方案的原则而成立，已成为寻求增长和创新的企业的可信赖合作伙伴。",
    aboutText2: "我们的使命是通过专业咨询服务帮助客户利用技术、优化业务运营并扩展至全球市场。我们在创新技术解决方案与实际业务应用之间搭建桥梁。",
    ourMission: "我们的使命",
    globalReach: "全球覆盖",
    expertTeam: "专家团队",
    expertTeamDesc: "在技术、商业咨询和国际贸易方面拥有丰富经验的资深专业人士。",
    provenResults: "已验证成果",

    // Why Choose Us
    whyChooseTitle: "为什么选择AIConsult Hub？",
    whyChooseSubtitle: "我们将深厚的专业知识与创新解决方案相结合，提供卓越的成果",
    testimonial1: "AIConsult Hub改变了我们的数字形象并简化了我们的运营。服务出色！",
    testimonial2: "他们的市场分析和财务咨询服务帮助我们实现了国际化扩展。专业且可靠！",
    testimonial3: "卓越的产品采购和贸易支持。他们让我们的进口流程变得无缝且具有成本效益！",
    clientTestimonials: "客户评价",
    expertiseTitle: "深厚专业知识",
    expertiseDesc: "在技术、商业咨询和全球贸易方面拥有专业知识和丰富经验",
    innovationTitle: "创新导向",
    innovationDesc: "为您的特定业务需求量身定制的尖端解决方案",
    supportTitle: "24/7支持",
    supportDesc: "全天候协助和专属客户管理",
    globalTitle: "全球网络",
    globalDesc: "全球合作伙伴关系和本地市场专业知识",

    // FAQ
    faqTitle: "常见问题",
    faqSubtitle: "获取关于我们咨询服务的常见问题答案",
    faqQuestions: {
      industries: {
        question: "你们服务哪些行业？",
        answer: "我们为各行各业的企业提供服务，在技术、商业和国际贸易方面拥有特别的专业知识。"
      },
      quality: {
        question: "你们如何确保国际贸易服务的质量？",
        answer: "我们维持严格的质量控制流程，包括供应商验证、产品检查和对所有贸易伙伴的全面尽职调查。我们在中国的团队进行实地访问，并与经过验证的制造商保持长期关系。"
      },
      timeline: {
        question: "你们的典型项目时间表是什么？",
        answer: "项目时间表根据范围和复杂性而异。网站开发或应用程序创建等IT咨询项目通常需要1-8周，而商业咨询项目范围为1-4周。国际贸易项目差异很大 - 产品采购可能需要1-4周，而全面的市场进入策略可能需要1-3个月。我们在初始咨询阶段提供详细的项目计划和里程碑时间表。"
      },
      support: {
        question: "项目完成后你们是否提供持续支持？",
        answer: "是的，我们提供全面的项目后支持，包括维护、培训和咨询服务，以确保长期成功。我们提供根据您的具体需求和预算量身定制的各种支持包。"
      },
      language: {
        question: "你们如何处理国际商务中的语言障碍？",
        answer: "我们的多语言团队精通英语、中文和法语，能够在国际市场中实现无缝沟通。"
      },
      difference: {
        question: "你们的IT咨询与其他提供商有什么不同？",
        answer: "我们独特地结合了全面的IT专业知识——包括网页和移动应用开发、UI/UX设计、聊天机器人集成、AI工具培训、数据分析、机器学习、网络安全、云计算和机器人工程。"
      }
    },

    // Contact Section
    contactTitle: "联系我们",
    contactSubtitle: "准备改变您的业务？让我们讨论您的具体需求并创建定制解决方案。",
    getInTouch: "联系信息",
    fullName: "全名",
    email: "电子邮件地址",
    phone: "电话号码",
    serviceInterest: "服务兴趣",
    selectService: "选择服务",
    message: "留言",
    sendMessage: "发送消息",
    messagePlaceholder: "告诉我们您的项目或要求...",

    // Action Buttons
    learnMore: "了解更多",
    scheduleITConsultation: "预约IT咨询",
    scheduleBusinessConsultation: "预约商业咨询",
    proven: "已验证的",
    languageSupport: "语言支持",

    // Footer
    footerDescription: "通过技术、战略咨询和全球贸易解决方案赋能企业。您的综合增长策略可信赖合作伙伴。",
    quickLinks: "快速链接",
    servicesFooter: "服务",
    contactInfo: "联系信息",
    emailUs: "发送邮件",
    callUs: "致电我们",
    address: "地址",
    addressText: "全球运营中心，国际商务区",
    followUs: "关注我们",
    copyright: "© 2025 AIConsult Hub. 保留所有权利。",
    multiLanguage: "🌐 多语言支持",
    chinaOperations: "🇨🇳 中国业务",
    globalReachFooter: "🌍 全球覆盖"
  },

  fr: {
    // Navigation
    home: "Accueil",
    services: "Services",
    about: "À propos",
    contact: "Contact",
    getConsultation: "Consultation Gratuite",

    // Hero Section
    heroTitle: {
      comprehensive: "Solutions complètes pour la",
      technology: "technologie, les affaires et le commerce mondial",
      business: "",
      globalTrade: ""
    },
    heroSubtitle: "Aidant les clients à exploiter la technologie, optimiser les opérations commerciales et s'étendre sur les marchés mondiaux grâce à des services de conseil experts.",
    exploreServices: "Explorer les Services",
    contactUs: "Nous Contacter",

    // Services Overview
    servicesTitle: "Nos Services Principaux",
    servicesSubtitle: "Solutions complètes adaptées à vos besoins commerciaux",
    itConsulting: "Conseil IT",
    businessConsulting: "Conseil en Affaires",
    internationalTrade: "Commerce International",

    // IT Consulting
    itTitle: "Services de Conseil IT",
    itSubtitle: "Transformer les entreprises grâce à des solutions technologiques innovantes",
    webDevelopment: "Développement Web",
    webDevDesc: "Sites web personnalisés et applications web construits avec des technologies modernes",
    uiuxDesign: "Design UI/UX",
    uiuxDesc: "Design centré utilisateur pour des expériences numériques optimales",
    chatbotIntegration: "Intégration de Chatbot",
    chatbotDesc: "Interfaces conversationnelles alimentées par l'IA pour le support client",
    aiToolsTraining: "Formation Outils IA",
    aiToolsDesc: "Formation complète sur les technologies IA et leur implémentation",
    cybersecurity: "Cybersécurité",
    cybersecurityDesc: "Protection de vos actifs numériques avec des mesures de sécurité avancées",
    cloudComputing: "Cloud Computing",
    cloudDesc: "Solutions cloud évolutives pour l'infrastructure d'entreprise moderne",
    dataAnalysis: "Analyse de Données",
    dataAnalysisDesc: "Transformer les données brutes en insights exploitables pour des décisions commerciales éclairées",
    roboticsEngineering: "Ingénierie Robotique",
    roboticsEngineeringDesc: "Solutions robotiques avancées et systèmes d'automatisation pour applications industrielles",

    // Business Consulting
    businessTitle: "Services de Conseil en Affaires",
    businessSubtitle: "Orientation stratégique pour une croissance durable et l'optimisation",
    marketAnalysis: "Analyse de Marché",
    marketAnalysisDesc: "Recherche de marché approfondie et analyse concurrentielle",
    digitalMarketing: "Marketing Digital",
    digitalMarketingDesc: "Stratégies et campagnes de marketing digital complètes",
    financeSupport: "Support Financier",
    financeSupportDesc: "Services de planification, analyse, optimisation et comptabilité financière",
    operationsOptimization: "Optimisation des Opérations",
    operationsDesc: "Rationalisation des processus pour une efficacité maximale",
    businessStrategy: "Stratégie d'Entreprise",
    businessStrategyDesc: "Planification et exécution stratégique à long terme",
    performanceAnalytics: "Analytique de Performance",
    performanceDesc: "Insights basés sur les données pour l'intelligence d'affaires",
    customerSupport: "Support Client",
    customerSupportDesc: "Solutions de service et support client 24/7",
    projectManagement: "Gestion de Projet",
    projectManagementDesc: "Planification et exécution de projets de bout en bout",
    careerDevelopment: "Développement de Carrière",
    careerDevelopmentDesc: "Programmes de croissance professionnelle et de formation",
    translationServices: "Services de Traduction",
    translationServicesDesc: "Traduction de documents en anglais, chinois et français",

    // International Trade
    tradeTitle: "Services de Commerce International",
    tradeSubtitle: "Connecter les marchés mondiaux avec des solutions commerciales complètes et une expertise chinoise",
    productSourcing: "Sourcing de Produits",
    productSourcingDesc: "Connexions directes avec des fabricants chinois vérifiés",
    proxyPurchasing: "Achat par Procuration",
    proxyPurchasingDesc: "Services complets d'approvisionnement et d'assurance qualité",
    marketEntry: "Entrée sur le Marché",
    marketEntryDesc: "Orientation stratégique pour l'expansion internationale",
    startTradeJourney: "Commencer le Voyage Commercial Mondial",

    // Product Categories
    carsVehicles: "Voitures et Véhicules",
    carsVehiclesDesc: "Sourcing automobile et facilitation d'importation",
    homeAppliances: "Électroménager",
    homeAppliancesDesc: "Sourcing d'appareils électroménagers intelligents et de cuisine",
    furniture: "Mobilier",
    furnitureDesc: "Mobilier de qualité et produits de design d'intérieur",
    electronics: "Électronique",
    electronicsDesc: "Électronique grand public et produits technologiques",
    clothesShoes: "Vêtements et Chaussures",
    clothesShoesDesc: "Solutions de sourcing mode et vêtements",
    industrialMachines: "Machines Industrielles",
    industrialMachinesDesc: "Sourcing d'équipements de fabrication et industriels",

    // About Section
    aboutTitle: "À propos d'AIConsult Hub",
    aboutText1: "Fondée sur le principe de fournir des solutions complètes en technologie, business et commerce international, AIConsult Hub est devenue un partenaire de confiance pour les entreprises cherchant la croissance et l'innovation.",
    aboutText2: "Notre mission est d'aider les clients à exploiter la technologie, optimiser les opérations commerciales et s'étendre sur les marchés mondiaux grâce à des services de conseil experts. Nous comblons le fossé entre les solutions technologiques innovantes et les applications commerciales pratiques.",
    ourMission: "Notre Mission",
    globalReach: "Portée Mondiale",
    expertTeam: "Équipe d'Experts",
    expertTeamDesc: "Professionnels expérimentés avec une vaste expérience en technologie, conseil en affaires et commerce international.",
    provenResults: "Résultats Prouvés",

    // Why Choose Us
    whyChooseTitle: "Pourquoi Choisir AIConsult Hub ?",
    whyChooseSubtitle: "Nous combinons une expertise approfondie avec des solutions innovantes pour offrir des résultats exceptionnels",
    testimonial1: "AIConsult Hub a transformé notre présence numérique et rationalisé nos opérations. Service exceptionnel !",
    testimonial2: "Leurs services d'analyse de marché et de conseil financier nous ont aidés à nous développer à l'international. Professionnel et fiable !",
    testimonial3: "Excellent sourcing de produits et support commercial. Ils ont rendu notre processus d'importation fluide et rentable !",
    clientTestimonials: "Témoignages Clients",
    expertiseTitle: "Expertise Approfondie",
    expertiseDesc: "Connaissances spécialisées et expérience éprouvée en technologie, conseil en affaires et commerce mondial",
    innovationTitle: "Focus Innovation",
    innovationDesc: "Solutions de pointe adaptées à vos besoins commerciaux spécifiques",
    supportTitle: "Support 24/7",
    supportDesc: "Assistance 24h/24 et gestion de compte dédiée",
    globalTitle: "Réseau Mondial",
    globalDesc: "Partenariats mondiaux et expertise du marché local",

    // FAQ
    faqTitle: "Questions Fréquentes",
    faqSubtitle: "Obtenez des réponses aux questions courantes sur nos services de conseil",
    faqQuestions: {
      industries: {
        question: "Quelles industries servez-vous ?",
        answer: "Nous servons des entreprises dans toutes les industries, avec une expertise particulière en technologie, business et commerce international."
      },
      quality: {
        question: "Comment assurez-vous la qualité dans les services de commerce international ?",
        answer: "Nous maintenons des processus de contrôle qualité stricts, incluant la vérification des fournisseurs, les inspections de produits et une diligence raisonnable complète sur tous les partenaires commerciaux. Notre équipe en Chine effectue des visites sur site et maintient des relations à long terme avec des fabricants vérifiés."
      },
      timeline: {
        question: "Quel est votre calendrier de projet typique ?",
        answer: "Les calendriers de projet varient selon la portée et la complexité. Les projets de conseil IT comme le développement web ou la création d'applications prennent généralement 1-8 semaines, tandis que les engagements de conseil business s'étendent de 1-4 semaines. Les projets de commerce international varient considérablement - le sourcing de produits peut prendre 1-4 semaines, tandis que les stratégies d'entrée sur le marché complètes peuvent s'étendre sur 1-3 mois. Nous fournissons des plans de projet détaillés et des calendriers d'étapes pendant notre phase de consultation initiale."
      },
      support: {
        question: "Offrez-vous un support continu après l'achèvement du projet ?",
        answer: "Oui, nous fournissons un support post-projet complet incluant la maintenance, la formation et les services de consultation pour assurer le succès à long terme. Nous offrons divers packages de support adaptés à vos besoins spécifiques et votre budget."
      },
      language: {
        question: "Comment gérez-vous les barrières linguistiques dans les affaires internationales ?",
        answer: "Notre équipe multilingue parle couramment l'anglais, le chinois et le français, permettant une communication fluide sur les marchés internationaux."
      },
      difference: {
        question: "Qu'est-ce qui rend votre conseil IT différent des autres fournisseurs ?",
        answer: "Nous combinons de manière unique une expertise IT complète—incluant le développement web et mobile, la conception UI/UX, l'intégration de chatbots, la formation aux outils IA, l'analyse de données, l'apprentissage automatique, la cybersécurité, le cloud computing et l'ingénierie robotique."
      }
    },

    // Contact Section
    contactTitle: "Contactez-Nous",
    contactSubtitle: "Prêt à transformer votre entreprise ? Discutons de vos besoins spécifiques et créons une solution personnalisée.",
    getInTouch: "Informations de Contact",
    fullName: "Nom Complet",
    email: "Adresse Email",
    phone: "Numéro de Téléphone",
    serviceInterest: "Intérêt de Service",
    selectService: "Sélectionner un service",
    message: "Message",
    sendMessage: "Envoyer le Message",
    messagePlaceholder: "Parlez-nous de votre projet ou de vos exigences...",

    // Action Buttons
    learnMore: "En Savoir Plus",
    scheduleITConsultation: "Planifier Consultation IT",
    scheduleBusinessConsultation: "Planifier Consultation Business",
    proven: "Prouvé",
    languageSupport: "Support Linguistique",

    // Footer
    footerDescription: "Autonomiser les entreprises grâce à la technologie, le conseil stratégique et les solutions de commerce mondial. Votre partenaire de confiance pour les stratégies de croissance complètes.",
    quickLinks: "Liens Rapides",
    servicesFooter: "Services",
    contactInfo: "Infos Contact",
    emailUs: "Nous Envoyer un Email",
    callUs: "Nous Appeler",
    address: "Adresse",
    addressText: "Centre d'Opérations Mondial, District Commercial International",
    followUs: "Nous Suivre",
    copyright: "© 2025 AIConsult Hub. Tous droits réservés.",
    multiLanguage: "🌐 Support Multi-langues",
    chinaOperations: "🇨🇳 Opérations Chine",
    globalReachFooter: "🌍 Portée Mondiale"
  }
};

export interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};