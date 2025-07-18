import {Card} from "../../../interfaces"
import Set from "../VS1"

const card: Card = {
      set: Set,
      name: {
         en: "Pryce's Delibird",
         ja: "プライスのデリビード",
         fr: "Delibird de Pryce",
         de: "Pryces Delibird",
         es: "Delibird de Pryce",
         it: "Pryce's Delibird",
         pt: "Delibird de Pryce",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [225],
      hp: 50,
      types: ["Water"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Water", "Colorless"],
          name: {
            en: "Ice Throw",
            ja: "アイススロー",
            fr: "Lancer de glace",
            de: "Eiswurf",
            es: "Lanzamiento de hielo",
            it: "Lancio di ghiaccio",
            pt: "Gelo",
          },
          effect: {
            en: "For each of your opponent's Pokemon, flip a coin. If heads, this attack does 10 damage to that Pokemon. Don't apply Weakness and Resistance.",
            ja: "対戦相手のポケモンごとに、コインをひっくり返します。頭の場合、この攻撃はそのポケモンに10ダメージを与えます。衰弱と抵抗を適用しないでください。",
            fr: "Pour chacun des Pokémon de votre adversaire, retournez une pièce. Si les têtes, cette attaque fait 10 dégâts à ce Pokémon. N'appliquez pas la faiblesse et la résistance.",
            de: "Für jedes Pokémon Ihres Gegners drehen Sie eine Münze. Wenn dieser Angriff dieses Pokémon schädigt. Wenden Sie keine Schwäche und Widerstand an.",
            es: "Para cada Pokémon de tu oponente, voltea una moneda. Si se dirige, este ataque hace 10 daños a ese Pokémon. No aplique debilidad y resistencia.",
            it: "Per ciascuno dei Pokemon del tuo avversario, capovolgi una moneta. Se la testa, questo attacco infligge 10 danni a quel pokemon. Non applicare debolezza e resistenza.",
            pt: "Para cada um dos Pokémon do seu oponente, vire uma moeda. Se as cabeças, esse ataque causará 10 danos a esse Pokémon. Não aplique fraqueza e resistência.",
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
