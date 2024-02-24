import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram,faTwitter ,faSnapchat,faTiktok,faFacebook} from '@fortawesome/free-brands-svg-icons';

import { faPhone } from '@fortawesome/free-solid-svg-icons';

import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

export const ContactInfo = {
    mobileNumber: '66723079',
    workingTime: "8:00 إلى 11:00",
    "address": {
        country:"الكويت",
        city: "الكويت"
    }
}

export const NavList = [
    {
      id: "1",
      label: "الرئيسيه",
      link: "/",
      description : ""
    },
    {
      id: "2",
      label: "أطقم حمامات",
      link: "categories/أطقم-حمامات",
      description: `تكسير وتركيب وتوريد وكل ما يلزم  الاغراض`,
      images: [
        "/category/2/001.jpeg",
        "/category/2/002.jpeg",
        "/category/2/003.jpeg",
        "/category/2/004.jpeg",
        "/category/2/005.jpeg",
        "/category/2/006.jpeg"
      ]
    },
    {
      id: "3",
      label: "غطاء منهول",
      link: "categories/غطاء-منهول",
      description:`غطاء منهول مع رددات مجاري`,
      images: [
        "/category/3/001.jpeg",
        "/category/3/002.jpeg",
        "/category/3/003.jpeg",
        "/category/3/004.jpeg"
      ],
    },
    {
      id: "4",
      label: "سخانات وفلاتر",
      link: "categories/سخانات-وفلاتر",
      description:`سخانات  وفلاتر وتوكين ومضخات`,
      images: [
        "/category/4/001.jpeg",
        "/category/4/002.jpeg",
        "/category/4/003.jpeg",
        "/category/4/004.jpeg",
        "/category/4/005.jpeg",
        "/category/4/006.jpeg",
        "/category/4/007.jpeg",
        "/category/4/008.jpeg",
        "/category/4/009.jpeg"
      ]
    },
    {
      id: "5",
      label: "شفاطات حمامات",
      link: "categories/شفاطات-حمامات",
      description: `شفاطات حمامات ومطابخ  كهربائيه`,
      images: [
        "/category/5/001.jpeg",
        "/category/5/002.jpeg",
        "/category/5/003.jpeg",
        "/category/5/004.jpeg",
        "/category/5/005.jpeg",
        "/category/5/006.jpeg",
      ]
    },
    {
      id: "6",
      label: "تكسير وتوريد",
      link: "categories/تكسير-وتوريد",
      description: `تكسير وتوريد`,
      images: [
        "/category/6/001.jpeg",
        "/category/6/002.jpeg",
        "/category/6/003.jpeg"
      ]
    },
    {
      id: "7",
      label: "تسليك مجاري",
      link: "categories/تسليك-مجاري",
      description: `تسليك مجاري المياه الهوائيه`,
      images: [
        "/category/7/001.jpeg",
        "/category/7/002.jpeg"
      ]
    }
  ];

  export const ServicesObject = [
    {
      id:"2",
      label: "اصباغ خارجيه",
      link: "categories/اصباع-خارجيه",
      description: `نقوم بأحدث أعمال اصباغ خارجيه لدينا عمالة مهنية مدربة على مستوى من الخبرة والاحترافية في انجاز العمل المطلوب بأكمل وجه. أفضل...وخصم يصل 30%`,
      image: "/category/2/001.jpeg",
    },
    {
      id:"3",
      label: "اصباغ داخليه",
      link: "categories/اصباغ-داخليه",
      description: `نقوم بالطبع بإستخدام أفضل الاصباغ الداخلية للجدران و التي تعتبر النوعية الأفضل في منزلك لدينا عمالة مهنية مدربة على مستوى من الخبرة والاحترافية في انجاز العمل المطلوب بأكمل وجه. أفضل...وخصم يصل ..30%`,
      image: "/category/3/001.jpeg",
    },
    {
      id:"4",
      label: "عوازل اسطح",
      link: "categories/عوازل-اسطح",
      description: `تركيب جميع انواع عازل عوازل الاسطح ضط تسريب مياه  مقاومة الحرارة العالية وتمنع تسربها للمنزل وبالتالي تحافظ على اعتدال الحرارة`,
      image: "/category/4/001.jpeg",
    },
    {
      id:"5",
      label: "ديكورات",
      link: "categories/اقسام-ديكورات",
      description: `نساعدك في تصميم وتنفيذ منزلك، لتجربة تصميم داخلي مميزة ومتكاملة ابدأ معنا الآن. سواء كانت غرفة, غرفة نوم, صالة, مجلس لفلة او شقة نصمم لك حسب ميزانيتك`,
      image: "/category/5/001.jpeg",
    },
    {
      id:"6",
      label: "بناء مجالس خارجيه",
      link: "categories/اقسام-بناء-مجالس-خارجيه",
      description: `نتخصص في كافة اعمال بناء مجالس خارجية بالدمام ، بناء ملاحق  ، حيث نوفر افضل كادر عمل  سرعه دق في عمل`,
      image: "/category/6/001.jpeg",
    },
    {
      id:"7",
      label: "بناء ملاحق ترميم شامل",
      link: "categories/اقسام-بناء-ملاحق-ترميم-شامل",
      description: `نقوم باحدث ترميم مباني وترميم الفلل والقصور نستطيع بناء الجدران ومباني الحوائط بمهاره. لدينا خبره كبيره في ترميم المباني السكنيه وترميم الفلل وترميم شامل`,
      image: "/category/7/001.jpeg",
    },
    {
      id:"8",
      label: "مظلات-سواتر-برجولات عشب صناعي",
      link: "categories/مظلات-سواتر-برجولات-عشب-صناعي",
      description: `تركيب كافة أنواع المظلات والسواتر والبرجولات ومظلات الجلسات والحدائق والأحواش. نقوم بتنفيذ وتركيب جميع أعمال المظلات والسواتر والبرجولات والهناجر بجميع`,
      image: "/category/8/001.jpeg",
    },
    {
      id:"9",
      label: "أسفلت ولايبوكسي",
      link: "categories/اسفلت-ولايبوكسي",
      description: `تنفيذ جميع اعمال الاسفلت والردميات ... السيارات متخصصون في اعمال الاسفلت في الشرقية وتركيب جميع انواع الانترلوك والبلدورة ...ولايبوكسي`,
      image: "/category/9/001.jpeg",
    },
  ];
  

  export const FixedContactList = [
      {
        name:"phone",
        icon:<FontAwesomeIcon icon={faPhone} size='2x' color='blue'/>,
        link: `tel:${ContactInfo.mobileNumber}`
      },
      {
        name:"whatsapp",
        icon: <FontAwesomeIcon size="2x" icon={faWhatsapp} color='green'/>,
        link: `https://wa.me/965${ContactInfo.mobileNumber}`
      },
      {
        name:"instagram",
        icon:<FontAwesomeIcon size="2x"icon={faInstagram} color='purple'/>,
        link:"https://www.instagram.com/nabialla28?igsh=dTkwcHRrZ2lyM2ds"
      },
      {
        name:"facebook",
        icon:<FontAwesomeIcon size="2x"icon={faFacebook} color='#00f'/>,
        link:"https://www.facebook.com/profile.php?id=100089961438251&mibextid=ZbWKwL"
      },
      {
        name:"snapshat",
        icon:<FontAwesomeIcon size="2x"icon={faSnapchat} color='#8B8000'/>,
        link:""
      },
      
      {
        name:"twitter",
        icon:<FontAwesomeIcon size="2x"icon={faTwitter} color='#1DA1F2'/>,
        link:""
      },
   
     
  ]


  
  