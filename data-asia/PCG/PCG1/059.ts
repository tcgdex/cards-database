import {Card} from "../../../interfaces"
import Set from "../PCG1"

const card: Card = {
      set: Set,
      name: {
         en: "Mankey",
         ja: "マンキー",
         fr: "Homme",
         de: "Manker",
         es: "Mankey",
         it: "Mankey",
         pt: "Mankey",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [56],
      hp: 50,
      types: ["Fighting"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Mischief",
            ja: "いたずら",
            fr: "Sottises",
            de: "Unfug",
            es: "Travesura",
            it: "Dispetto",
            pt: "Travessura",
          },
          effect: {
            en: "Shuffle your opponent's deck.",
            ja: "相手のデッキをシャッフルします。",
            fr: "Mercer le jeu de votre adversaire.",
            de: "Mischen Sie das Deck Ihres Gegners.",
            es: "Baraja la cubierta de tu oponente.",
            it: "Shuffle il mazzo del tuo avversario.",
            pt: "Embaralhar o baralho do seu oponente.",
          },
        },
        {
          cost: ["Fighting", "Colorless"],
          name: {
            en: "Light Punch",
            ja: "軽いパンチ",
            fr: "Coup de poing",
            de: "Leichter Schlag",
            es: "Ligero",
            it: "Punch leggero",
            pt: "Punchado leve",
          },
          damage: 30,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
