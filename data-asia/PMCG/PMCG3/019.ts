import {Card} from "../../../interfaces"
import Set from "../PMCG3"

const card: Card = {
      set: Set,
      name: {
         en: "Kingler",
         ja: "キングラー",
         fr: "Roi",
         de: "Kingler",
         es: "Rey",
         it: "Kingler",
         pt: "Kingler",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [99],
      hp: 60,
      types: ["Water"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Water"],
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
            en: "Does 10 damage times the number of damage counters on Kingler.",
            ja: "キングラーのダメージ数の数を10回ダメージします。",
            fr: "Fait 10 dégâts à temps le nombre de compteurs de dégâts sur Kingler.",
            de: "Hat 10 Schadenszeiten die Anzahl der Schäden gegen Kingler.",
            es: "Hace 10 veces el número de contadores de daño en Kingler.",
            it: "Fa 10 danni volte il numero di contatori di danno su Kingler.",
            pt: "10 danos vezes o número de contadores de danos a Kingler.",
          },

        },
        {
          cost: ["Water", "Water", "Colorless"],
          name: {
            en: "Crabhammer",
            ja: "crabhammer",
            fr: "Crabhammer",
            de: "Crabhammer",
            es: "Mechón",
            it: "Crabhammer",
            pt: "Crabhammer",
          },
          damage: 40,
        },
      ],

      retreat: 3,

      variants: [
        {
          type: "normal",
        },
      ],
};
