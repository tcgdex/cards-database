import {Card} from "../../../interfaces"
import Set from "../PMCG5"

const card: Card = {
      set: Set,
      name: {
         en: "Brock's Golbat",
         ja: "ブロックのゴルバット",
         fr: "Brock's Golbat",
         de: "Brocks Golbat",
         es: "Golbat de Brock",
         it: "Brock's Golbat",
         pt: "Golbat de Brock",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [42],
      hp: 70,
      types: ["Grass"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Dive",
            ja: "ダイビング",
            fr: "Plonger",
            de: "Tauchen",
            es: "Bucear",
            it: "Tuffo",
            pt: "Mergulho",
          },
          damage: 20,
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
            en: "Does 10 damage to each of your opponent's Pokemon. Don't apply Weakness and Resistance.",
            ja: "対戦相手の各ポケモンに10ダメージを与えます。衰弱と抵抗を適用しないでください。",
            fr: "Fait 10 dégâts à chacun des pokémon de votre adversaire. N'appliquez pas la faiblesse et la résistance.",
            de: "Schädigt 10 das Pokémon Ihres Gegners. Wenden Sie keine Schwäche und Widerstand an.",
            es: "Hace 10 daños a cada Pokémon de tu oponente. No aplique debilidad y resistencia.",
            it: "Fa 10 danni a ciascuno dei Pokemon del tuo avversario. Non applicare debolezza e resistenza.",
            pt: "10 danos a cada um dos Pokémon do seu oponente. Não aplique fraqueza e resistência.",
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
