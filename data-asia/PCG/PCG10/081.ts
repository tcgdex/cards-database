import {Card} from "../../../interfaces"
import Set from "../PCG10"

const card: Card = {
      set: Set,
      name: {
         en: "Salamence ex",
         ja: "Salamence Ex",
         fr: "Salamence ex",
         de: "Salamence Ex",
         es: "Salamence ex",
         it: "Salamence Ex",
         pt: "Salamence Ex",
      },

      rarity: "Unknown",
      category: "Pokemon",
      dexId: [373],
      hp: 160,
      types: ["Colorless"],
      stage: "Stage2",

      attacks: [
        {
          cost: ["Fire", "Fire", "Colorless", "Colorless"],
          name: {
            en: "Volcanic Flame",
            ja: "火山火炎",
            fr: "Flamme volcanique",
            de: "Vulkanflamme",
            es: "Llama volcánica",
            it: "Fiamma vulcanica",
            pt: "Chama vulcânica",
          },
          effect: {
            en: "Discard the top 5 cards from your deck.",
            ja: "デッキからトップ5カードを捨ててください。",
            fr: "Jetez les 5 meilleures cartes de votre deck.",
            de: "Verwerfen Sie die Top 5 Karten von Ihrem Deck.",
            es: "Deseche las 5 cartas principales de su mazo.",
            it: "Scarta le prime 5 carte dal tuo mazzo.",
            pt: "Descarte as 5 principais cartas do seu baralho.",
          },
          damage: 150,
        },
        {
          cost: ["Water", "Water", "Colorless", "Colorless"],
          name: {
            en: "Hydro Wave",
            ja: "ハイドロウェーブ",
            fr: "Hydro Wave",
            de: "Wasserwelle",
            es: "Onda hidroeléctrica",
            it: "Wave idro",
            pt: "Onda hidrelétrica",
          },
          effect: {
            en: "Discard all Water Energy attached to Salamence ex. This attack does 30 damage to each of your opponent's Benched Pokemon. (Don't apply Weakness and Resistance for Benched Pokemon.)",
            ja: "Salamence Exに取り付けられたすべての水エネルギーを捨てます。この攻撃は、相手のベンチポケモンのそれぞれに30のダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
            fr: "Jeter toute l'énergie de l'eau attachée à la salamence ex. Cette attaque inflige 30 dégâts à chacun des pokemon bancés de votre adversaire. (N'appliquez pas la faiblesse et la résistance des Pokémon bancés.)",
            de: "Verwerfen Sie die gesamte Wasserergie, die an Salamence Ex gebunden ist. Dieser Angriff schädigt das Bankpokémon Ihres Gegners 30. (Wenden Sie keine Schwäche und Widerstand für das Bankpokémon an.)",
            es: "Deseche toda la energía del agua unida a la salamencia ex. Este ataque hace 30 daños a cada Pokémon de banca de tu oponente. (No aplique debilidad y resistencia para los pokemon de banca).",
            it: "Scartare tutta l'energia idrica attaccata alla salamence Ex. Questo attacco infligge 30 danni a ciascuno dei Pokemon in panchina del tuo avversario. (Non applicare debolezza e resistenza per i Pokemon in panchina.)",
            pt: "Descarte toda a energia da água ligada à salameência Ex. Este ataque causa 30 danos a Pokémon com bancada de cada oponente. (Não aplique fraqueza e resistência a Pokemon com bancada.)",
          },
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "normal",
        },
      ],
};
