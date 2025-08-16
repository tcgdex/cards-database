import {Card} from "../../../interfaces"
import Set from "../neo1"

const card: Card = {
      set: Set,
      name: {
         en: "Pichu",
         ja: "ピチュ",
         fr: "Pichu",
         de: "Pichu",
         es: "Pichu",
         it: "Pichu",
         pt: "Pichu",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [172],
      hp: 30,
      types: ["Lightning"],
      stage: "Baby",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Zzzap",
            ja: "zzzap",
            fr: "Zzzap",
            de: "Zzzap",
            es: "Zzzap",
            it: "ZZZAP",
            pt: "Zzzap",
          },
          effect: {
            en: "Does 20 damage to each Pokemon in play that has a Pokemon Power. Don't apply Weakness and Resistance.",
            ja: "ポケモンパワーを持つプレイ中の各ポケモンに20のダメージを与えます。衰弱と抵抗を適用しないでください。",
            fr: "Fait 20 dégâts à chaque pokemon en jeu qui a une puissance Pokémon. N'appliquez pas la faiblesse et la résistance.",
            de: "Schädigt jedes Pokémon im Spiel, das eine Pokemon -Leistung hat. Wenden Sie keine Schwäche und Widerstand an.",
            es: "Hace 20 daños a cada Pokémon en juego que tiene un poder de Pokémon. No aplique debilidad y resistencia.",
            it: "Fa 20 danni ad ogni Pokemon in gioco che ha una potenza di Pokemon. Non applicare debolezza e resistenza.",
            pt: "Causa 20 danos a cada Pokémon em jogo que tem uma potência de Pokemon. Não aplique fraqueza e resistência.",
          },
        },
      ],


      variants: [
        {
          type: "holo",
        },
      ],
};
