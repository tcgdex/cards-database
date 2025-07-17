import {Card} from "../../../interfaces"
import Set from "../VS1"

const card: Card = {
      set: Set,
      name: {
         en: "Bruno's Hitmonlee",
         ja: "ブルーノのヒットモンリー",
         fr: "Hitmonlee de Bruno",
         de: "Brunos Hitmonlee",
         es: "Hitmonlee de Bruno",
         it: "Hitmonlee di Bruno",
         pt: "Hitmonlee de Bruno",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [106],
      hp: 60,
      types: ["Fighting"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Kick",
            ja: "キック",
            fr: "Coup",
            de: "Kick",
            es: "Patada",
            it: "Calcio",
            pt: "Chute",
          },
          damage: 10,
        },
        {
          cost: ["Fighting", "Colorless", "Colorless"],
          name: {
            en: "Fast Kick",
            ja: "速いキック",
            fr: "Coup de pied rapide",
            de: "Schneller Kick",
            es: "Patada rápida",
            it: "Calcio veloce",
            pt: "Kick rápido",
          },
          effect: {
            en: "Don't apply Weakness or Resistance.",
            ja: "衰弱や抵抗を適用しないでください。",
            fr: "N'appliquez pas de faiblesse ou de résistance.",
            de: "Wenden Sie keine Schwäche oder Widerstand an.",
            es: "No aplique debilidad o resistencia.",
            it: "Non applicare debolezza o resistenza.",
            pt: "Não aplique fraqueza ou resistência.",
          },
          damage: 30,
        },
      ],

      retreat: 1,

};
