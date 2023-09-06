import React from 'react';
import './App.css';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import {QuestionsAnswers} from "./components/questions-answers/questionsAnswers";
import {Banner} from "./components/banner/banner";
import {Feature} from "./components/feature/feature";
import {Tasks} from "./components/tasks/tasks";

const questionsAnswers = [
    {
        headerText: "Кто будет видеть мои данные?",
        bodyText: "Никто, данные обезличиваются и агрегируются с данными Яндекса, Яндекс Маркета и магазинов партнёров"
    },
    {
        headerText: "Для чего продавцам Ecom Аналитика?",
        bodyText: "Это дополнительный источник информации " +
            "об изменении покупательского спроса, увеличения продаж, корректировки ассортимента — " +
            "заведения новых моделей и брендов. Мы добавляем данные ежедневно, статистика за сегодня " +
            "появится в интерфейсе уже через 2 дня. "
    },
    {
        headerText: "Для чего производителям Ecom Аналитика?",
        bodyText: "Это источник " +
            "информации о ёмкости и динамике категорий, сезонности, о брендах и их доле на рынке, " +
            "технических характеристиках. Данные сервиса вы можете использовать для разработки стратегий, " +
            "планирования производства и решения других задач.\n"
    },
    {
        headerText: "Я могу видеть продажи конкурентов?",
        bodyText: "Если вы продавец\n\nНет, вам будет доступна информация по категории в целом, " +
            "без выделения заказов конкретного интернет-магазина. Мы внимательно относимся к данным " +
            "партнёров и не раскрываем их. Кроме того, иногда мы скрываем аналитику по категориям, " +
            "где угадывается вклад конкретного игрока. \n\nЕсли вы производитель\n\nДа, вы будете видеть " +
            "объёмы продаж других брендов, представленных в категории, и сможете сравнивать их с долей " +
            "своего бренда.\n"
    },
    {
        headerText: "Кто уже передаёт вам данные?",
        bodyText: "Мы не раскрываем имена партнёров. Источники данных — магазины партнёров, данные Яндекс" +
            " Маркета и Яндекса.\n"
    },
    {
        headerText: "Какая разница между аналитикой Яндекс Маркета и Ecom Аналитикой?",
        bodyText: "Аналитика Яндекс Маркета собирается только по Маркету и показывает эффективность размещения" +
            " на площадке. А Ecom Аналитика — отдельный сервис, он предоставляет данные по всему" +
            " рынку электронной торговли. Мы перенесли в наш аналитический сервис из Яндекс Маркета" +
            " данные о товарах, их характеристиках и категоризации департаментов. Библиотека Яндекс Маркета" +
            " из миллионов карточек товаров с полными характеристиками позволяет нам давать срезы" +
            " по всему объёму категорий, которые представлены на Маркете.\n"
    },
];

const answers = [
    {
        headerText: "Я продавец",
        bodyText: "— Подайте заявку на подключение\n" +
            "— Передайте данные о продажах\n"
    },
    {
        headerText: "Я производитель",
        bodyText: "— Подайте заявку на подключение\n— Подключите услугу Ecom Аналитики после того, " +
            "как менеджер сервиса выдаст вам доступ в кабинет производителя\n" +
            "— Пополните счёт и переходите в сервис для включения нужных категорий\n" +
            "— Получите данные по рынку \n"
    },

];

const buttons = [
    {
        text: "Заказать исследование",
        onClick: () => {}
    },
    {
        text: "Подключиться",
        onClick: () => {}
    },
    {
        text: "Задать вопрос",
        onClick: () => {}
    },
];



const features = [
    <Feature
        headerText="Данные в отчётах"
        bodyText="Динамика продаж, информация о покупателях и их интересах — в срезах
        брендов, категорий и товаров"
        imageSource="./img.jpeg"
    />,
    <Feature
        headerText="Надёжные иточники данных"
        bodyText="Получаем данные от магазинов партнёров, Яндекс Маркета и Яндекса"
    />,
    <Feature
        headerText="Актуальность данных"
        bodyText="Статистика за сегодня появится в отчётах уже через 2 дня"
    />,
    <Feature
        headerText="Визуализация данных"
        bodyText="Интерфейс DataLens от Яндекса для удобной работы с данными"
    />,
];

