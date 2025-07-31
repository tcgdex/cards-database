import {Card} from "../../../interfaces"
import Set from "../neo2"

const card: Card = {
      set: Set,
      name: {
         en: "Pineco",
         ja: "Pineco",
         fr: "Pignon",
         de: "Pineco",
         es: "Pineco",
         it: "Pineco",
         pt: "Pineco",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [204],
      hp: 40,
      types: ["Grass"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Grass"],
          name: {
            en: "Burst",
            ja: "バースト",
            fr: "Éclatement",
            de: "Platzen",
            es: "Explosión",
            it: "Scoppiare",
            pt: "Explodido",
          },
          effect: {
            en: "Flip a coin. If heads, Pineco does 40 damage to itself and 10 damage to each Pokemon on each player's Bench. (Don't apply Weakness and Resistance for Benched Pokemon.) Flip a coin. If tails, this attack does nothing (not even damage).",
            ja: "コインをひっくり返します。頭の場合、Pinecoはそれ自体に40のダメージを与え、各プレイヤーのベンチで各ポケモンに10ダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）コインをひっくり返します。尾の場合、この攻撃は何もしません（ダメージさえありません）。",
            fr: "Retourner une pièce. Si la tête, Pineco fait 40 dégâts à lui-même et 10 dégâts à chaque pokemon sur le banc de chaque joueur. (N'appliquez pas la faiblesse et la résistance des pokémon bancés.) Retourner une pièce. Si Tails, cette attaque ne fait rien (pas même de dégâts).",
            de: "Eine Münze drehen. Wenn Sie Köpfe haben, schadet Pineco 40 Schaden an sich selbst und 10 Schäden an jedem Pokémon auf der Bank jedes Spielers. (Wenden Sie keine Schwäche und Widerstand für ein Bankpokémon an.) Eine Münze drehen. Wenn Schwänze, tut dieser Angriff nichts (nicht einmal Schaden).",
            es: "Voltea una moneda. Si se dirige, Pineco hace 40 daños y 10 daños a cada Pokémon en el banco de cada jugador. (No aplique debilidad y resistencia para los pokemon de banca). Voltee una moneda. Si Tails, este ataque no hace nada (ni siquiera daño).",
            it: "Capovolgi una moneta. Se le teste, Pineco infligge 40 danni a se stesso e 10 danni a ciascun Pokemon sulla panchina di ogni giocatore. (Non applicare la debolezza e la resistenza per i Pokemon in panchina.) Capoggiare una moneta. Se le code, questo attacco non fa nulla (nemmeno danni).",
            pt: "Vire uma moeda. Se as cabeças, o Pineco causará 40 danos a si mesmo e 10 danos a cada Pokemon no banco de cada jogador. (Não aplique fraqueza e resistência a Pokemon em bancada.) Vire uma moeda. Se caudas, esse ataque não faz nada (nem sequer dano).",
          },
          damage: 40,
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "normal",
        },
      ],
};
