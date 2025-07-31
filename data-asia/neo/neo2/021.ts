import {Card} from "../../../interfaces"
import Set from "../neo2"

const card: Card = {
      set: Set,
      name: {
         en: "Dark Raichu",
         ja: "ダークライチュ",
         fr: "Raichu noir",
         de: "Dark Raichu",
         es: "Raichu oscuro",
         it: "Raichu oscuro",
         pt: "Raichu escuro",
      },

      rarity: "Secret Rare",
      category: "Pokemon",
      dexId: [26],
      hp: 70,
      types: ["Lightning"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Lightning", "Lightning", "Lightning"],
          name: {
            en: "Surprise Thunder",
            ja: "サプライズサンダー",
            fr: "Surprise tonnerre",
            de: "Überraschendon",
            es: "Trueno sorpresa",
            it: "Thunder a sorpresa",
            pt: "Trovão surpresa",
          },
          effect: {
            en: "Flip a coin. If heads, flip another coin. If the second coin is heads, this attack does 20 damage to each of your opponent's Benched Pokemon. If the second coin is tails, this attack does 10 damage to each of your opponent's Benched Pokemon. (Don't apply Weakness and Resistance for Benched Pokemon.)",
            ja: "コインをひっくり返します。頭の場合は、別のコインを裏返します。 2番目のコインがヘッドの場合、この攻撃は相手のベンチポケモンのそれぞれに20のダメージを与えます。 2番目のコインがテールの場合、この攻撃は相手のベンチポケモンのそれぞれに10ダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
            fr: "Retourner une pièce. Si les têtes, retournez une autre pièce. Si la deuxième pièce est la tête, cette attaque fait 20 dégâts à chacun des pokemon bancés de votre adversaire. Si la deuxième pièce est la queue, cette attaque fait 10 dégâts à chacun des pokemon bancés de votre adversaire. (N'appliquez pas la faiblesse et la résistance des Pokémon bancés.)",
            de: "Eine Münze drehen. Wenn Köpfe, drehen Sie eine andere Münze. Wenn die zweite Münze Köpfe ist, schadet dieser Angriff 20 Schäden an das Bankpokémon Ihres Gegners. Wenn die zweite Münze Schwänze ist, schadet dieser Angriff 10 Schäden an den Bankpokémon Ihres Gegners. (Wenden Sie keine Schwäche und Widerstand für das Bankpokémon an.)",
            es: "Voltea una moneda. Si se dirige, voltea otra moneda. Si la segunda moneda es cabezas, este ataque hace 20 daños a cada Pokémon de banca de tu oponente. Si la segunda moneda es Tails, este ataque hace 10 daños a cada Pokémon de banca de tu oponente. (No aplique debilidad y resistencia para los pokemon de banca).",
            it: "Capovolgi una moneta. Se la testa, capovolgi un'altra moneta. Se la seconda moneta è testa, questo attacco infligge 20 danni a ciascuno dei Pokemon in panchina del tuo avversario. Se la seconda moneta è coda, questo attacco fa 10 danni a ciascuno dei Pokemon in panchina del tuo avversario. (Non applicare debolezza e resistenza per i Pokemon in panchina.)",
            pt: "Vire uma moeda. Se cabeças, vire outra moeda. Se a segunda moeda estiver cabeças, esse ataque causará 20 danos a cada um dos Pokémon em bancada do seu oponente. Se a segunda moeda for cauda, esse ataque causará 10 danos a cada um dos Pokémon com bancada do seu oponente. (Não aplique fraqueza e resistência a Pokemon com bancada.)",
          },
          damage: 30,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "holo",
        },
      ],
};