const reports = [
    <section className="img_wrapper">
        <img
            src="https://static.tildacdn.com/tild6335-3263-4535-a465-643534336539/_.png"
            loading="lazy"
            alt="график"
            draggable={false}
        />
    </section>,
    <section className="img_wrapper">
        <img
            src="http://powerbirussia.ru/wp-content/uploads/2018/02/2018-02-16_15-01-02.png"
            loading="lazy"
            alt="график"
            draggable={false}
        />
    </section>,
    <section className="img_wrapper">
        <img
            src="http://powerbirussia.ru/wp-content/uploads/2018/02/2018-02-22_00-50-14.png"
            loading="lazy"
            alt="график"
            draggable={false}
        />
    </section>,
    <section className="img_wrapper">
        <img
            src="https://static.tildacdn.com/tild3039-3334-4635-b564-653432643832/__.png"
            loading="lazy"
            alt="график"
            draggable={false}
        />
    </section>,



]

const tasks1 = [
    {
        headerText: "Оценка рынка",
        bodyText: "Оцените возможности для роста бизнеса в интернете",
    },
    {
        headerText: "Сезонность и тренды",
        bodyText: "Анализируйте сезонность и тренды, чтобы реагировать на изменения",
    },
    {
        headerText: "Анализ цен",
        bodyText: "Разработайте ценовую политику и узнайте, какие ещё товары продаются в вашей нише",
    },
    {
        headerText: "Срезы по регионам",
        bodyText: "Оцените динамику продаж по регионам, чтобы выйти на новый рынок",
    },
    {
        headerText: "Целевые клиенты",
        bodyText: "Узнайте больше о тех, кто покупает ваши товары",
    },
    {
        headerText: "Аналитика динамики дохода",
        bodyText: "Узнайте, какие товары больше всего повлияли на выручку",
    },
    {
        headerText: "Аналитика эффективности медийной рекламы",
        bodyText: "Узнайте, как медийная реклама повлияла на динамику продаж",
    },
];

const tasks2 = [
    {
        headerText: "Собираем данные",
        bodyText: "От магазинов партнёров\n" +
            "От Яндекс Маркета — о категориях, товарах и их характеристиках\n" +
            "От Яндекса — о пользователях и поисковых запросах\n",
    },
    {
        headerText: "Создаём модель",
        bodyText: "Знания о видимой части рынка",
    },
    {
        headerText: "Распознаём и обогащаем данные",
        bodyText: "Смоделированные алгоритмами недостающие знания",
    },
    {
        headerText: "Формируем отчёты",
        bodyText: "Структурирование обезличенных знаний\n" +
            "Получаем полную картину рынка",
    },
];

