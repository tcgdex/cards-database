import {Card} from "../../../interfaces"
import Set from "../PCG4"

const card: Card = {
      set: Set,
      name: {
         en: "Raikou Star",
         ja: "ライコウスター",
         fr: "Star de Raikou",
         de: "Raikou Star",
         es: "Estrella de Raikou",
         it: "Raikou Star",
         pt: "Estrela de Raikou",
      },

      rarity: "Shiny rare",
      category: "Pokemon",
      dexId: [243],
      hp: 80,
      types: ["Lightning"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Lightning", "Colorless"],
          name: {
            en: "Lightning Turn",
            ja: "稲妻ターン",
            fr: "Tour de foudre",
            de: "Blitzumdrehung",
            es: "Giro del rayo",
            it: "Turno di fulmini",
            pt: "Raio de relâmpago",
          },
          effect: {
            en: "Switch Raikou {{star|this Pokemon}} with 1 of your Benched Pokemon.",
            ja: "raikou {{star | this pokemon}}をベンチしたポケモンを1枚切り替えます。",
            fr: "Switch Raikou {{Star | Ce pokemon}} avec 1 de votre pokemon banc.",
            de: "Schalten Sie Raikou {{Stern | dieses Pokemon}} mit 1 Ihrer Bank -Pokemon.",
            es: "Cambie Raikou {{Star | Este Pokémon}} con 1 de su Pokémon de banca.",
            it: "Switch Raikou {{star | this Pokemon}} con 1 del tuo Pokemon in panchina.",
            pt: "Mudar Raikou {{Star | this Pokemon}} com 1 do seu Pokemon em banco.",
          },
          damage: 20,
        },
        {
          cost: ["Lightning", "Lightning", "Lightning"],
          name: {
            en: "Meta Voltage",
            ja: "メタ電圧",
            fr: "Méta-tension",
            de: "Metaspannung",
            es: "Meta voltaje",
            it: "Meta tensione",
            pt: "Meta tensão",
          },
          effect: {
            en: "If you have less Prize cards left than your opponent, this attack does 40 damage to each of your Pokemon. (Don't apply Weakness and Resistance for Benched Pokemon.)",
            ja: "対戦相手よりも賞品が少ない場合、この攻撃はそれぞれのポケモンに40のダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
            fr: "S'il vous reste moins de cartes de prix que votre adversaire, cette attaque fait 40 dégâts à chacun de vos Pokémon. (N'appliquez pas la faiblesse et la résistance des Pokémon bancés.)",
            de: "Wenn Sie weniger Preiskarten übrig haben als Ihr Gegner, verursacht dieser Angriff für jeden Ihrer Pokémon 40 Schäden. (Wenden Sie keine Schwäche und Widerstand für das Bankpokémon an.)",
            es: "Si te quedan menos cartas de premios que tu oponente, este ataque hace 40 daños a cada uno de tus Pokémon. (No aplique debilidad y resistencia para los pokemon de banca).",
            it: "Se hai meno carte premiate rispetto al tuo avversario, questo attacco infligge 40 danni a ciascuno dei tuoi Pokemon. (Non applicare debolezza e resistenza per i Pokemon in panchina.)",
            pt: "Se você tiver menos cartões de prêmios que o seu oponente, esse ataque causará 40 danos a cada um dos seus Pokémon. (Não aplique fraqueza e resistência a Pokemon com bancada.)",
          },
          damage: 70,
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
