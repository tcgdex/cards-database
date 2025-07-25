import {Card} from "../../../interfaces"
import Set from "../E3"

const card: Card = {
      set: Set,
      name: {
         en: "Bellsprout - 008/087",
         ja: "Bellsprout -008/087",
         fr: "Bellsprout - 008/087",
         de: "Bellsprout - 008/087",
         es: "BellSprout - 008/087",
         it: "Bellsprout - 008/087",
         pt: "Bellsprout - 008/087",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [69],
      hp: 50,
      types: ["Grass"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Grass", "Colorless"],
          name: {
            en: "Blot",
            ja: "ブロット",
            fr: "Tache",
            de: "Blot",
            es: "Mancha",
            it: "Macchia",
            pt: "Borrão",
          },
          effect: {
            en: "Remove 1 damage counter from Bellsprout.",
            ja: "Bellsproutから1つのダメージカウンターを取り外します。",
            fr: "Retirez 1 compteur de dégâts de Bellsprout.",
            de: "Entfernen Sie 1 Schadenschalter von Bellsprout.",
            es: "Retire 1 contador de daño de BellSprout.",
            it: "Rimuovere 1 contatore di danni da BellsProut.",
            pt: "Remova 1 contador de danos do Bellsprout.",
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
          stamp: ["1st edition"],
        },
      ],
};
