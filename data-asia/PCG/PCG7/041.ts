import {Card} from "../../../interfaces"
import Set from "../PCG7"

const card: Card = {
      set: Set,
      name: {
         en: "Pikachu (Delta Species)",
         ja: "ピカチュウ（デルタ種）",
         fr: "Pikachu (espèce delta)",
         de: "Pikachu (Delta -Arten)",
         es: "Pikachu (especie delta)",
         it: "Pikachu (Delta Species)",
         pt: "Pikachu (espécie Delta)",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [25],
      hp: 50,
      types: ["Metal"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Tail Whap",
            ja: "尾のwhap",
            fr: "Bap",
            de: "Schwanzpeak",
            es: "Cola whap",
            it: "Coda whap",
            pt: "Tail Whap",
          },
          damage: 10,
        },
        {
          cost: ["Metal", "Colorless", "Colorless"],
          name: {
            en: "Steel Headbutt",
            ja: "スチールヘッドバット",
            fr: "Coup de tête en acier",
            de: "Stahlkopfbutt",
            es: "Cabezal de acero",
            it: "Headbutt in acciaio",
            pt: "Headbutt de aço",
          },
          effect: {
            en: "Flip a coin. If heads, this attack does 30 damage plus 10 more damage.",
            ja: "コインをひっくり返します。頭の場合、この攻撃は30ダメージに加えて10ダメージを与えます。",
            fr: "Retourner une pièce. Si les têtes, cette attaque fait 30 dégâts plus 10 dégâts supplémentaires.",
            de: "Eine Münze drehen. Bei Köpfen verursacht dieser Angriff 30 Schäden plus 10 weitere Schäden.",
            es: "Voltea una moneda. Si se dirige, este ataque hace 30 daños más 10 más de daño.",
            it: "Capovolgi una moneta. Se la testa, questo attacco infligge 30 danni più 10 altri danni.",
            pt: "Vire uma moeda. Se as cabeças, esse ataque causará 30 danos mais 10 mais danos.",
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
