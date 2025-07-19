import {Card} from "../../../interfaces"
import Set from "../PCG8"

const card: Card = {
      set: Set,
      name: {
         en: "Grumpig",
         ja: "Grumpig",
         fr: "Grincheux",
         de: "Grumpig",
         es: "Grumpig",
         it: "Grumpig",
         pt: "Grumpig",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [326],
      hp: 80,
      types: ["Psychic"],
      stage: "Stage1",

      abilities: [
        {
          name: {
            en: "Thick Fat",
            ja: "厚い脂肪",
            fr: "Graisse épaisse",
            de: "Dickes Fett",
            es: "Grasa gruesa",
            it: "Grasso spesso",
            pt: "Gordura espessa",
          },
          effect: {
            en: "Any damage done to Grumpig by attacks from Fire PokÃ©mon and Water PokÃ©mon is reduced by 30 (after applying Weakness and Resistance).",
            ja: "FirePokã©MonとWaterPokã©Monからの攻撃によるGrumpigに与えられた損害は、30減少します（脱力感と抵抗を適用した後）。",
            fr: "Tout dommage causé à Grumpig par des attaques de Poké de feu et de l'eau Pokã © Mon est réduit de 30 (après avoir appliqué une faiblesse et une résistance).",
            de: "Alle Schäden an Grumpig durch Angriffe von FIRE POKé Mon Mon und Water Poké Mon werden um 30 reduziert (nach Auftragen von Schwäche und Widerstand).",
            es: "Cualquier daño causado a Grumpig por ataques del fuego Poké Mon y Water Poké Mon se reduce en 30 (después de aplicar debilidad y resistencia).",
            it: "Qualsiasi danno arrecato a Grumpig dagli attacchi del fuoco di POKSE e l'acqua Poké mon è ridotto di 30 (dopo aver applicato la debolezza e la resistenza).",
            pt: "Qualquer dano causado a Grumpig por ataques de incêndio Poké e Poké Mon é reduzido em 30 (depois de aplicar fraqueza e resistência).",
          },
      }],

      attacks: [
        {
          cost: ["Psychic", "Psychic", "Colorless"],
          name: {
            en: "Circular Steps",
            ja: "円形のステップ",
            fr: "Étapes circulaires",
            de: "Rundschritte",
            es: "Escalones circulares",
            it: "Passi circolari",
            pt: "Passos circulares",
          },
          effect: {
            en: "Does 10 damage times the number of Pokemon in play (both yours and your opponent's), excluding Grumpig.",
            ja: "Grumpigを除く、Pokemonの数（あなたと対戦相手の両方）の数を10回ダメージします。",
            fr: "Fait 10 dégâts fois le nombre de Pokémon en jeu (à la fois le vôtre et celui de votre adversaire), à l'exclusion de Grumpig.",
            de: "Hat 10 Schadenszeiten die Anzahl der Pokemon im Spiel (sowohl dein als auch dein und deines Gegners), ausgenommen Grumpig.",
            es: "Hace 10 veces el número de Pokémon en juego (tanto el tuyo como el de tu oponente), excluyendo Grumpig.",
            it: "Fa 10 danni volte il numero di Pokemon in gioco (sia il tuo che il tuo avversario), escluso Grumpig.",
            pt: "10 danos vezes o número de Pokemon em jogo (tanto o seu quanto o do seu oponente), excluindo Grumpig.",
          },
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "holo",
          subtype: "unlimited",
        },
      ],
};
