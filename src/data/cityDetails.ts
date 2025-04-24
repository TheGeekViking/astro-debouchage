const cityImages = import.meta.glob("../images/cities/*.webp", {
  eager: true,
}) as Record<string, { default: string }>;

function getCityImage(fileName: string): string {
  return cityImages[`../images/cities/${fileName}`]?.default;
}

export const cityDetails = {
  // Montreal
  montreal: {
    title: "Débouchage Montreal | Urgence 24/7",
    metaDescription:
      "Service d'urgence de débouchage à Montréal: drains, lavabos, toilettes et plus. Intervention rapide 24h/7 avec des plombiers qualifiés. Satisfaction garantie!",
    cardTitle: "Montreal",
    cardImgUrl: getCityImage("montreal.webp"),
    altText: "Vue panoramique de la ville de Montréal.",
    mainTitle: "Service de débouchage à Montréal",
    description:
      "Besoin d'un service d'urgence de débouchage à Montréal? Notre équipe de plombiers offrent un service d'intervention, disponible 24h/7, pour toute vos urgences de plomberie. Peu importe que le lavabo soit bouché, un drain obstrué ou le besoin d'un nettoyage de drain, nous intervenons partout sur l'île de Montréal.",

    secondSubTitle: "Disponibilité",
    secondTitle: "Service d'urgence rapide à Montréal, 24h/7",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126499.79676303646!2d-73.75369865724156!3d45.52463101867234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc91a541c64b70d%3A0x654e3138211fefef!2sMontreal%2C%20QC!5e0!3m2!1sen!2sca!4v1739832515024!5m2!1sen!2sca",
    secondDescription:
      "Un lavabo bouché, un drain obstrué ou une toilette qui déborde, tout cela peut devenir une situation stressante. C'est pour cela que nous offrons un service d'urgence à Montréal.",
    details: [
      {
        title: "Service d'intervention, le jour même.",
        description:
          "Disponible 24h/7, il nous fera un plaisir de vous offrir une intervention d'urgence rapide, efficace et garanti, avec des plombiers experts en débouchage.",
      },
      {
        title: "Expérience avec une variété de types de drains.",
        description:
          "Que ce soit un drain d'évier, bain, douches ou canalisations principales, nos plombiers possèdent l'expertise nécessaire pour déboucher déboucher n'importe quel type de drain ou canalisation.",
      },
      {
        title: "Prévention en tête.",
        description:
          "En plus d'intervenir pour vos urgences, nous vous donnons des conseils, afin d'éviter des futurs blocages. Avec de la prévention, vous pourrez profiter de votre confort en tout temps.",
      },
    ],
    thirdSubTitle: "Expertise",
    thirdTitle: "Ce qui nous démarque des autres à Montréal",
    thirdDescription:
      "Chez Débouchage Solution, chaque urgence est prise au sérieux. Nous savons à quel point un problème de plomberie peut être une source de stresse et c'est pour cela que nous offrons le service de débouchage le plus rapide partout sur l'île de Montréal.",
    faq: [
      {
        question:
          "Quelle est la rapidité de votre service de débouchage à Montréal?",
        answer:
          "Notre service est conçu pour intervenir rapidement partout à Montréal, une ville où les variations de température et les infrastructures vieillissantes peuvent entraîner des problèmes de drainage fréquents, notamment dans les quartiers plus anciens comme Villeray, Rosemont ou le Plateau-Mont-Royal. En cas d'urgence, nous faisons tout notre possible pour intervenir dans les 24 heures suivant votre appel, afin de limiter les désagréments et prévenir tout dégât d’eau.",
      },
      {
        question: "Offrez-vous des services d’entretien préventif des drains?",
        answer:
          "Oui, tout à fait. Montréal est connue pour ses hivers rigoureux et ses transitions de gel/dégel qui fragilisent les canalisations. C’est pourquoi nous proposons des services d’entretien préventif pour les résidences et les commerces de Montréal. Ces services permettent d’éviter l’accumulation de débris, l’ocre ferreux et les obstructions fréquentes dans les systèmes de drainage.",
      },
      {
        question:
          "Comment puis-je savoir si mon problème de drain nécessite une inspection par caméra?",
        answer:
          "Si vous vivez à Montréal, particulièrement dans des quartiers où les réseaux d’égouts sont anciens ou souvent affectés par des racines (comme Outremont, NDG ou Verdun), une inspection par caméra est fortement recommandée dès les premiers signes de drainage lent, d’odeurs ou de refoulements répétés. Cette technologie nous permet de localiser précisément les problèmes dans vos canalisations sans travaux invasifs, pour une intervention rapide et ciblée.",
      },
    ],
  },
  // Richelieu
  richelieu: {
    title: "Débouchage Richelieu | Urgence 24/7",
    metaDescription:
      "Besoin d’un débouchage à Richelieu? Nos plombiers qualifiés interviennent rapidement 24h/7 pour résoudre vos urgences de drains et canalisations bouchés. Appelez dès maintenant!",
    cardTitle: "Richelieu",
    cardImgUrl: getCityImage("richelieu.webp"),
    altText: "Vue panoramique sur la rivère Richelieu",
    mainTitle: "Service de débouchage à Richelieu",
    description:
      "Besoin d’un plombier local pour un débouchage à Richelieu ? Nous offrons un service d’urgence 24h/7, idéal pour résoudre rapidement vos problèmes de plomberie. Avec une équipe experte et des outils modernes, nous intervenons rapidement pour garantir des solutions fiables et durables dans toute la région de Richelieu.",

    secondSubTitle: "Disponibilité",
    secondTitle: "Débouchage d’Urgence Rapide à Richelieu, Disponible 24h/7",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d44815.79911853399!2d-73.27461340030379!3d45.409592751522055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc9a8916c1d1c9b%3A0x4715ccaf951e9d16!2sRichelieu%2C%20QC!5e0!3m2!1sen!2sca!4v1739833608169!5m2!1sen!2sca",
    secondDescription:
      "Nos plombiers locaux offrent bien plus qu’un simple débouchage. Grâce à des outils modernes et des techniques éprouvées, nous intervenons rapidement pour résoudre tous types de blocages. Que ce soit pour un drain obstrué, un lavabo bouché, ou une toilette qui déborde, nous sommes là pour vous aider 24h/7.",
    details: [
      {
        title: "Intervention Rapide et Efficace",
        description:
          "Nous arrivons la journée même pour résoudre vos urgences, afin que vous retrouviez rapidement votre confort.",
      },
      {
        title: "Expertise Locale à Richelieu",
        description:
          "Nos plombiers connaissent les infrastructures locales, garantissant un service adapté à vos besoins spécifiques.",
      },
      {
        title: "Équipements Modernes et Résultats Durables",
        description:
          "Nous utilisons des outils de pointe pour assurer un débouchage précis et prévenir les problèmes futurs.",
      },
    ],
    thirdSubTitle: "Expertise",
    thirdTitle: "Des Plombiers Dédiés à Vos Besoins à Richelieu",
    thirdDescription:
      "Chez Débouchage Solutions, nous mettons votre satisfaction au cœur de nos priorités. Nos plombiers spécialisés à Richelieu sont à votre porté et disponibles 24h/7 pour intervenir rapidement, avec des solutions fiables et adaptées à chaque situation. Choisissez un service qui garantit confort et tranquillité d’esprit.",
    faq: [
      {
        question:
          "Les inondations printanières dans la région de Richelieu peuvent-elles affecter mes drains?",
        answer:
          "Oui, les crues printanières du bassin de la rivière Richelieu peuvent provoquer des refoulements d'égout et des obstructions de drains, en particulier dans les zones basses ou près des berges. Une inspection régulière et un entretien préventif sont recommandés pour minimiser ces risques.",
      },
      {
        question:
          "Quelle est la durée moyenne d'une intervention de débouchage?",
        answer:
          "La durée d'une intervention varie en fonction de la complexité du bouchon. En général, un débouchage standard prend entre 30 minutes et 2 heures.",
      },
      {
        question:
          "Comment puis-je éviter les obstructions de drains dans ma maison à Richelieu?",
        answer:
          "Évitez de jeter des graisses, des huiles et des objets non biodégradables dans les éviers et toilettes, et utilisez des crépines pour retenir les débris.​",
      },
    ],
  },
  // Saint-Basile-le-Grand
  "saint-basile-le-grand": {
    title: "Débouchage Saint-Basile-le-Grand | Urgence 24/7",
    metaDescription:
      "Service de débouchage à Saint-Basile-le-Grand. Plombiers locaux disponibles 24h/7 pour des interventions rapides et fiables. Contactez-nous dès maintenant!",
    cardTitle: "Saint-Basile-le-Grand",
    cardImgUrl: getCityImage("saint-basile.webp"),
    altText: "La station de train à Saint-Basile-le-Grand.",
    mainTitle: "Service de débouchage à Saint-Basile-le-Grand",
    description:
      "À Saint-Basile-le-Grand, notre équipe de plombiers qualifiés offre un service rapide et fiable pour tous vos besoins de débouchage. Que ce soit pour un drain obstrué, un lavabo bouché ou une urgence de plomberie, nous intervenons 24h/7 avec des solutions durables et efficaces. Appelez dès aujourd’hui pour une assistance immédiate dans votre région.",

    secondSubTitle: "Disponibilité",
    secondTitle:
      "Des Solutions de Débouchage Personnalisées pour Saint-Basile-le-Grand",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d44721.52124549901!2d-73.3183704490508!3d45.52829222526178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc900a2549eff05%3A0x5040cadae4d4570!2sSaint-Basile-le-Grand%2C%20QC!5e0!3m2!1sen!2sca!4v1739834518905!5m2!1sen!2sca",

    secondDescription:
      "Chaque problème de plomberie est unique, c’est pourquoi nos plombiers à Saint-Basile-le-Grand proposent des solutions adaptées à vos besoins. Avec une approche sur mesure et des outils avancés, nous assurons un service rapide, fiable, et efficace pour garantir des résultats durables.",
    details: [
      {
        title: "Évaluation Rapide et Transparente",
        description:
          "Avant chaque intervention, nous analysons la situation pour vous offrir une solution claire et un devis sans surprises.",
      },
      {
        title: "Service Local et Approche Personnalisée",
        description:
          "En tant que plombiers de la région, nous comprenons vos besoins spécifiques et proposons des interventions adaptées à votre quartier.",
      },
      {
        title: "Techniques Modernes et Écologiques",
        description:
          "Nous utilisons des méthodes respectueuses de l’environnement pour déboucher vos canalisations sans endommager vos installations.",
      },
    ],
    thirdSubTitle: "Expertise",
    thirdTitle:
      "Pourquoi Faire Confiance à Nos Services à Saint-Basile-le-Grand?",
    thirdDescription:
      "À Saint-Basile-le-Grand, nous sommes votre solution de confiance pour tous vos besoins de débouchage. Que ce soit pour un lavabo bouché, des canalisations obstruées, ou un nettoyage à hydro-pression, notre équipe intervient rapidement pour résoudre vos urgences. Disponibles 24h/7, nos plombiers spécialisés utilisent des équipements modernes pour garantir des résultats fiables et durables, tout en offrant des solutions économiques adaptées à votre budget.",
    faq: [
      {
        question:
          "Les variations climatiques à Saint-Basile-le-Grand peuvent-elles affecter mes drains?",
        answer:
          "Tout à fait. les cycles de gel et de dégel fréquents dans la région peuvent provoquer des fissures ou des déplacements dans les conduites, entraînant des obstructions ou des fuites.",
      },
      {
        question:
          "Les racines d'arbres sont-elles une cause fréquente d'obstruction des drains?",
        answer:
          "Oui, dans les quartiers verdoyants de Saint-Basile-le-Grand, les racines d'arbres peuvent infiltrer les conduites souterraines, provoquant des blocages. Une inspection régulière et un entretien préventif sont recommandés pour minimiser ces risques.",
      },
      {
        question:
          "Pouvez-vous intervenir dans les 48 heures suivant mon appel?",
        answer:
          "Dans la majorité des cas, nous pouvons intervenir dans les 48 heures suivant votre appel à Saint-Basile-le-Grand. Que ce soit pour un débouchage de drain, de toilette, de lavabo, d'évier ou de baignoire, notre équipe s'engage à intervenir dans les plus brefs délais afin de minimiser les désagréments.",
      },
    ],
  },
  // Saint-Bruno-de-Montarville
  "saint-bruno-de-montarville": {
    title: "Débouchage Saint-Bruno-de-Montarville | Urgence 24/7",
    metaDescription:
      "Débouchage professionnel à Saint-Bruno-de-Montarville. Plombiers d’urgence disponibles 24h/7 pour drains, lavabos, et canalisations bouchés. Service rapide, durable et adapté à vos besoins!",
    cardTitle: "Saint-Bruno-de-Montarville",
    cardImgUrl: getCityImage("saint-bruno.webp"),
    altText: "L'édifice Irda à Saint-Bruno-de-Montarville.",
    mainTitle: "Service de débouchage à Saint-Bruno-de-Montarville",
    description:
      "À Saint-Bruno-de-Montarville, nous savons que les urgences de plomberie ne peuvent pas attendre. C’est pourquoi notre équipe de plombiers d’urgence est disponible 24h/7 pour intervenir rapidement et efficacement. Que vous ayez un drain obstrué, une canalisation bouchée ou un lavabo bloqué, nous utilisons des techniques modernes pour garantir des résultats durables et un service adapté à vos besoins. Faites appel à nos experts locaux dès aujourd’hui pour une intervention rapide et sans tracas.",

    secondSubTitle: "Engagement Local",
    secondTitle:
      "Un Service de Débouchage Adapté aux Besoins de Saint-Bruno-de-Montarville",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d44722.71303280198!2d-73.38406569906662!3d45.526793226857045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc90136b3833ef3%3A0x5040cadae4d4560!2sSt-Bruno-de-Montarville%2C%20QC!5e0!3m2!1sen!2sca!4v1739836403565!5m2!1sen!2sca",
    secondDescription:
      "Nos plombiers spécialisés à Saint-Bruno-de-Montarville comprennent les particularités des infrastructures locales. Grâce à notre expertise et à nos équipements avancés, nous proposons des solutions rapides et efficaces pour tous vos problèmes de drains et canalisations bouchés.",
    details: [
      {
        title: "Expertise Locale",
        description:
          "Nous connaissons les spécificités des installations à Saint-Bruno-de-Montarville, garantissant des interventions adaptées à votre région.",
      },
      {
        title: "Disponibilité 24h/7 pour Vos Urgences",
        description:
          "Notre équipe est prête à intervenir à tout moment pour répondre à vos besoins en débouchage et dépannage.",
      },
      {
        title: "Équipement Moderne pour Résultats Durables",
        description:
          "Nous utilisons des outils de pointe pour résoudre vos problèmes rapidement, tout en assurant la durabilité des solutions.",
      },
    ],
    thirdSubTitle: "choix de la qualité",
    thirdTitle: "Pourquoi Choisir Nos Services à Saint-Bruno-de-Montarville?",
    thirdDescription:
      "À Saint-Bruno-de-Montarville, nous sommes plus qu’un simple service de débouchage – nous sommes vos partenaires de confiance pour résoudre vos urgences de plomberie. Avec une équipe de plombiers expérimentés, une disponibilité 24h/7, et un engagement envers des solutions fiables et rapides, nous veillons à ce que chaque intervention soit une expérience sans stress. Faites le choix de la qualité et de la tranquillité d’esprit pour vos besoins en débouchage.",
    faq: [
      {
        question:
          "Le gel hivernal affecte-t-il le besoin de nettoyage de drain à Saint-Bruno-de-Montarville?",
        answer:
          "Les hivers rigoureux de Saint-Bruno-de-Montarville peuvent entraîner le gel des canalisations, provoquant des blocages ou des dommages. Un entretien régulier, notamment un nettoyage de drain préventif, est essentiel pour assurer le bon fonctionnement de votre système de drainage durant la saison froide.",
      },
      {
        question:
          "Quelle est la fréquence recommandée pour le nettoyage de drain dans cette municipalité?",
        answer:
          "Il est conseillé de procéder à un nettoyage de drain tous les 1 à 2 ans, en fonction de l'utilisation et de l'âge de vos installations. Un entretien régulier permet de prévenir les obstructions et d'assurer une évacuation efficace des eaux usées.",
      },
      {
        question:
          "Quels sont les délais d'intervention après un appel d'urgence?",
        answer:
          "Nous comprenons l'urgence que représente un drain bouché. À Saint-Bruno-de-Montarville, notre équipe s'efforce d'intervenir dans les plus brefs délais, souvent le jour même, pour résoudre efficacement vos problèmes de drainage.",
      },
    ],
  },
  // Saint-Constant
  "saint-constant": {
    title: "Débouchage Saint-Constant | Urgence 24/7",
    metaDescription:
      "Service de débouchage à Saint-Constant. Plombiers locaux disponibles 24h/7 pour des interventions rapides et fiables. Drains, lavabos, canalisations bouchées ? Appelez dès aujourd’hui!",
    cardTitle: "Saint-Constant",
    cardImgUrl: getCityImage("saint-constant.webp"),
    altText: "L'hôtel de ville de Saint-Constant.",
    mainTitle: "Service de débouchage à Saint-Constant",
    description:
      "À Saint-Constant, notre équipe de plombiers locaux spécialisés est disponible 24h/7 pour intervenir rapidement en cas d’urgence. Nous offrons un service de débouchage professionnel adapté à tous vos besoins, que ce soit pour un drain bloqué, une canalisation obstruée ou une réparation urgente. Faites confiance à nos experts pour des solutions fiables, durables et réalisées avec soin dans votre région.",

    secondSubTitle: "Engagement Local",
    secondTitle: "Des Solutions Fiables pour Vos Urgences à Saint-Constant",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d44864.88650022525!2d-73.60924685228518!3d45.34769380840638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc90d606bc50649%3A0xe0b161ae82b1e592!2sSaint-Constant%2C%20QC!5e0!3m2!1sen!2sca!4v1739836757781!5m2!1sen!2sca",
    secondDescription:
      "À Saint-Constant, nous comprenons l’importance d’une intervention rapide et adaptée. Nos plombiers locaux offrent des solutions personnalisées pour répondre efficacement à tous vos besoins en débouchage. Avec une approche axée sur la qualité et des équipements de pointe, nous garantissons des résultats qui durent.",
    details: [
      {
        title: "Solutions Sur-Mesure",
        description:
          "Chaque situation est unique, c’est pourquoi nous adaptons nos méthodes à vos besoins spécifiques, assurant un débouchage efficace et durable.",
      },
      {
        title: "Expertise Locale Inégalée",
        description:
          "Basés à Saint-Constant, nos plombiers connaissent parfaitement les infrastructures locales, vous garantissant un service rapide et précis.",
      },
      {
        title: "Engagement pour Votre Satisfaction",
        description:
          "Votre satisfaction est notre priorité. Nous nous assurons que chaque intervention soit réalisée avec soin et professionnalisme.",
      },
    ],
    thirdSubTitle: "Expertise",
    thirdTitle:
      "Votre Partenaire de Confiance à Saint-Constant pour un Service de Qualité",
    thirdDescription:
      "À Saint-Constant, nous ne nous contentons pas de déboucher vos canalisations – nous offrons une expérience client exceptionnelle. Grâce à notre équipe de plombiers locaux, à des outils modernes, et à une approche centrée sur vos besoins, nous garantissons des résultats fiables et une intervention rapide, à chaque fois. Faites confiance à notre expertise pour un service professionnel, adapté et sans compromis.",
    faq: [
      {
        question:
          "Les hivers à Saint-Constant peuvent-ils affecter mes drains?",
        answer:
          "Effectivement, les cycles de gel et de dégel typiques de Saint-Constant peuvent provoquer des fissures ou des déplacements dans les conduites, entraînant des obstructions ou des fuites.",
      },
      {
        question:
          "En cas d'urgence à Saint-Constant, combien de temps faut-il attendre pour une intervention de débouchage?",
        answer:
          "À Saint-Constant, nous comprenons l'importance d'une intervention rapide en cas d'urgence de plomberie. Notre équipe locale s'efforce d'intervenir dans les plus brefs délais, souvent le jour même, pour résoudre efficacement vos problèmes de débouchage de drain.",
      },
      {
        question:
          "Les racines d'arbres peuvent-elles causer des obstructions dans les drains?",
        answer:
          "Oui, les racines d'arbres sont une cause fréquente d'obstruction des drains à Saint-Constant. Attirées par l'humidité, elles peuvent infiltrer les conduites souterraines, provoquant des blocages nécessitant un nettoyage de drain professionnel.",
      },
    ],
  },
  // Saint-Hyacinthe
  "saint-hyacinthe": {
    title: "Débouchage Saint-Hyacinthe | Urgence 24/7",
    metaDescription:
      "Service de débouchage à Saint-Hyacinthe. Plombiers locaux disponibles 24h/7 pour des interventions rapides et fiables. Drains, lavabos, canalisations, toilettes bouchées ? Appelez dès aujourd’hui!",
    cardTitle: "Saint-Hyacinthe",
    cardImgUrl: getCityImage("saint-hyacinthe.webp"),
    altText:
      "Entrée de bibliothèque et de la salle Marcelle-Gingras à Saint-Hyacinthe",
    mainTitle: "Service de débouchage à Saint-Hyacinthe",
    description:
      "Besoin d’un débouchage à Saint-Hyacinthe? Plombiers locaux disponibles 24h/7 pour drains, canalisations et urgences de plomberie. Service rapide et solutions durables. Contactez-nous!",

    secondSubTitle: "Engagement Local",
    secondTitle: "Des Solutions Fiables pour Vos Urgences à Saint-Hyacinthe",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d89269.71848238131!2d-73.01857862316585!3d45.6371904607471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc84dd740cd62cb%3A0x5040cadae4d4290!2sSaint-Hyacinthe%2C%20QC!5e0!3m2!1sen!2sca!4v1739836893311!5m2!1sen!2sca",
    secondDescription:
      "À Saint-Hyacinthe, nous comprenons l’importance d’une intervention rapide et adaptée. Nos plombiers locaux offrent des solutions personnalisées pour répondre efficacement à tous vos besoins en débouchage. Avec une approche axée sur la qualité et des équipements de pointe, nous garantissons des résultats qui durent.",
    details: [
      {
        title: "Solutions Sur-Mesure",
        description:
          "Chaque situation est unique, c’est pourquoi nous adaptons nos méthodes à vos besoins spécifiques, assurant un débouchage efficace et durable.",
      },
      {
        title: "Expertise Locale Inégalée",
        description:
          "Basés à Saint-Hyacinthe, nos plombiers connaissent parfaitement les infrastructures locales, vous garantissant un service rapide et précis.",
      },
      {
        title: "Engagement pour Votre Satisfaction",
        description:
          "Votre satisfaction est notre priorité. Nous nous assurons que chaque intervention soit réalisée avec soin et professionnalisme.",
      },
    ],
    thirdSubTitle: "Expertise",
    thirdTitle:
      "Votre Partenaire de Confiance à Saint-Hyacinthe pour un Service de Qualité",
    thirdDescription:
      "À Saint-Hyacinthe, nous ne nous contentons pas de déboucher vos canalisations – nous offrons une expérience client exceptionnelle. Grâce à notre équipe de plombiers locaux, à des outils modernes, et à une approche centrée sur vos besoins, nous garantissons des résultats fiables et une intervention rapide, à chaque fois. Faites confiance à notre expertise pour un service professionnel, adapté et sans compromis.",
    faq: [
      {
        question: "Quels sont les signes d'un drain bouché dans ma maison?",
        answer:
          "À Saint-Hyacinthe, un drain bouché peut se manifester par des écoulements lents, des odeurs désagréables ou des bruits inhabituels dans vos canalisations. Si vous observez ces signes, il est recommandé de faire appel à un professionnel pour un débouchage de drain efficace.",
      },
      {
        question: "Le froid à Saint-Hyacinthe peut-il endommager mes drains?",
        answer:
          "Effectivement, les hivers rigoureux de Saint-Hyacinthe peuvent entraîner le gel des canalisations, provoquant des fissures ou des obstructions. Un entretien préventif, est essentiel pour assurer le bon fonctionnement de votre système de drainage pendant la saison froide.",
      },
      {
        question:
          "Les racines d'arbres peuvent-elles causer des obstructions dans les drains à Saint-Hyacinthe?",
        answer:
          "Oui, les racines d'arbres peuvent infiltrer les conduites souterraines, provoquant des blocages nécessitant un nettoyage de drain. Il est conseillé de surveiller la croissance des arbres à proximité de vos canalisations et de faire inspecter régulièrement votre système de drainage.",
      },
    ],
  },
  // Saint-Jean-sur-Richelieu
  "saint-jean-sur-richelieu": {
    title: "Débouchage Saint-Jean-sur-Richelieu | Urgence 24/7",
    metaDescription:
      "Service de débouchage à Saint-Jean-sur-Richelieu. Plombiers locaux disponibles 24h/7 pour drains, lavabos, et canalisations bouchées. Interventions rapides et solutions fiables. Appelez-nous dès maintenant!",
    cardTitle: "Saint-Jean-sur-Richelieu",
    cardImgUrl: getCityImage("saint-jean.webp"),
    altText: "Place public dans le centre-ville de Saint-Jean-sur-Richelieu",
    mainTitle: "Service d'urgence de Débouchage à Saint-Jean-sur-Richelieu",
    description:
      "À Saint-Jean-sur-Richelieu, nous offrons un service de débouchage rapide et fiable pour répondre à toutes vos urgences. Que ce soit pour un drain bloqué, une canalisation obstruée, ou des travaux de plomberie d’urgence, nos plombiers locaux sont disponibles 24h/7 pour intervenir avec professionnalisme et efficacité. Faites confiance à notre équipe pour des solutions durables adaptées à vos besoins.",

    secondSubTitle: "Engagement Local",
    secondTitle: "Un Service Fiable et Rapide à Saint-Jean-sur-Richelieu",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d89768.66365325073!2d-73.37210053666284!3d45.32315507618162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc9a20d03b56265%3A0x5040cadae4d44f0!2sSaint-Jean-sur-Richelieu%2C%20QC!5e0!3m2!1sen!2sca!4v1739836999121!5m2!1sen!2sca",
    secondDescription:
      "Nos plombiers locaux à Saint-Jean-sur-Richelieu offrent bien plus qu’un simple débouchage. Grâce à notre expertise et à des outils modernes, nous garantissons des solutions rapides et adaptées à chaque situation. Peu importe l’ampleur du problème, vous pouvez compter sur notre engagement pour une intervention professionnelle.",
    details: [
      {
        title: "Expertise Plomberie Locale",
        description:
          "Nos plombiers connaissent les particularités des infrastructures de Saint-Jean-sur-Richelieu, vous assurant un service adapté à vos besoins.",
      },
      {
        title: "Intervention Rapide et Flexible",
        description:
          "Nous sommes disponibles 24h/7 pour intervenir à tout moment, même en cas d’urgence imprévue.",
      },
      {
        title: "Résultats Garantis et Durables",
        description:
          "Chaque intervention est réalisée avec soin pour garantir des solutions fiables qui préviennent de futurs problèmes.",
      },
    ],
    thirdSubTitle: "Expertise",
    thirdTitle:
      "Pourquoi Nous Sommes Votre Meilleur Choix à Saint-Jean-sur-Richelieu",
    thirdDescription:
      "Chez Débouchage Solutions, nous comprenons que chaque urgence de plomberie est stressante. C’est pourquoi nous mettons l’accent sur un service client exceptionnel et des interventions rapides. Avec des plombiers expérimentés et des outils modernes, nous offrons un débouchage efficace et des solutions durables. Faites confiance à notre équipe locale pour résoudre vos problèmes de manière professionnelle et sans tracas.",
    faq: [
      {
        question:
          "Quelle est la fréquence recommandée pour le nettoyage de drain dans cette municipalité?",
        answer:
          "À Saint-Jean-sur-Richelieu, il est recommandé de procéder à un nettoyage de drain préventif tous les 1 à 2 ans, selon l'utilisation et l'âge de vos installations. Un entretien régulier permet de prévenir les obstructions et d'assurer une évacuation efficace des eaux usées.",
      },
      {
        question:
          "En situation d'urgence, quel est le délai d'attente pour une intervention de débouchage?",
        answer:
          "Nous comprenons l'urgence que représente un drain bouché. À Saint-Jean-sur-Richelieu, notre équipe s'efforce d'intervenir le plus vite possible, souvent la journée même, pour résoudre efficacement vos problèmes de drain bouché.",
      },
      {
        question:
          "Offrez-vous des services de débouchage pour les entreprises à Saint-Jean-sur-Richelieu?",
        answer:
          "Absolument, nous proposons des services adaptés aux besoins des entreprises locales. Que ce soit pour des restaurants, des commerces ou des bâtiments industriels, notre équipe est équipée pour gérer tous les types de débouchage de drain.",
      },
    ],
  },
  // Saint-Lambert
  "saint-lambert": {
    title: "Débouchage Saint-Lambert | Urgence 24/7",
    metaDescription:
      "Service de débouchage à Saint-Lambert. Plombiers locaux disponibles 24h/7 pour drains, canalisations et urgences de plomberie. Interventions rapides, fiables et adaptées à vos besoins. Appelez-nous dès maintenant!",
    cardTitle: "Saint-Lambert",
    cardImgUrl: getCityImage("saint-lambert.webp"),
    altText: "L'anneau de pierre situé au centre-ville de Saint-Lambert.",
    mainTitle: "Service d'urgence de Débouchage à Saint-Lambert",
    description:
      "À Saint-Lambert, notre priorité est de vous offrir un service de débouchage rapide, efficace, et adapté à vos urgences. Que vous fassiez face à un drain bloqué, une canalisation bouchée, ou des problèmes de plomberie inattendus, nos plombiers locaux interviennent avec des solutions modernes et durables. Disponible 24h/7, notre équipe est prête à répondre à vos besoins à tout moment.",

    secondSubTitle: "Engagement Local",
    secondTitle: "Un Service Rapide et Professionnel à Saint-Lambert",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22372.99502820027!2d-73.523585082692!3d45.49750828008172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc91adae3234715%3A0x272dfd44b50077bb!2sSaint-Lambert%2C%20QC!5e0!3m2!1sen!2sca!4v1739837046623!5m2!1sen!2sca",
    secondDescription:
      "Nos plombiers locaux à Saint-Lambert se spécialisent dans des interventions de débouchage rapides et fiables. Que vous ayez besoin d’une assistance immédiate ou d’une solution durable, notre équipe utilise des équipements modernes pour garantir votre satisfaction. Découvrez pourquoi tant de résidents de Saint-Lambert font appel à nos services.",
    details: [
      {
        title: "Assistance Immédiate pour Vos Urgences",
        description:
          "Notre disponibilité 24h/7 garantit une intervention rapide en cas de drains bloqués ou d’autres urgences de plomberie.",
      },
      {
        title: "Expertise Locale Reconnaissable",
        description:
          "En tant que plombiers basés à Saint-Lambert, nous comprenons les besoins spécifiques des résidents et offrons des solutions adaptées.",
      },
      {
        title: "Approche Moderne et Efficace",
        description:
          "Nous utilisons des outils de pointe et des techniques éprouvées pour garantir un débouchage précis et des résultats durables.",
      },
    ],
    thirdSubTitle: "Expertise",
    thirdTitle: "Pourquoi Choisir Nos Services de Débouchage à Saint-Lambert?",
    thirdDescription:
      "À Saint-Lambert, nous ne nous contentons pas de résoudre vos urgences de plomberie – nous offrons un service complet, centré sur la qualité et la satisfaction. Avec une équipe de plombiers locaux expérimentés, des équipements modernes, et une disponibilité 24h/7, nous assurons des interventions rapides, efficaces et adaptées à vos besoins. Faites-nous confiance pour un débouchage professionnel, réalisé avec soin et précision.",
    faq: [
      {
        question:
          "Quels signes indiquent un problème de drain dans une maison à Saint-Lambert?",
        answer:
          "Les signes courants sont des remontées d'eau dans la douche, une toilette qui fait des bulles, ou des flaques d'eau au sous-sol. Ce sont tous des symptômes indiquant que votre drain est probablement obstrué.",
      },
      {
        question:
          "Combien de temps faut-il attendre pour une situation d'urgence de débouchage à Saint-Lambert?",
        answer:
          "En cas d'urgence, nous faisons tout notre possible pour intervenir le jour même de votre appel. Tout dépend de la circulation et du moment de la journée, mais nous ne vous laissons jamais attendre bien longtemps.",
      },
      {
        question:
          "Mon système de drainage est-il vulnérable durant l'hiver à Saint-Lambert?",
        answer:
          "Oui. Comme un peu partout sur la Rive-Sud, le froid peut ralentir l’écoulement de l’eau et causer des dommages. Il est essentiel de protéger vos drains contre le gel, surtout dans les maisons plus anciennes.",
      },
    ],
  },
  // Saint-Mathieu-de-Beloeil
  "saint-mathieu-de-beloeil": {
    title: "Débouchage Saint-Mathieu-de-Beloeil | Urgence 24/7",
    metaDescription:
      "Service de débouchage à Saint-Mathieu-de-Beloeil. Plombiers locaux disponibles 24h/7 pour drains, canalisations, et urgences de plomberie. Interventions rapides et fiables. Appelez dès maintenant!",
    cardTitle: "Saint-Mathieu-de-Beloeil",
    cardImgUrl: getCityImage("saint-mathieu.webp"),
    altText:
      "Centre communautaire André-Guy Trudeau à Saint-Mathieu-de-Beloeil.",
    mainTitle: "Service d'urgence de Débouchage à Saint-Mathieu-de-Beloeil",
    description:
      "À Saint-Mathieu-de-Beloeil, notre équipe de plombiers locaux s’engage à offrir des solutions rapides et fiables pour tous vos besoins en débouchage. Que vous ayez un drain obstrué, une canalisation bouchée, ou une urgence de plomberie, nous intervenons avec professionnalisme, des outils modernes, et une approche adaptée à vos besoins. Disponible 24h/7, notre service est conçu pour résoudre vos problèmes rapidement et efficacement.",

    secondSubTitle: "Engagement Local",
    secondTitle:
      "Des Services de Débouchage Fiables et Personnalisés à Saint-Mathieu-de-Beloeil",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d44659.29477130224!2d-73.29149044822366!3d45.60650564199477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc8ffc388da21db%3A0x3bc5f008300216a1!2sSaint-Mathieu-de-Beloeil%2C%20QC!5e0!3m2!1sen!2sca!4v1739837098984!5m2!1sen!2sca",
    secondDescription:
      "Nos plombiers locaux à Saint-Mathieu-de-Beloeil offrent bien plus qu’un simple débouchage. Avec une expertise reconnue et des équipements modernes, nous proposons des solutions sur mesure, adaptées à chaque situation. Faites confiance à notre équipe pour un service rapide, fiable, et conçu pour durer.",
    details: [
      {
        title: "Rapidité et Disponibilité 24h/7",
        description:
          "En cas d’urgence, nos plombiers interviennent à tout moment pour résoudre vos problèmes de drains ou de canalisations bouchées.",
      },
      {
        title: "Solutions Adaptées à Vos Besoins",
        description:
          "Nous analysons chaque situation pour proposer des méthodes de débouchage efficaces, tout en respectant vos installations.",
      },
      {
        title: "Expertise Locale et Équipements Modernes",
        description:
          "Nos plombiers à Saint-Mathieu-de-Beloeil utilisent des outils de pointe pour garantir des interventions rapides et durables.",
      },
    ],
    thirdSubTitle: "Expertise",
    thirdTitle:
      "Pourquoi Faire Confiance à Nos Services de Débouchage à Saint-Mathieu-de-Beloeil?",
    thirdDescription:
      "À Saint-Mathieu-de-Beloeil, nous mettons un point d’honneur à offrir des interventions rapides et efficaces, tout en priorisant votre satisfaction. Nos plombiers locaux expérimentés utilisent des techniques modernes pour résoudre vos urgences avec précision et professionnalisme. En choisissant nos services, vous bénéficiez d’une expertise fiable, d’une disponibilité 24h/7, et de solutions conçues pour prévenir de futurs problèmes. Faites confiance à notre équipe pour des résultats durables et une tranquillité d’esprit garantie.",
    faq: [
      {
        question:
          "Est-ce que les hivers peuvent être durs pour mes drains à Saint-Mathieu-de-Beloeil?",
        answer:
          "Oui, les hivers qu’on connaît à Saint-Mathieu-de-Beloeil peuvent nuire à vos drains, surtout si vos canalisations sont mal isolées ou exposées. Le gel peut bloquer l’écoulement ou provoquer des fissures, particulièrement dans les propriétés plus anciennes.",
      },
      {
        question:
          "En cas d’urgence pour un drain bloqué, pouvez-vous intervenir dans les 48 heures?",
        answer:
          "Absolument! Lors d’une urgence, nous faisons tout notre possible pour intervenir rapidement, généralement dans la même journée. Les délais peuvent varier selon certains facteurs, mais nous priorisons toujours les situations urgentes afin que votre problème soit réglé le plus vite possible.",
      },
      {
        question: "Comment déterminer si un drain est obstrué ou restreint?",
        answer:
          "Une évacuation lente, des bruits de gargouillement dans les tuyaux ou des odeurs désagréables sont souvent des signes d’un drain bouché. Si vous habitez à Saint-Mathieu-de-Beloeil et remarquez ce genre de symptômes, il vaut mieux agir rapidement pour éviter un refoulement.",
      },
    ],
  },
  // Sainte-Catherine
  "sainte-catherine": {
    title: "Débouchage Sainte-Catherine | Urgence 24/7",
    metaDescription:
      "Service de débouchage à Sainte-Catherine. Plombiers locaux disponibles 24h/7 pour drains, canalisations, et urgences de plomberie. Solutions rapides et durables. Appelez dès maintenant!",
    cardTitle: "Sainte-Catherine",
    cardImgUrl: getCityImage("sainte-catherine.webp"),
    altText: "Vue panoramique de Sainte-Catherine",
    mainTitle: "Service d'urgence de Débouchage à Sainte-Catherine",
    description:
      "À Sainte-Catherine, nous offrons des services de débouchage rapides, fiables, et adaptés à vos besoins. Que ce soit pour un drain bloqué, une canalisation obstruée, ou une urgence de plomberie, nos plombiers locaux sont équipés pour intervenir à tout moment. Avec une disponibilité 24h/7 et des solutions modernes, nous garantissons un service professionnel pour remettre vos installations en parfait état.",

    secondSubTitle: "Engagement Local",
    secondTitle: "Un Service Rapide et Fiable à Sainte-Catherine",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22410.637769835503!2d-73.59125553293995!3d45.40269028059784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc9121fb036bcd7%3A0xb2365e3cb1b203bc!2sSainte-Catherine%2C%20QC!5e0!3m2!1sen!2sca!4v1739837164889!5m2!1sen!2sca",
    secondDescription:
      "Nos plombiers à Sainte-Catherine offrent des interventions de débouchage sur mesure pour répondre à vos urgences de plomberie. Grâce à des outils modernes et une expertise locale, nous assurons des résultats durables et un service de qualité à chaque intervention.",
    details: [
      {
        title: "Interventions Rapides 24h/7",
        description:
          "Nos plombiers locaux sont disponibles jour et nuit pour résoudre vos urgences de drains et de canalisations bouchées.",
      },
      {
        title: "Solutions Modernes et Précises",
        description:
          "Nous utilisons des équipements avancés pour diagnostiquer et résoudre vos problèmes efficacement, sans endommager vos installations.",
      },
      {
        title: "Expertise Locale Fiable",
        description:
          "Basés à Sainte-Catherine, nous comprenons les besoins spécifiques des résidents, ce qui nous permet d’offrir des solutions adaptées et personnalisées.",
      },
    ],
    thirdSubTitle: "Expertise",
    thirdTitle: "Pourquoi Faire Appel à Nos Services à Sainte-Catherine?",
    thirdDescription:
      "À Sainte-Catherine, nous nous engageons à offrir un service de débouchage qui va au-delà des attentes. Avec une équipe de plombiers locaux expérimentés, nous intervenons rapidement pour résoudre vos urgences de plomberie avec précision et efficacité. Notre priorité est de garantir votre satisfaction en fournissant des solutions durables, adaptées à vos besoins spécifiques. Faites confiance à nos experts pour un service professionnel et sans compromis.",
    faq: [
      {
        question:
          "Comment les hivers peuvent-ils endommager mes drains à Sainte-Catherine?",
        answer:
          "Les hivers rigoureux à Sainte-Catherine peuvent provoquer des fissures ou bloquer l'écoulement en raison du gel, surtout si vos canalisations sont peu isolées ou exposées. Les maisons plus anciennes peuvent également être affectées.",
      },
      {
        question:
          "Quel est un exemple de délai d'intervention pour une urgence de drain bouché?",
        answer:
          "Un exemple typique peut être une intervention le jour même. Dans tous les cas possibles, nous souhaitons résoudre vos problèmes de drain obstrué dans les 48 heures suivant votre appel. Votre retour à la normale est notre priorité.",
      },
      {
        question:
          "Quelle indication confirme qu'un drain est bouché ou restreint?",
        answer:
          "Les signes fréquents d'un drain bouché sont souvent une évacuation lente, des bruits de gargouillement dans les canalisations ou des odeurs fortes et désagréables. À Sainte-Catherine, il est préférable d'agir rapidement pour éviter tout refoulement.",
      },
    ],
  },
  // Sainte-Julie
  "sainte-julie": {
    title: "Débouchage Sainte-Julie | Urgence 24/7",
    metaDescription:
      "Service de débouchage à Saint-Julie. Plombiers locaux disponibles 24h/7 pour drains, canalisations, et urgences de plomberie. Interventions rapides et fiables. Appelez dès maintenant!",
    cardTitle: "Sainte-Julie",
    cardImgUrl: getCityImage("saint-julie.webp"),
    altText: "Église et parc de coin de rue à Sainte-Julie",
    mainTitle: "Service d'urgence de Débouchage à Sainte-Julie",
    description:
      "À Saint-Julie, notre équipe de plombiers locaux offre des solutions rapides et fiables pour tous vos besoins en débouchage. Que vous ayez un drain bloqué, une canalisation bouchée, ou une urgence de plomberie, nous intervenons avec des outils modernes et une expertise reconnue. Disponible 24h/7, notre service garantit des résultats durables et une satisfaction totale. Appelez dès maintenant pour une intervention efficace.",

    secondSubTitle: "Engagement Local",
    secondTitle: "Un Service de Débouchage Fiable à Saint-Julie",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d44661.71498305123!2d-73.3681790482558!3d45.60346559523229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc8fe077ac0f067%3A0x5040cadae4d4690!2sSainte-Julie%2C%20QC!5e0!3m2!1sen!2sca!4v1739837269376!5m2!1sen!2sca",
    secondDescription:
      "Nos plombiers locaux à Saint-Julie offrent bien plus qu’un simple débouchage. Avec une expertise approfondie et des équipements modernes, nous proposons des solutions adaptées à vos urgences. Faites confiance à notre équipe pour un service rapide, efficace, et conçu pour durer.",
    details: [
      {
        title: "Assistance Immédiate 24h/7",
        description:
          "Nous sommes disponibles à tout moment pour résoudre vos urgences de plomberie rapidement et efficacement.",
      },
      {
        title: "Équipements de Pointe",
        description:
          "Nos outils modernes permettent de diagnostiquer et de déboucher vos installations sans causer de dommages.",
      },
      {
        title: "Expertise Locale et Personnalisée",
        description:
          "Nos plombiers à Saint-Julie comprennent les besoins spécifiques de la région et proposent des solutions sur mesure.",
      },
    ],
    thirdSubTitle: "Expertise",
    thirdTitle: "Pourquoi Choisir Nos Services à Saint-Julie?",
    thirdDescription:
      "À Saint-Julie, nous nous engageons à fournir un service de débouchage qui allie rapidité, professionnalisme, et résultats durables. Nos plombiers locaux expérimentés interviennent avec des outils modernes et une approche axée sur votre satisfaction. Que vous fassiez face à une urgence de plomberie ou que vous cherchiez des solutions préventives, nous sommes là pour répondre à vos besoins avec précision et efficacité. Faites confiance à notre équipe pour des interventions fiables et sans tracas.",
    faq: [
      {
        question:
          "Combien de fois par an faut-il entretenir et inspecter mon système de drainage à Sainte-Julie?",
        answer:
          "Pour les maisons de Sainte-Julie, il est recommandé d’entretenir et d’inspecter les drains au minimum une fois par an. Évidemment, si votre maison a plus de 20 ans ou est entourée d’arbres, une vérification plus fréquente peut prévenir des blocages coûteux.",
      },
      {
        question:
          "Est-ce que les changements de saisons peuvent être difficiles pour les systèmes de drainage à Sainte-Julie?",
        answer:
          "Oui, les variations de gel et de dégel peuvent être dures pour les systèmes de drainage, surtout si les canalisations sont exposées au froid. Une bonne préparation hivernale peut réduire les risques de blocage ou de fissures.",
      },
      {
        question: "Êtes-vous disponibles pour des urgences même les week-ends?",
        answer:
          "Absolument! Nos services de débouchage à Sainte-Julie sont disponibles 7 jours sur 7, y compris les week-ends. Que ce soit pour une urgence un samedi ou un simple entretien le dimanche matin, notre équipe est prête à intervenir efficacement.",
      },
    ],
  },
  // Salaberry-de-Valleyfield
  "salaberry-de-valleyfield": {
    title: "Débouchage Salaberry-de-Valleyfield | Urgence 24/7",
    metaDescription:
      "Service de débouchage à Salaberry-de-Valleyfield. Plombiers locaux disponibles 24h/7 pour drains, canalisations, et urgences de plomberie. Interventions rapides et solutions fiables. Contactez-nous dès maintenant!",
    cardTitle: "Salaberry-de-Valleyfield",
    cardImgUrl: getCityImage("valley-og.webp"),
    altText: "Terrasses et marina à Salaberry-de-Valleyfield.",
    mainTitle: "Service d'urgence de Débouchage à Salaberry-de-Valleyfield",
    description:
      "À Salaberry-de-Valleyfield, nous sommes spécialisés dans les interventions de débouchage rapides et professionnelles. Que ce soit pour un drain obstrué, une canalisation bouchée, ou une urgence de plomberie, notre équipe de plombiers locaux est équipée pour répondre à vos besoins. Disponible 24h/7, nous utilisons des techniques modernes pour offrir des résultats durables et garantir votre satisfaction. Contactez-nous dès maintenant pour une assistance immédiate.",

    secondSubTitle: "Engagement Local",
    secondTitle: "Un Service de Débouchage Adapté à Salaberry-de-Valleyfield",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d89853.25508736797!2d-74.17191358674006!3d45.26974472046603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc94f8e8f7e027d%3A0x220bc05cd882fa7f!2sSalaberry-de-Valleyfield%2C%20QC!5e0!3m2!1sen!2sca!4v1739837336817!5m2!1sen!2sca",
    secondDescription:
      "Nos plombiers locaux à Salaberry-de-Valleyfield offrent des solutions sur mesure pour tous vos besoins en débouchage. Que ce soit une intervention d’urgence ou un entretien préventif, nous utilisons des équipements de pointe pour garantir des résultats efficaces et durables.",
    details: [
      {
        title: "Intervention Rapide 24h/7",
        description:
          "Nos plombiers sont disponibles jour et nuit pour répondre à vos urgences de drains et de canalisations bouchées.",
      },
      {
        title: "Solutions Modernes et Durables",
        description:
          "Nous utilisons des techniques avancées pour résoudre vos problèmes efficacement tout en préservant vos installations.",
      },
      {
        title: "Expertise Locale Fiable",
        description:
          "Basés à Salaberry-de-Valleyfield, nos plombiers comprennent les besoins spécifiques de la région et offrent un service adapté.",
      },
    ],
    thirdSubTitle: "Expertise",
    thirdTitle:
      "Pourquoi Nous Choisir pour Vos Urgences à Salaberry-de-Valleyfield?",
    thirdDescription:
      "Chez Débouchage Solutions, nous combinons expertise locale et professionnalisme pour offrir un service de débouchage exceptionnel à Salaberry-de-Valleyfield. Nos plombiers expérimentés sont disponibles 24h/7 pour intervenir rapidement et efficacement. Avec des outils modernes et une approche centrée sur votre satisfaction, nous nous engageons à résoudre vos problèmes de plomberie tout en garantissant des solutions durables et adaptées. Faites confiance à notre équipe pour une intervention sans stress et un résultat impeccable.",
    faq: [
      {
        question:
          "Dans la ville de Salaberry-de-Valleyfield, mon système de drainage a-t-il besoin d’un entretien régulier?",
        answer:
          "Les infiltrations d’eau dans les sous-sols sont fréquentes à Salaberry-de-Valleyfield. Nous recommandons d’inspecter et d’entretenir votre système de drainage chaque année. Si vous avez une maison ancienne entourée d’arbres, des vérifications plus fréquentes peuvent prévenir des blocages coûteux.",
      },
      {
        question:
          "Les changements de saisons ont-ils un impact sur les systèmes de drainage?",
        answer:
          "Oui, les variations de température, comme le gel et le dégel, peuvent être néfastes pour les systèmes de drainage, surtout lorsque les canalisations sont mal isolées. Une bonne préparation hivernale peut réduire les risques de blocages ou de fissures.",
      },
      {
        question:
          "Quel est le temps d’attente pour une intervention d’urgence ou de maintenance?",
        answer:
          "En général, nous faisons tout notre possible pour intervenir dans les 48 heures ou moins. Nous sommes conscients que ces situations d’urgence sont très désagréables et doivent être réglées rapidement. Pour une maintenance, vous pouvez fixer un rendez-vous selon vos disponibilités.",
      },
    ],
  },
  // Varennes
  varennes: {
    title: "Débouchage Varennes | Urgence 24/7",
    metaDescription:
      "Service de débouchage à Varennes. Plombiers locaux disponibles 24h/7 pour drains, canalisations, et urgences de plomberie. Interventions rapides et solutions fiables. Contactez-nous dès aujourd’hui!",
    cardTitle: "Varennes",
    cardImgUrl: getCityImage("varennes.webp"),
    altText: "Entrée de la ville de Varennes sur la route 132.",
    mainTitle: "Service d'urgence de Débouchage à Varennes",
    description:
      "À Varennes, notre équipe de plombiers expérimentés est spécialisée dans les interventions rapides et efficaces pour tous vos besoins en débouchage. Que ce soit pour un drain bloqué, une canalisation bouchée, ou une urgence de plomberie, nous utilisons des équipements modernes pour garantir des solutions durables. Disponible 24h/7, nous sommes prêts à intervenir à tout moment pour résoudre vos problèmes rapidement et efficacement.",

    secondSubTitle: "Engagement Local",
    secondTitle: "Des Services de Débouchage Rapides et Fiables à Varennes",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d89207.6844412683!2d-73.48767557148726!3d45.6761168282593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc8e4a217e29db1%3A0x69de7419a3ee7812!2sVarennes%2C%20QC!5e0!3m2!1sen!2sca!4v1739837482592!5m2!1sen!2sca",
    secondDescription:
      "Nos plombiers locaux à Varennes s’engagent à offrir un service de débouchage qui allie rapidité, efficacité, et expertise. Grâce à des outils modernes et une connaissance approfondie des infrastructures locales, nous proposons des solutions adaptées à vos besoins spécifiques.",
    details: [
      {
        title: "Intervention Rapide 24h/7",
        description:
          "Disponibles jour et nuit, nos plombiers interviennent immédiatement pour résoudre vos urgences de drains ou de canalisations bouchées.",
      },
      {
        title: "Équipements à la Pointe de la Technologie",
        description:
          "Nous utilisons des outils avancés pour diagnostiquer et déboucher vos installations avec précision et sans dommage.",
      },
      {
        title: "Expertise Locale et Personnalisée",
        description:
          "Basés à Varennes, nos plombiers comprennent les besoins spécifiques de votre région et offrent des solutions sur mesure.",
      },
    ],
    thirdSubTitle: "Expertise",
    thirdTitle:
      "Pourquoi Faire Confiance à Nos Services de Débouchage à Varennes?",
    thirdDescription:
      "À Varennes, nous nous engageons à offrir bien plus qu’un simple service de débouchage. Nos plombiers locaux expérimentés interviennent rapidement et utilisent des techniques modernes pour garantir des résultats fiables et durables. Que vous soyez confronté à une urgence ou à un besoin d’entretien préventif, notre priorité est votre satisfaction. Faites confiance à notre expertise et profitez d’un service professionnel, adapté à vos besoins, et sans tracas.",
    faq: [
      {
        question:
          "Est-il nécessaire d'entretenir mon système de drainage régulièrement?",
        answer:
          "À Varennes, les variations saisonnières du niveau du fleuve Saint-Laurent et les sols argileux peuvent augmenter les risques d’infiltrations d’eau. Il est conseillé d’inspecter et d’entretenir votre système de drainage au moins une fois par année. Une inspection plus fréquente est recommandée si votre maison est ancienne ou entourée d’arbres.",
      },
      {
        question:
          "À quel point les variations de température peuvent-elles affecter le bon fonctionnement de mon système de drainage?",
        answer:
          "Les variations de température, comme le gel et le dégel, peuvent provoquer des blocages ou des fissures, surtout si les canalisations sont mal isolées. Il est fortement recommandé de procéder à une inspection avant l’hiver afin de réduire les risques.",
      },
      {
        question:
          "Quels sont les signes fréquents qui indiquent un drain bloqué ou qui ne fonctionne pas adéquatement?",
        answer:
          "Un drain bouché se manifeste fréquemment par des odeurs inhabituelles, un écoulement lent des eaux et des bruits de gargouillement. Si vous remarquez un ou plusieurs de ces signes à Varennes, mieux vaut intervenir sans tarder pour éviter un dégât d’eau.",
      },
    ],
  },
  // Beloeil
  beloeil: {
    title: "Débouchage Beloeil | Urgence 24/7",
    metaDescription:
      "Service de débouchage à Beloeil. Plombiers locaux disponibles 24h/7 pour drains, canalisations, et urgences de plomberie. Solutions rapides, fiables et durables. Appelez dès maintenant!",
    cardTitle: "Beloeil",
    cardImgUrl: getCityImage("beloeil.webp"),
    altText:
      "Centre-ville historique de Belœil au Québec vu de Mont-Saint-Hilaire.",
    mainTitle: "Service d'urgence de Débouchage à Beloeil",
    description:
      "À Beloeil, notre équipe de plombiers qualifiés est prête à intervenir rapidement pour tous vos besoins en débouchage. Que ce soit pour un drain bloqué, une canalisation bouchée, ou une urgence de plomberie, nous utilisons des équipements modernes pour garantir des solutions durables et efficaces. Avec une disponibilité 24h/7, nous vous assurons une intervention rapide et professionnelle à tout moment.",

    secondSubTitle: "Engagement Local",
    secondTitle: "Des Solutions de Débouchage Rapides et Fiables à Beloeil",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d44672.869951840665!2d-73.26613589840404!3d45.58945171015543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc9aada71cbdde9%3A0x89fbc914ab406ddd!2sBeloeil%2C%20QC!5e0!3m2!1sen!2sca!4v1739837526267!5m2!1sen!2sca",
    secondDescription:
      "Nos plombiers à Beloeil offrent des services de débouchage adaptés à vos urgences et besoins spécifiques. Grâce à notre expertise locale et à des outils modernes, nous assurons des interventions rapides, efficaces, et conçues pour durer.",
    details: [
      {
        title: "Assistance Immédiate 24h/7",
        description:
          "Notre équipe est disponible à tout moment pour répondre à vos urgences de plomberie, qu’il s’agisse de drains bloqués ou de canalisations bouchées.",
      },
      {
        title: "Outils Modernes pour un Service Précis",
        description:
          "Nous utilisons des équipements de pointe pour diagnostiquer et déboucher vos installations en toute sécurité.",
      },
      {
        title: "Expertise Locale Fiable",
        description:
          "Basés à Beloeil, nous comprenons les besoins spécifiques de la région et offrons des solutions sur mesure pour chaque situation.",
      },
    ],
    thirdSubTitle: "Expertise",
    thirdTitle: "Des Plombiers de Confiance pour Vos Besoins à Beloeil",
    thirdDescription:
      "À Beloeil, notre priorité est de résoudre vos urgences de plomberie rapidement et efficacement. Avec des plombiers locaux qualifiés et des outils à la pointe de la technologie, nous assurons des interventions fiables et adaptées. Que vous ayez besoin d’un dépannage urgent ou d’une solution durable, notre équipe s’engage à offrir un service sans compromis et une tranquillité d’esprit totale.",
    faq: [
      {
        question:
          "Dois-je planifier des inspections régulières de mon système de drainage à Beloeil?",
        answer:
          "En raison des sols argileux et des fluctuations du niveau de la rivière Richelieu, les risques d’infiltration d’eau peuvent augmenter considérablement. Il est donc recommandé de procéder à une inspection annuelle, avec une fréquence accrue pour les maisons plus anciennes ou celles entourées d’arbres.",
      },
      {
        question:
          "Les conditions climatiques variantes à Beloeil peuvent-elles nuire au bon fonctionnement de mon système de drainage?",
        answer:
          "Les cycles de gel et de dégel à Beloeil peuvent provoquer l’expansion et la contraction du sol, créant ainsi une pression sur les canalisations. Grâce à une isolation adéquate et une inspection pré-hivernale, ces problèmes peuvent être évités.",
      },
      {
        question:
          "Dans le cas d'une intervention pour les services de plomberie, urgents ou planifiés, quels sont les délais moyens?",
        answer:
          "À Beloeil, nous prenons les urgences au sérieux et les traitons en priorité. Nous faisons tout notre possible pour intervenir dans les 48 heures, voire plus rapidement. Pour les entretiens et les maintenances, nous pouvons fixer un rendez-vous selon vos disponibilités. Nous sommes là pour vous, 7 jours sur 7.",
      },
    ],
  },
  // Boucherville
  boucherville: {
    title: "Débouchage Boucherville | Urgence 24/7",
    metaDescription:
      "Service de débouchage à Boucherville. Plombiers locaux disponibles 24h/7 pour drains, canalisations, et urgences de plomberie. Interventions rapides et solutions sur mesure. Appelez dès maintenant!",
    cardTitle: "Boucherville",
    cardImgUrl: getCityImage("boucherville.webp"),
    altText: "La Résidence Des Berges à Boucherville.",
    mainTitle: "Service d'urgence de Débouchage à Boucherville",
    description:
      "À Boucherville, une ville reconnue pour son cadre de vie exceptionnel et ses infrastructures résidentielles modernes, notre équipe de plombiers locaux intervient rapidement pour tous vos besoins en débouchage. Que vous ayez un drain obstrué, une canalisation bouchée, ou une urgence de plomberie, nous offrons des solutions adaptées aux maisons et entreprises de la région. Disponible 24h/7, notre service garantit des résultats durables et une satisfaction totale.",

    secondSubTitle: "Engagement Local",
    secondTitle: "Des Services de Débouchage Pensés pour Boucherville",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d89334.03422637309!2d-73.51278562490613!3d45.5968049963261!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc8e2a7003fbbf7%3A0xae598aa83f2855fc!2sBoucherville%2C%20QC!5e0!3m2!1sen!2sca!4v1739837574009!5m2!1sen!2sca",
    secondDescription:
      "Que vous soyez propriétaire d’une maison ou responsable d’une entreprise à Boucherville, nos plombiers locaux comprennent les besoins spécifiques de votre région. Avec des outils modernes et une expertise reconnue, nous intervenons rapidement pour assurer le bon fonctionnement de vos installations.",
    details: [
      {
        title: "Assistance Immédiate pour Vos Urgences",
        description:
          "Disponible 24h/7, notre équipe intervient rapidement pour déboucher vos drains ou canalisations, peu importe l’heure ou le jour.",
      },
      {
        title: "Solutions Adaptées aux Résidences et Entreprises",
        description:
          "Nous proposons des interventions sur mesure pour répondre aux besoins des foyers et des espaces commerciaux à Boucherville.",
      },
      {
        title: "Équipements Modernes et Méthodes Fiables",
        description:
          "Nos outils avancés permettent des diagnostics précis et des débouchages sans endommager vos installations.",
      },
    ],
    thirdSubTitle: "Expertise",
    thirdTitle:
      "Un Service de Confiance pour les Résidents et Entreprises de Boucherville",
    thirdDescription:
      "À Boucherville, nous comprenons l’importance d’un service rapide et fiable pour maintenir le confort des résidents et le bon fonctionnement des entreprises locales. Nos plombiers expérimentés, basés dans la région, interviennent avec précision et professionnalisme pour répondre à toutes vos urgences de débouchage. Avec une disponibilité 24h/7 et une approche centrée sur vos besoins, nous garantissons des solutions durables adaptées à la qualité de vie unique de Boucherville.",
    faq: [
      {
        question:
          "Est-ce qu’il y a des avantages à planifier un entretien préventif de mon système de drainage à Boucherville?",
        answer:
          "En raison des sols argileux, de la proximité du fleuve Saint-Laurent et d’autres conditions climatiques, un entretien annuel est essentiel. Une inspection régulière peut également permettre de détecter et de prévenir des problèmes potentiels comme les infiltrations d’eau, surtout pour les habitations situées près du fleuve ou dans des zones boisées.",
      },
      {
        question:
          "Comment savoir si mon système de drainage a besoin d’une intervention ou d’une maintenance à Boucherville?",
        answer:
          "Les signes courants sont souvent des refoulements fréquents dans vos éviers, douches ou toilettes, surtout après de fortes pluies. À Boucherville, il est souvent recommandé de procéder à une intervention préventive pour éviter les inondations ou les dommages structurels.",
      },
      {
        question:
          "Quels sont les délais d’attente pour une intervention d’urgence ou un entretien préventif?",
        answer:
          "À Boucherville, nous sommes conscients qu’un problème de drainage ou de plomberie représente une situation d’urgence qui doit être réglée dans les 48 heures suivant votre appel. Pour les entretiens préventifs, nous pouvons planifier une visite selon vos disponibilités. Nous sommes disponibles 24 heures sur 24, 7 jours sur 7, y compris les week-ends.",
      },
    ],
  },
  // Brossard
  brossard: {
    title: "Débouchage Brossard | Urgence 24/7",
    metaDescription:
      "Service de débouchage à Brossard. Plombiers locaux disponibles 24h/7 pour urgences résidentielles et commerciales. Interventions rapides, efficaces et adaptées à vos besoins. Contactez-nous dès aujourd’hui!",
    cardTitle: "Brossard",
    cardImgUrl: getCityImage("brossard.webp"),
    altText: "Hôtel Alt situé dans le Quartier Dix30 à Brossard.",
    mainTitle: "Service d'urgence de Débouchage à Brossard",
    description:
      "À Brossard, une ville dynamique reconnue pour ses quartiers résidentiels et son centre commercial animé, notre équipe de plombiers locaux intervient rapidement pour tous vos besoins en débouchage. Que ce soit pour un drain obstrué, une canalisation bouchée, ou une urgence de plomberie, nous utilisons des techniques modernes pour garantir des résultats efficaces et durables. Avec une disponibilité 24h/7, nous sommes prêts à répondre à vos urgences, à tout moment.",

    secondSubTitle: "Engagement Local",
    secondTitle:
      "Un Service Fiable et Adapté aux Résidents et Commerçants de Brossard",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d44784.343803376025!2d-73.49156134988577!3d45.44922310938198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc90589d64dba89%3A0xda6c733c59f64a6f!2sBrossard%2C%20QC!5e0!3m2!1sen!2sca!4v1739837696770!5m2!1sen!2sca",
    secondDescription:
      "Que vous habitiez dans un quartier résidentiel ou que vous gériez une entreprise à Brossard, nos plombiers locaux comprennent vos besoins spécifiques. Avec une expertise reconnue et des équipements modernes, nous proposons des solutions efficaces pour garantir le bon fonctionnement de vos installations.",
    details: [
      {
        title: "Assistance 24h/7 pour Vos Urgences",
        description:
          "Notre équipe est disponible à tout moment pour résoudre vos problèmes de drains et canalisations bouchées, rapidement et efficacement.",
      },
      {
        title: "Interventions Personnalisées pour Brossard",
        description:
          "Nous adaptons nos méthodes aux infrastructures résidentielles et commerciales pour offrir des résultats précis et durables.",
      },
      {
        title: "Solutions Écoresponsables et Efficaces",
        description:
          "Nos techniques privilégient des méthodes respectueuses de l’environnement pour garantir un débouchage sûr et efficace.",
      },
    ],
    thirdSubTitle: "Expertise",
    thirdTitle: "Des Experts Locaux à Votre Service à Brossard",
    thirdDescription:
      "À Brossard, nous comprenons l’importance d’un service rapide et fiable, que ce soit pour vos urgences résidentielles ou commerciales. Nos plombiers locaux expérimentés interviennent avec des techniques modernes pour garantir des résultats précis et durables. Nous sommes fiers de soutenir la communauté dynamique de Brossard avec un service de débouchage adapté, disponible 24h/7 pour répondre à tous vos besoins. Faites confiance à notre équipe pour une expérience sans stress et des solutions sur mesure.",
    faq: [
      {
        question:
          "Dois-je planifier une inspection annuelle pour mon système de drainage à Brossard?",
        answer:
          "Oui! En raison des conditions climatiques et du type de sol à Brossard, une inspection et un entretien annuels du système de drainage sont nécessaires. Cela permet de détecter et de prévenir les problèmes potentiels, notamment pour les résidences situées près du fleuve ou dans des zones boisées.",
      },
      {
        question:
          "Quels sont les effets des variations climatiques sur mon système de drainage?",
        answer:
          "Les variations de température à Brossard provoquent souvent l’expansion et la contraction du sol, ce qui exerce une pression sur les canalisations. Cela entraîne fréquemment des fissures ou des ruptures, pouvant affecter l’évacuation des eaux dans le système de drainage. Nous conseillons de faire inspecter votre système avant l’hiver pour prévenir ces problèmes.",
      },
      {
        question:
          "Quels sont les délais habituels pour un entretien préventif ou une intervention d’urgence?",
        answer:
          "Nos délais d’intervention varient selon la gravité de la situation. Pour les urgences, nous faisons tout notre possible pour intervenir le jour même ou, au plus tard, dans les 48 heures. Pour un entretien préventif, nous planifions la visite selon vos disponibilités, que ce soit en semaine ou le week-end.",
      },
    ],
  },
  // Candiac
  candiac: {
    title: "Débouchage Candiac | Urgence 24/7",
    metaDescription:
      "Service de débouchage à Candiac. Plombiers locaux disponibles 24h/7 pour urgences résidentielles et commerciales. Solutions rapides, fiables et adaptées à vos besoins. Appelez dès maintenant!",
    cardTitle: "Candiac",
    cardImgUrl: getCityImage("candiac.webp"),
    altText: "L'Hôtel de ville à Candiac",
    mainTitle: "Service d'urgence de Débouchage à Candiac",
    description:
      "À Candiac, une ville reconnue pour ses quartiers résidentiels paisibles et ses espaces verts, notre équipe de plombiers locaux expérimentés intervient rapidement pour tous vos besoins en débouchage. Que vous soyez confronté à un drain bloqué, une canalisation bouchée, ou une urgence de plomberie, nous utilisons des outils modernes pour garantir des résultats fiables et durables. Disponible 24h/7, nous sommes là pour répondre efficacement à vos urgences à tout moment.",

    secondSubTitle: "Engagement Local",
    secondTitle: "Des Services de Débouchage Adaptés aux Besoins de Candiac",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d44842.07842420169!2d-73.55127355065297!3d45.37646288673875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc90c2b832375a3%3A0x77f6d97a32f4674b!2sCandiac%2C%20QC!5e0!3m2!1sen!2sca!4v1739837773560!5m2!1sen!2sca",
    secondDescription:
      "Nos plombiers locaux à Candiac comprennent l’importance d’un service rapide et fiable pour maintenir le confort de votre maison ou le bon fonctionnement de votre entreprise. Grâce à une expertise reconnue et des outils modernes, nous proposons des solutions sur mesure pour répondre efficacement à vos besoins.",
    details: [
      {
        title: "Assistance 24h/7 pour Vos Urgences",
        description:
          "Notre équipe est disponible jour et nuit pour intervenir rapidement en cas de drains obstrués ou de canalisations bouchées.",
      },
      {
        title: "Solutions Durables et Personnalisées",
        description:
          "Chaque intervention est adaptée aux spécificités de votre maison ou entreprise à Candiac, avec des résultats fiables qui durent.",
      },
      {
        title: "Expertise Locale et Équipements de Pointe",
        description:
          "Basés à Candiac, nos plombiers utilisent des techniques modernes pour garantir un débouchage précis et sans dommages.",
      },
    ],
    thirdSubTitle: "Expertise",
    thirdTitle:
      "Votre Partenaire de Confiance à Candiac pour un Service de Qualité",
    thirdDescription:
      "À Candiac, nous comprenons que chaque urgence de plomberie peut perturber votre quotidien ou vos activités. Nos plombiers locaux expérimentés sont fiers de servir la communauté avec des solutions rapides, fiables, et adaptées à vos besoins spécifiques. Disponible 24h/7, notre équipe s’engage à offrir un service professionnel qui allie expertise et satisfaction client. Faites confiance à notre savoir-faire pour un débouchage sans stress et des résultats durables.",
    faq: [
      {
        question:
          "Quels sont les signes qu’un drain français ne fonctionne pas adéquatement?",
        answer:
          "Les signes fréquents d’un drain français défectueux incluent des infiltrations d’eau intermittentes, surtout après de fortes pluies, ainsi que la présence de moisissures sur les murs du sous-sol. À Candiac, ces problèmes sont souvent causés par une accumulation de sédiments ou de racines dans le drain, ce qui nécessite généralement un nettoyage ou une inspection professionnelle.",
      },
      {
        question:
          "La saison hivernale de Candiac a-t-elle un effet sur les systèmes de drainage des résidences?",
        answer:
          "Oui, le gel peut provoquer la formation de glace dans les canalisations, bloquant ainsi l’écoulement de l’eau. À Candiac, où les hivers peuvent être rigoureux, il est essentiel de s’assurer que les drains sont dégagés et que les conduites sont bien isolées afin de prévenir ces blocages.",
      },
      {
        question:
          "Quels sont les délais d’attente pour les interventions d’urgence ou une inspection régulière à Candiac?",
        answer:
          "Comme vous le savez, notre équipe de plombiers est disponible immédiatement pour intervenir dans les plus brefs délais, souvent le jour même. Pour les inspections préventives, nous pouvons fixer un rendez-vous selon vos disponibilités, en semaine comme le week-end.",
      },
    ],
  },
  // Carignan
  carignan: {
    title: "Débouchage Carignan | Urgence 24/7",
    metaDescription:
      "Service de débouchage à Carignan. Plombiers locaux disponibles 24h/7 pour urgences de drains et canalisations. Interventions rapides, solutions durables et respectueuses de l’environnement. Contactez-nous dès aujourd’hui!",
    cardTitle: "Carignan",
    cardImgUrl: getCityImage("carignan.webp"),
    altText:
      "Panneau d'accueil sur la route 116, à l'entrée ouest de la ville de Carignan.",
    mainTitle: "Service d'urgence de Débouchage à Carignan",
    description:
      "À Carignan, une ville où le charme résidentiel rencontre un environnement naturel paisible, notre équipe de plombiers locaux expérimentés intervient pour tous vos besoins en débouchage. Que ce soit un drain obstrué, une canalisation bouchée, ou une urgence de plomberie, nous proposons des solutions fiables et durables, adaptées aux spécificités de la région. Disponible 24h/7, notre service garantit une intervention rapide et efficace à tout moment.",

    secondSubTitle: "Engagement Local",
    secondTitle: "Des Services de Débouchage Pensés pour Carignan",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63346.959513000984!2d-73.34486882356518!3d45.43823848699506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc9a802b939eccb%3A0x6682078bfd019824!2sCarignan%2C%20QC!5e0!3m2!1sen!2sca!4v1739837869858!5m2!1sen!2sca",
    secondDescription:
      "Nos plombiers locaux à Carignan comprennent les particularités des infrastructures résidentielles de la région et les besoins uniques de ses résidents. Avec des équipements modernes et une expertise éprouvée, nous offrons des interventions rapides et fiables pour garantir le confort de votre maison.",
    details: [
      {
        title: "Interventions Rapides 24h/7",
        description:
          "Nous sommes disponibles à tout moment pour résoudre vos urgences de drains bloqués ou de canalisations obstruées.",
      },
      {
        title: "Solutions Respectueuses de l’Environnement",
        description:
          "Nos techniques privilégient des méthodes écoresponsables qui protègent vos installations et l’environnement.",
      },
      {
        title: "Expertise Locale Fiable",
        description:
          "Basés à Carignan, nos plombiers adaptent leurs interventions aux spécificités des résidences et infrastructures locales.",
      },
    ],
    thirdSubTitle: "Expertise",
    thirdTitle: "Votre Expert Local en Débouchage à Carignan",
    thirdDescription:
      "À Carignan, nous comprenons que chaque problème de plomberie peut affecter le confort et la sérénité de votre foyer. Nos plombiers locaux qualifiés sont fiers de servir la communauté avec des solutions sur mesure et une expertise fiable. Que vous ayez une urgence ou que vous cherchiez des options préventives, notre service est disponible 24h/7 pour vous offrir des interventions rapides, précises et respectueuses de vos besoins. Faites confiance à une équipe dédiée à la satisfaction des résidents de Carignan.",
    faq: [
      {
        question:
          "Mon drain français est-il bouché? Quels signes dois-je surveiller?",
        answer:
          "Les signes fréquents d’un drain français bouché incluent la présence d’eau autour des fondations, des odeurs désagréables au sous-sol et des bruits inhabituels dans les canalisations. À Candiac, ces symptômes peuvent indiquer une obstruction due à l’accumulation de sédiments ou de racines. Il est recommandé de faire inspecter votre système de drainage pour prévenir des infiltrations d’eau majeures.",
      },
      {
        question:
          "Quelles précautions prendre pour mon système de drainage en hiver?",
        answer:
          "Pour protéger votre système de drainage durant l’hiver à Candiac, il est conseillé d’inspecter les drains, de dégager les sorties et d’isoler les conduites afin de prévenir le gel et les obstructions. Ces mesures permettent d’assurer le bon fonctionnement de votre système malgré les conditions climatiques rigoureuses.",
      },
      {
        question:
          "Quel est le temps de réponse pour une urgence ou un entretien préventif à Candiac?",
        answer:
          "En cas d’urgence à Candiac, notre équipe intervient rapidement, souvent le jour même, et au plus tard dans les 48 heures suivant votre appel. Pour les inspections préventives, nous planifions les rendez-vous selon vos disponibilités, en semaine comme le week-end.",
      },
    ],
  },
  // Chambly
  chambly: {
    title: "Débouchage Chambly | Urgence 24/7",
    metaDescription:
      "Service de débouchage à Chambly. Plombiers locaux disponibles 24h/7 pour urgences de drains et canalisations. Interventions rapides, fiables et adaptées aux besoins des résidents et entreprises. Contactez-nous dès aujourd’hui!",
    cardTitle: "Chambly",
    cardImgUrl: getCityImage("chambly.webp"),
    altText: "L'Église Saint-Joseph à Chambly",
    mainTitle: "Service d'urgence de Débouchage à Chambly",
    description:
      "À Chambly, une ville charmante connue pour son riche patrimoine et ses quartiers résidentiels paisibles, notre équipe de plombiers locaux qualifiés est là pour répondre à vos besoins en débouchage. Que ce soit pour un drain obstrué, une canalisation bouchée, ou une urgence de plomberie, nous utilisons des outils modernes pour garantir des solutions rapides et durables. Disponible 24h/7, notre service s’adapte à vos besoins, que ce soit pour votre maison ou votre entreprise.",

    secondSubTitle: "Engagement Local",
    secondTitle:
      "Des Services de Débouchage Fiables pour la Communauté de Chambly",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d44800.36555233594!2d-73.33013835009866!3d45.42904078084424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc9a864d933d2ff%3A0x210adad9fb79c0b!2sChambly%2C%20QC!5e0!3m2!1sen!2sca!4v1739837914608!5m2!1sen!2sca",
    secondDescription:
      "Nos plombiers locaux à Chambly comprennent les besoins spécifiques des résidents et des entreprises locales. Avec une expertise éprouvée et des équipements modernes, nous intervenons rapidement pour offrir des solutions fiables qui respectent vos installations.",
    details: [
      {
        title: "Disponibilité 24h/7 pour Vos Urgences",
        description:
          "Notre équipe est prête à intervenir à tout moment pour résoudre vos problèmes de drains ou de canalisations bouchées.",
      },
      {
        title: "Solutions Adaptées à Chambly",
        description:
          "Nous ajustons nos méthodes pour répondre aux particularités des infrastructures résidentielles et commerciales de Chambly.",
      },
      {
        title: "Résultats Durables avec Équipements Modernes",
        description:
          "Grâce à des outils avancés, nous garantissons des débouchages précis et durables, adaptés à vos besoins spécifiques.",
      },
    ],
    thirdSubTitle: "Expertise",
    thirdTitle: "Votre Service de Confiance pour Débouchage à Chambly",
    thirdDescription:
      "À Chambly, nous sommes fiers de fournir un service de débouchage qui allie expertise locale, rapidité, et fiabilité. Nos plombiers qualifiés connaissent les spécificités de la région et interviennent avec des solutions adaptées, qu’il s’agisse d’une urgence ou d’un entretien préventif. Disponible 24h/7, nous nous engageons à offrir des interventions précises et respectueuses de vos besoins, afin de garantir votre confort et votre tranquillité d’esprit. Faites confiance à notre équipe pour des résultats durables.",
    faq: [
      {
        question:
          "Comment procède-t-on lors d'une inspection de drain français à Chambly?",
        answer:
          "Lors d’une inspection de drain français à Chambly, la première étape consiste à insérer une caméra spécialisée à l’intérieur du système de drainage. Cette caméra permet de détecter la présence d’obstructions, de fissures ou d’accumulations de racines. Les résultats de cette inspection guideront ensuite les recommandations pour un nettoyage ou une réparation, si nécessaire.",
      },
      {
        question:
          "Est-ce que l’hiver chamblyen peut affecter le bon fonctionnement de mon système de drainage?",
        answer:
          "Oui! Les basses températures à Chambly peuvent provoquer le gel de l’eau stagnante dans les drains, ce qui peut entraîner des obstructions. De plus, les précipitations hivernales augmentent la pression sur le système de drainage, d’où l’importance d’un entretien régulier pour prévenir les blocages.",
      },
      {
        question:
          "Quel est le délai moyen pour une urgence ou un entretien saisonnier?",
        answer:
          "Les interventions d’urgence sont prises très au sérieux et sont généralement effectuées le jour même de votre appel. Pour les inspections saisonnières, nous pouvons fixer un rendez-vous dans un délai de 24 à 48 heures, selon vos disponibilités.",
      },
    ],
  },
  // Chateauguay
  chateauguay: {
    title: "Débouchage Chateauguay | Urgence 24/7",
    metaDescription:
      "Service de débouchage à Châteauguay. Plombiers locaux disponibles 24h/7 pour drains et canalisations bouchées. Interventions rapides, fiables et adaptées aux résidents et entreprises. Contactez-nous dès maintenant!",
    cardTitle: "Chateauguay",
    cardImgUrl: getCityImage("chateauguay.webp"),
    altText: "Église à Chateauguay",
    mainTitle: "Service d'urgence de Débouchage à Chateauguay",
    description:
      "À Châteauguay, une ville dynamique avec un mélange de quartiers résidentiels et commerciaux, notre équipe de plombiers locaux expérimentés est disponible pour répondre à tous vos besoins en débouchage. Que ce soit un drain bloqué, une canalisation obstruée, ou une urgence de plomberie, nous offrons des solutions rapides et durables adaptées à votre situation. Disponible 24h/7, notre service garantit des résultats professionnels pour les résidents et les entreprises de Châteauguay.",

    secondSubTitle: "Engagement Local",
    secondTitle: "Des Services de Débouchage Adaptés à Châteauguay",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d89705.55712383463!2d-73.82719918495621!3d45.36296799182212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc9150bf002489f%3A0x6552f8359b6df45e!2sCh%C3%A2teauguay%2C%20QC!5e0!3m2!1sen!2sca!4v1739837959667!5m2!1sen!2sca",
    secondDescription:
      "Nos plombiers locaux à Châteauguay comprennent les besoins uniques des résidents et des entreprises de la région. Avec des équipements modernes et une expertise reconnue, nous intervenons rapidement pour garantir un service fiable et adapté à vos installations.",
    details: [
      {
        title: "Disponibilité Immédiate 24h/7",
        description:
          "Peu importe l’heure, notre équipe est prête à résoudre vos urgences de drains et de canalisations bouchées.",
      },
      {
        title: "Solutions Fiables pour Résidents et Entreprises",
        description:
          "Nous proposons des interventions sur mesure pour répondre aux infrastructures variées de Châteauguay, que ce soit pour votre maison ou votre commerce.",
      },
      {
        title: "Techniques Modernes et Respectueuses",
        description:
          "Nos outils de pointe garantissent un débouchage efficace tout en préservant vos installations et l’environnement.",
      },
    ],
    thirdSubTitle: "Expertise",
    thirdTitle:
      "Votre Partenaire de Confiance à Châteauguay pour un Service de Qualité",
    thirdDescription:
      "À Châteauguay, nous sommes fiers de servir la communauté avec des solutions de débouchage rapides, fiables, et adaptées. Nos plombiers locaux expérimentés comprennent les besoins spécifiques des résidents et des entreprises de la région. Disponible 24h/7, notre équipe utilise des techniques modernes pour garantir des résultats durables et une satisfaction totale. Faites confiance à notre expertise pour des interventions sans stress, que ce soit pour une urgence ou un entretien préventif.",
    faq: [
      {
        question:
          "Quelle est la procédure pour inspecter un drain français à Châteauguay?",
        answer:
          "L'inspection d'un drain français à Châteauguay commence par l'insertion d'une caméra spécialisée dans le système de drainage. Cette méthode permet de visualiser l'intérieur du drain afin de détecter d'éventuelles obstructions, fissures ou affaissements. À l'issue de l'inspection, un rapport détaillé est fourni, incluant des recommandations pour le nettoyage ou les réparations nécessaires.",
      },
      {
        question:
          "Quand est-il temps d'inspecter et de nettoyer mon drain français à Châteauguay?",
        answer:
          "Si vous n'avez pas effectué de nettoyage de votre drain français depuis 3 à 5 ans, ou si vous observez des signes d'obstruction tels que des infiltrations d'eau ou des odeurs d'humidité, il est recommandé de planifier une inspection et un entretien. Une maintenance régulière permet de prévenir les problèmes majeurs et d'assurer le bon fonctionnement de votre système de drainage.",
      },
      {
        question:
          "Quel est le délai moyen pour une intervention d'urgence ou un entretien saisonnier à Châteauguay?",
        answer:
          "Les interventions d'urgence, telles que le débouchage de drains, toilettes ou éviers, sont généralement traitées le jour même de votre appel. Pour les entretiens préventifs ou saisonniers, les rendez-vous peuvent être planifiés dans un délai de 24 à 48 heures, en fonction de vos disponibilités.",
      },
    ],
  },
  // Delson
  delson: {
    title: "Débouchage Delson | Urgence 24/7",
    metaDescription:
      "Service de débouchage à Delson. Plombiers locaux disponibles 24h/7 pour urgences de drains et canalisations. Interventions rapides, fiables et adaptées aux besoins des résidents et entreprises. Contactez-nous dès aujourd’hui!",
    cardTitle: "Delson",
    cardImgUrl: getCityImage("delson.webp"),
    altText: "Ville de Delson",
    mainTitle: "Service d'urgence de Débouchage à Delson",
    description:
      "À Delson, une ville reconnue pour sa communauté accueillante et ses quartiers résidentiels tranquilles, notre équipe de plombiers locaux expérimentés est prête à intervenir pour tous vos besoins en débouchage. Que ce soit un drain bloqué, une canalisation obstruée, ou une urgence de plomberie, nous utilisons des outils modernes pour garantir des solutions durables et efficaces. Disponible 24h/7, notre service s’adapte à vos besoins pour garantir votre tranquillité d’esprit.",

    secondSubTitle: "Engagement Local",
    secondTitle: "Des Solutions de Débouchage Fiables à Delson",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22420.288468971707!2d-73.56497703300353!3d45.378356293552216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc90dc28a20e69b%3A0x10348f401978b719!2sDelson%2C%20QC!5e0!3m2!1sen!2sca!4v1739838040551!5m2!1sen!2sca",
    secondDescription:
      "Nos plombiers locaux à Delson comprennent les besoins spécifiques des résidents et des entreprises locales. Avec une expertise reconnue et des équipements modernes, nous offrons un service rapide et adapté à chaque situation pour garantir des résultats durables.",
    details: [
      {
        title: "Disponibilité 24h/7 pour Vos Urgences",
        description:
          "Peu importe le moment, notre équipe est prête à intervenir pour résoudre vos problèmes de drains et de canalisations bouchées rapidement.",
      },
      {
        title: "Solutions Personnalisées pour Delson",
        description:
          "Nous adaptons nos méthodes pour répondre aux particularités des infrastructures résidentielles et commerciales de Delson.",
      },
      {
        title: "Équipements Modernes et Approche Respectueuse",
        description:
          "Grâce à des outils de pointe, nous garantissons des débouchages précis tout en préservant vos installations et l’environnement.",
      },
    ],
    thirdSubTitle: "Expertise",
    thirdTitle: "Votre Expert Local en Débouchage à Delson",
    thirdDescription:
      "À Delson, nous sommes fiers de fournir un service de débouchage qui allie expertise locale, rapidité, et fiabilité. Nos plombiers qualifiés connaissent les infrastructures résidentielles et commerciales de la région, offrant des solutions adaptées et durables. Disponible 24h/7, notre équipe s’engage à répondre à vos besoins avec précision et professionnalisme, que ce soit pour une urgence ou un entretien préventif. Faites confiance à notre savoir-faire pour des résultats sans stress et une satisfaction totale.",
    faq: [
      {
        question: "Comment reconnaître un drain français obstrué à Delson?",
        answer:
          "Les signes d’un drain français bouché peuvent inclure des infiltrations d’eau, une humidité excessive au sous-sol, des taches de moisissure sur les murs et des odeurs désagréables. Ces symptômes indiquent que le système de drainage ne parvient plus à évacuer l’eau de façon efficace.",
      },
      {
        question:
          "Quel est l’intervalle recommandé pour faire inspecter et nettoyer mon drain français?",
        answer:
          "Il est généralement conseillé de faire inspecter et nettoyer votre drain français tous les 3 à 5 ans afin d’en assurer l’efficacité. Toutefois, des facteurs comme la présence d’arbres autour de la maison ou un sol riche en fer peuvent nécessiter un entretien plus fréquent.",
      },
      {
        question:
          "Quelle est la procédure d’inspection et d’entretien d’un drain français?",
        answer:
          "L’inspection consiste à insérer une caméra spécialisée à l’intérieur du drain pour en observer l’état général. Cette méthode permet de détecter tout type de problème — obstruction, fissure ou affaissement — sans creuser. Elle offre un diagnostic rapide et précis, accompagné de recommandations claires pour l’entretien ou la réparation si nécessaire.",
      },
    ],
  },
  // La Prairie
  laprairie: {
    title: "Débouchage La Prairie | Urgence 24/7",
    metaDescription:
      "Service de débouchage à La Prairie. Plombiers locaux disponibles 24h/7 pour urgences de drains et canalisations. Interventions rapides, solutions fiables et adaptées aux besoins des résidents et entreprises. Contactez-nous dès maintenant!",
    cardTitle: "La Prairie",
    cardImgUrl: getCityImage("laprairie.webp"),
    altText: "Vieux La Prairie, Chemin Saint-Jean.",
    mainTitle: "Service d'urgence de Débouchage à La Prairie",
    description:
      "À La Prairie, une ville charmante mêlant histoire et modernité, notre équipe de plombiers locaux expérimentés est prête à répondre à tous vos besoins en débouchage. Que ce soit pour un drain obstrué, une canalisation bouchée, ou une urgence de plomberie, nous proposons des solutions rapides et durables adaptées aux résidents et aux entreprises locales. Disponible 24h/7, notre service assure des interventions efficaces pour garantir votre tranquillité d’esprit.",

    secondSubTitle: "Engagement Local",
    secondTitle:
      "Des Services de Débouchage Adaptés aux Résidents et Entreprises de La Prairie",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d44827.21571562449!2d-73.50054490045552!3d45.39520236682015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc90eed47a7a0d1%3A0xde63296aabd6d9dd!2sLa%20Prairie%2C%20QC!5e0!3m2!1sen!2sca!4v1739838134477!5m2!1sen!2sca",
    secondDescription:
      "Nos plombiers locaux à La Prairie comprennent les particularités des infrastructures résidentielles et commerciales de la région. Avec des équipements modernes et une expertise éprouvée, nous intervenons rapidement pour offrir des solutions fiables et durables adaptées à chaque situation.",
    details: [
      {
        title: "Intervention Rapide et Fiable",
        description:
          "Nos plombiers locaux interviennent rapidement pour vos urgences de plomberie, garantissant des solutions efficaces dès le premier contact.",
      },
      {
        title: "Expertise Locale et Approche Préventive",
        description:
          "En tant qu’experts basés à La Prairie, nous proposons des conseils et des solutions qui anticipent les futurs problèmes.",
      },
      {
        title: "Techniques Modernes et Respectueuses",
        description:
          "Nous utilisons des équipements de pointe pour assurer un débouchage précis tout en minimisant l’impact sur vos installations.",
      },
    ],
    thirdSubTitle: "Expertise",
    thirdTitle: "Pourquoi Choisir Nos Services de Débouchage à La Prairie?",
    thirdDescription:
      "À La Prairie, nous nous engageons à fournir un service de débouchage qui allie expertise locale, rapidité, et solutions durables. Nos plombiers qualifiés, bien implantés dans la région, comprennent les besoins spécifiques des résidents et des entreprises locales. Disponible 24h/7, nous offrons des interventions précises et respectueuses, adaptées à vos infrastructures. Faites confiance à une équipe qui place votre satisfaction et votre tranquillité d’esprit au cœur de chaque intervention.",
    faq: [
      {
        question: "Quels sont les signes que ma canalisation est bouchée?",
        answer:
          "Les signes incluent un écoulement lent, des gargouillis, des odeurs désagréables, ...",
      },
      {
        question: "Offrez-vous des services de maintenance préventive?",
        answer:
          "Absolument! Nous fournissons des services réguliers de nettoyage et d’inspection pour prévenir les blocages.",
      },
    ],
  },
  // Longueuil
  longueuil: {
    title: "Débouchage Longueuil | Urgence 24/7",
    metaDescription:
      "Service de débouchage à Longueuil. Plombiers locaux disponibles 24h/7 pour urgences de drains et canalisations. Interventions rapides, fiables et adaptées aux besoins des résidents et entreprises. Appelez dès maintenant!",
    cardTitle: "Longueuil",
    cardImgUrl: getCityImage("longueuil.webp"),
    altText: "L'Hôtel de ville à Longueuil",
    mainTitle: "Service d'urgence de Débouchage à Longueuil",
    description:
      "À Longueuil, une ville dynamique qui allie zones résidentielles, commerciales et culturelles, notre équipe de plombiers locaux expérimentés est prête à répondre à tous vos besoins en débouchage. Que ce soit pour un drain obstrué, une canalisation bouchée, ou une urgence de plomberie, nous proposons des solutions rapides et durables, adaptées aux besoins des résidents et des entreprises locales. Disponible 24h/7, notre service garantit des résultats fiables pour votre tranquillité d’esprit.",

    secondSubTitle: "Engagement Local",
    secondTitle: "Des Solutions de Débouchage Fiables pour Longueuil",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d89470.80449978374!2d-73.51573732860639!3d45.510830678507574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc91b69886574f9%3A0x1c63438a7316da2e!2sLongueuil%2C%20QC!5e0!3m2!1sen!2sca!4v1739838245523!5m2!1sen!2sca",
    secondDescription:
      "Nos plombiers locaux à Longueuil comprennent les besoins spécifiques des résidents, des entreprises, et des institutions locales. Grâce à des équipements modernes et une expertise approfondie, nous assurons des interventions rapides, précises, et adaptées à chaque situation.",
    details: [
      {
        title: "Assistance 24h/7 pour Toutes Vos Urgences",
        description:
          "Peu importe l’heure ou le jour, notre équipe est prête à intervenir rapidement pour résoudre vos problèmes de drains et de canalisations bouchées.",
      },
      {
        title: "Solutions Adaptées à la Diversité de Longueuil",
        description:
          "Que vous soyez propriétaire résidentiel ou gestionnaire d’une entreprise, nous proposons des interventions sur mesure pour répondre à vos besoins.",
      },
      {
        title: "Équipements Modernes pour des Résultats Durables",
        description:
          "Nous utilisons des outils de pointe pour garantir un débouchage précis, sécurisé et respectueux de vos installations.",
      },
    ],
    thirdSubTitle: "Expertise",
    thirdTitle: "Pourquoi Nous Faire Confiance pour Vos Besoins à Longueuil?",
    thirdDescription:
      "À Longueuil, notre mission est de fournir des solutions de débouchage qui allient rapidité, expertise et satisfaction client. Nos plombiers locaux qualifiés comprennent les infrastructures variées de la région, des maisons résidentielles aux locaux commerciaux. Disponible 24h/7, notre équipe offre des interventions précises et respectueuses, adaptées à vos besoins spécifiques. Faites confiance à une équipe qui place votre tranquillité d’esprit et des résultats durables au cœur de chaque intervention.",
    faq: [
      {
        question: "Quels sont les signes que ma canalisation est bouchée?",
        answer:
          "Les signes incluent un écoulement lent, des gargouillis, des odeurs désagréables, ...",
      },
      {
        question: "Offrez-vous des services de maintenance préventive?",
        answer:
          "Absolument! Nous fournissons des services réguliers de nettoyage et d’inspection pour prévenir les blocages.",
      },
    ],
  },
  // Marieville
  marieville: {
    title: "Débouchage Marieville | Urgence 24/7",
    metaDescription:
      "Service de débouchage à Marieville. Plombiers locaux disponibles 24h/7 pour urgences de drains et canalisations. Interventions rapides, fiables et adaptées aux besoins des résidents et entreprises. Contactez-nous dès aujourd’hui!",
    cardTitle: "Marieville",
    cardImgUrl: getCityImage("marieville.webp"),
    altText: "Résidence Sainte-Croix de Marieville",
    mainTitle: "Service d'urgence de Débouchage à Marieville",
    description:
      "À Marieville, une ville réputée pour son atmosphère conviviale et ses quartiers résidentiels paisibles, notre équipe de plombiers locaux expérimentés est prête à répondre à tous vos besoins en débouchage. Que ce soit pour un drain obstrué, une canalisation bouchée, ou une urgence de plomberie, nous offrons des solutions rapides et durables, adaptées aux résidents et entreprises locales. Disponible 24h/7, notre service garantit des interventions efficaces pour votre tranquillité d’esprit.",

    secondSubTitle: "Engagement Local",
    secondTitle: "Des Solutions de Débouchage Conçues pour Marieville",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d89592.80536824424!2d-73.23624463190662!3d45.43403339123928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc9af75adb56275%3A0x70266a84a6b7d19d!2sMarieville%2C%20QC!5e0!3m2!1sen!2sca!4v1739838340976!5m2!1sen!2sca",
    secondDescription:
      "Nos plombiers locaux à Marieville comprennent les besoins spécifiques des résidents et des entreprises de la région. Avec des équipements modernes et une expertise reconnue, nous offrons des interventions rapides, fiables, et adaptées pour garantir le bon fonctionnement de vos installations.",
    details: [
      {
        title: "Disponibilité 24h/7 pour Vos Urgences",
        description:
          "Notre équipe est prête à intervenir rapidement, peu importe l’heure, pour résoudre vos urgences de drains et de canalisations bouchées.",
      },
      {
        title: "Solutions Durables et Personnalisées",
        description:
          "Nous proposons des interventions sur mesure, adaptées aux infrastructures résidentielles et commerciales de Marieville.",
      },
      {
        title: "Expertise Locale et Techniques Modernes",
        description:
          "Basés dans la région, nos plombiers utilisent des équipements de pointe pour assurer des résultats précis et durables.",
      },
    ],
    thirdSubTitle: "Expertise",
    thirdTitle:
      "Pourquoi Faire Confiance à Nos Services de Débouchage à Marieville?",
    thirdDescription:
      "À Marieville, nous mettons notre expertise et notre engagement au service des résidents et des entreprises locales. Nos plombiers qualifiés, basés dans la région, interviennent avec précision et rapidité pour garantir des résultats fiables et durables. Que ce soit pour une urgence ou un entretien préventif, nous offrons des solutions adaptées à vos besoins et respectueuses de vos infrastructures. Disponible 24h/7, notre priorité est votre satisfaction et votre tranquillité d’esprit.",
    faq: [
      {
        question: "Quels sont les signes que ma canalisation est bouchée?",
        answer:
          "Les signes incluent un écoulement lent, des gargouillis, des odeurs désagréables, ...",
      },
      {
        question: "Offrez-vous des services de maintenance préventive?",
        answer:
          "Absolument! Nous fournissons des services réguliers de nettoyage et d’inspection pour prévenir les blocages.",
      },
    ],
  },
  // Mont Saint-Hilaire
  "mont-saint-hilaire": {
    title: "Débouchage Mont-Saint-Hilaire | Urgence 24/7",
    metaDescription:
      "Service de débouchage à Mont-Saint-Hilaire. Plombiers locaux disponibles 24h/7 pour urgences de drains et canalisations. Interventions rapides, fiables et adaptées aux résidents et entreprises. Appelez dès maintenant!",
    cardTitle: "Mont-Saint-Hilaire",
    cardImgUrl: getCityImage("mont-saint-hilaire.webp"),
    altText: "Vue du Mont-Saint-Hilaire",
    mainTitle: "Service d'urgence de Débouchage à Mont-Saint-Hilaire",
    description:
      "À Mont-Saint-Hilaire, une ville renommée pour sa beauté naturelle et ses quartiers résidentiels paisibles, notre équipe de plombiers locaux expérimentés est là pour répondre à tous vos besoins en débouchage. Que ce soit pour un drain bloqué, une canalisation obstruée, ou une urgence de plomberie, nous offrons des solutions rapides, fiables et adaptées à vos besoins spécifiques. Disponible 24h/7, notre service garantit des résultats durables et une intervention sans stress.",

    secondSubTitle: "Engagement Local",
    secondTitle: "Des Services de Débouchage Fiables pour Mont-Saint-Hilaire",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d89376.70890987417!2d-73.25328307606068!3d45.56999310314148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc9aada71cbdde9%3A0x3c431e9f25fd20d0!2sMont-Saint-Hilaire%2C%20QC!5e0!3m2!1sen!2sca!4v1739838385936!5m2!1sen!2sca",
    secondDescription:
      "Nos plombiers locaux à Mont-Saint-Hilaire comprennent les besoins uniques des résidents et des entreprises de la région. Grâce à une expertise reconnue et des équipements modernes, nous offrons des solutions rapides et efficaces, adaptées à chaque situation.",
    details: [
      {
        title: "Intervention Rapide 24h/7",
        description:
          "Notre équipe est disponible jour et nuit pour résoudre vos urgences de plomberie, en offrant des solutions fiables et immédiates.",
      },
      {
        title: "Approche Personnalisée pour Mont-Saint-Hilaire",
        description:
          "Nous ajustons nos méthodes en fonction des infrastructures spécifiques des maisons et entreprises locales.",
      },
      {
        title: "Outils Modernes pour des Résultats Durables",
        description:
          "Grâce à des équipements de pointe, nous garantissons des débouchages précis et sécurisés, sans compromettre vos installations.",
      },
    ],
    thirdSubTitle: "Expertise",
    thirdTitle: "Votre Expert Local en Débouchage à Mont-Saint-Hilaire",
    thirdDescription:
      "À Mont-Saint-Hilaire, nous sommes fiers de fournir des services de débouchage rapides, fiables et adaptés aux besoins de la communauté locale. Nos plombiers qualifiés, bien implantés dans la région, comprennent les infrastructures uniques des maisons et entreprises locales. Disponible 24h/7, notre équipe s’engage à offrir des solutions efficaces qui assurent votre tranquillité d’esprit et des résultats durables. Faites confiance à notre expertise pour un service sans égal.",
    faq: [
      {
        question: "Quels sont les signes que ma canalisation est bouchée?",
        answer:
          "Les signes incluent un écoulement lent, des gargouillis, des odeurs désagréables, ...",
      },
      {
        question: "Offrez-vous des services de maintenance préventive?",
        answer:
          "Absolument! Nous fournissons des services réguliers de nettoyage et d’inspection pour prévenir les blocages.",
      },
    ],
  },

  // Add more cities here
};
