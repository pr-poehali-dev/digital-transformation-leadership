import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";

export default function ContactForm() {
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

  return (
    <>
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
    </>
  );
}
