import {Card} from "../../../interfaces"
import Set from "../neo4"

const card: Card = {
      set: Set,
      name: {
         en: "Phanpy",
         ja: "ファンピー",
         fr: "Phanpie",
         de: "Phanpy",
         es: "Fanpía",
         it: "Fanpy",
         pt: "Phanpy",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [231],
      hp: 40,
      types: ["Fighting"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Fighting"],
          name: {
            en: "Crushing Step",
            ja: "押しつぶすステップ",
            fr: "Étape écrasante",
            de: "Quetschschritt",
            es: "Paso aplastante",
            it: "Passo schiacciante",
            pt: "Etapa de esmagamento",
          },
          effect: {
            en: "Flip a coin. If heads, this attack does 10 damage plus 10 more damage; if tails, this attack does 10 damage.",
            ja: "コインをひっくり返します。頭の場合、この攻撃は10ダメージに加えて10ダメージを与えます。尾の場合、この攻撃は10ダメージを与えます。",
            fr: "Retourner une pièce. Si les têtes, cette attaque fait 10 dégâts plus 10 dégâts supplémentaires; Si Tails, cette attaque fait 10 dégâts.",
            de: "Eine Münze drehen. Wenn Köpfe, verursacht dieser Angriff 10 Schäden plus 10 weitere Schäden; Wenn Schwänze, verursacht dieser Angriff 10 Schaden.",
            es: "Voltea una moneda. Si se dirige, este ataque hace 10 daños más 10 más de daño; Si Tails, este ataque hace 10 daños.",
            it: "Capovolgi una moneta. Se la testa, questo attacco infligge 10 danni più 10 danni in più; Se le code, questo attacco infligge 10 danni.",
            pt: "Vire uma moeda. Se as cabeças, esse ataque causará 10 danos mais 10 mais danos; Se caudas, esse ataque causa 10 danos.",
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
