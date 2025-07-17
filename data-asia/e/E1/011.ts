import {Card} from "../../../interfaces"
import Set from "../E1"

const card: Card = {
      set: Set,
      name: {
         en: "Goldeen",
         ja: "ゴールデン",
         fr: "Or",
         de: "Goldene",
         es: "Goldeen",
         it: "Goldoen",
         pt: "Goldeen",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [118],
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
      ],

      retreat: 1,

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
