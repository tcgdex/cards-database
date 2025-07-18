import {Card} from "../../../interfaces"
import Set from "../VS1"

const card: Card = {
      set: Set,
      name: {
         en: "Falkner's Farfetch'd",
         ja: "フォークナーのファーフェッチ",
         fr: "Farfetch'd de Falkner",
         de: "Falkners Farfetch'd",
         es: "Falkner's Farfetch'd",
         it: "Falkner's Farfetch'd",
         pt: "Falkner está farfetch'd",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [83],
      hp: 50,
      types: ["Colorless"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Beat",
            ja: "ビート",
            fr: "Battre",
            de: "Schlagen",
            es: "Derrotar",
            it: "Colpo",
            pt: "Bater",
          },
          damage: 10,
        },
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Gust",
            ja: "突風",
            fr: "Rafale",
            de: "Böe",
            es: "Ráfaga",
            it: "Raffica",
            pt: "Rajada",
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
