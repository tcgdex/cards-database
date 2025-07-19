import {Card} from "../../../interfaces"
import Set from "../PCG9"

const card: Card = {
      set: Set,
      name: {
         en: "Dratini (Delta Species)",
         ja: "ドラチーニ（デルタ種）",
         fr: "Dratini (espèces delta)",
         de: "Dratini (Delta -Arten)",
         es: "Dratini (especie delta)",
         it: "Dratini (Delta Species)",
         pt: "Dratini (espécie Delta)",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [147],
      hp: 40,
      types: ["Grass"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Ram",
            ja: "ラム",
            fr: "Bélier",
            de: "RAM",
            es: "RAM",
            it: "RAM",
            pt: "Bater",
          },
          damage: 10,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
          subtype: "unlimited',
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
