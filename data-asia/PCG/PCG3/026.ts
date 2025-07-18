import {Card} from "../../../interfaces"
import Set from "../PCG3"

const card: Card = {
      set: Set,
      name: {
         en: "Lombre",
         ja: "ロンベル",
         fr: "Lombre",
         de: "Lombre",
         es: "Lombro",
         it: "Lombre",
         pt: "Lombre",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [271],
      hp: 70,
      types: ["Water"],
      stage: "Stage1",

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
            en: "If Lombre has any Water Energy attached to it, the Retreat Cost for Lombre is 0.",
            ja: "Lombreに水エネルギーが付着している場合、Lombreのリトリートコストは0です。",
            fr: "Si Lombre a une énergie d'eau qui y est attachée, le coût de retraite pour Lombre est de 0.",
            de: "Wenn Lombre eine Wasserenergie an sich hat, beträgt die Rückzugskosten für Lombre 0.",
            es: "Si Lombre tiene alguna energía de agua unida, el costo de retiro para Lombre es 0.",
            it: "Se Lombre ha un'energia idrica attaccata ad essa, il costo di ritiro per Lombre è 0.",
            pt: "Se o Lombre tiver alguma energia hídrica ligada a ele, o custo do retiro para o Lombre será 0.",
          },
      }],

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Ambush",
            ja: "待ち伏せ",
            fr: "Embuscade",
            de: "Hinterhalt",
            es: "Emboscada",
            it: "Agguato",
            pt: "Emboscada",
          },
          effect: {
            en: "Flip a coin. If heads, this attack does 20 damage plus 20 more damage.",
            ja: "コインをひっくり返します。頭の場合、この攻撃は20ダメージに加えて20ダメージを与えます。",
            fr: "Retourner une pièce. Si les têtes, cette attaque fait 20 dégâts plus 20 dégâts supplémentaires.",
            de: "Eine Münze drehen. Bei Köpfen verursacht dieser Angriff 20 Schäden plus 20 weitere Schäden.",
            es: "Voltea una moneda. Si se dirige, este ataque hace 20 daños más 20 más de daño.",
            it: "Capovolgi una moneta. Se la testa, questo attacco infligge 20 danni più 20 danni in più.",
            pt: "Vire uma moeda. Se as cabeças, esse ataque causará 20 danos mais 20 mais danos.",
          },
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
