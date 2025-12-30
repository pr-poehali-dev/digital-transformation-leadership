import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export default function HeroSection() {
  return (
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
  );
}
