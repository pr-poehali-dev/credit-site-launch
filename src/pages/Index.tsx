import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
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
    {
      icon: 'Clock',
      title: 'Быстрое одобрение',
      description: 'Решение по заявке за 5 минут'
    },
    {
      icon: 'Shield',
      title: 'Безопасно',
      description: 'Защита данных по стандартам банков'
    },
    {
      icon: 'Percent',
      title: 'Выгодные условия',
      description: 'Ставка от 12.5% годовых'
    },
    {
      icon: 'CreditCard',
      title: 'Без залога',
      description: 'Займы без поручителей и залога'
    }
  ];

  const steps = [
    {
      step: '01',
      title: 'Заявка',
      description: 'Заполните простую форму за 2 минуты'
    },
    {
      step: '02',
      title: 'Одобрение',
      description: 'Получите решение моментально'
    },
    {
      step: '03',
      title: 'Деньги',
      description: 'Средства поступят на карту в течение часа'
    }
  ];

  const faqItems = [
    {
      question: 'Какие документы нужны для займа?',
      answer: 'Для получения займа достаточно паспорта РФ. Дополнительные документы могут потребоваться в зависимости от суммы займа.'
    },
    {
      question: 'Как быстро поступают деньги?',
      answer: 'После одобрения заявки деньги поступают на вашу карту в течение 15-60 минут в зависимости от банка.'
    },
    {
      question: 'Можно ли досрочно погасить займ?',
      answer: 'Да, вы можете досрочно погасить займ полностью или частично без комиссий и штрафов.'
    },
    {
      question: 'Какая максимальная сумма займа?',
      answer: 'Максимальная сумма займа составляет 500 000 рублей для проверенных клиентов.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                <Icon name="DollarSign" size={20} className="text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">Credit365</span>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#loans" className="text-gray-600 hover:text-blue-500 transition-colors">Займы</a>
              <a href="#conditions" className="text-gray-600 hover:text-blue-500 transition-colors">Условия</a>
              <a href="#calculator" className="text-gray-600 hover:text-blue-500 transition-colors">Калькулятор</a>
              <a href="#faq" className="text-gray-600 hover:text-blue-500 transition-colors">Вопросы</a>
              <a href="#contacts" className="text-gray-600 hover:text-blue-500 transition-colors">Контакты</a>
            </nav>
            <Button className="bg-blue-500 hover:bg-blue-600 text-white">
              <Icon name="Phone" size={16} className="mr-2" />
              Поддержка
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Займы до <span className="text-blue-500">500 000 ₽</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Быстрое одобрение за 5 минут. Деньги на карту в течение часа. 
              Без справок и поручителей.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="financial-gradient text-white hover-lift px-8 py-4 text-lg">
                <Icon name="CreditCard" size={20} className="mr-2" />
                Получить займ
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-4 text-lg">
                <Icon name="Calculator" size={20} className="mr-2" />
                Калькулятор
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4" id="loans">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Почему выбирают нас
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="glass-card hover-lift text-center animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
                <CardHeader>
                  <div className="w-12 h-12 mx-auto bg-blue-500 rounded-full flex items-center justify-center mb-4">
                    <Icon name={feature.icon} size={24} className="text-white" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Loan Calculator */}
      <section className="py-16 px-4 bg-gray-50" id="calculator">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Калькулятор займа
            </h2>
            <Card className="glass-card">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <Label className="text-base font-medium mb-4 block">
                        Сумма займа: {loanAmount[0].toLocaleString()} ₽
                      </Label>
                      <Slider
                        value={loanAmount}
                        onValueChange={setLoanAmount}
                        max={500000}
                        min={10000}
                        step={5000}
                        className="w-full"
                      />
                      <div className="flex justify-between text-sm text-gray-500 mt-2">
                        <span>10 000 ₽</span>
                        <span>500 000 ₽</span>
                      </div>
                    </div>
                    
                    <div>
                      <Label className="text-base font-medium mb-4 block">
                        Срок займа: {loanPeriod[0]} дней
                      </Label>
                      <Slider
                        value={loanPeriod}
                        onValueChange={setLoanPeriod}
                        max={365}
                        min={7}
                        step={1}
                        className="w-full"
                      />
                      <div className="flex justify-between text-sm text-gray-500 mt-2">
                        <span>7 дней</span>
                        <span>365 дней</span>
                      </div>
                    </div>

                    <div>
                      <Label className="text-base font-medium mb-2 block">
                        Процентная ставка
                      </Label>
                      <div className="text-2xl font-bold text-blue-500">
                        {interestRate}% годовых
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 rounded-lg p-6 space-y-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Расчет платежей</h3>
                    
                    <div className="flex justify-between items-center py-2 border-b border-blue-200">
                      <span className="text-gray-600">Ежедневный платеж:</span>
                      <span className="text-lg font-semibold">{calculations.monthlyPayment.toLocaleString()} ₽</span>
                    </div>
                    
                    <div className="flex justify-between items-center py-2 border-b border-blue-200">
                      <span className="text-gray-600">Общая сумма к возврату:</span>
                      <span className="text-lg font-semibold">{calculations.totalAmount.toLocaleString()} ₽</span>
                    </div>
                    
                    <div className="flex justify-between items-center py-2">
                      <span className="text-gray-600">Переплата:</span>
                      <span className="text-lg font-semibold text-red-500">{calculations.totalInterest.toLocaleString()} ₽</span>
                    </div>

                    <Button className="w-full mt-6 financial-gradient text-white hover-lift">
                      <Icon name="FileText" size={20} className="mr-2" />
                      Подать заявку на этих условиях
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 px-4" id="conditions">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Как получить займ
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {steps.map((step, index) => (
              <div key={index} className="text-center animate-slide-up" style={{animationDelay: `${index * 0.2}s`}}>
                <div className="w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 px-4 bg-gray-50" id="application">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto">
            <Card className="glass-card">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Подать заявку на займ</CardTitle>
                <CardDescription>Заполните форму и получите решение за 5 минут</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <Tabs defaultValue="personal" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="personal">Личные данные</TabsTrigger>
                    <TabsTrigger value="contact">Контакты</TabsTrigger>
                    <TabsTrigger value="loan">Займ</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="personal" className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">Имя</Label>
                        <Input id="firstName" placeholder="Введите имя" />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Фамилия</Label>
                        <Input id="lastName" placeholder="Введите фамилию" />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="birthDate">Дата рождения</Label>
                      <Input id="birthDate" type="date" />
                    </div>
                    <div>
                      <Label htmlFor="passport">Серия и номер паспорта</Label>
                      <Input id="passport" placeholder="0000 000000" />
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="contact" className="space-y-4">
                    <div>
                      <Label htmlFor="phone">Номер телефона</Label>
                      <Input id="phone" placeholder="+7 (999) 999-99-99" />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="example@mail.ru" />
                    </div>
                    <div>
                      <Label htmlFor="address">Адрес проживания</Label>
                      <Input id="address" placeholder="Введите адрес" />
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="loan" className="space-y-4">
                    <div>
                      <Label htmlFor="amount">Желаемая сумма займа</Label>
                      <Input id="amount" placeholder="50 000" />
                    </div>
                    <div>
                      <Label htmlFor="period">Срок займа (дней)</Label>
                      <Input id="period" placeholder="30" />
                    </div>
                    <div>
                      <Label htmlFor="purpose">Цель займа</Label>
                      <Input id="purpose" placeholder="На что нужны деньги" />
                    </div>
                  </TabsContent>
                </Tabs>
                
                <Button className="w-full financial-gradient text-white hover-lift">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить заявку
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4" id="faq">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Часто задаваемые вопросы
            </h2>
            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="glass-card px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 px-4 bg-gray-50" id="contacts">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Контакты и поддержка
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="glass-card text-center hover-lift">
                <CardContent className="p-6">
                  <div className="w-12 h-12 mx-auto bg-green-500 rounded-full flex items-center justify-center mb-4">
                    <Icon name="Phone" size={24} className="text-white" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Телефон</h3>
                  <p className="text-gray-600">8 (800) 555-35-35</p>
                  <p className="text-sm text-gray-500">Бесплатно по России</p>
                </CardContent>
              </Card>
              
              <Card className="glass-card text-center hover-lift">
                <CardContent className="p-6">
                  <div className="w-12 h-12 mx-auto bg-blue-500 rounded-full flex items-center justify-center mb-4">
                    <Icon name="Mail" size={24} className="text-white" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Email</h3>
                  <p className="text-gray-600">support@credit365.ru</p>
                  <p className="text-sm text-gray-500">Ответим в течение часа</p>
                </CardContent>
              </Card>
              
              <Card className="glass-card text-center hover-lift">
                <CardContent className="p-6">
                  <div className="w-12 h-12 mx-auto bg-purple-500 rounded-full flex items-center justify-center mb-4">
                    <Icon name="MessageCircle" size={24} className="text-white" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Онлайн-чат</h3>
                  <p className="text-gray-600">Круглосуточно</p>
                  <p className="text-sm text-gray-500">Мгновенная поддержка</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                  <Icon name="DollarSign" size={20} className="text-white" />
                </div>
                <span className="text-xl font-bold">Credit365</span>
              </div>
              <p className="text-gray-400">
                Надежный финансовый партнер для решения ваших задач
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Займы до зарплаты</li>
                <li>Долгосрочные займы</li>
                <li>Рефинансирование</li>
                <li>Займы для бизнеса</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Компания</h4>
              <ul className="space-y-2 text-gray-400">
                <li>О нас</li>
                <li>Лицензии</li>
                <li>Вакансии</li>
                <li>Новости</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Помощь</li>
                <li>Документы</li>
                <li>Безопасность</li>
                <li>Обратная связь</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Credit365. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;