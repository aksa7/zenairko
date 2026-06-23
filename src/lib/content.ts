export const brand = {
  name: "ZENA IR KO",
  tagline: "Kvapų pasaulis, kuriame randate save",
  intro:
    "Nišiniai ir kolekciniai originalūs kvepalai, profesionali plaukų priežiūra, prabangūs namų kvapai ir dekoratyvinė kosmetika. Plačiausias asortimentas, originali produkcija ir kainos, kurios maloniai nustebina.",
};

export const nav = [
  { label: "Apie", href: "#apie" },
  { label: "Asortimentas", href: "#kategorijos" },
  { label: "Kvepalai", href: "#kvepalai" },
  { label: "Namų kvapai", href: "#namu-kvapai" },
  { label: "Kontaktai", href: "#kontaktai" },
];

export const about = {
  eyebrow: "Apie mus",
  title: "Daugiau nei parduotuvė — kvapo kultūra",
  paragraphs: [
    "ZENA IR KO esame įsipareigoję originalumui ir kokybei. Siūlome populiariausius nišinius ir kolekcinius kvepalus vyrams bei moterims iš žymių pasaulio gamintojų — tik originalią produkciją. Mūsų asortimentas platus, kainos konkurencingos, o testeriai leidžia atrasti savąjį kvapą prieš įsigyjant.",
    "Be kvepalų, rasite profesionalias plaukų priežiūros priemones, prabangius namų kvapus, natūralias kvepiančias žvakes ir dekoratyvinę kosmetiką. Reguliariai rengiame akcijas bei išpardavimus, o nuolatiniams klientams taikome asmenines nuolaidas.",
  ],
};

export type Category = {
  id: string;
  title: string;
  description: string;
  image: string;
};

export const categories: Category[] = [
  {
    id: "kvepalai",
    title: "Nišiniai ir kolekciniai kvepalai",
    description:
      "Populiariausi originalūs kvepalai vyrams ir moterims iš žymių gamintojų. Platus pasirinkimas, testeriai vietoje.",
    image: "/images/kategorija-kvepalai.jpg",
  },
  {
    id: "plaukai",
    title: "Plaukų priežiūra",
    description:
      "Profesionalios priemonės kasdienei ir intensyviai plaukų priežiūrai.",
    image: "/images/kategorija-plaukai.jpg",
  },
  {
    id: "namu-kvapai",
    title: "Namų kvapai",
    description:
      "Prabangūs namų kvapai, kuriantys jaukią ir įsimenamą atmosferą.",
    image: "/images/kategorija-namu-kvapai.jpg",
  },
  {
    id: "zvakes",
    title: "Natūralios žvakės",
    description:
      "Natūralios, prabangiai kvepiančios žvakės šiltiems vakarams.",
    image: "/images/kategorija-zvakes.jpg",
  },
  {
    id: "kosmetika",
    title: "Dekoratyvinė kosmetika",
    description:
      "Kokybiška dekoratyvinė kosmetika kasdienai ir ypatingoms progoms.",
    image: "/images/kategorija-kosmetika.jpg",
  },
  {
    id: "dovanos",
    title: "Dovanų kuponai ir rinkiniai",
    description:
      "Idealus sprendimas, kai norite padovanoti pasirinkimo laisvę.",
    image: "/images/kategorija-dovanos.jpg",
  },
];

export type Perfume = {
  id: string;
  name: string;
  family: string;
  notes: string;
  image: string;
};

export const featuredPerfumes: Perfume[] = [
  {
    id: "p1",
    name: "Nuit Doré",
    family: "Rytietiški, gilūs",
    notes: "Oudas · ambra · vanilė",
    image: "/images/kvepalai-nuit-dore.jpg",
  },
  {
    id: "p2",
    name: "Voile de Rose",
    family: "Gėliški, prabangūs",
    notes: "Damasko rožė · pačiulis · muskusas",
    image: "/images/kvepalai-voile-de-rose.jpg",
  },
  {
    id: "p3",
    name: "Bois Sauvage",
    family: "Mediniai, vyriški",
    notes: "Vetiveris · cedras · bergamotė",
    image: "/images/kvepalai-bois-sauvage.jpg",
  },
  {
    id: "p4",
    name: "Ambre Lumière",
    family: "Saldūs, šilti",
    notes: "Ambra · tonka · sandalmedis",
    image: "/images/kvepalai-ambre-lumiere.jpg",
  },
];

