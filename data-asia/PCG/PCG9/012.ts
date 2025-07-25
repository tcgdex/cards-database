import {Card} from "../../../interfaces"
import Set from "../PCG9"

const card: Card = {
      set: Set,
      name: {
         en: "Feebas (Delta Species)",
         ja: "フィーバス（デルタ種）",
         fr: "Feebas (espèces delta)",
         de: "Feebas (Delta -Arten)",
         es: "Feebas (especie delta)",
         it: "Fedebas (specie delta)",
         pt: "Feebas (espécies delta)",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [349],
      hp: 30,
      types: ["Fire"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Fire"],
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
            en: "Does 10 damage times the number of damage counters on Feebas.",
            ja: "ダメージ数のダメージ数は、Feebasのダメージ数をカウンターします。",
            fr: "Fait 10 dégâts le nombre de compteurs de dégâts sur Feebas.",
            de: "Hat 10 Schadenszeiten die Anzahl der Schadensunterschiede bei Feebas.",
            es: "Hace 10 tiempos de daño el número de contadores de daños en Feebas.",
            it: "Fa 10 danni volte il numero di contatori di danno su FEDEBA.",
            pt: "10 danos vezes o número de contadores de danos nos Feebas.",
          },
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
