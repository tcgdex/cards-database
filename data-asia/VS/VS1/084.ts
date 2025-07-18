import {Card} from "../../../interfaces"
import Set from "../VS1"

const card: Card = {
      set: Set,
      name: {
         en: "Bruno's Steelix",
         ja: "ブルーノのスチールス",
         fr: "Bruno's Steelix",
         de: "Brunos Steelix",
         es: "Bruno's Steelix",
         it: "Bruno's Steilix",
         pt: "Steelix de Bruno",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [208],
      hp: 80,
      types: ["Metal"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Headbutt",
            ja: "ヘッドバット",
            fr: "Coup de tête",
            de: "Headbutt",
            es: "Cabezal",
            it: "Headbutt",
            pt: "Cabeça",
          },
          damage: 10,
        },
        {
          cost: ["Fighting", "Fighting", "Colorless"],
          name: {
            en: "Rock Smash",
            ja: "ロックスマッシュ",
            fr: "Smash rock",
            de: "Rock Smash",
            es: "Rock smash",
            it: "Rock Smash",
            pt: "Rock Smash",
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

      retreat: 4,

      variants: [
        {
          type: "holo",
        },
      ],
};
