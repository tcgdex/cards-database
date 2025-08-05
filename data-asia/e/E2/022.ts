import {Card} from "../../../interfaces"
import Set from "../E2"

const card: Card = {
      set: Set,
      name: {
         en: "Goldeen",
         ja: "ゴールデン",
         fr: "Or",
         de: "Goldene",
         es: "Goldeen",
         it: "Goldoen",
         pt: "Goldeen",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [118],
      hp: 40,
      types: ["Water"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Knock Away",
            ja: "ノックアウトします",
            fr: "Faire tomber",
            de: "Klopfen",
            es: "Tirar",
            it: "Bussare",
            pt: "Bata",
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
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
