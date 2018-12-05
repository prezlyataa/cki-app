export const data = {
    eventInformation: {
        slogan: "The frontend meetup for experienced developers"
    },

    eventDate: {
        city: "Львів",
        time: "2018-06-23T10:00",
        timeString: "23 червня, 2018"
    },

    titles: {
        speakers_section: "наші спікери",
        contacts_section: "Dynamic JS Talks #4",
        partners_section: "НАШІ ПАРТНЕРИ",
        previous_speakers_section: "ПОПЕРЕДНІ СПІКЕРИ",
        about_us: "Про нас",
        emailForm: "Залиште нам свій емаіл і ми Вас повідомимо про наступні події"
    },

    iconUrl: {
        calendar: "images/icon@2x.png",
        map: "images/icon copy.png"
    },

    socialNetworks: [
        {
            name: "facebook",
            link: "https://www.facebook.com/dynamictalks/"
        },
        {
            name: "slack",
            link: "https://dynamictalks.slack.com/"
        },
        {
            name: "twitter",
            link: "https://twitter.com/griddynamics"
        },
        {
            name: "instagram",
            link: "https://www.instagram.com/griddynamics_ua"
        },
        {
            name: "linkedin",
            link: "https://www.linkedin.com/company/250774/"
        }
    ],

    buttonsText: {
        registration: "Реєстрація",
        playDemo: "Дивитися промо-відео",
        program: "Програма",
        layRoute: "Прокласти маршрут",
        vacancies: "Відкриті вакансії",
        feedback: "Залишити відгук",
        viewMaterials: "Переглянути матеріали"
    },

    loadmoreButton: {
        text: "Показати ще"
    },

    headerNavigationLinks: [
        { title: "Хто", href: "#speakers" },
        { title: "Програма", href: "#schedule" },
        { title: "Коли і де", href: "#contacts" },
        { title: "Про нас", href: "#about" },
        { title: "Партнери", href: "#partners" }
    ],

    externalEndpoints: {
        registrationUrl: "https://goo.gl/forms/eSDUyNji3i6wZ6Lq1",
        materialsUrl: "https://dynamictalks.io/public-materials",
        vacanciesUrl: "https://www.griddynamics.com/careers",
        icalUrl: "JS_Dynamic_Talks_meetup_Jun_2018.ics",
        youtube: "https://goo.gl/CsBDhE",
        slack:
            "https://dynamictalks.slack.com/join/shared_invite/enQtMjU0OTkwNjY0MjYzLTQxZmJkNjk2OTZjNTQ1OTc4N2ExYmQwZDZjYTBlYWUyNzA2NmJjMDc0ZGIxZWQ3OTkyNmZjMDQxN2RmNzA2ODc",
        facebook: "https://www.facebook.com/dynamictalks/",
        facebookGridPage: "https://www.facebook.com/griddynamics",
        linkedIn: "https://www.linkedin.com/company/250774/",
        location:
            "https://www.google.com.ua/maps/place/Communa/@49.8410935,24.029017,17z/data=!3m1!4b1!4m5!3m4!1s0x473add6dca02d3bb:0x714a91968247137d!8m2!3d49.8410901!4d24.0312057?hl=en",
        site: "https://www.griddynamics.com/",
        promoVideo: "https://www.youtube.com/watch?v=0dw3CeCJch8&feature=youtu.be",
        instagram: "https://www.instagram.com/explore/tags/griddynamics_lviv/"
    },

    speakers: [
        {
            name: "Ліза Воронкова",
            state: "спеціальний гість",
            position: "CEO, founder, FORCE",
            topic:
                "Как разработать свой хардварный продукт, который не стыдно показать маме - опыт команды FORCE",
            specialGuest: true,
            link: "https://www.linkedin.com/in/lisa-voronkova-34298990/",
            imageSrc: "images/speakers/lisa_voronkova.jpg",
            bullets: []
        },
        {
            name: "Володимир Сень",
            state: "",
            position: "UI engineer / Grid Dynamics",
            topic: "Як розвивалися CSS макети з часом?",
            link: "https://www.facebook.com/volodymyr.sen",
            imageSrc: "images/speakers/volodymyr_sen.jpg",
            bullets: [
                "Як ефективно використовувати CSS інструменти для побудови макетів?",
                "Майбутнє CSS макетів"
            ]
        },
        {
            name: "Дем'ян Костельний",
            state: "",
            position: "Middle PHP Developer",
            topic: "Криптографія в JavaScript",
            specialGuest: false,
            link: "https://www.facebook.com/profile.php?id=100007051546205",
            imageSrc: "images/speakers/demian_kostelny.jpg",
            bullets: [
                "Історія криптографії",
                "Чому криптографія як ніколи актуальна в наш час",
                "Алгоритми шифрування з прикладами на JavaScript"
            ]
        }
    ],

    previousSpeakers: [
        {
            name: "Ярослав Заблоцький",
            state: "спеціальний гість",
            position:
                'Власник мережі стоматологічних клінік TM "Клініка Заблоцького"',
            link: "https://www.facebook.com/yaroslav.zablotskyy",
            specialGuest: true,
            imageSrc: "images/speakers/yz_1.jpg",
            bullets: [
                "Ярослав Заблоцький – д.м.н., професор, керівник приватної Академії, практикуючий лікар. Власник мережі стоматологічних клінік TM “Клініка Заблоцького” – сервісної компанії №1 за версією «DYB Business Club» і KMBS. Власник одного з найдорожчих брендів в Україні у сфері професійних медичних послуг, вивів клініку на рівень франчайзингу та разом з франчайзі реалізував проекти в Одесі та Софії, у Києві та Львові відкрив Центри турботи про зуби – Dental Care Offices, де надається лише одна послуга – професійне чищення зубів.\n" +
                "\n" +
                "Автор книги «Як я став Заблоцьким. Пригоди стоматолога в червоному метелику». Автор та ведучий  медіа-проекту про 100  заможних українців  «Як я став…»."
            ]
        },
        {
            name: "Любомир Семків",
            state: "спеціальний гість",
            position: "Senior software engineer / Intellias",
            link: "https://www.linkedin.com/in/lyubomyr-semkiv-0627a732/",
            specialGuest: true,
            imageSrc: "images/speakers/semkiv.jpg",
            bullets: []
        },
        {
            name: "Володимир Воєвідка",
            state: "",
            position: "UI engineer / Grid Dynamics",
            link: "https://www.linkedin.com/in/vovavoevidka/",
            specialGuest: false,
            imageSrc: "images/speakers/volodymyr_voyevidka.jpg",
            bullets: []
        },
        {
            name: "Георгій Подсвєтов",
            state: "",
            position: "Practice director UI technologies / Grid Dynamics",
            link: "https://www.linkedin.com/in/georgiy-podsvetov-86898945/",
            specialGuest: false,
            imageSrc: "images/speakers/podsvyetov.jpg",
            bullets: []
        },
        {
            name: "Ігор Томов",
            position: "UI engineer / Grid Dynamics",
            topic:
                "How We Lost Server Side Rendering, and Why We Should Concern About That",
            specialGuest: false,
            link: "https://www.linkedin.com/in/igor-tomov-b0584675",
            imageSrc: "images/speakers/it.jpg",
            bullets: [
                "Evolution from Web sites to Web applications",
                "The pitfalls of lack of Server Side Rendering",
                "Which tools you can use for SSR nowadays"
            ]
        },
        {
            name: "Дмитро Вербовий",
            state: "",
            position: "UI engineer / Grid Dynamics",
            topic:
                "Key things every front-end developer should know about HTTP/2. Why is it important to migrate?",
            specialGuest: false,
            link: "https://www.linkedin.com/in/dmytro-verbovyi-867bb34b",
            imageSrc: "images/speakers/dv_2.jpg",
            bullets: [
                "HTTP2 is stable and actually proven in production",
                "It has set of critical features that might improve performance of your web application",
                "Lets see how we can use it with NodeJS"
            ]
        },
        {
            name: "Володимир Фльонц",
            state: "дебют",
            position:
                "Розробник ProZorro, засновник ГО «Електронна демократія», IT-євангеліст",
            topic: "Чи можна електрифікувати демократію?",
            link: "https://www.linkedin.com/in/flyonts",
            imageSrc: "images/speakers/vf.jpg",
            bullets: [
                "Електронні вибори — це перше, що згадують обговорюючи електронну демократію майбутнього",
                "Моделі електронних голосувань, що вже використовуються в світі, та тих що тільки вважаються перспектвними",
                "Проведемо практичне голосування за системою Prêt à Voter та розберемо три офіційних інтернет-голосування, що вже відбулись в Україні"
            ]
        }
    ]
};

data.agenda = [
    { time: "10:30-11:00", description: "Реєстрація, нетворкінг" },
    {
        time: "11:00-11:15",
        description: "Відкриття, декілька слів про Dynamic Talks"
    },
    {
        time: "11:15-12:30",
        topic: speakerToDescription(data.speakers[1]),
        speaker: speaker(data.speakers[1])
    },
    { time: "12:30-12:45", description: "Кава" },
    {
        time: "12:45-14:00",
        topic: speakerToDescription(data.speakers[2]),
        speaker: speaker(data.speakers[2])
    },
    { time: "14:00-14:15", description: "Напої та снеки" },
    {
        time: "14:15-15:30",
        topic: speakerToDescription(data.speakers[0]),
        speaker: speaker(data.speakers[0])
    },
    { time: "15:30", description: "Afterparty, Networking" }
];

function speakerToDescription(speaker) {
    return `«${speaker.topic}»`;
}

function speaker(speaker) {
    return `${speaker.name}`;
}
