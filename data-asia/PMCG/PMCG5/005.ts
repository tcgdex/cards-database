import {Card} from "../../../interfaces"
import Set from "../PMCG5"

const card: Card = {
      set: Set,
      name: {
         en: "Erika's Bellsprout (Lv.15)",
         ja: "エリカのベルスプラウト（lv.15）",
         fr: "Bellsprout d'Erika (LV.15)",
         de: "Erikas Bellsprout (lv.15)",
         es: "BellSprout de Erika (LV.15)",
         it: "Bellsprout di Erika (LV.15)",
         pt: "Bellsprout de Erika (LV.15)",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [69],
      hp: 50,
      types: ["Grass"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Careless Tackle",
            ja: "不注意なタックル",
            fr: "Tacle négligent",
            de: "Nachlässiger Tackle",
            es: "Aparejo descuidado",
            it: "Attrezzatura negligente",
            pt: "Tackle descuidado",
          },
          effect: {
            en: "Erika's Bellsprout does 10 damage to itself.",
            ja: "エリカのベルスプラウトは、それ自体に10ダメージを与えます。",
            fr: "Bellsprout d'Erika fait 10 dégâts à lui-même.",
            de: "Erikas Bellsprout schädigt sich 10.",
            es: "Bellsprout de Erika hace 10 daños a sí mismo.",
            it: "Bellsprout di Erika fa 10 danni a se stesso.",
            pt: "O Bellsprout de Erika causa 10 danos a si mesmo.",
          },
          damage: 20,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
          subtype: "unlimited",
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
