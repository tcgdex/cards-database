import {Card} from "../../../interfaces"
import Set from "../VS1"

const card: Card = {
      set: Set,
      name: {
         en: "Pryce's Piloswine",
         ja: "プライスのピロスワイン",
         fr: "Piloswine de Pryce",
         de: "Pryces Piloswine",
         es: "Piloswine de Pryce",
         it: "Pryce's Piloswine",
         pt: "Piloswine de Pryce",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [221],
      hp: 60,
      types: ["Water"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Water"],
          name: {
            en: "Super Icy Wind",
            ja: "超氷の風",
            fr: "Vent super glacé",
            de: "Super eisiger Wind",
            es: "Viento súper helado",
            it: "Vento super ghiacciato",
            pt: "Vento super gelado",
          },
          effect: {
            en: "Flip a coin. If heads, this attack does 10 damage to each of your opponent's Pokemon. Don't apply Weakness and Resistance.",
            ja: "コインをひっくり返します。頭の場合、この攻撃は相手の各ポケモンに10ダメージを与えます。衰弱と抵抗を適用しないでください。",
            fr: "Retourner une pièce. Si les têtes, cette attaque inflige 10 dégâts à chacun des pokemon de votre adversaire. N'appliquez pas la faiblesse et la résistance.",
            de: "Eine Münze drehen. Wenn dieser Angriff auf den Pokémon Ihres Gegners 10 Schaden zufügt. Wenden Sie keine Schwäche und Widerstand an.",
            es: "Voltea una moneda. Si se dirige, este ataque hace 10 daños a cada Pokémon de tu oponente. No aplique debilidad y resistencia.",
            it: "Capovolgi una moneta. Se la testa, questo attacco infligge 10 danni a ciascuno dei Pokemon del tuo avversario. Non applicare debolezza e resistenza.",
            pt: "Vire uma moeda. Se as cabeças, esse ataque causará 10 danos a cada um dos Pokémon do seu oponente. Não aplique fraqueza e resistência.",
          },
        },
        {
          cost: ["Water", "Colorless"],
          name: {
            en: "Take Down",
            ja: "降ろす",
            fr: "Démonter",
            de: "Notieren",
            es: "Derribar",
            it: "Prendere nota",
            pt: "Derrubar",
          },
          effect: {
            en: "Pryce's Piloswine does 10 damage to itself.",
            ja: "PryceのPiloswineは、それ自体に10ダメージを与えます。",
            fr: "Piloswine de Pryce lui fait 10 dégâts.",
            de: "Pryces Piloswine schädigt sich 10.",
            es: "Piloswine de Pryce hace 10 daños a sí mismo.",
            it: "Pryce's Piloswine fa 10 danni a se stesso.",
            pt: "Piloswine de Pryce causa 10 danos a si mesmo.",
          },
          damage: 30,
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "normal",
        },
      ],
};
