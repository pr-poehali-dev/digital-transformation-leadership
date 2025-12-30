import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

export default function LeadershipPhilosophy() {
  return (
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
  );
}
