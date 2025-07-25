import {Card} from "../../../interfaces"
import Set from "../PCG6"

const card: Card = {
      set: Set,
      name: {
         en: "Larvitar (Delta Species)",
         ja: "larvitar（デルタ種）",
         fr: "Larvitar (espèce delta)",
         de: "Larvitar (Delta -Arten)",
         es: "Larvitar (especie delta)",
         it: "Larvitar (Delta Species)",
         pt: "Larvitar (espécie Delta)",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [246],
      hp: 50,
      types: ["Fire"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Bite",
            ja: "噛む",
            fr: "Mordre",
            de: "Beißen",
            es: "Morder",
            it: "Morso",
            pt: "Morder",
          },
          damage: 10,
        },
        {
          cost: ["Fire", "Colorless"],
          name: {
            en: "Rising Lunge",
            ja: "上昇する突進",
            fr: "Fente croissante",
            de: "Steigender Longe",
            es: "Estocada",
            it: "Affondo in aumento",
            pt: "Rising Bunge",
          },
          effect: {
            en: "Flip a coin. If heads, this attack does 20 damage plus 10 more damage.",
            ja: "コインをひっくり返します。頭の場合、この攻撃は20ダメージに加えて10ダメージを与えます。",
            fr: "Retourner une pièce. Si la tête, cette attaque fait 20 dégâts plus 10 dégâts supplémentaires.",
            de: "Eine Münze drehen. Bei Köpfen verursacht dieser Angriff 20 Schäden plus 10 weitere Schäden.",
            es: "Voltea una moneda. Si se dirige, este ataque hace 20 daños más 10 más de daño.",
            it: "Capovolgi una moneta. Se la testa, questo attacco infligge 20 danni più 10 altri danni.",
            pt: "Vire uma moeda. Se as cabeças, esse ataque causará 20 danos mais 10 danos.",
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
