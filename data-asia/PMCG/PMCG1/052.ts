import {Card} from "../../../interfaces"
import Set from "../PMCG1"

const card: Card = {
      set: Set,
      name: {
         en: "Diglett",
         ja: "ディグレット",
         fr: "Diglett",
         de: "Diglett",
         es: "Diglett",
         it: "Diglett",
         pt: "Diglett",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [50],
      hp: 30,
      types: ["Fighting"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Fighting"],
          name: {
            en: "Dig",
            ja: "掘る",
            fr: "Creuser",
            de: "Graben",
            es: "Excavar",
            it: "Scavare",
            pt: "Escavação",
          },
          damage: 10,
        },
        {
          cost: ["Fighting", "Fighting"],
          name: {
            en: "Mud Slap",
            ja: "泥の平手打ち",
            fr: "Gifle de boue",
            de: "Schlammschlag",
            es: "Bofetada",
            it: "Schiaffo di fango",
            pt: "Tapa na lama",
          },
          damage: 30,
        },
      ],


      variants: [
        {
          type: "normal",
          subtype: "unlimited",
        },
        {
          type: "normal",
          subtype: "shadowless",
        },
        {
          type: "normal",
          subtype: "shadowless",
          stamp: ["1st edition"],
        },
      ],
};
