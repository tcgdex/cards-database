import {Card} from "../../../interfaces"
import Set from "../PCG2"

const card: Card = {
      set: Set,
      name: {
         en: "Beldum",
         ja: "ベルダム",
         fr: "Bêler",
         de: "Beldum",
         es: "Beldum",
         it: "Beldum",
         pt: "Beldum",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [374],
      hp: 50,
      types: ["Psychic"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Flip Over",
            ja: "ひっくり返します",
            fr: "Retourner",
            de: "Umblättern",
            es: "Voltearse",
            it: "Capovolgere",
            pt: "Vire",
          },
          effect: {
            en: "Beldum does 10 damage to itself, and don't apply Weakness and Resistance to this damage.",
            ja: "Beldumはそれ自体に10ダメージを与え、この損傷に衰弱と抵抗を適用しないでください。",
            fr: "Beldum fait 10 dégâts à lui-même et n'applique pas la faiblesse et la résistance à ces dégâts.",
            de: "Beldum schädigt sich 10 und wendet diese Schädigung nicht an Schwäche und Widerstand an.",
            es: "Beldum hace 10 daños a sí mismo y no aplica debilidad y resistencia a este daño.",
            it: "Beldum fa 10 danni a se stesso e non applica debolezza e resistenza a questo danno.",
            pt: "Beldum causa 10 danos a si mesmo e não aplica fraqueza e resistência a esse dano.",
          },
          damage: 30,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
      ],
};
