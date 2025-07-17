import {Card} from "../../../interfaces"
import Set from "../VS1"

const card: Card = {
      set: Set,
      name: {
         en: "Chuck's Poliwrath",
         ja: "チャックのpoliwrath",
         fr: "Poliwrath de Chuck",
         de: "Chucks Poliwrath",
         es: "Poliwrath de Chuck",
         it: "Chuck's Poliwrath",
         pt: "Poliwrath de Chuck",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [62],
      hp: 70,
      types: ["Fighting"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Fighting", "Colorless", "Colorless"],
          name: {
            en: "Powerful Punch",
            ja: "強力なパンチ",
            fr: "Poinçon puissant",
            de: "Kraftvoller Schlag",
            es: "Poderoso golpe",
            it: "Punch potente",
            pt: "Soco poderoso",
          },
          effect: {
            en: "Don't apply Weakness or Resistance.",
            ja: "衰弱や抵抗を適用しないでください。",
            fr: "N'appliquez pas de faiblesse ou de résistance.",
            de: "Wenden Sie keine Schwäche oder Widerstand an.",
            es: "No aplique debilidad o resistencia.",
            it: "Non applicare debolezza o resistenza.",
            pt: "Não aplique fraqueza ou resistência.",
          },
          damage: 30,
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
