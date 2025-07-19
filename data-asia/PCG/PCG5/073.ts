import {Card} from "../../../interfaces"
import Set from "../PCG5"

const card: Card = {
      set: Set,
      name: {
         en: "Aron",
         ja: "アロン",
         fr: "Aron",
         de: "Aron",
         es: "Arón",
         it: "Aron",
         pt: "Aron",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [304],
      hp: 50,
      types: ["Metal"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Self Charge",
            ja: "自己充電",
            fr: "Auto-charge",
            de: "Selbstladung",
            es: "Autodescrito",
            it: "Auto -carica",
            pt: "Auto -carga",
          },
          effect: {
            en: "Attach a Metal Energy card from your hand to Aron.",
            ja: "手からアロンに金属エネルギーカードを取り付けます。",
            fr: "Fixez une carte d'énergie en métal de votre main à Aron.",
            de: "Befestigen Sie eine Metall -Energiekarte von Ihrer Hand an Aron.",
            es: "Adjunte una tarjeta de energía de metal de su mano a Aron.",
            it: "Attacca una carta di energia metallica dalla mano ad Aron.",
            pt: "Prenda um cartão de energia de metal da sua mão a Aron.",
          },
        },
        {
          cost: ["Metal", "Colorless"],
          name: {
            en: "Headbutt",
            ja: "ヘッドバット",
            fr: "Coup de tête",
            de: "Headbutt",
            es: "Cabezal",
            it: "Headbutt",
            pt: "Cabeça",
          },
          damage: 20,
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "normal",
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
