import {Card} from "../../../interfaces"
import Set from "../PCG9"

const card: Card = {
      set: Set,
      name: {
         en: "Vibrava (Delta Species)",
         ja: "ビブラバ（デルタ種）",
         fr: "Vibrava (espèce delta)",
         de: "Vibrava (Delta -Arten)",
         es: "Vibrava (especie delta)",
         it: "Vibrava (specie delta)",
         pt: "Vibrava (espécie Delta)",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [329],
      hp: 70,
      types: ["Psychic"],
      stage: "Stage1",

      abilities: [
        {
          name: {
            en: "Psychic Wing",
            ja: "サイキックウィング",
            fr: "Aile psychique",
            de: "Psychischer Flügel",
            es: "Ala psíquica",
            it: "Ala psichica",
            pt: "Asa psíquica",
          },
          effect: {
            en: "If Vibrava has any Psychic Energy attached to it, the Retreat Cost for Vibrava is 0.",
            ja: "Vibravaに精神エネルギーが付着している場合、Vibravaのリトリートコストは0です。",
            fr: "Si Vibrava a une énergie psychique qui lui est attachée, le coût de retraite pour Vibrava est de 0.",
            de: "Wenn Vibrava eine psychische Energie hat, beträgt die Rückzugskosten für Vibrava 0.",
            es: "Si Vibrava tiene alguna energía psíquica adjunta, el costo de retiro para Vibrava es 0.",
            it: "Se Vibrava ha un'energia psichica ad essa collegata, il costo di ritiro per Vibrava è 0.",
            pt: "Se o Vibrava tiver alguma energia psíquica ligada a ela, o custo do retiro para Vibrava é 0.",
          },
      }],

      attacks: [
        {
          cost: ["Colorless", "Colorless", "Colorless"],
          name: {
            en: "Quick Blow",
            ja: "素早い打撃",
            fr: "Coup rapide",
            de: "Schneller Schlag",
            es: "Golpe rápido",
            it: "BUOGNO QUAST",
            pt: "Golpe rápido",
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
      ],
};
