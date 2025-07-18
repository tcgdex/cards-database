import {Card} from "../../../interfaces"
import Set from "../VS1"

const card: Card = {
      set: Set,
      name: {
         en: "Janine's Crobat",
         ja: "ジャニーンのクロバット",
         fr: "Crobat de Janine",
         de: "Janine's Crobat",
         es: "Crobat de Janine",
         it: "Janine's Crobat",
         pt: "Janine's Crobat",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [169],
      hp: 60,
      types: ["Grass"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Grass"],
          name: {
            en: "Supersonic",
            ja: "超音速",
            fr: "Supersonique",
            de: "Überschall",
            es: "Supersónico",
            it: "Supersonico",
            pt: "Supersônico",
          },
          effect: {
            en: "Flip a coin. If heads, the Defending Pokemon is now Confused.",
            ja: "コインをひっくり返します。頭の場合、防御ポケモンは混乱しています。",
            fr: "Retourner une pièce. Si les têtes, le Pokémon en défense est maintenant confus.",
            de: "Eine Münze drehen. Wenn Sie Köpfe haben, ist das verteidigende Pokemon jetzt verwirrt.",
            es: "Voltea una moneda. Si se dirige, el Pokémon defensor ahora está confundido.",
            it: "Capovolgi una moneta. Se la testa, il Pokemon in carica è ora confuso.",
            pt: "Vire uma moeda. Se as cabeças, o pokemon atual agora está confuso.",
          },
        },
        {
          cost: ["Colorless", "Colorless", "Colorless"],
          name: {
            en: "Spiral Dive",
            ja: "スパイラルダイビング",
            fr: "Plongée en spirale",
            de: "Spiraltauchgang",
            es: "Buceo en espiral",
            it: "Immersione a spirale",
            pt: "Mergulho em espiral",
          },
          effect: {
            en: "Does 10 damage to each of your opponent’s Pokemon. Don’t apply Weakness or Resistance.",
            ja: "対戦相手の各ポケモンに10ダメージを与えます。衰弱や抵抗を適用しないでください。",
            fr: "Fait 10 dégâts à chacun des pokemon de votre adversaire. N'appliquez pas la faiblesse ou la résistance.",
            de: "Schädigt 10 das Pokémon Ihres Gegners. Wenden Sie keine Schwäche oder Widerstand an.",
            es: "Hace 10 daños a cada Pokémon de tu oponente. No aplique debilidad o resistencia.",
            it: "Fa 10 danni a ciascuno dei Pokemon del tuo avversario. Non applicare debolezza o resistenza.",
            pt: "10 danos a cada um dos Pokémon do seu oponente. Não aplique fraqueza ou resistência.",
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
