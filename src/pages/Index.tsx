import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold font-heading bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Анна Иванова
            </h1>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-purple-600 transition-colors">Главная</a>
              <a href="#about" className="text-gray-700 hover:text-purple-600 transition-colors">Обо мне</a>
              <a href="#portfolio" className="text-gray-700 hover:text-purple-600 transition-colors">Работы</a>
              <a href="#services" className="text-gray-700 hover:text-purple-600 transition-colors">Услуги</a>
              <a href="#blog" className="text-gray-700 hover:text-purple-600 transition-colors">Блог</a>
              <a href="#contacts" className="text-gray-700 hover:text-purple-600 transition-colors">Контакты</a>
            </div>
            <Button size="sm" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
              Связаться
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className="mb-4 bg-purple-100 text-purple-700 hover:bg-purple-200">
                <Icon name="Sparkles" size={16} className="mr-2" />
                Креативный специалист
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold font-heading mb-6 leading-tight">
                Создаю{' '}
                <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                  контент
                </span>{' '}
                будущего
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                SMM, видеосъёмка, монтаж репортажных видео, создание сайтов на Тильде 
                и контент с помощью нейросетей — всё для вашего бренда
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                  <Icon name="Play" size={20} className="mr-2" />
                  Смотреть работы
                </Button>
                <Button variant="outline" size="lg">
                  <Icon name="Download" size={20} className="mr-2" />
                  Скачать портфолио
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="w-full h-96 bg-gradient-to-br from-purple-400 via-pink-400 to-blue-400 rounded-2xl shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <Icon name="Camera" size={48} />
                  <p className="mt-2 text-sm opacity-90">Ваша история в кадре</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl font-bold font-heading mb-6">
                Обо мне
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Привет! Мне 22 года, и я превращаю идеи в визуальные истории. 
                Специализируюсь на комплексном подходе к созданию контента — 
                от стратегии в социальных сетях до финального видео.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="p-4 bg-purple-50 rounded-lg">
                  <Icon name="Users" size={24} className="text-purple-600 mb-2" />
                  <h4 className="font-semibold">50+ клиентов</h4>
                </div>
                <div className="p-4 bg-pink-50 rounded-lg">
                  <Icon name="Award" size={24} className="text-pink-600 mb-2" />
                  <h4 className="font-semibold">200+ проектов</h4>
                </div>
              </div>
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600">
                Узнать больше
              </Button>
            </div>
            <div className="relative">
              <div className="w-full h-80 bg-gradient-to-br from-blue-400 to-purple-400 rounded-2xl shadow-xl">
                <div className="absolute bottom-4 right-4">
                  <Icon name="Zap" size={32} className="text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-heading mb-4">Мои работы</h2>
            <p className="text-xl text-gray-600">Проекты, которыми я горжусь</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* SMM Projects */}
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-0">
                <div className="h-48 bg-gradient-to-br from-pink-400 to-purple-500 relative overflow-hidden rounded-t-lg">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                  <div className="absolute top-4 left-4">
                    <Icon name="Heart" size={24} className="text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <Badge className="mb-2 bg-pink-100 text-pink-700">SMM</Badge>
                  <h3 className="text-xl font-semibold mb-2">Продвижение кафе</h3>
                  <p className="text-gray-600 mb-4">Увеличение охватов в 3 раза за 2 месяца</p>
                  <Button variant="outline" size="sm">
                    <Icon name="ExternalLink" size={16} className="mr-2" />
                    Подробнее
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Video Projects */}
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-0">
                <div className="h-48 bg-gradient-to-br from-blue-400 to-cyan-500 relative overflow-hidden rounded-t-lg">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                  <div className="absolute top-4 left-4">
                    <Icon name="Video" size={24} className="text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <Badge className="mb-2 bg-blue-100 text-blue-700">Видео</Badge>
                  <h3 className="text-xl font-semibold mb-2">Репортаж с события</h3>
                  <p className="text-gray-600 mb-4">Съёмка и монтаж корпоративного мероприятия</p>
                  <Button variant="outline" size="sm">
                    <Icon name="Play" size={16} className="mr-2" />
                    Смотреть
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Web Projects */}
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-0">
                <div className="h-48 bg-gradient-to-br from-purple-400 to-indigo-500 relative overflow-hidden rounded-t-lg">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                  <div className="absolute top-4 left-4">
                    <Icon name="Monitor" size={24} className="text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <Badge className="mb-2 bg-purple-100 text-purple-700">Веб-сайт</Badge>
                  <h3 className="text-xl font-semibold mb-2">Лендинг на Тильде</h3>
                  <p className="text-gray-600 mb-4">Сайт для фитнес-студии с онлайн-записью</p>
                  <Button variant="outline" size="sm">
                    <Icon name="ExternalLink" size={16} className="mr-2" />
                    Посетить
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-heading mb-4">Услуги</h2>
            <p className="text-xl text-gray-600">Комплексный подход к продвижению</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Megaphone" size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">SMM продвижение</h3>
              <p className="text-gray-600 mb-6">Стратегия, контент-план, ведение аккаунтов в социальных сетях</p>
              <Button variant="outline">Узнать цену</Button>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Camera" size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Видеосъёмка</h3>
              <p className="text-gray-600 mb-6">Репортажные видео, корпоративные события, интервью</p>
              <Button variant="outline">Заказать съёмку</Button>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Scissors" size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Монтаж видео</h3>
              <p className="text-gray-600 mb-6">Профессиональный монтаж, цветокоррекция, звук</p>
              <Button variant="outline">Отправить материал</Button>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Globe" size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Сайты на Тильде</h3>
              <p className="text-gray-600 mb-6">Лендинги, корпоративные сайты, интернет-магазины</p>
              <Button variant="outline">Создать сайт</Button>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Brain" size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">ИИ-контент</h3>
              <p className="text-gray-600 mb-6">Тексты, планы, изображения, аудио и видео с помощью нейросетей</p>
              <Button variant="outline">Попробовать</Button>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Palette" size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Комплексное решение</h3>
              <p className="text-gray-600 mb-6">Полный цикл: от идеи до реализации и продвижения</p>
              <Button variant="outline">Обсудить проект</Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-heading mb-4">Блог</h2>
            <p className="text-xl text-gray-600">Делюсь опытом и инсайтами</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-0">
                <div className="h-48 bg-gradient-to-br from-purple-400 to-pink-400 relative rounded-t-lg">
                  <div className="absolute bottom-4 left-4 text-white">
                    <Badge className="bg-white/20 text-white">SMM</Badge>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Тренды SMM 2024</h3>
                  <p className="text-gray-600 mb-4">Какие форматы контента работают лучше всего в этом году</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">15 декабря</span>
                    <Button variant="ghost" size="sm">
                      <Icon name="ArrowRight" size={16} />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-0">
                <div className="h-48 bg-gradient-to-br from-blue-400 to-cyan-400 relative rounded-t-lg">
                  <div className="absolute bottom-4 left-4 text-white">
                    <Badge className="bg-white/20 text-white">Видео</Badge>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Секреты монтажа</h3>
                  <p className="text-gray-600 mb-4">Как создать динамичное видео, которое захватывает внимание</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">10 декабря</span>
                    <Button variant="ghost" size="sm">
                      <Icon name="ArrowRight" size={16} />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-0">
                <div className="h-48 bg-gradient-to-br from-green-400 to-teal-400 relative rounded-t-lg">
                  <div className="absolute bottom-4 left-4 text-white">
                    <Badge className="bg-white/20 text-white">ИИ</Badge>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">ИИ в креативе</h3>
                  <p className="text-gray-600 mb-4">Как нейросети помогают создавать уникальный контент</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">5 декабря</span>
                    <Button variant="ghost" size="sm">
                      <Icon name="ArrowRight" size={16} />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacts" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-heading mb-4">Давайте работать вместе</h2>
            <p className="text-xl text-gray-600">Готова воплотить ваши идеи в жизнь</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Свяжитесь со мной</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <Icon name="Mail" size={20} className="text-purple-600" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-gray-600">anna@example.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                    <Icon name="Phone" size={20} className="text-pink-600" />
                  </div>
                  <div>
                    <p className="font-medium">Телефон</p>
                    <p className="text-gray-600">+7 (999) 123-45-67</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Icon name="MessageCircle" size={20} className="text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium">Telegram</p>
                    <p className="text-gray-600">@anna_creative</p>
                  </div>
                </div>
              </div>
            </div>
            
            <Card className="p-8">
              <h3 className="text-xl font-semibold mb-6">Быстрая связь</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Имя</label>
                  <input type="text" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent" placeholder="Ваше имя" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input type="email" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent" placeholder="your@email.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Сообщение</label>
                  <textarea rows={4} className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent" placeholder="Расскажите о вашем проекте..."></textarea>
                </div>
                <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить сообщение
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Анна Иванова
              </h3>
              <p className="text-gray-400">Креативный специалист</p>
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Icon name="Instagram" size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Icon name="Youtube" size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Icon name="MessageCircle" size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Icon name="Mail" size={24} />
              </a>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Анна Иванова. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;