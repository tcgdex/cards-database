import {Card} from "../../../interfaces"
import Set from "../E2"

const card: Card = {
      set: Set,
      name: {
         en: "Tyrogue",
         ja: "タイログ",
         fr: "Tyrogue",
         de: "Tyrogue",
         es: "Tirógeno",
         it: "Tylogue",
         pt: "Tyrogue",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [236],
      hp: 30,
      types: ["Fighting"],
      stage: "Baby",

      attacks: [
        {
          cost: ["Fighting"],
          name: {
            en: "Energy Punch",
            ja: "エネルギーパンチ",
            fr: "Punch énergétique",
            de: "Energiepunsch",
            es: "Punzonado",
            it: "Punch energetico",
            pt: "Soco de energia",
          },
          effect: {
            en: "Flip a coin. If heads, discard a Special Energy card attached to the Defending Pokemon. If tails, this attack does nothing.",
            ja: "コインをひっくり返します。頭の場合は、防御ポケモンに取り付けられた特別なエネルギーカードを捨ててください。尾の場合、この攻撃は何もしません。",
            fr: "Retourner une pièce. Si les têtes, jetez une carte d'énergie spéciale attachée au Pokémon en défense. Si Tails, cette attaque ne fait rien.",
            de: "Eine Münze drehen. Wenn Sie Köpfe haben, verwerfen Sie eine spezielle Energiekarte, die dem verteidigenden Pokémon angeschlossen ist. Wenn Schwänze, tut dieser Angriff nichts.",
            es: "Voltea una moneda. Si se dirige, deseche una tarjeta de energía especial unida al Pokémon defensor. Si Tails, este ataque no hace nada.",
            it: "Capovolgi una moneta. Se le teste, scartare una speciale carta energetica collegata al Pokemon in difesa. Se le code, questo attacco non fa nulla.",
            pt: "Vire uma moeda. Se as cabeças, descarte um cartão de energia especial conectado ao Pokémon atual. Se caudas, esse ataque não faz nada.",
          },
          damage: 10,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
        {
          type: "normal",
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
