import {Card} from "../../../interfaces"
import Set from "../neo2"

const card: Card = {
      set: Set,
      name: {
         en: "Hoppip",
         ja: "ホッピップ",
         fr: "Hoppip",
         de: "Hoppip",
         es: "Hoppip",
         it: "Hoppip",
         pt: "Hoppip",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [187],
      hp: 30,
      types: ["Grass"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Grass"],
          name: {
            en: "Rolling Tackle",
            ja: "ローリングタックル",
            fr: "Tacle roulant",
            de: "Rolling Tackle",
            es: "Tacleada",
            it: "Attrezzatura rotolante",
            pt: "Tackle rolante",
          },
          damage: 20,
        },
      ],


      variants: [
        {
          type: "normal",
        },
      ],
};
