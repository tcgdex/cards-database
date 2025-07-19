import {Card} from "../../../interfaces"
import Set from "../PCG8"

const card: Card = {
      set: Set,
      name: {
         en: "Mudkip",
         ja: "マッドキップ",
         fr: "Boue",
         de: "Mudkip",
         es: "Mudkip",
         it: "Mudkip",
         pt: "Mudkip",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [258],
      hp: 50,
      types: ["Water"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Nap",
            ja: "昼寝",
            fr: "Somme",
            de: "Nickerchen",
            es: "Siesta",
            it: "Pisolino",
            pt: "Sesta",
          },
          effect: {
            en: "Remove 2 damage counters from Mudkip.",
            ja: "Mudkipから2つのダメージカウンターを削除します。",
            fr: "Retirez 2 compteurs de dégâts de Mudkip.",
            de: "Entfernen Sie 2 Schadenszähler von Mudkip.",
            es: "Retire 2 contadores de daño de Mudkip.",
            it: "Rimuovere 2 contatori di danno da Mudkip.",
            pt: "Remova 2 contadores de danos do Mudkip.",
          },
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
