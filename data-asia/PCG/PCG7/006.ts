import {Card} from "../../../interfaces"
import Set from "../PCG7"

const card: Card = {
      set: Set,
      name: {
         en: "Horsea (Delta Species)",
         ja: "ホース（デルタ種）",
         fr: "Horsea (espèce delta)",
         de: "Pferdesee (Delta -Arten)",
         es: "Horsea (especie delta)",
         it: "Horsea (Delta Species)",
         pt: "Horsea (espécie Delta)",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [116],
      hp: 50,
      types: ["Fire"],
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
        {
          cost: ["Fire", "Colorless"],
          name: {
            en: "Steady Firebreathing",
            ja: "安定した火の侵食",
            fr: "Incendie constant",
            de: "Stetige Feuerbrechung",
            es: "Respiración de fuego constante",
            it: "Fireshinging costante",
            pt: "Remação de fogo constante",
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
