import {Card} from "../../../interfaces"
import Set from "../PCG9"

const card: Card = {
      set: Set,
      name: {
         en: "Taillow (Delta Species)",
         ja: "テイロウ（デルタ種）",
         fr: "Taillow (espèces delta)",
         de: "Taillow (Delta -Arten)",
         es: "Taillow (especie delta)",
         it: "Taillow (Delta Species)",
         pt: "Taillow (espécie Delta)",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [276],
      hp: 40,
      types: ["Fire"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Fire"],
          name: {
            en: "Quick Attack",
            ja: "クイック攻撃",
            fr: "Attaque rapide",
            de: "Schneller Angriff",
            es: "Ataque rápido",
            it: "Attacco rapido",
            pt: "Ataque rápido",
          },
          effect: {
            en: "Flip a coin. If heads, this attack does 10 damage plus 10 more damage.",
            ja: "コインをひっくり返します。頭の場合、この攻撃は10ダメージに加えて10ダメージを与えます。",
            fr: "Retourner une pièce. Si les têtes, cette attaque fait 10 dégâts plus 10 dégâts supplémentaires.",
            de: "Eine Münze drehen. Bei Köpfen verursacht dieser Angriff 10 Schäden plus 10 weitere Schäden.",
            es: "Voltea una moneda. Si se dirige, este ataque hace 10 daños más 10 daños más.",
            it: "Capovolgi una moneta. Se la testa, questo attacco infligge 10 danni più 10 danni in più.",
            pt: "Vire uma moeda. Se as cabeças, esse ataque causará 10 danos mais 10 mais danos.",
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
