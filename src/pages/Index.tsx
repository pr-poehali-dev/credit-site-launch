import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [loanAmount, setLoanAmount] = useState([50000]);
  const [loanPeriod, setLoanPeriod] = useState([30]);
  const [interestRate] = useState(12.5);

  const calculateMonthlyPayment = () => {
    const principal = loanAmount[0];
    const monthlyRate = interestRate / 100 / 12;
    const numberOfPayments = loanPeriod[0];
    const monthlyPayment = principal * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
    const totalAmount = monthlyPayment * numberOfPayments;
    const totalInterest = totalAmount - principal;
    return {
      monthlyPayment: Math.round(monthlyPayment),
      totalAmount: Math.round(totalAmount),
      totalInterest: Math.round(totalInterest)
    };
  };

  const calculations = calculateMonthlyPayment();

  const features = [
    { icon: 'Clock', title: 'Быстрое одобрение', description: 'Решение по заявке за 5 минут' },
    { icon: 'Shield', title: 'Безопасно', description: 'Защита данных по стандартам банков' },
    { icon: 'Percent', title: 'Выгодные условия', description: 'Ставка от 12.5% годовых' },
    { icon: 'CreditCard', title: 'Без залога', description: 'Займы без поручителей и залога' }
  ];

  const steps = [
    { step: '01', title: 'Заявка', description: 'Заполните простую форму за 2 минуты', icon: 'FileText' },
    { step: '02', title: 'Одобрение', description: 'Получите решение моментально', icon: 'CheckCircle' },
    { step: '03', title: 'Деньги', description: 'Средства поступят на карту в течение часа', icon: 'Wallet' }
  ];

  const faqItems = [
    { question: 'Какие документы нужны для займа?', answer: 'Для получения займа достаточно паспорта РФ. Дополнительные документы могут потребоваться в зависимости от суммы займа.' },
    { question: 'Как быстро поступают деньги?', answer: 'После одобрения заявки деньги поступают на вашу карту в течение 15-60 минут в зависимости от банка.' },
    { question: 'Можно ли досрочно погасить займ?', answer: 'Да, вы можете досрочно погасить займ полностью или частично без комиссий и штрафов.' },
    { question: 'Какая максимальная сумма займа?', answer: 'Максимальная сумма займа составляет 500 000 рублей для проверенных клиентов.' }
  ];

  const iconColors = ['text-violet-400', 'text-blue-400', 'text-cyan-400', 'text-emerald-400'];

  return (
    <div className="min-h-screen bg-[#0a0f1e] text-white">

      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#0a0f1e]/80 backdrop-blur-xl border-b border-white/5">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-500 to-blue-500 flex items-center justify-center shadow-lg shadow-violet-500/30">
                <Icon name="DollarSign" size={18} className="text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight">Credit<span className="text-violet-400">365</span></span>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              {['Займы', 'Условия', 'Калькулятор', 'Вопросы', 'Контакты'].map((item, i) => (
                <a key={i} href={`#${['loans','conditions','calculator','faq','contacts'][i]}`}
                  className="text-sm text-gray-400 hover:text-white transition-colors duration-200">
                  {item}
                </a>
              ))}
            </nav>
            <Button className="bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-500 hover:to-blue-500 text-white border-0 shadow-lg shadow-violet-500/25 text-sm">
              <Icon name="Phone" size={15} className="mr-2" />
              Поддержка
            </Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative py-28 px-6 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-violet-600/20 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 right-1/4 w-[300px] h-[300px] bg-cyan-500/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto text-center relative z-10 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/20 rounded-full px-4 py-1.5 text-sm text-violet-300 mb-8">
            <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
            Одобрение за 5 минут
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Займы до{' '}
            <span className="bg-gradient-to-r from-violet-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              500 000 ₽
            </span>
          </h1>

          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Быстрое одобрение за 5 минут. Деньги на карту в течение часа.
            Без справок и поручителей.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-500 hover:to-blue-500 text-white border-0 px-8 py-6 text-base shadow-xl shadow-violet-500/30 hover:shadow-violet-500/50 transition-all duration-300 hover:-translate-y-0.5">
              <Icon name="CreditCard" size={20} className="mr-2" />
              Получить займ
            </Button>
            <Button variant="outline" size="lg" className="border-white/10 bg-white/5 text-white hover:bg-white/10 hover:border-white/20 px-8 py-6 text-base transition-all duration-300">
              <Icon name="Calculator" size={20} className="mr-2" />
              Калькулятор
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto">
            {[['500K', 'Максимальная сумма'], ['5 мин', 'Одобрение'], ['0%', 'Комиссия']].map(([val, label], i) => (
              <div key={i} className="text-center">
                <div className="text-2xl font-bold text-white">{val}</div>
                <div className="text-xs text-gray-500 mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6" id="loans">
        <div className="container mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Почему выбирают нас</h2>
            <p className="text-gray-400 max-w-xl mx-auto">Мы делаем всё, чтобы получение займа было простым и удобным</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {features.map((feature, index) => (
              <div key={index}
                className="group relative bg-white/3 border border-white/8 rounded-2xl p-6 hover:bg-white/6 hover:border-violet-500/30 transition-all duration-300 hover:-translate-y-1 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}>
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500/20 to-blue-500/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon name={feature.icon} size={22} className={iconColors[index]} />
                </div>
                <h3 className="font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-20 px-6" id="calculator">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Калькулятор займа</h2>
              <p className="text-gray-400">Рассчитайте удобные условия прямо сейчас</p>
            </div>
            <div className="bg-white/3 border border-white/8 rounded-3xl p-8 md:p-10">
              <div className="grid md:grid-cols-2 gap-10">
                <div className="space-y-8">
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <Label className="text-sm text-gray-400">Сумма займа</Label>
                      <span className="text-xl font-bold text-white">{loanAmount[0].toLocaleString()} ₽</span>
                    </div>
                    <Slider value={loanAmount} onValueChange={setLoanAmount} max={500000} min={10000} step={5000} className="w-full" />
                    <div className="flex justify-between text-xs text-gray-600 mt-2">
                      <span>10 000 ₽</span>
                      <span>500 000 ₽</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <Label className="text-sm text-gray-400">Срок займа</Label>
                      <span className="text-xl font-bold text-white">{loanPeriod[0]} дней</span>
                    </div>
                    <Slider value={loanPeriod} onValueChange={setLoanPeriod} max={365} min={7} step={1} className="w-full" />
                    <div className="flex justify-between text-xs text-gray-600 mt-2">
                      <span>7 дней</span>
                      <span>365 дней</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between py-3 border-t border-white/5">
                    <span className="text-sm text-gray-400">Процентная ставка</span>
                    <span className="text-lg font-bold bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">{interestRate}% годовых</span>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-violet-600/15 to-blue-600/15 border border-violet-500/20 rounded-2xl p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-semibold mb-6 text-gray-200">Расчёт платежей</h3>
                    <div className="space-y-4">
                      {[
                        { label: 'Ежедневный платёж', value: `${calculations.monthlyPayment.toLocaleString()} ₽`, color: 'text-white' },
                        { label: 'Общая сумма к возврату', value: `${calculations.totalAmount.toLocaleString()} ₽`, color: 'text-white' },
                        { label: 'Переплата', value: `${calculations.totalInterest.toLocaleString()} ₽`, color: 'text-rose-400' },
                      ].map(({ label, value, color }, i) => (
                        <div key={i} className="flex justify-between items-center py-3 border-b border-white/5 last:border-0">
                          <span className="text-sm text-gray-400">{label}</span>
                          <span className={`font-semibold ${color}`}>{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <Button className="w-full mt-6 bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-500 hover:to-blue-500 text-white border-0 shadow-lg shadow-violet-500/25 py-5">
                    <Icon name="FileText" size={18} className="mr-2" />
                    Подать заявку на этих условиях
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 px-6" id="conditions">
        <div className="container mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Как получить займ</h2>
            <p className="text-gray-400">Три простых шага к вашим деньгам</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {steps.map((step, index) => (
              <div key={index} className="relative text-center animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-px bg-gradient-to-r from-violet-500/40 to-transparent" />
                )}
                <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-600/30 to-blue-600/30 border border-violet-500/30 mb-6">
                  <Icon name={step.icon} size={24} className="text-violet-400" />
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-violet-500 to-blue-500 rounded-full flex items-center justify-center text-xs font-bold text-white shadow-lg">{index + 1}</div>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 px-6" id="application">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Подать заявку</h2>
              <p className="text-gray-400">Заполните форму и получите решение за 5 минут</p>
            </div>
            <div className="bg-white/3 border border-white/8 rounded-3xl p-8">
              <Tabs defaultValue="personal" className="w-full">
                <TabsList className="grid w-full grid-cols-3 bg-white/5 border border-white/8 rounded-xl p-1 mb-6">
                  <TabsTrigger value="personal" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-violet-600 data-[state=active]:to-blue-600 data-[state=active]:text-white data-[state=active]:shadow-lg rounded-lg text-gray-400 text-sm transition-all">Личные данные</TabsTrigger>
                  <TabsTrigger value="contact" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-violet-600 data-[state=active]:to-blue-600 data-[state=active]:text-white data-[state=active]:shadow-lg rounded-lg text-gray-400 text-sm transition-all">Контакты</TabsTrigger>
                  <TabsTrigger value="loan" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-violet-600 data-[state=active]:to-blue-600 data-[state=active]:text-white data-[state=active]:shadow-lg rounded-lg text-gray-400 text-sm transition-all">Займ</TabsTrigger>
                </TabsList>

                <TabsContent value="personal" className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label className="text-sm text-gray-400 mb-1.5 block">Имя</Label>
                      <Input id="firstName" placeholder="Введите имя" className="bg-white/5 border-white/10 text-white placeholder:text-gray-600 focus:border-violet-500 rounded-xl" />
                    </div>
                    <div>
                      <Label className="text-sm text-gray-400 mb-1.5 block">Фамилия</Label>
                      <Input id="lastName" placeholder="Введите фамилию" className="bg-white/5 border-white/10 text-white placeholder:text-gray-600 focus:border-violet-500 rounded-xl" />
                    </div>
                  </div>
                  <div>
                    <Label className="text-sm text-gray-400 mb-1.5 block">Дата рождения</Label>
                    <Input id="birthDate" type="date" className="bg-white/5 border-white/10 text-white placeholder:text-gray-600 focus:border-violet-500 rounded-xl" />
                  </div>
                  <div>
                    <Label className="text-sm text-gray-400 mb-1.5 block">Серия и номер паспорта</Label>
                    <Input id="passport" placeholder="0000 000000" className="bg-white/5 border-white/10 text-white placeholder:text-gray-600 focus:border-violet-500 rounded-xl" />
                  </div>
                </TabsContent>

                <TabsContent value="contact" className="space-y-4">
                  <div>
                    <Label className="text-sm text-gray-400 mb-1.5 block">Номер телефона</Label>
                    <Input id="phone" placeholder="+7 (999) 999-99-99" className="bg-white/5 border-white/10 text-white placeholder:text-gray-600 focus:border-violet-500 rounded-xl" />
                  </div>
                  <div>
                    <Label className="text-sm text-gray-400 mb-1.5 block">Email</Label>
                    <Input id="email" type="email" placeholder="example@mail.ru" className="bg-white/5 border-white/10 text-white placeholder:text-gray-600 focus:border-violet-500 rounded-xl" />
                  </div>
                  <div>
                    <Label className="text-sm text-gray-400 mb-1.5 block">Адрес проживания</Label>
                    <Input id="address" placeholder="Введите адрес" className="bg-white/5 border-white/10 text-white placeholder:text-gray-600 focus:border-violet-500 rounded-xl" />
                  </div>
                </TabsContent>

                <TabsContent value="loan" className="space-y-4">
                  <div>
                    <Label className="text-sm text-gray-400 mb-1.5 block">Желаемая сумма займа</Label>
                    <Input id="amount" placeholder="50 000 ₽" className="bg-white/5 border-white/10 text-white placeholder:text-gray-600 focus:border-violet-500 rounded-xl" />
                  </div>
                  <div>
                    <Label className="text-sm text-gray-400 mb-1.5 block">Срок займа (дней)</Label>
                    <Input id="period" placeholder="30" className="bg-white/5 border-white/10 text-white placeholder:text-gray-600 focus:border-violet-500 rounded-xl" />
                  </div>
                  <div>
                    <Label className="text-sm text-gray-400 mb-1.5 block">Цель займа</Label>
                    <Input id="purpose" placeholder="На что нужны деньги" className="bg-white/5 border-white/10 text-white placeholder:text-gray-600 focus:border-violet-500 rounded-xl" />
                  </div>
                </TabsContent>
              </Tabs>

              <Button className="w-full mt-6 bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-500 hover:to-blue-500 text-white border-0 shadow-lg shadow-violet-500/25 py-5 text-base">
                <Icon name="Send" size={18} className="mr-2" />
                Отправить заявку
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6" id="faq">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Частые вопросы</h2>
              <p className="text-gray-400">Ответы на самые популярные вопросы</p>
            </div>
            <Accordion type="single" collapsible className="space-y-3">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}
                  className="bg-white/3 border border-white/8 rounded-2xl px-6 hover:border-violet-500/20 transition-colors duration-200">
                  <AccordionTrigger className="text-left hover:no-underline text-gray-200 hover:text-white py-5">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-400 pb-5 leading-relaxed">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contacts */}
      <section className="py-20 px-6" id="contacts">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Контакты</h2>
              <p className="text-gray-400">Мы всегда на связи — выберите удобный способ</p>
            </div>
            <div className="grid md:grid-cols-3 gap-5">
              {[
                { icon: 'Phone', label: 'Телефон', value: '8 (800) 555-35-35', sub: 'Бесплатно по России', color: 'from-emerald-500/20 to-teal-500/20', border: 'hover:border-emerald-500/30', iconColor: 'text-emerald-400' },
                { icon: 'Mail', label: 'Email', value: 'support@credit365.ru', sub: 'Ответим в течение часа', color: 'from-blue-500/20 to-cyan-500/20', border: 'hover:border-blue-500/30', iconColor: 'text-blue-400' },
                { icon: 'MessageCircle', label: 'Онлайн-чат', value: 'Начать чат', sub: 'Работаем круглосуточно', color: 'from-violet-500/20 to-purple-500/20', border: 'hover:border-violet-500/30', iconColor: 'text-violet-400' },
              ].map((c, i) => (
                <div key={i} className={`group bg-white/3 border border-white/8 ${c.border} rounded-2xl p-6 text-center hover:-translate-y-1 transition-all duration-300 cursor-pointer`}>
                  <div className={`w-14 h-14 mx-auto bg-gradient-to-br ${c.color} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon name={c.icon} size={24} className={c.iconColor} />
                  </div>
                  <h3 className="font-semibold text-white mb-1">{c.label}</h3>
                  <p className="text-gray-300 font-medium">{c.value}</p>
                  <p className="text-xs text-gray-500 mt-1">{c.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12 px-6 mt-8">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-10">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-violet-500 to-blue-500 flex items-center justify-center">
                  <Icon name="DollarSign" size={16} className="text-white" />
                </div>
                <span className="font-bold">Credit<span className="text-violet-400">365</span></span>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed">Надёжный финансовый партнёр для решения ваших задач</p>
            </div>
            {[
              { title: 'Услуги', items: ['Займы до зарплаты', 'Долгосрочные займы', 'Рефинансирование', 'Займы для бизнеса'] },
              { title: 'Компания', items: ['О нас', 'Лицензии', 'Вакансии', 'Новости'] },
              { title: 'Поддержка', items: ['Помощь', 'Документы', 'Безопасность', 'Обратная связь'] },
            ].map((col, i) => (
              <div key={i}>
                <h4 className="font-semibold text-white mb-4 text-sm">{col.title}</h4>
                <ul className="space-y-2">
                  {col.items.map((item, j) => (
                    <li key={j} className="text-sm text-gray-500 hover:text-gray-300 cursor-pointer transition-colors">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-t border-white/5 pt-8 text-center text-sm text-gray-600">
            &copy; 2024 Credit365. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
