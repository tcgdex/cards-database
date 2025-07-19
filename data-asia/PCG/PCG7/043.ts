import {Card} from "../../../interfaces"
import Set from "../PCG7"

const card: Card = {
      set: Set,
      name: {
         en: "Magikarp (Delta Species)",
         ja: "Magikarp（デルタ種）",
         fr: "Magikarp (espèce delta)",
         de: "Magikarp (Delta -Arten)",
         es: "Magikarp (especie delta)",
         it: "Magikarp (Delta Species)",
         pt: "Magikarp (espécie Delta)",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [129],
      hp: 30,
      types: ["Metal"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Metal"],
          name: {
            en: "Splash",
            ja: "スプラッシュ",
            fr: "Éclabousser",
            de: "Spritzen",
            es: "Chapoteo",
            it: "Spruzzare",
            pt: "Respingo",
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
