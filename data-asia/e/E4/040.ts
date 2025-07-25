import {Card} from "../../../interfaces"
import Set from "../E4"

const card: Card = {
      set: Set,
      name: {
         en: "Abra",
         ja: "アブラ",
         fr: "Abra",
         de: "Abra",
         es: "Abra",
         it: "Abra",
         pt: "Abra",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [63],
      hp: 40,
      types: ["Psychic"],
      stage: "Basic",

      abilities: [
        {
          name: {
            en: "Psychoflow",
            ja: "サイコフロー",
            fr: "Psychoflow",
            de: "Psychoflow",
            es: "Psicoflow",
            it: "Psychoflow",
            pt: "Psicoflow",
          },
          effect: {
            en: "As long as there is a Psychic Energy card attached to Abra, its Retreat Cost is 0.",
            ja: "ABRAに精神的エネルギーカードが付いている限り、そのリトリートコストは0です。",
            fr: "Tant qu'il y a une carte d'énergie psychique attachée à ABRA, son coût de retraite est de 0.",
            de: "Solange ABRA eine psychische Energiekarte befindet, betragen die Rückzugskosten 0.",
            es: "Mientras haya una tarjeta de energía psíquica adjunta a ABRA, su costo de retirada es 0.",
            it: "Finché c'è una carta di energia psichica collegata ad Abra, il suo costo di ritiro è 0.",
            pt: "Enquanto houver um cartão de energia psíquica anexada à ABRA, seu custo de retiro é 0.",
          },
      }],

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
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

      retreat: 1,

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
