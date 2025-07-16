import {Card} from "../../../interfaces"
import Set from "../PMCG1"

const card: Card = {
      set: Set,
      name: {
         en: "Hitmonchan",
         ja: "ヒットモンチャン",
         fr: "Hitmonchan",
         de: "Hitmonchan",
         es: "Hitmonchan",
         it: "Hitmonchan",
         pt: "Hitmnchan",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [107],
      hp: 70,
      types: ["Fighting"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Fighting"],
          name: {
            en: "Jab",
            ja: "ジャブ",
            fr: "Coup",
            de: "Jab",
            es: "Pinchazo",
            it: "Colpo",
            pt: "Jab",
          },
          damage: 20,
        },
        {
          cost: ["Fighting", "Fighting", "Colorless"],
          name: {
            en: "Special Punch",
            ja: "特別なパンチ",
            fr: "Poinçon spécial",
            de: "Besonderer Schlag",
            es: "Golpe especial",
            it: "Punch speciale",
            pt: "Soco especial",
          },
          damage: 40,
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "holo",
          subtype: "unlimited",
        },
        {
          type: "holo",
          subtype: "shadowless",
        },
        {
          type: "holo",
          subtype: "shadowless",
          stamp: ["1st edition"],
        },
      ],
};
