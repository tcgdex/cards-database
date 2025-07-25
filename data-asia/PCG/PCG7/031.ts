import {Card} from "../../../interfaces"
import Set from "../PCG7"

const card: Card = {
      set: Set,
      name: {
         en: "Carvanha (Delta Species)",
         ja: "カルバンハ（デルタ種）",
         fr: "Carvanha (espèce delta)",
         de: "Carvanha (Delta -Arten)",
         es: "Carvanha (especie delta)",
         it: "Carvanha (Delta Species)",
         pt: "Carvanha (espécie Delta)",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [318],
      hp: 40,
      types: ["Fighting"],
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
          cost: ["Fighting", "Colorless"],
          name: {
            en: "Reckless Charge",
            ja: "無謀な料金",
            fr: "Charge imprudente",
            de: "Rücksichtslose Gebühr",
            es: "Carga imprudente",
            it: "Accusa spericolata",
            pt: "Acusação imprudente",
          },
          effect: {
            en: "Flip a coin. If tails, Carvanha does 10 damage to itself.",
            ja: "コインをひっくり返します。尾の場合、Carvanhaはそれ自体に10ダメージを与えます。",
            fr: "Retourner une pièce. Si Tails, Carvanha fait 10 dégâts à lui-même.",
            de: "Eine Münze drehen. Wenn Schwänze, Carvanha schädigt sich 10.",
            es: "Voltea una moneda. Si Tails, Carvanha hace 10 daños a sí mismo.",
            it: "Capovolgi una moneta. Se code, Carvanha fa 10 danni a se stesso.",
            pt: "Vire uma moeda. Se caudas, Carvanha causa 10 danos a si mesmo.",
          },
          damage: 30,
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
