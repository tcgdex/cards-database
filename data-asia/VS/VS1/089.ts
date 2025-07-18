import {Card} from "../../../interfaces"
import Set from "../VS1"

const card: Card = {
      set: Set,
      name: {
         en: "Karen's Flareon",
         ja: "カレンのフレレオン",
         fr: "Karen's Flareon",
         de: "Karen's Flareon",
         es: "Flaren de Karen",
         it: "Karen's Flareon",
         pt: "Flareon de Karen",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [136],
      hp: 60,
      types: ["Fire"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Fire", "Colorless"],
          name: {
            en: "Flare",
            ja: "フレア",
            fr: "Éclater",
            de: "Fackel",
            es: "Llamarada",
            it: "Bagliore",
            pt: "Flare",
          },
          damage: 20,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
      ],
};
