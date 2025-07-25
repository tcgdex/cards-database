import {Card} from "../../../interfaces"
import Set from "../PCG4"

const card: Card = {
      set: Set,
      name: {
         en: "Yanma",
         ja: "ヤンマ",
         fr: "Yanma",
         de: "Yanma",
         es: "Yanma",
         it: "Yanma",
         pt: "Yanma",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [193],
      hp: 60,
      types: ["Grass"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Grand Loop",
            ja: "グランドループ",
            fr: "Grande boucle",
            de: "Grand Loop",
            es: "Grand Loop",
            it: "Grand Loop",
            pt: "Grand Loop",
          },
          effect: {
            en: "Draw 2 cards. You may switch Yanma with 1 of your Benched Pokemon.",
            ja: "2枚のカードを描きます。 Yanmaをベンチ付きポケモン1枚で切り替えることができます。",
            fr: "Dessinez 2 cartes. Vous pouvez changer de Yanma avec 1 de votre Pokémon banc.",
            de: "Zeichnen Sie 2 Karten. Sie können Yanma mit 1 Ihrer Bank -Pokemon wechseln.",
            es: "Dibuja 2 cartas. Puede cambiar Yanma con 1 de su Pokémon de banca.",
            it: "Disegna 2 carte. Puoi cambiare Yanma con 1 del tuo Pokemon in panchina.",
            pt: "Desenhe 2 cartas. Você pode trocar de Yanma com 1 do seu Pokémon em banco.",
          },
        },
        {
          cost: ["Grass", "Colorless"],
          name: {
            en: "Spinning Tail",
            ja: "尾を回します",
            fr: "Queue de rotation",
            de: "Spinnenschwanz",
            es: "Cola giratoria",
            it: "Coda rotante",
            pt: "Cauda giratória",
          },
          effect: {
            en: "Flip a coin. If heads, this attack does 20 damage to each of your opponent's Pokemon. (Don't apply Weakness and Resistance for Benched Pokemon.)",
            ja: "コインをひっくり返します。頭の場合、この攻撃は相手の各ポケモンに20のダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
            fr: "Retourner une pièce. Si les têtes, cette attaque inflige 20 dégâts à chacun des Pokémon de votre adversaire. (N'appliquez pas la faiblesse et la résistance des Pokémon bancés.)",
            de: "Eine Münze drehen. Wenn dieser Angriff den Pokémon Ihres Gegners 20 Schäden an den Pokémon Ihres Gegners verursacht. (Wenden Sie keine Schwäche und Widerstand für das Bankpokémon an.)",
            es: "Voltea una moneda. Si se dirige, este ataque hace 20 daños a cada Pokémon de tu oponente. (No aplique debilidad y resistencia para los pokemon de banca).",
            it: "Capovolgi una moneta. Se la testa, questo attacco infligge 20 danni a ciascuno dei Pokemon del tuo avversario. (Non applicare debolezza e resistenza per i Pokemon in panchina.)",
            pt: "Vire uma moeda. Se as cabeças, esse ataque causará 20 danos a cada um dos Pokémon do seu oponente. (Não aplique fraqueza e resistência a Pokemon com bancada.)",
          },
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
