type ImageModule = { default: string };

const images = import.meta.glob("../images/services/*.webp", {
  eager: true,
}) as Record<string, ImageModule>;

function getImage(fileName: string): string {
  return images[`../images/services/${fileName}`]?.default;
}

// src/data/serviceDetails.ts
export const serviceDetails = {
  // Debouchage drain
  "debouchage-drain": {
    title: "Débouchage de Drain | Urgence 24/7",
    metaDescription:
      "Problème de drain bouché? Plombiers disponible 24h/7 pour service d'urgence rapide et efficace. Appelez maintenant pour une intervention immédiate!",
    MainTitle: "Service d'urgence de débouchage de drain",
    firstDescription:
      "Lorsqu’un drain est bouché, chaque minute compte. C’est pourquoi nos plombiers vous offrent un service d’urgence de débouchage de drain abordable, rapide et disponible 24h/7.",
    imgUrl1: getImage("drain1.webp"),
    imgUrl2: getImage("drain2.webp"),
    imgUrl3: getImage("drain3.webp"),
    atlText1:
      "Image animée montrant une canalisation en train d’être débouchée.",
    atlText2: "Des cheveux retirés d’un drain obstrué par un plombier.",
    atlText3: "Un drain propre et fonctionnel.",
    secondTitle: "Des solutions efficaces pour vos drains bouchés",
    secondSubTitle: "Tranquilité d'esprit",
    secondDescription:
      "Nous savons comment un drain bloqué peut perturber votre quotidien. Nos experts sont prêt à vous servir rapidement.",
    details: [
      {
        title: "Service d'urgence 24h/7.",
        description:
          "Disponible en tout temps, il nous fera un plaisir de vous offrir une intervention rapide avec de l'équipement moderne pour vos problèmes de drain.",
      },
      {
        title: "Expérience avec tous les types de drains.",
        description:
          "Que ce soit un drain d'évier, baignoires, douches ou canalisations principales, nos plombiers possèdent l'expertise requise pour débloquer tous les types de drains rapidement et efficacement.",
      },
      {
        title: "Prévention des blocages potentiels.",
        description:
          "En plus de régler vos problèmes de drains, nos experts vous conseilleront sur les meilleurs méthodes d'entretien pour éviter des futurs blocages et garder vos canalisations en parfait état.",
      },
    ],
    thirdTitle: "Quel sont les avantages de choisir Débouchage Solutions?",
    thirdSubTitle: "Confiance",
    thirdDescription:
      "Chez Débouchage Solutions, nous voulons rendre le processus simple et efficace. Avec un service disponible 24h/7, vous n'avez qu'à nous appeler afin de prendre rendez-nous. Une fois que nos experts auront inspectés vos problèmes de drain, ils pourront procéder au débouchage grâce à des outils professionnels et finir le travaille avec des conseils afin que vous puissiez prévenir de futur problèmes de drain.",
    faq: [
      {
        question:
          "Quels sont les signes indiquant que je dois immédiatement appeler un plombier pour un débouchage de drain?",
        answer:
          "Les signes les plus fréquents incluent un écoulement lent ou stagnant de l’eau, des remontées d’eau ou de mauvaises odeurs provenant des drains, ainsi que des gargouillements inhabituels dans vos canalisations. Si vous remarquez un de ces symptômes, contactez-nous immédiatement afin d’éviter des dommages supplémentaires à votre système de drainage.",
      },
      {
        question:
          "Combien de temps dure généralement une intervention pour un drain bloqué?",
        answer:
          "La durée d’intervention pour déboucher un drain varie selon la gravité et l'emplacement du blocage, mais en général, nos techniciens résolvent le problème en 1 à 2 heures maximum. Nous assurons un débouchage rapide et efficace.",
      },
      {
        question:
          "Offrez-vous un service d’urgence les soirs et les fins de semaine?",
        answer:
          "Oui, absolument! Notre service de débouchage de drain est disponible 24h/7, incluant les soirées, les weekends et même les jours fériés. Quelle que soit l'heure ou le jour, nous sommes prêts à intervenir rapidement pour vos problèmes de drainage.",
      },
    ],
  },
  //debouchage toilette
  "debouchage-toilette": {
    title: "Débouchage de Toilette | Urgence 24/7",
    metaDescription:
      "Toilette bouché? Plombiers disponible 24h/7 pour service d'urgence rapide et efficace. Appelez maintenant pour une intervention immédiate!",
    MainTitle: "Service d'urgence de débouchage de toilette",
    firstDescription:
      "Une toilette bloquée peut devenir rapidement une situation d'urgence. Grâce à nos plombiers expérimentés, l'intervention sera rapide et efficace, tout en offrant un service 24h/7.",
    imgUrl1: getImage("toilet1.webp"),
    imgUrl2: getImage("toilet2.webp"),
    imgUrl3: getImage("toilet3.webp"),
    atlText1: "Un plombier tenant un siphon devant une toilette.",
    atlText2: "Un plombier en train de réparer la chaîne d’une toilette.",
    atlText3:
      "Un plombier utilisant un déboucheur à pression pour déboucher une toilette.",
    secondTitle: "Intervention rapide pour votre toilette bouchée",
    secondSubTitle: "Fiabilité",
    secondDescription:
      "On vous garanti un service fiable, efficace et disponible à tout moment.",
    details: [
      {
        title: "Intervention rapide et garantie",
        description:
          "Nous comprenons l'urgence que vous vivez avec vos problèmes de toilette qui déborde. Nous nous engageons à rétablir le bon fonctionnement de votre toilette.",
      },
      {
        title: "Équipement moderne",
        description:
          "Nos plombiers travaillent avec des outils modernes comme des furets électriques et pompes haute pression pour un débouchage de toilette assuré.",
      },
      {
        title: "Prévention et conseil",
        description:
          "Après chaque intervention, nous prenons un moment pour vous conseiller afin que vous puissiez prévenir des futurs débordements.",
      },
    ],
    thirdTitle: "Pourquoi choisir Débouchage Solutions pour vos urgences?",
    thirdSubTitle: "Courtoisie",
    thirdDescription:
      "Chez Débouchage Solutions, nous sommes au courant qu'une toilette bouchée peut être une grande source de stresse. C'est pourquoi nos experts mettent un point d'honneur à intervenir avec courtoisie et respect, même dans des situations urgentes. Prenez rendez-vous dès maintenant, pour que nous puissions rétablir votre confort.",
    faq: [
      {
        question: "Quelle est la cause fréquente d'une toilette bouchée?",
        answer:
          "Une toilette bouchée est généralement causée par l’accumulation excessive de papier, des lingettes humides, des objets tombés accidentellement ou encore par un problème dans la canalisation. Nos techniciens expérimentés pourront identifier clairement la cause et régler efficacement le problème.",
      },
      {
        question:
          "Votre service d'intervention pour toilette bouchée inclut-il une garantie?",
        answer:
          "Absolument! Tous nos services de débouchage sont entièrement garantis. Votre satisfaction est notre priorité, et nos techniciens prennent toujours le temps de s'assurer que tout fonctionne parfaitement avant de quitter les lieux.",
      },
      {
        question: "Sommes-nous disponibles pour une intervention le jour même?",
        answer:
          "Oui, bien sûr! Nous sommes conscients qu’une toilette bouchée nécessite souvent une intervention immédiate. C’est pourquoi nos techniciens sont toujours prêts à intervenir le jour même, 24h/7, partout à Montréal et ses environs. N’hésitez pas à nous contacter, il nous fera plaisir de vous aider dans les plus brefs délais!",
      },
    ],
  },
  //debouchage evier de cuisine
  "debouchage-evier-cuisine": {
    title: "Débouchage d'évier de cuisine | Urgence 24/7",
    metaDescription:
      "Service d'urgence 24h/7 pour débouchage d'évier de cuisine bouché. Contactez-nous maintenant pour une intervention rapide!",
    MainTitle: "Service d'urgence pour débouchage d'évier de cuisine",
    firstDescription:
      "Besoin d'une intervention immédiate pour votre évier de cuisine bloqué? Heureusement, notre équipe de plombier est disponible 24h/7 pour sauver votre journée.",
    imgUrl1: getImage("sink1.webp"),
    imgUrl2: getImage("sink2.webp"),
    imgUrl3: getImage("sink3.webp"),
    atlText1:
      "Un plombier utilisant un déboucheur à pression pour déboucher un évier de cuisine.",
    atlText2:
      "Un plombier inspectant et réparant la tuyauterie sous un évier de cuisine.",
    atlText3:
      "Un plombier vérifiant un robinet de cuisine avec un dossier et des outils à proximité.",
    secondTitle: "Comment allons nous déboucher votre évier de cuisine?",
    secondSubTitle: "Efficacité",
    secondDescription:
      "Que ce soit dû à des graisses accumulées, des résidus alimentaires ou d'autre obstructions plus complexes, rien ne nous intimide.",
    details: [
      {
        title: "Diagnostic efficace",
        description:
          "Nous allons rapidement identifier la cause du bouchon dans votre évier de cuisine et procéder en conséquence.",
      },
      {
        title: "Outils à la fine pointe.",
        description:
          "Avec nos outils avancés, comme les furets électriques et pompes haute pression, nous garantissons un débouchage impécable de votre évier de cuisine.",
      },
      {
        title: "Consultation.",
        description:
          "Une fois l'intervention terminée, nous vous conseillons sur les meilleurs pratiques afin d'éviter une autre obstruction de votre évier.",
      },
    ],
    thirdTitle:
      "Pourquoi faire confiance à nos experts pour le débouchage votre évier de cuisine?",
    thirdSubTitle: "Professionnalisme",
    thirdDescription:
      "Nous savons parfaitement qu'un évier bouché peut perturber votre quotidien, et c'est pourquoi résoudre votre problème d'évier est notre priorité. Avec un service 24h/7, nous offrons des interventions réalisées avec soin, professionnalisme et le souci de résoudre durablement vos problème d'évier bloqué.",
    faq: [
      {
        question:
          "Est-ce que je peux déboucher mon évier moi-même ou dois-je faire appel à un professionnel?",
        answer:
          "Dans certains cas simples, comme un léger bouchon de graisse ou de résidus alimentaires, il est possible de tenter un débouchage maison à l’aide d’eau bouillante, d’une ventouse ou de produits naturels. Toutefois, si le problème persiste ou si l’eau ne s’écoule plus du tout, il est fortement recommandé de faire appel à un professionnel. Nos spécialistes disposent des outils et de l’expertise nécessaires pour déboucher votre évier de cuisine rapidement, sans endommager vos installations.",
      },
      {
        question: "Le débouchage d’évier inclut-il une garantie?",
        answer:
          "Oui, absolument! Toutes nos interventions de débouchage, y compris pour les éviers de cuisine, sont couvertes par une garantie. Nous avons à cœur votre tranquillité d’esprit et nous nous assurons que le problème soit réglé de manière durable dès la première visite.",
      },
      {
        question:
          "Votre service couvre-t-il les urgences les soirs et les fins de semaine?",
        answer:
          "Oui, notre service d’urgence est disponible 24h/7, y compris les soirs, les fins de semaine et les jours fériés. Si votre évier de cuisine est bouché et nécessite une intervention immédiate, vous pouvez compter sur nous à tout moment. Nous sommes prêts à intervenir rapidement, peu importe l’heure et la journée.",
      },
    ],
  },
  // debouchage bain et douche
  "debouchage-bain-douche": {
    title: "Débouchage de bain et douche | Urgence 24/7",
    metaDescription:
      "Douche ou bain bouché? Plombiers qualifiés disponible 24h/7 pour intervention d'urgence. Contactez-nous dès maintenant.",
    MainTitle: "Service d'urgence de débouchage de bain et douche",
    firstDescription:
      "Votre baignoire ou douche est bouché? Ne tardez pas à nous contacter pour une intervention d'urgence rapide, grâce à une équipe de plombiers disponibles 24h/7.",
    imgUrl1: getImage("bath1.webp"),
    imgUrl2: getImage("bath2.webp"),
    imgUrl3: getImage("bath3.webp"),
    atlText1: "Un plombier en train de déboucher une baignoire.",
    atlText2: "Un plombier utilisant un furet pour déboucher une douche.",
    atlText3:
      "Un drain de douche propre avec des carreaux noirs et une pomme de douche au sol.",
    secondTitle: "Comment on s'y prend pour déboucher votre bain ou douche?",
    secondSubTitle: "Rapidité",
    secondDescription:
      "Qu'il s'agit de cheveux, de résidus de savon ou d'obstruction complexes, rien ne nous arrêtera.",
    details: [
      {
        title: "Inspection avant intervention.",
        description:
          "Nous identifions efficacement la cause du blocage de votre baignoire ou douche et procédons adéquatement à l'intervention.",
      },
      {
        title: "Outils modernes de qualité supérieur.",
        description:
          "Nos outils spécialisés nous permettent de déboucher vos bains et douches sans endommager vos canalisations.",
      },
      {
        title: "Conseils pratiques d'entretien.",
        description:
          "Une fois que l'intervention est terminé, nous restons à votre disposition pour vous conseiller afin de prévenir des futurs blocages.",
      },
    ],
    thirdTitle: "Faites confiance à notre expertise pour vos urgences",
    thirdSubTitle: "Satisfaction",
    thirdDescription:
      "Chez Débouchage Solutions Inc, votre satisfaction est notre priorité. Avec notre service rapide 24h/7 de débouchage de bain et douche, chaque urgence est traité avec le soucis de votre sécurité et bien-être.",
    faq: [
      {
        question:
          "Intervenez-vous en urgence pour un bain ou une douche bouchés?",
        answer:
          "Oui, tout à fait ! Nous offrons un service de dépannage d'urgence pour une baignoire ou une douche bouchées, disponible 24 heures sur 24, 7 jours sur 7. Nos techniciens sont prêts à intervenir rapidement partout à Montréal et sur la Rive-Sud, afin de régler le problème efficacement, sans délai.",
      },
      {
        question:
          "Est-il sécuritaire d'utiliser des produits chimiques pour déboucher ma baignoire?",
        answer:
          "L'utilisation fréquente de produits chimiques peut endommager vos canalisations et présenter des risques pour l'environnement. Il est préférable d'opter pour des méthodes mécaniques, comme l'utilisation d'une ventouse ou d'un furet, ou de faire appel à un professionnel pour un débouchage efficace et sécuritaire.",
      },
      {
        question:
          "Est-ce qu’un problème de drainage dans la douche peut provenir du drain principal?",
        answer:
          "Oui, il arrive que le bouchon ne soit pas localisé directement sous la douche, mais plus loin dans la canalisation principale. Dans ce cas, une simple tentative de débouchage local ne suffit pas. Une inspection en profondeur permet d’identifier précisément la source du problème, et une intervention immédiate pour bain ou douche bouché est nécessaire.",
      },
    ],
  },
  // debouchage lavabo
  "debouchage-lavabo": {
    title: "Débouchage de lavabo | Urgence 24/7",
    metaDescription:
      "Votre lavabo est bouché? Faites appel à une équipe de plombiers qualifiée pour un débouchage rapide et efficace. Disponible 24h/7, contactez-nous dès maintenant pour une intervention immédiate.",
    MainTitle: "Service d'urgence de débouchage de lavabo",
    firstDescription:
      "Votre lavabo est bloqué? Pas de soucis. Avec notre service de débouchage de lavabo, disponible 24h/7, nos plombiers sont prêts à intervenir avec des solutions efficaces pour restaurer votre confort rapidement.",
    imgUrl1: getImage("lavabo1.webp"),
    imgUrl2: getImage("lavabo2.webp"),
    imgUrl3: getImage("lavabo3.webp"),
    atlText1:
      "Un plombier serrant un tuyau en métal avec une clé à molette rouge.",
    atlText2: "Un plombier réparant un tuyau sous un lavabo avec une clé.",
    atlText3:
      "Un plombier prenant des notes sur un clipboard devant un lavabo dans une salle de bain.",
    secondTitle: "Ce qui est inclus dans notre service de débouchage de lavabo",
    secondSubTitle: "Expertise",
    secondDescription:
      "Nos plombiers savent exactement quoi faire dans le cas d'un débouchage de lavabo. Même quand c'est causé par des cheveux, résidus de savon ou d'autres obstructions.",
    details: [
      {
        title: "Solutions pour chaque blocage.",
        description:
          "Chaque intervention est adaptée à la cause du problème, garatissant des solutions sur-mesure et rapide.",
      },
      {
        title: "Des pratiques respectueuses.",
        description:
          "Nous nous assurons que nos méthodes soient conçues pour préserver l'intégrité de vos canalisations tout en éliminant les blocages.",
      },
      {
        title: "Une équipe disponible 24h/7.",
        description:
          "Notre équipe de plombiers est toujours disponible à toute heure pour répondre à vos urgences avec efficacité.",
      },
    ],
    thirdTitle: "Faites Confiance à Nos Experts chez Débouchage Solutions",
    thirdSubTitle: "Transparence",
    thirdDescription:
      "Choisir notre équipe pour un débouchage de lavabo, c'est opter pour une équipe de plombiers dévouée à votre satisfaction. Nous intervenons rapidement et efficacements, en prenant soin de vos installations et en vous offrant des conseils pratiques pour prévenir des futurs blocages.",
    faq: [
      {
        question:
          "Offrez-vous un service d'urgence 24h/7 pour le débouchage de lavabos?",
        answer:
          "Oui, bien sûr! Nous savons qu'un lavabo bouché peut vite devenir un problème désagréable. C’est pourquoi notre équipe est disponible pour les urgences 24h/7, afin d’intervenir rapidement partout dans la région de Montréal et ses environs. N'hésitez pas à nous contacter, nous sommes toujours prêts à vous aider avec le sourire!",
      },
      {
        question: "Quelles sont les causes fréquentes d'un lavabo bouché?",
        answer:
          "Votre lavabo peut facilement se boucher à cause de l'accumulation de cheveux, de savon, de dentifrice ou d'autres petits résidus qui finissent par obstruer les canalisations avec le temps. Pas d’inquiétude, nos techniciens sont là pour résoudre rapidement ce problème désagréable!",
      },
      {
        question: "Est-ce que je peux déboucher mon lavabo moi-même?",
        answer:
          "Absolument! Vous pouvez essayer avec une ventouse ou un mélange naturel (bicarbonate de soude et vinaigre). Cependant, si le bouchon persiste, évitez les produits chimiques qui risquent d'endommager vos tuyaux, et faites plutôt appel à nos plombiers pour une intervention rapide et sécuritaire.",
      },
    ],
  },
  // nettoyage drain hydro pression
  "nettoyage-drain-hydro-pression": {
    title: "Nettoyage de drain à hydro-pression | Service 24/7",
    metaDescription:
      "Service de nettoyage à hydro-pression rapide et fiable. Disponible 24h/7 pour drains obstrués et entretien préventif. Interventions écoresponsables et adaptées aux besoins résidentiels et commerciaux. Appelez dès maintenant!",
    MainTitle: "Service de nettoyage à hydro-pression",
    firstDescription:
      "Notre service de nettoyage à hydro-pression offre des solutions rapides et efficaces pour vos besoins résidentiels et commerciaux. Que ce soit pour des drains obstrués ou un entretien préventif, nos plombiers qualifiés interviennent avec des équipements modernes pour garantir des résultats durables. Disponible 24h/7, nous assurons des interventions professionnelles adaptées à chaque situation, pour une plomberie en parfait état.",
    imgUrl1: getImage("hydro1.webp"),
    imgUrl2: getImage("hydro2.webp"),
    imgUrl3: getImage("hydro3.webp"),
    atlText1:
      "Illustration d'une buse d'hydro-pression nettoyant un tuyau obstrué avec des jets d'eau puissants.",
    atlText2:
      "Un plombier nettoyant un drain de sol obstrué dans une salle de bain avec un tuyau haute pression.",
    atlText3:
      "Un plombier utilisant un tuyau haute pression pour déboucher une toilette.",
    secondTitle: "Les Avantages du Nettoyage à Hydro-Pression",
    secondSubTitle: "Tranquilité d'esprit",
    secondDescription:
      "Notre procédé de nettoyage à hydro-pression est conçu pour répondre aux besoins spécifiques des résidents et entreprises, en offrant une méthode efficace, sécurisée et respectueuse de l’environnement. Avec nos équipements modernes, vos canalisations retrouvent leur pleine fonctionnalité.",
    details: [
      {
        title: "Puissance et Efficacité",
        description:
          "Le nettoyage à hydro-pression élimine les blocages les plus tenaces en un temps record, assurant un fonctionnement optimal de vos canalisations.",
      },
      {
        title: "Sécurité pour Vos Installations",
        description:
          "Nos techniques sont non-invasives, respectant vos équipements tout en garantissant des résultats durables.",
      },
      {
        title: "Solution Écoresponsable",
        description:
          "Cette méthode utilise uniquement de l’eau sous haute pression, évitant le recours à des produits chimiques nocifs.",
      },
    ],
    thirdTitle:
      "Pourquoi Faire Confiance à Notre Service de Nettoyage à Hydro-Pression?",
    thirdSubTitle: "Durabilité",
    thirdDescription:
      "Nos années d’expérience et notre expertise en nettoyage à hydro-pression nous permettent de fournir des résultats rapides, précis et durables. Nous utilisons des équipements modernes et des méthodes écoresponsables pour assurer la sécurité de vos installations tout en répondant à vos besoins spécifiques. Disponible 24h/7, notre équipe s’engage à offrir un service professionnel et personnalisé, que ce soit pour une urgence ou un entretien préventif. Faites confiance à des plombiers qualifiés qui mettent votre satisfaction au cœur de chaque intervention.",
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
  // nettoyage drain de garage
  "nettoyage-drain-garage": {
    title: "Nettoyage de drain de garage | Service 24/7",
    metaDescription:
      "Service de nettoyage de drain de garage rapide et professionnel. Disponible 24h/7 pour urgences et entretien préventif. Interventions fiables avec équipements modernes. Appelez dès maintenant pour des solutions durables!",
    MainTitle: "Service de nettoyage de drain de garage",
    firstDescription:
      "Un drain de garage obstrué peut rapidement devenir un problème majeur. C’est pourquoi notre équipe de plombiers qualifiés propose un service rapide et efficace pour le nettoyage de vos drains. Que ce soit pour une urgence ou un entretien préventif, nous utilisons des équipements modernes pour garantir des résultats durables. Disponible 24h/7, notre service s’adapte aux besoins des propriétaires résidentiels, offrant des solutions fiables et personnalisées.",
    imgUrl1: getImage("garage1.webp"),
    imgUrl2: getImage("garage2.webp"),
    imgUrl3: getImage("garage3.webp"),
    atlText1: "Un drain de garage propre avec de l'eau stagnante sur le sol.",
    atlText2:
      "Un plombier inspectant et nettoyant un drain de garage avec des outils spécialisés.",
    atlText3:
      "Un garage moderne et bien organisé avec une voiture garée et un drain de sol central.",
    secondTitle:
      "Les Avantages de Notre Service de Nettoyage de Drain de Garage",
    secondSubTitle: "Tranquilité d'esprit",
    secondDescription:
      "Nos plombiers locaux offrent un nettoyage efficace pour vos drains de garage, combinant expertise et outils modernes. Que ce soit pour déboucher un drain obstrué ou prévenir les futurs problèmes, nos solutions sont adaptées à vos besoins spécifiques, garantissant une plomberie fiable et durable.",
    details: [
      {
        title: "Intervention Rapide et Disponible 24h/7",
        description:
          "Nous sommes prêts à intervenir à tout moment pour résoudre vos urgences de drains obstrués rapidement et efficacement.",
      },
      {
        title: "Solutions Préventives et Fiables",
        description:
          "En plus de déboucher, nous proposons des services d’entretien préventif pour éviter les accumulations et prolonger la durée de vie de vos drains.",
      },
      {
        title: "Équipements de Pointe et Expertise",
        description:
          "Grâce à des techniques modernes, nous garantissons des résultats précis tout en respectant vos installations.",
      },
    ],
    thirdTitle: "Pourquoi Choisir Nos Services pour Vos Drains de Garage?",
    thirdSubTitle: "Fiabilité",
    thirdDescription:
      "Nous comprenons l’importance d’un drain de garage fonctionnel pour éviter les inondations et préserver vos espaces. Avec des années d’expérience et des équipements de pointe, notre équipe s’engage à fournir un service rapide, fiable et adapté à vos besoins. Disponible 24h/7, nous intervenons pour les urgences comme pour l’entretien préventif, afin de garantir votre tranquillité d’esprit. Faites confiance à des plombiers qualifiés qui priorisent votre satisfaction et la durabilité de vos installations.",
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
  // inpsection camera
  "inspection-camera": {
    title: "Inspection par caméra | Service 24/7",
    metaDescription:
      "Service d’inspection par caméra pour canalisations bouchées et entretien préventif. Plombiers disponibles 24h/7 pour un diagnostic précis et interventions fiables. Contactez-nous dès aujourd’hui !",
    MainTitle: "Service d'inspection par caméra",
    firstDescription:
      "Notre service d’inspection par caméra est la solution idéale pour diagnostiquer rapidement et précisément les canalisations bouchées ou effectuer un entretien préventif des drains. Grâce à des équipements modernes, nos plombiers qualifiés interviennent pour offrir le meilleur service d’inspection pour plomberie, que ce soit pour un problème urgent ou une maintenance planifiée. Disponible 24h/7, nous vous garantissons des résultats fiables et un excellent rapport qualité-prix pour vos besoins en plomberie.",
    imgUrl1: getImage("camera1.webp"),
    imgUrl2: getImage("camera2.webp"),
    imgUrl3: getImage("camera3.webp"),
    atlText1:
      "Caméra d'inspection pour plomberie avec un câble flexible et un écran intégré.",
    atlText2:
      "Un plombier inspectant l’intérieur d’un tuyau à l’aide d’une caméra d’inspection affichée sur un écran.",
    atlText3:
      "Caméra d’inspection de tuyaux équipée d’un câble orange insérée dans un trou pour une analyse.",
    secondTitle: "Les Avantages de Notre Service d’Inspection par Caméra",
    secondSubTitle: "Tranquilité d'esprit",
    secondDescription:
      "Nos plombiers spécialisés utilisent des technologies de pointe pour effectuer des inspections par caméra efficaces et fiables. Ce service permet de localiser rapidement les problèmes dans vos canalisations bouchées et de prévenir les obstructions futures, tout en minimisant les interventions inutiles.",
    details: [
      {
        title: "Diagnostic Précis et Rapide",
        description:
          "Grâce à des caméras haute définition, nous identifions les blocages et dommages avec une précision inégalée.",
      },
      {
        title: "Prévention des Problèmes à Long Terme",
        description:
          "Notre service aide à anticiper les obstructions et à protéger vos drains avec un entretien préventif adapté.",
      },
      {
        title: "Intervention Non-Invasive et Fiable",
        description:
          "L’inspection par caméra permet d’évaluer vos canalisations sans travaux destructifs, réduisant ainsi les coûts et les désagréments.",
      },
    ],
    thirdTitle:
      "Pourquoi Faire Confiance à Notre Service d’Inspection par Caméra?",
    thirdSubTitle: "Fiabilité",
    thirdDescription:
      "Chez nous, l’expertise rencontre la technologie pour offrir un service d’inspection par caméra fiable et efficace. Nos plombiers qualifiés s’appuient sur des équipements de pointe pour diagnostiquer rapidement et avec précision vos canalisations bouchées. Que ce soit pour une urgence ou un entretien préventif, nous priorisons votre satisfaction et la protection de vos installations. Avec notre disponibilité 24h/7, vous bénéficiez d’une assistance rapide et adaptée à vos besoins, à chaque intervention.",
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
};
