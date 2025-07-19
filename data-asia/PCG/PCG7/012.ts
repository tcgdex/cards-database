import {Card} from "../../../interfaces"
import Set from "../PCG7"

const card: Card = {
      set: Set,
      name: {
         en: "Oddish (Delta Species)",
         ja: "オッディッシュ（デルタ種）",
         fr: "Oddish (espèce delta)",
         de: "Oddish (Delta -Arten)",
         es: "Oddish (especie delta)",
         it: "Oddish (Delta Species)",
         pt: "Ímpar (espécies delta)",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [43],
      hp: 40,
      types: ["Water"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Tackle",
            ja: "取り組む",
            fr: "Tacle",
            de: "Tackle",
            es: "Abordar",
            it: "Attrezzatura",
            pt: "Enfrentar",
          },
          damage: 10,
        },
        {
          cost: ["Water"],
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
            en: "Remove 2 damage counters from Oddish.",
            ja: "Oddishから2つのダメージカウンターを削除します。",
            fr: "Retirez 2 compteurs de dégâts de Odishish.",
            de: "Entfernen Sie 2 Schadenszähler von Oddish.",
            es: "Retire 2 contadores de daño de Oddish.",
            it: "Rimuovere 2 contatori di danno da Oddish.",
            pt: "Remova 2 contadores de danos da Oddish.",
          },
          damage: 10,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
      ],
};
