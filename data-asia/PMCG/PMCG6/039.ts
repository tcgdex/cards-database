import {Card} from "../../../interfaces"
import Set from "../PMCG6"

const card: Card = {
      set: Set,
      name: {
         en: "Misty's Poliwrath",
         ja: "ミスティのポリワラス",
         fr: "Poliwrath de Misty",
         de: "Mistys Poliwrath",
         es: "Poliwrath de Misty",
         it: "Misty's Poliwrath",
         pt: "Misty's Poliwrath",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [62],
      hp: 90,
      types: ["Water"],
      stage: "Stage2",

      attacks: [
        {
          cost: ["Water", "Water", "Colorless", "Colorless"],
          name: {
            en: "Water Ring",
            ja: "ウォーターリング",
            fr: "Bague d'eau",
            de: "Wasserring",
            es: "Anillo de agua",
            it: "Anello d'acqua",
            pt: "Anel de água",
          },
          effect: {
            en: "Does 10 damage to each Pokemon that isn't Water on each player's Bench. (Don't apply Weakness and Resistance for Benched Pokemon.)",
            ja: "各プレイヤーのベンチに水がない各ポケモンに10ダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
            fr: "Fait 10 dégâts à chaque pokemon qui n'est pas de l'eau sur le banc de chaque joueur. (N'appliquez pas la faiblesse et la résistance des Pokémon bancés.)",
            de: "Schädigt 10 jedes Pokémon, das auf der Bank jedes Spielers kein Wasser ist. (Wenden Sie keine Schwäche und Widerstand für das Bankpokémon an.)",
            es: "Hace 10 daños a cada Pokémon que no es agua en el banco de cada jugador. (No aplique debilidad y resistencia para los pokemon de banca).",
            it: "Fa 10 danni ad ogni Pokemon che non è acqua sulla panchina di ogni giocatore. (Non applicare debolezza e resistenza per i Pokemon in panchina.)",
            pt: "Causa 10 danos a cada Pokémon que não é água no banco de cada jogador. (Não aplique fraqueza e resistência a Pokemon com bancada.)",
          },
          damage: 30,
        },
      ],

      retreat: 3,

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
