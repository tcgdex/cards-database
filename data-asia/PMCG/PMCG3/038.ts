import {Card} from "../../../interfaces"
import Set from "../PMCG3"

const card: Card = {
      set: Set,
      name: {
         en: "Golem",
         ja: "ゴーレム",
         fr: "Golem",
         de: "Golem",
         es: "Golem",
         it: "GOLEM",
         pt: "Golem",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [76],
      hp: 80,
      types: ["Fighting"],
      stage: "Stage2",

      attacks: [
        {
          cost: ["Fighting", "Fighting", "Fighting", "Colorless"],
          name: {
            en: "Avalanche",
            ja: "雪崩",
            fr: "Avalanche",
            de: "Lawine",
            es: "Avalancha",
            it: "Valanga",
            pt: "Avalanche",
          },
          damage: 60,
        },
        {
          cost: ["Fighting", "Fighting", "Fighting", "Fighting"],
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
            en: "Does 20 damage to each Pokemon on each player's Bench. (Don't apply Weakness and Resistance for Benched Pokemon.) Golem does 100 damage to itself.",
            ja: "各プレイヤーのベンチで各ポケモンに20のダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）Golemはそれ自体に100のダメージを与えます。",
            fr: "Fait 20 dégâts à chaque pokemon sur le banc de chaque joueur. (N'appliquez pas la faiblesse et la résistance des Pokémon bancés.) Le golem se fait 100 dégâts.",
            de: "Schädigt jedes Pokémon 20 auf der Bank jedes Spielers. (Wenden Sie keine Schwäche und Widerstand für ein Bankpokémon an.) Golem schädigt sich 100.",
            es: "Hace 20 daños a cada Pokémon en el banco de cada jugador. (No aplique debilidad y resistencia para los Pokémon de banca). Golem hace 100 daños a sí mismo.",
            it: "Fa 20 danni a ciascun Pokemon sulla panchina di ogni giocatore. (Non applicare la debolezza e la resistenza per i Pokemon in panchina.) Golem fa 100 danni a se stesso.",
            pt: "Causam 20 danos a cada Pokémon no banco de cada jogador. (Não aplique fraqueza e resistência ao Pokemon em bancada.) Golem causa 100 danos a si mesmo.",
          },
          damage: 100,
        },
      ],

      retreat: 4,

      variants: [
        {
          type: "normal",
        },
      ],
};
