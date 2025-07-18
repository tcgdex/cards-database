import {Card} from "../../../interfaces"
import Set from "../ADV3"

const card: Card = {
      set: Set,
      name: {
         en: "Barboach",
         ja: "バルボハ",
         fr: "Barboard",
         de: "Barboach",
         es: "Barboach",
         it: "Barboach",
         pt: "Barboach",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [339],
      hp: 50,
      types: ["Water"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
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
        {
          cost: ["Fighting", "Colorless"],
          name: {
            en: "Mud Slap",
            ja: "泥の平手打ち",
            fr: "Gifle de boue",
            de: "Schlammschlag",
            es: "Bofetada",
            it: "Schiaffo di fango",
            pt: "Tapa na lama",
          },
          damage: 20,
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
