import {Card} from "../../../interfaces"
import Set from "../PCG8"

const card: Card = {
      set: Set,
      name: {
         en: "Spearow",
         ja: "槍",
         fr: "Landeur",
         de: "Spearow",
         es: "Lanza",
         it: "Lancia",
         pt: "Spearow",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [21],
      hp: 40,
      types: ["Colorless"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Spearhead",
            ja: "スピアヘッド",
            fr: "Fer de lance",
            de: "Speerspitze",
            es: "Punta de lanza",
            it: "Lancia",
            pt: "Ponta de lança",
          },
          effect: {
            en: "Draw a card.",
            ja: "カードを描きます。",
            fr: "Dessinez une carte.",
            de: "Zeichnen Sie eine Karte.",
            es: "Dibuja una carta.",
            it: "Disegna una carta.",
            pt: "Desenhe uma carta.",
          },
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
          subtype: "unlimited",
        },
      ],
};