function App() {
    return (
        <div className="page">
            <section style={{display:"flex","flex":"1", "flex-direction":"column"} as React.CSSProperties}>
                <header>
                    <div className="logo">
                        <img src="https://avatars.mds.yandex.net/get-lpc/1635340/9fa4e259-3ffa-4190-bba6-b4d81cb6c51c/orig"
                             alt=""/>
                    </div>
                </header>
                <div className="offsets" style={{"--offsets-background-color": "#f4f7fa"} as React.CSSProperties}>
                    <Banner
                        title="Мы научились генерировать картинки для ряда рекламных рубрик."
                        body="Будем предлагать их пользователям на этапе выбора изображений для рекламных материалов.
                    Ecom Аналитика"
                        buttons={[buttons[0], buttons[1]]}
                    />
                </div>
                <div className="offsets" style={{"--offsets-background-color": "#3287ff"} as React.CSSProperties}>
                    <Banner
                        title="Аналитика рынка интернет-торговли для продавцов и производителей"
                        body="Смотрите статистику по динамике продаж, доле брендов, популярным товарам,
                    ценам и интересам покупателей — в сотнях категорий"
                        buttons={[buttons[1]]}
                    />
                </div>
                <div className="offsets" style={{"--offsets-background-color": "#f4f7fa"} as React.CSSProperties}>
                    <div className="carousel">
                        <div
                            className="text-block header"
                            style={{"--font-family": "Arial", "--color": "black", "max-width": "65rem"} as
                                React.CSSProperties}
                        >
                            Что предлагает сервис
                        </div>
                        <AliceCarousel
                            mouseTracking
                            items={features}
                            infinite={true}
                            responsive={{0: {items: 2}}}
                            disableDotsControls={true}
                            paddingLeft={10}
                            paddingRight={10}
                        />
                    </div>
                </div>

                <div className="offsets" style={{"--offsets-background-color": "#131720"} as React.CSSProperties}>
                    <Tasks title="Какие задачи помогает решать сервис" tasks={tasks1}/>
                </div>
                <div className="offsets" style={{"--offsets-background-color": "#f4f7fa"} as React.CSSProperties}>
                    <div className="carousel">
                        <div className="text-block header" style={{"--font-family": "Arial", "max-width": "65rem"} as
                            React.CSSProperties}>
                            Как выглядят отчёты
                        </div>
                        <AliceCarousel
                            mouseTracking
                            items={reports}
                            infinite={true}
                            paddingLeft={20}
                            paddingRight={20}
                        />
                    </div>
                </div>

                <div className="offsets" style={{"--offsets-background-color": "#131720"} as React.CSSProperties}>
                    <Tasks title="Как мы работаем с данными" tasks={tasks2}/>
                </div>
                <div className="offsets" style={{"--offsets-background-color": "#f4f7fa"} as React.CSSProperties}>
                    <Banner
                        title="Как получить доступ к данным"
                        body="Набор доступных данных в каждой категории зависит от вашего объёма
                    продаж в ней. Подробнее — в Справке. 
                    Как открыть доступ в личный кабинет:"
                        buttons={[buttons[1], buttons[2]]}
                    >
                        <QuestionsAnswers questionsAnswers={answers}/>
                    </Banner>
                </div>
                <div className="offsets" style={{"--offsets-background-color": "#3287ff"} as React.CSSProperties}>
                    <div className="carousel">
                        <div className="text-block header" style={{"--font-family": "Arial", "max-width": "65rem"} as
                            React.CSSProperties}>
                            Кейсы партнёров
                        </div>
                        <AliceCarousel
                            mouseTracking
                            items={reports}
                            infinite={true}
                            paddingLeft={20}
                            paddingRight={20}
                        />
                    </div>
                </div>
                <div className="offsets" style={{"--offsets-background-color": "white"} as React.CSSProperties}>
                    <QuestionsAnswers title="Вопросы и ответы" questionsAnswers={questionsAnswers}/>
                </div>
                <footer>
                    <div className="footer-top">
                        <div className="logo">
                            <img src="https://avatars.mds.yandex.net/get-lpc/1635340/9fa4e259-3ffa-4190-bba6-b4d81cb6c51c/orig"
                                 alt=""/>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <div className="footer-left">
                            <nav className="navigation-menu">
                                <ul className="navigation-menu__wrapper">
                                    <li className="navigation-menu__item">
                                        <a
                                            className="text-block"
                                            href="https://partner.market.yandex.ru/welcome/"
                                            target="_blank"
                                            rel="noopener"
                                            style={{"--color": "#81899A", "--text-decoration": "none",
                                                "--font-family": "Arial",} as React.CSSProperties}
                                        >
                                            Сайт для партнёров
                                        </a>
                                    </li>
                                    <li className="navigation-menu__item">
                                        <a
                                            className="text-block"
                                            href="https://yandex.ru/legal/confidential/"
                                            target="_blank"
                                            rel="noopener"
                                            style={{"--color": "#81899A", "--text-decoration": "none",
                                                "--font-family": "Arial",} as React.CSSProperties}
                                        >
                                            Политика конфиденциальности
                                        </a>
                                    </li>
                                    <li className="navigation-menu__item">
                                        <a
                                            className="text-block"
                                            href="https://forms.yandex.ru/surveys/13473709.a3a02c08965ffcb86ee9ff745a97fd464cffb2d4/"
                                            target="_blank"
                                            rel="noopener"
                                            style={{"--color": "#81899A", "--text-decoration": "none",
                                                "--font-family": "Arial",} as React.CSSProperties}
                                        >
                                            Задать вопрос
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="footer-right">
                            <p className="text-block"
                               style={{"--color": "#81899A", "--text-decoration": "none",
                                   "--font-family": "Arial",} as React.CSSProperties}
                            >
                                ©2023 ООО «Яндекс»
                            </p>
                        </div>
                    </div>
                </footer>
            </section>

        </div>
    );
}

export default App;