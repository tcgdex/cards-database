import {Card} from "../../../interfaces"
import Set from "../ADV2"

const card: Card = {
      set: Set,
      name: {
         en: "Pikachu",
         ja: "ピカチュウ",
         fr: "Pikachu",
         de: "Pikachu",
         es: "Pikachu",
         it: "Pikachu",
         pt: "Pikachu",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [25],
      hp: 50,
      types: ["Lightning"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Scratch",
            ja: "傷",
            fr: "Gratter",
            de: "Kratzen",
            es: "Rascar",
            it: "Graffio",
            pt: "Arranhar",
          },
          damage: 10,
        },
        {
          cost: ["Lightning", "Colorless", "Colorless"],
          name: {
            en: "Pika Bolt",
            ja: "ピカ・ボルト",
            fr: "Boulon pika",
            de: "Pika Bolt",
            es: "Perno de pika",
            it: "Pika Bolt",
            pt: "Parafuso de pika",
          },
          damage: 40,
        },
      ],

      retreat: 1,

};
