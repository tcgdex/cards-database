import {Card} from "../../../interfaces"
import Set from "../PMCG3"

const card: Card = {
      set: Set,
      name: {
         en: "Magneton",
         ja: "マグネトン",
         fr: "Magnéton",
         de: "Magneton",
         es: "Magnetón",
         it: "Magneton",
         pt: "Magneton",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [82],
      hp: 80,
      types: ["Lightning"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Lightning", "Colorless"],
          name: {
            en: "Sonicboom",
            ja: "Sonicboom",
            fr: "Sonicboom",
            de: "Sonicboom",
            es: "Sonicboom",
            it: "Sonicboom",
            pt: "Sonicboom",
          },
          effect: {
            en: "Don't apply Weakness and Resistance for this attack. (Any other effects that would happen after applying Weakness and Resistance still happen.)",
            ja: "この攻撃に衰弱と抵抗を適用しないでください。 （衰弱と抵抗を適用した後に発生する他の効果はまだ起こります。）",
            fr: "N'appliquez pas la faiblesse et la résistance pour cette attaque. (Tout autre effet qui se produirait après avoir appliqué une faiblesse et une résistance se produit.)",
            de: "Wenden Sie keine Schwäche und Widerstand für diesen Angriff an. (Alle anderen Effekte, die nach der Anwendung von Schwächen und Widerstand auftreten würden.)",
            es: "No aplique debilidad y resistencia para este ataque. (Cualquier otro efecto que suceda después de aplicar debilidad y resistencia aún ocurre).",
            it: "Non applicare debolezza e resistenza per questo attacco. (Qualsiasi altro effetto che si verificherebbe dopo aver applicato la debolezza e la resistenza.)",
            pt: "Não aplique fraqueza e resistência a este ataque. (Quaisquer outros efeitos que aconteceriam após aplicar fraqueza e resistência ainda acontecem.)",
          },
          damage: 20,
        },
        {
          cost: ["Lightning", "Lightning", "Lightning", "Lightning"],
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
            en: "Does 20 damage to each Pokemon on each player's Bench. (Don't apply Weakness and Resistance for Benched Pokemon.) Magneton does 100 damage to itself.",
            ja: "各プレイヤーのベンチで各ポケモンに20のダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）マグネトンはそれ自体に100のダメージを与えます。",
            fr: "Fait 20 dégâts à chaque pokemon sur le banc de chaque joueur. (N'appliquez pas la faiblesse et la résistance des Pokémon bancés.) Magneton se fait 100 dégâts.",
            de: "Schädigt jedes Pokémon 20 auf der Bank jedes Spielers. (Wenden Sie keine Schwäche und Widerstand für das Bank -Pokémon an.) Magneton schädigt sich 100 Schäden an sich.",
            es: "Hace 20 daños a cada Pokémon en el banco de cada jugador. (No aplique debilidad y resistencia para los Pokémon de banca). Magneton hace 100 daños a sí mismo.",
            it: "Fa 20 danni a ciascun Pokemon sulla panchina di ogni giocatore. (Non applicare la debolezza e la resistenza per i Pokemon in panchina.) Magneton fa 100 danni a se stesso.",
            pt: "Causam 20 danos a cada Pokémon no banco de cada jogador. (Não aplique fraqueza e resistência ao Pokemon em bancada.) Magneton causa 100 danos a si mesmo.",
          },
          damage: 100,
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "holo",
          subtype: "unlimited",
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
