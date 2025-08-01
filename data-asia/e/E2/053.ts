import {Card} from "../../../interfaces"
import Set from "../E2"

const card: Card = {
      set: Set,
      name: {
         en: "Phanpy",
         ja: "ファンピー",
         fr: "Phanpie",
         de: "Phanpy",
         es: "Fanpía",
         it: "Fanpy",
         pt: "Phanpy",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [231],
      hp: 40,
      types: ["Fighting"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Flail",
            ja: "フレイル",
            fr: "Fléau",
            de: "Drehfutter",
            es: "Mayal",
            it: "Flagello",
            pt: "Flail",
          },
          effect: {
            en: "This attack does 10 damage times the number of damage counters on Phanpy.",
            ja: "この攻撃は、Phanpyのダメージ数の数の10回のダメージを与えます。",
            fr: "Cette attaque fait 10 dégâts le nombre de compteurs de dégâts sur Phanpy.",
            de: "Dieser Angriff verursacht 10 Schadenszeiten der Anzahl der Schäden auf der Phanpy.",
            es: "Este ataque hace 10 veces el número de contadores de daño en Phanpy.",
            it: "Questo attacco fa 10 danni volte il numero di contatori di danno su Fanpy.",
            pt: "Este ataque causa 10 danos vezes o número de contadores de danos na Phanpy.",
          },
        },
        {
          cost: ["Fighting", "Colorless"],
          name: {
            en: "Rollout",
            ja: "ロールアウトする",
            fr: "Dérouler",
            de: "Ausrollen",
            es: "Despliegue",
            it: "Lancio",
            pt: "Sair da cama",
          },
          damage: 20,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
        {
          type: "normal",
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
