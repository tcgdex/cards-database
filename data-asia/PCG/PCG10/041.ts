import {Card} from "../../../interfaces"
import Set from "../PCG10"

const card: Card = {
      set: Set,
      name: {
         en: "Dusclops",
         ja: "Dusclops",
         fr: "Dusclops",
         de: "Dusclops",
         es: "Dusclops",
         it: "Dusclops",
         pt: "DUSCLOPS",
      },

      rarity: "Unknown",
      category: "Pokemon",
      dexId: [356],
      hp: 80,
      types: ["Psychic"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Psychic", "Colorless"],
          name: {
            en: "Dark Mind",
            ja: "暗い心",
            fr: "Esprit sombre",
            de: "Dunkler Verstand",
            es: "Mente oscura",
            it: "Mente oscura",
            pt: "Mente sombria",
          },
          effect: {
            en: "Does 20 damage to 1 of your opponent's Benched Pokemon. (Don't apply Weakness and Resistance for Benched Pokemon.)",
            ja: "対戦相手のベンチポケモンの1つに20のダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
            fr: "Fait 20 dégâts à 1 des pokemon bancés de votre adversaire. (N'appliquez pas la faiblesse et la résistance des Pokémon bancés.)",
            de: "Schädigt 20 an einem Pokémon Ihres Gegners das Bank -Bank -Pokémon. (Wenden Sie keine Schwäche und Widerstand für das Bankpokémon an.)",
            es: "Hace 20 daños a 1 de los pokemon de banca de tu oponente. (No aplique debilidad y resistencia para los pokemon de banca).",
            it: "Fa 20 danni a 1 del Pokemon in panchina del tuo avversario. (Non applicare debolezza e resistenza per i Pokemon in panchina.)",
            pt: "20 danos a 1 dos Pokémon bancos do seu oponente. (Não aplique fraqueza e resistência a Pokemon com bancada.)",
          },
          damage: 20,
        },
        {
          cost: ["Psychic", "Colorless", "Colorless"],
          name: {
            en: "Mysterious Light",
            ja: "神秘的な光",
            fr: "Lumière mystérieuse",
            de: "Mysteriöses Licht",
            es: "Luz misteriosa",
            it: "Luce misteriosa",
            pt: "Luz misteriosa",
          },
          effect: {
            en: "If 79 is in play, the Defending Pokemon is now Confused.",
            ja: "79が再生されている場合、防御ポケモンは混乱しています。",
            fr: "Si 79 est en jeu, le Pokémon en défense est maintenant confus.",
            de: "Wenn 79 im Spiel ist, ist das verteidigende Pokémon jetzt verwirrt.",
            es: "Si 79 está en juego, el Pokémon defensor ahora está confundido.",
            it: "If 79 is in play, the Defending Pokemon is now Confused.",
            pt: "Se 79 estiver em jogo, o Pokémon atual está agora confuso.",
          },
          damage: 50,
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "normal",
        },
      ],
};
