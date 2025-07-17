import {Card} from "../../../interfaces"
import Set from "../PMCG3"

const card: Card = {
      set: Set,
      name: {
         en: "Weezing",
         ja: "おしっこ",
         fr: "Faire de la pointe",
         de: "Weezing",
         es: "Weezing",
         it: "Weezing",
         pt: "Weezing",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [110],
      hp: 60,
      types: ["Grass"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Grass", "Grass"],
          name: {
            en: "Smog",
            ja: "スモッグ",
            fr: "Smog",
            de: "SMOG",
            es: "Niebla tóxica",
            it: "Smog",
            pt: "Fumaça",
          },
          effect: {
            en: "Flip a coin. If heads, the Defending Pokemon is now Poisoned.",
            ja: "コインをひっくり返します。頭の場合、防御ポケモンは現在毒されています。",
            fr: "Retourner une pièce. Si les têtes, le Pokémon en défense est maintenant empoisonné.",
            de: "Eine Münze drehen. Wenn Köpfe, ist das verteidigende Pokemon jetzt vergiftet.",
            es: "Voltea una moneda. Si se dirige, el Pokémon defensor ahora está envenenado.",
            it: "Capovolgi una moneta. Se la testa, il Pokemon in carica è ora avvelenato.",
            pt: "Vire uma moeda. Se as cabeças, o pokemon atual agora está envenenado.",
          },
          damage: 20,
        },
        {
          cost: ["Grass", "Grass", "Colorless"],
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
            en: "Does 10 damage to each Pokemon on each player's Bench. (Don't apply Weakness and Resistance for Benched Pokemon.) Weezing does 60 damage to itself.",
            ja: "各プレイヤーのベンチで各ポケモンに10ダメージを与えます。 （ベンチ付きポケモンに衰弱と抵抗を適用しないでください。）Weezingはそれ自体に60のダメージを与えます。",
            fr: "Fait 10 dégâts à chaque pokemon sur le banc de chaque joueur. (N'appliquez pas la faiblesse et la résistance des Pokémon bancés.) Le Weezing se fait 60 dégâts.",
            de: "Schädigt jedes Pokémon auf der Bank jedes Spielers. (Wenden Sie keine Schwäche und Widerstand für ein Bankpokémon an.) Weezing schädigt sich 60.",
            es: "Hace 10 daños a cada Pokémon en el banco de cada jugador. (No aplique debilidad y resistencia para los Pokémon de banca). Weezing hace 60 daños a sí mismo.",
            it: "Fa 10 danni a ogni Pokemon sulla panchina di ogni giocatore. (Non applicare la debolezza e la resistenza per i Pokemon in panchina.) Weezing fa 60 danni a se stesso.",
            pt: "10 danos a cada Pokémon no banco de cada jogador. (Não aplique fraqueza e resistência ao Pokémon em banco.) Weezing causa 60 danos a si mesmo.",
          },
          damage: 60,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
          subtype: "unlimited",
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
