import {Card} from "../../../interfaces"
import Set from "../E1"

const card: Card = {
      set: Set,
      name: {
         en: "Skarmory - 096/128",
         ja: "Skarmory -096/128",
         fr: "Skarmory - 096/128",
         de: "Skarmory - 096/128",
         es: "Skarmory - 096/128",
         it: "Skarmory - 096/128",
         pt: "Skarmory - 096/128",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [227],
      hp: 60,
      types: ["Metal"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Metal", "Colorless"],
          name: {
            en: "Steel Beak",
            ja: "鋼鉄のくちばし",
            fr: "Bec en acier",
            de: "Stahlschnabel",
            es: "Pico de acero",
            it: "Becco di acciaio",
            pt: "Bico de aço",
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
        {
          cost: ["Colorless", "Colorless", "Colorless"],
          name: {
            en: "Air Cutter",
            ja: "エアカッター",
            fr: "Coupe-air",
            de: "Luftschneider",
            es: "Cortador de aire",
            it: "Cutter d'aria",
            pt: "Cortador de ar",
          },
          effect: {
            en: "Flip a coin. If tails, this attack does nothing.",
            ja: "コインをひっくり返します。尾の場合、この攻撃は何もしません。",
            fr: "Retourner une pièce. Si Tails, cette attaque ne fait rien.",
            de: "Eine Münze drehen. Wenn Schwänze, tut dieser Angriff nichts.",
            es: "Voltea una moneda. Si Tails, este ataque no hace nada.",
            it: "Capovolgi una moneta. Se le code, questo attacco non fa nulla.",
            pt: "Vire uma moeda. Se caudas, esse ataque não faz nada.",
          },
          damage: 50,
        },
      ],

      retreat: 2,

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
