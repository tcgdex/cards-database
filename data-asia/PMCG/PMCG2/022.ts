import {Card} from "../../../interfaces"
import Set from "../PMCG2"

const card: Card = {
      set: Set,
      name: {
         en: "Seaking",
         ja: "航海",
         fr: "Coulant",
         de: "Seckung",
         es: "Pasta",
         it: "Seaking",
         pt: "Seaking",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [119],
      hp: 70,
      types: ["Water"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Water"],
          name: {
            en: "Horn Attack",
            ja: "ホーン攻撃",
            fr: "Attaque de corne",
            de: "Hornangriff",
            es: "Ataque",
            it: "Attacco del corno",
            pt: "Ataque de chifre",
          },
          damage: 10,
        },
        {
          cost: ["Water", "Colorless"],
          name: {
            en: "Waterfall",
            ja: "滝",
            fr: "Cascade",
            de: "Wasserfall",
            es: "Cascada",
            it: "Cascata",
            pt: "Cachoeira",
          },
          damage: 30,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
      ],
};
