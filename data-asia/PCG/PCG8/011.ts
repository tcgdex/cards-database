import {Card} from "../../../interfaces"
import Set from "../PCG8"

const card: Card = {
      set: Set,
      name: {
         en: "Charmander",
         ja: "チャーマンダー",
         fr: "Charmander",
         de: "Charmander",
         es: "Encanto",
         it: "Charmander",
         pt: "Charmander",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [4],
      hp: 50,
      types: ["Fire"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Retaliate",
            ja: "報復",
            fr: "User de représailles",
            de: "Revanchieren",
            es: "Tomar represalias",
            it: "Vendicarsi",
            pt: "Retaliar",
          },
          effect: {
            en: "Does 10 damage times the number of damage counters on Charmander.",
            ja: "ダメージ数のダメージ数は、チャーマンダーのダメージ数をカウンターします。",
            fr: "Fait 10 dégâts fois le nombre de compteurs de dégâts sur Charmander.",
            de: "Hat 10 Schadenszeiten die Anzahl der Schadensunterschiede am Charmander.",
            es: "Hace 10 tiempos de daño el número de contadores de daño en Charmander.",
            it: "Fa 10 danni volte il numero di contatori di danno su Charmander.",
            pt: "10 danos vezes o número de contadores de danos em Charmander.",
          },
        },
        {
          cost: ["Fire", "Colorless"],
          name: {
            en: "Flame Tail",
            ja: "炎の尾",
            fr: "Queue de flamme",
            de: "Flammenschwanz",
            es: "Cola de llamas",
            it: "Coda di fiamma",
            pt: "Cauda de chama",
          },
          damage: 20,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
          subtype: "unlimited',
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
