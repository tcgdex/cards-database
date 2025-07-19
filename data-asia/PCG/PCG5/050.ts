import {Card} from "../../../interfaces"
import Set from "../PCG5"

const card: Card = {
      set: Set,
      name: {
         en: "Geodude",
         ja: "ジオドード",
         fr: "Géodude",
         de: "Geodude",
         es: "Geodudas",
         it: "Geodude",
         pt: "Geodude",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [74],
      hp: 50,
      types: ["Fighting"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Fighting", "Colorless"],
          name: {
            en: "Selfdestruct",
            ja: "セルフデストラクト",
            fr: "Auto-destruction",
            de: "Selbstdestrukturierung",
            es: "Auto -inestructo",
            it: "Autodestrutto",
            pt: "Autodestruir",
          },
          effect: {
            en: "Does 10 damage to each Benched Pokemon (both yours and your opponent's). (Don't apply Weakness and Resistance for Benched Pokemon.) Geodude does 50 damage to itself.",
            ja: "各ベンチポケモン（あなたと対戦相手の両方）に10ダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）Geodudeはそれ自体に50のダメージを与えます。",
            fr: "Does 10 damage to each Benched Pokemon (both yours and your opponent's). (N'appliquez pas la faiblesse et la résistance des Pokémon bancés.) Geodude lui fait 50 dégâts.",
            de: "Schädigt 10 jedes Bankpokémon (sowohl Ihr als auch Ihr Gegner). (Wenden Sie keine Schwäche und Widerstand für ein Bankpokémon an.) Geodude schädigt sich 50.",
            es: "Hace 10 daños a cada Pokémon en banca (tanto el tuyo como el de tu oponente). (No aplique debilidad y resistencia para los Pokémon de banca). Geodude hace 50 daños a sí mismo.",
            it: "Fa 10 danni a ciascun Pokemon in panchina (sia il tuo che il tuo avversario). (Non applicare la debolezza e la resistenza per i Pokemon in panchina.) Geodude fa 50 danni a se stesso.",
            pt: "10 danos a cada Pokémon em banco (tanto o seu quanto o do seu oponente). (Não aplique fraqueza e resistência ao Pokemon em bancada.) Geodude causa 50 danos a si mesmo.",
          },
          damage: 50,
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
