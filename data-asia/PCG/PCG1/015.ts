import {Card} from "../../../interfaces"
import Set from "../PCG1"

const card: Card = {
      set: Set,
      name: {
         en: "Bellsprout",
         ja: "ベルスプラウト",
         fr: "Cloche",
         de: "Bellsprout",
         es: "Chaparrilla",
         it: "BellsProut",
         pt: "Bellsprout",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [69],
      hp: 50,
      types: ["Grass"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Grass"],
          name: {
            en: "Vine Whip",
            ja: "つる鞭",
            fr: "Fouet de vigne",
            de: "Rebepeitsche",
            es: "Vine látigo",
            it: "Whip di vite",
            pt: "Vine Whip",
          },
          damage: 10,
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
