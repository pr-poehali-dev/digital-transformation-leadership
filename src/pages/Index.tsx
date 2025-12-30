import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useState } from "react";

export default function Index() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    question: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const projects = [
    {
      company: "АО «СОГАЗ»",
      role: "Заместитель директора департамента цифровой трансформации",
      period: "2023 – н.в.",
      challenge: "Внедрить AI и трансформировать страховые продукты крупнейшей компании",
      action: "Руководство командой 15 человек, интеграция AI-решений (deepseek, qwen), управление портфелем проектов",
      result: [
        "Управление 10+ проектами с контролем сроков и бюджета",
        "Внедрение AI в продуктовую разработку",
        "Prompt-инжиниринг для оптимизации процессов"
      ],
      icon: "Shield",
      gradient: "from-amber-600/20 to-transparent"
    },
    {
      company: "Банк России",
      role: "Ведущий бизнес-аналитик проекта «Цифровой рубль»",
      period: "2022 – 2023",
      challenge: "Бизнес-анализ и проектирование государственной платформы национального масштаба",
      action: "Формализация требований 10+ заказчиков, проектирование архитектуры системы, работа с регуляторами",
      result: [
        "Снижение рисков несоответствия на 30%",
        "Проектирование критической финансовой инфраструктуры",
        "Согласование требований множественных стейкholders"
      ],
      icon: "Building2",
      gradient: "from-blue-600/20 to-transparent"
    },
    {
      company: "Шереметьево ВИП",
      role: "CTO / Технический директор",
      period: "2019 – 2022",
      challenge: "Полная техническая стратегия и цифровизация VIP-сервисов аэропорта",
      action: "Управление командой 20 чел., создание CRM, мобильного приложения, платежной платформы, PMO",
      result: [
        "Повышение NPS на 20%",
        "Сокращение time-to-market в 2.5 раза",
        "Оптимизация бюджета на 15%"
      ],
      icon: "Plane",
      gradient: "from-purple-600/20 to-transparent"
    },
    {
      company: "Банк Интеркоммерц",
      role: "Директор проектного офиса",
      period: "2017 – 2019",
      challenge: "Построить систему управления проектами и стратегический портфель банка",
      action: "Построение PMO с нуля, внедрение методологий, регламентов и процессов управления",
      result: [
        "Обеспечение исполнения стратегического портфеля",
        "Внедрение ITIL и Agile практик",
        "Создание проектной культуры в организации"
      ],
      icon: "Briefcase",
      gradient: "from-green-600/20 to-transparent"
    }
  ];

  const expertise = {
    management: [
      "Управление командами 50+ человек",
      "Agile / Scrum / Kanban",
      "PMO / Portfolio Management",
      "ITIL Service Management",
      "Бюджетирование и оптимизация",
      "Lean Six Sigma"
    ],
    technical: [
      "Цифровая трансформация",
      "Микросервисная архитектура",
      "Data-driven разработка",
      "AI/ML интеграция",
      "DevOps практики",
      "Банковские технологии (ЦАБС)"
    ],
    industry: [
      "Финтех и банкинг",
      "Страхование",
      "Авиаперевозки",
      "Транспорт и логистика"
    ]
  };

  const articles = [
    {
      title: "Как внедрять AI в продуктовую разработку",
      subtitle: "Опыт Prompt-инжиниринга в страховой компании",
      tag: "AI & ML"
    },
    {
      title: "Цифровой рубль: архитектурные вызовы",
      subtitle: "Взгляд изнутри на проект государственного масштаба",
      tag: "Финтех"
    },
    {
      title: "От PMO до CTO",
      subtitle: "Как управление проектами строит техническую стратегию",
      tag: "Лидерство"
    }
  ];

  const testimonials = [
    {
      company: "Шереметьево ВИП",
      logo: "✈️",
      text: "Под руководством Юрия команда достигла выдающихся результатов в цифровизации сервисов"
    },
    {
      company: "Банк Интеркоммерц",
      logo: "🏦",
      text: "Построил проектный офис с нуля и внедрил культуру проектного управления"
    },
    {
      company: "Инверсия Capital",
      logo: "💼",
      text: "Эффективное управление техническими инициативами и командами разработки"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="tech-grid fixed inset-0 opacity-50" />
      
      <div className="relative">
        <section className="container mx-auto px-4 py-20 md:py-32">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-12 animate-fade-in">
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-primary/20 to-accent/10 border-2 border-primary/30 flex items-center justify-center text-8xl">
                👨‍💼
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                  Юрий Соловкин
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-6 font-medium">
                  Технический руководитель | Эксперт по цифровой трансформации
                </p>
                <p className="text-lg text-foreground/90 mb-8 leading-relaxed">
                  Опытный технический лидер с 20+ летним опытом. Превращаю бизнес-стратегию 
                  в работающие цифровые продукты и масштабирую высоконагруженные команды. 
                  <span className="text-primary font-semibold"> Специализация: финтех, страхование, авиация.</span>
                </p>
                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                  <Button size="lg" className="gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                    <Icon name="MessageCircle" size={20} />
                    Обсудить трансформацию
                  </Button>
                  <Button size="lg" variant="outline" className="gap-2 border-primary/30 hover:bg-primary/10">
                    <Icon name="Download" size={20} />
                    Запросить резюме
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-20">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16 animate-slide-up">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Философия лидерства</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8" />
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="bg-card/50 backdrop-blur border-primary/20 hover:border-primary/40 transition-all">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                    <Icon name="Target" size={24} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Бизнес-результаты</h3>
                  <p className="text-muted-foreground">
                    Цифровизация — это не про IT, а про измеримые бизнес-метрики: 
                    NPS, время выхода на рынок, оптимизация затрат
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur border-primary/20 hover:border-primary/40 transition-all">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                    <Icon name="Brain" size={24} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Data-driven подход</h3>
                  <p className="text-muted-foreground">
                    Управление через данные и аналитические инсайты. 
                    Опыт работы с AI, машинным обучением и prompt-инжинирингом
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur border-primary/20 hover:border-primary/40 transition-all">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                    <Icon name="Users" size={24} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Инженерная культура</h3>
                  <p className="text-muted-foreground">
                    Строительство не просто команд, а целых инженерных культур 
                    с фокусом на качество, скорость и непрерывное улучшение
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-gradient-to-br from-primary/10 to-accent/5 border-primary/30">
              <CardContent className="pt-6">
                <p className="text-lg text-center leading-relaxed">
                  <span className="text-primary font-bold text-2xl">"</span>
                  Комплексный подход: от стратегии (PMO, ITIL, бюджетирование) до тактики 
                  (Agile, DevOps, архитектура микросервисов). Превращаю технологические 
                  возможности в конкурентные преимущества бизнеса.
                  <span className="text-primary font-bold text-2xl">"</span>
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="container mx-auto px-4 py-20 bg-gradient-to-b from-transparent via-primary/5 to-transparent">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Ключевые проекты</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8" />
              <p className="text-xl text-muted-foreground">
                От государственных платформ до корпоративной трансформации
              </p>
            </div>

            <div className="space-y-8">
              {projects.map((project, index) => (
                <Card 
                  key={index} 
                  className="bg-card/50 backdrop-blur border-primary/20 hover:border-primary/40 transition-all overflow-hidden"
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} pointer-events-none`} />
                  <CardContent className="pt-6 relative">
                    <div className="flex items-start gap-6">
                      <div className="w-16 h-16 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <Icon name={project.icon as any} size={32} className="text-primary" />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3 mb-3">
                          <h3 className="text-2xl font-bold">{project.company}</h3>
                          <Badge variant="secondary" className="text-xs">
                            {project.period}
                          </Badge>
                        </div>
                        
                        <p className="text-sm text-muted-foreground mb-4">{project.role}</p>
                        
                        <div className="space-y-4">
                          <div>
                            <span className="text-primary font-semibold">Задача:</span>
                            <p className="text-foreground/90 mt-1">{project.challenge}</p>
                          </div>
                          
                          <div>
                            <span className="text-primary font-semibold">Действия:</span>
                            <p className="text-foreground/90 mt-1">{project.action}</p>
                          </div>
                          
                          <div>
                            <span className="text-primary font-semibold">Результаты:</span>
                            <ul className="mt-2 space-y-2">
                              {project.result.map((item, i) => (
                                <li key={i} className="flex items-start gap-2">
                                  <Icon name="CheckCircle2" size={18} className="text-primary mt-0.5 flex-shrink-0" />
                                  <span className="text-foreground/90">{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Экспертиза</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto" />
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-card/50 backdrop-blur border-primary/20">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-amber-600/20 flex items-center justify-center">
                      <Icon name="Users2" size={20} className="text-amber-600" />
                    </div>
                    <h3 className="text-xl font-bold">Управление</h3>
                  </div>
                  <ul className="space-y-3">
                    {expertise.management.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Icon name="Dot" size={20} className="text-primary flex-shrink-0" />
                        <span className="text-sm text-foreground/90">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur border-primary/20">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-blue-600/20 flex items-center justify-center">
                      <Icon name="Code2" size={20} className="text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold">Технологии</h3>
                  </div>
                  <ul className="space-y-3">
                    {expertise.technical.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Icon name="Dot" size={20} className="text-primary flex-shrink-0" />
                        <span className="text-sm text-foreground/90">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur border-primary/20">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-green-600/20 flex items-center justify-center">
                      <Icon name="Landmark" size={20} className="text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold">Отрасли</h3>
                  </div>
                  <ul className="space-y-3">
                    {expertise.industry.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Icon name="Dot" size={20} className="text-primary flex-shrink-0" />
                        <span className="text-sm text-foreground/90">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-20 bg-gradient-to-b from-primary/5 to-transparent">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Экспертные материалы</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8" />
              <p className="text-muted-foreground">Публикации и мысли о цифровой трансформации</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {articles.map((article, index) => (
                <Card 
                  key={index}
                  className="bg-card/50 backdrop-blur border-primary/20 hover:border-primary/40 transition-all cursor-pointer group"
                >
                  <CardContent className="pt-6">
                    <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
                      {article.tag}
                    </Badge>
                    <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {article.subtitle}
                    </p>
                    <div className="flex items-center gap-2 text-primary text-sm font-medium">
                      Читать далее
                      <Icon name="ArrowRight" size={16} />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-20">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Рекомендации</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto" />
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((item, index) => (
                <Card 
                  key={index}
                  className="bg-card/50 backdrop-blur border-primary/20"
                >
                  <CardContent className="pt-6">
                    <div className="text-5xl mb-4">{item.logo}</div>
                    <h3 className="font-bold mb-3">{item.company}</h3>
                    <p className="text-sm text-muted-foreground italic">"{item.text}"</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-20 bg-gradient-to-b from-transparent via-primary/5 to-transparent">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Давайте обсудим ваши вызовы</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6" />
              <p className="text-xl text-muted-foreground">
                Готов возглавить цифровую трансформацию в вашей компании
              </p>
            </div>

            <Card className="bg-card/50 backdrop-blur border-primary/30">
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Имя</label>
                      <Input 
                        placeholder="Ваше имя"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="bg-background/50 border-primary/20"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Компания</label>
                      <Input 
                        placeholder="Название компании"
                        value={formData.company}
                        onChange={(e) => setFormData({...formData, company: e.target.value})}
                        className="bg-background/50 border-primary/20"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <Input 
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="bg-background/50 border-primary/20"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Интересующий вопрос</label>
                    <Textarea 
                      placeholder="Расскажите о ваших вызовах и задачах..."
                      rows={4}
                      value={formData.question}
                      onChange={(e) => setFormData({...formData, question: e.target.value})}
                      className="bg-background/50 border-primary/20"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                    Отправить запрос
                  </Button>
                </form>

                <div className="mt-8 pt-8 border-t border-primary/20">
                  <p className="text-center text-sm text-muted-foreground mb-4">
                    Или свяжитесь напрямую:
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <Button variant="outline" className="gap-2 border-primary/30 hover:bg-primary/10">
                      <Icon name="Send" size={18} />
                      Telegram
                    </Button>
                    <Button variant="outline" className="gap-2 border-primary/30 hover:bg-primary/10">
                      <Icon name="Linkedin" size={18} />
                      LinkedIn
                    </Button>
                    <Button variant="outline" className="gap-2 border-primary/30 hover:bg-primary/10">
                      <Icon name="Mail" size={18} />
                      Email
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <footer className="container mx-auto px-4 py-12 border-t border-primary/20">
          <div className="max-w-5xl mx-auto text-center text-muted-foreground">
            <p>© 2025 Юрий Соловкин. Технический руководитель и эксперт по цифровой трансформации.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
