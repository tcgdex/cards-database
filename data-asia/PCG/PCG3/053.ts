import {Card} from "../../../interfaces"
import Set from "../PCG3"

const card: Card = {
      set: Set,
      name: {
         en: "Baltoy",
         ja: "バルトイ",
         fr: "Baltoy",
         de: "Baltoy",
         es: "Baltojo",
         it: "Baltoy",
         pt: "Baltoy",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [343],
      hp: 50,
      types: ["Fighting"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Spinning Attack",
            ja: "スピニング攻撃",
            fr: "Attaque tournante",
            de: "Spinnenangriff",
            es: "Ataque giratorio",
            it: "Attacco rotante",
            pt: "Ataque giratório",
          },
          damage: 10,
        },
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
            en: "Does 10 damage to each Benched Pokemon (both yours and your opponent's). (Don't apply Weakness and Resistance for Benched Pokemon.) Baltoy does 50 damage to itself.",
            ja: "各ベンチポケモン（あなたと対戦相手の両方）に10ダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）バルトイはそれ自体に50のダメージを与えます。",
            fr: "Fait 10 dégâts à chaque pokemon bancé (à la fois le vôtre et celui de votre adversaire). (N'appliquez pas la faiblesse et la résistance des Pokémon bancés.) Baltoy se fait 50 dégâts.",
            de: "Schädigt 10 jedes Bankpokémon (sowohl Ihr als auch Ihr Gegner). (Wenden Sie keine Schwäche und Widerstand für ein Bankpokémon an.) Baltoy schädigt sich 50.",
            es: "Hace 10 daños a cada Pokémon en banca (tanto el tuyo como el de tu oponente). (No aplique debilidad y resistencia para los Pokémon de banca). Baltoy hace 50 daños a sí mismo.",
            it: "Fa 10 danni a ciascun Pokemon in panchina (sia il tuo che il tuo avversario). (Non applicare la debolezza e la resistenza per i Pokemon in panchina.) Baltoy fa 50 danni a se stesso.",
            pt: "10 danos a cada Pokémon em banco (tanto o seu quanto o do seu oponente). (Não aplique fraqueza e resistência ao Pokemon em bancada.) Baltoy causa 50 danos a si mesmo.",
          },
          damage: 40,
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
