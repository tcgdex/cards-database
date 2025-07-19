import {Card} from "../../../interfaces"
import Set from "../PCG8"

const card: Card = {
      set: Set,
      name: {
         en: "Lotad",
         ja: "lotad",
         fr: "Lotad",
         de: "Lotad",
         es: "Lotad",
         it: "Lotta",
         pt: "Lotad",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [270],
      hp: 50,
      types: ["Water"],
      stage: "Basic",

      abilities: [
        {
          name: {
            en: "Aqua Lift",
            ja: "アクアリフト",
            fr: "Aqua Lift",
            de: "Aqua Lift",
            es: "Ascensor",
            it: "Aqua Lift",
            pt: "Elevador aqua",
          },
          effect: {
            en: "If Lotad has any Water Energy attached to it, the Retreat Cost for Lotad is 0.",
            ja: "Lotadに水エネルギーが付着している場合、Lotadのリトリートコストは0です。",
            fr: "Si Lotad a une énergie d'eau qui y est attachée, le coût de retraite pour Lotad est de 0.",
            de: "Wenn Lotad Wasserenergie an sich befindet, beträgt die Rückzugskosten für Lotad 0.",
            es: "Si Lotad tiene alguna energía de agua adjunta, el costo de retiro para Lotad es 0.",
            it: "Se la loTad ha un'energia idrica attaccata ad essa, il costo di ritiro per lothed è 0.",
            pt: "Se a Lotad tiver alguma energia hídrica anexada, o custo do retiro para o LOTAD é 0.",
          },
      }],

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Rolling Tackle",
            ja: "ローリングタックル",
            fr: "Tacle roulant",
            de: "Rolling Tackle",
            es: "Tacleada",
            it: "Attrezzatura rotolante",
            pt: "Tackle rolante",
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