export const homeScents = {
  eyebrow: "Namų kvapai ir žvakės",
  title: "Atmosfera, kurią pajunti vos peržengęs slenkstį",
  body: "Prabangūs difuzoriai, aromatinės žvakės ir interjero kvapai sukuria namų charakterį. Renkamės tik tuos gamintojus, kurių kvapas išlieka subtilus, bet atmenamas — kaip gera istorija.",
  image: "/images/namu-kvapai.jpg",
  bullets: [
    "Natūralios sojų ir kokoso vaško žvakės",
    "Lazdelinio difuzoriaus papildymai",
    "Interjero ir tekstilės kvapai",
    "Sezoninės kolekcijos ir limituoti leidimai",
  ],
};

export type Reason = {
  title: string;
  body: string;
  icon: "sparkles" | "leaf" | "flask" | "tag" | "heart" | "gift";
};

export const whyUs: Reason[] = [
  {
    title: "Originali produkcija",
    body: "Tik žymių gamintojų originalūs kvepalai ir kosmetika.",
    icon: "sparkles",
  },
  {
    title: "Platus asortimentas",
    body: "Nuo nišinių kvepalų iki namų kvapų ir kosmetikos vienoje vietoje.",
    icon: "leaf",
  },
  {
    title: "Testeriai vietoje",
    body: "Išbandykite kvapą prieš įsigydami — be skubos ir įsipareigojimo.",
    icon: "flask",
  },
  {
    title: "Konkurencingos kainos",
    body: "Reguliarios akcijos ir maloniai stebinančios kainos.",
    icon: "tag",
  },
  {
    title: "Nuolaidos klientams",
    body: "Nuolatiniams pirkėjams — asmeninės nuolaidos.",
    icon: "heart",
  },
  {
    title: "Dovanų sprendimai",
    body: "Dovanų kuponai ir paruošti rinkiniai bet kuriai progai.",
    icon: "gift",
  },
];

export const promo = {
  eyebrow: "Akcijos",
  title: "Akcijos ir išpardavimai vyksta nuolat",
  body: "Pasiteiraukite apie aktualius pasiūlymus ir nuolaidas nuolatiniams klientams.",
  cta: "Susisiekti",
};

export const contact = {
  eyebrow: "Kontaktai",
  title: "Suradome jūsų kvapą? Susisiekime.",
  body: "Online užsakymų nevykdome — bet mielai patarsime, rezervuosime prekę ir atsakysime į visus klausimus. Paskambinkite, parašykite žinutę arba užpildykite užklausos formą.",
  phone: "+370 600 00000",
  phoneHref: "tel:+37060000000",
  email: "info@zenairko.lt",
  emailHref: "mailto:info@zenairko.lt",
  address: "Kaunas, Lietuva",
  hours: "I–V 10:00–19:00 · VI 10:00–16:00",
};

export const faq = [
  {
    q: "Ar galiu užsisakyti prekes internetu?",
    a: "Internetu užsakymų nevykdome — esame prezentacinis puslapis. Susisiekite telefonu, el. paštu arba užpildykite užklausą, ir mes rezervuosime prekę bei atsakysime į visus klausimus.",
  },
  {
    q: "Ar produkcija originali?",
    a: "Taip. Dirbame tik su patikrintais žymių pasaulio gamintojų atstovais ir oficialiais platintojais. Originalumas — mūsų vertybė.",
  },
  {
    q: "Ar yra testeriai?",
    a: "Testeriai pasiekiami parduotuvėje — atrasti savąjį kvapą leidžiame be skubos ir įsipareigojimo.",
  },
  {
    q: "Ar taikomos nuolaidos?",
    a: "Reguliariai vyksta sezoninės akcijos, o nuolatiniams klientams taikome asmenines nuolaidas. Pasiteiraukite.",
  },
];
