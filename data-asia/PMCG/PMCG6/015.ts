import {Card} from "../../../interfaces"
import Set from "../PMCG6"

const card: Card = {
      set: Set,
      name: {
         en: "Koga's Koffing (U)",
         ja: "Koga's Koffing（u）",
         fr: "Koga's Koffing (U)",
         de: "Kogas Koffing (u)",
         es: "Koga's Koffing (U)",
         it: "Koga's Koffing (U)",
         pt: "Koga's Koffing (U)",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [109],
      hp: 50,
      types: ["Grass"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Grass"],
          name: {
            en: "Smokescreen",
            ja: "煙幕",
            fr: "Écran de fumée",
            de: "Nebelwand",
            es: "Cortina de humo",
            it: "Schermo fumoso",
            pt: "Cortina de fumaça",
          },
          effect: {
            en: "If the Defending Pokemon tries to attack during your opponent's next turn, your opponent flips a coin. If tails, that attack does nothing.",
            ja: "防衛ポケモンが相手の次のターン中に攻撃を試みた場合、対戦相手はコインをひっくり返します。尾の場合、その攻撃は何もしません。",
            fr: "Si le Pokémon en défense essaie d'attaquer pendant le prochain tour de votre adversaire, votre adversaire retourne une pièce. Si Tails, cette attaque ne fait rien.",
            de: "Wenn das verteidigende Pokemon versucht, während der nächsten Runde Ihres Gegners anzugreifen, dreht Ihr Gegner eine Münze. Wenn Schwänze, tut dieser Angriff nichts.",
            es: "Si el Pokémon defensor intenta atacar durante el próximo turno de tu oponente, tu oponente voltea una moneda. Si Tails, ese ataque no hace nada.",
            it: "Se il Pokemon in carica cerca di attaccare durante il prossimo turno del tuo avversario, il tuo avversario lancia una moneta. Se la coda, quell'attacco non fa nulla.",
            pt: "Se o pokemon atual tentar atacar durante o próximo turno do seu oponente, seu oponente vira uma moeda. Se caudas, esse ataque não faz nada.",
          },
          damage: 10,
        },
        {
          cost: ["Grass", "Colorless"],
          name: {
            en: "Obscuring Gas",
            ja: "ガスを覆い隠します",
            fr: "Gaz obscurcissant",
            de: "Verschleierung von Gas",
            es: "Gas oscuro",
            it: "Oscurare il gas",
            pt: "Gás obscurecido",
          },
          effect: {
            en: "Flip a coin. If heads, shuffle Koga's Koffing and all cards attached to it into your deck (after doing damage).",
            ja: "コインをひっくり返します。ヘッドの場合、コガのコフィンをシャッフルし、すべてのカードがデッキに取り付けられています（ダメージを与えた後）。",
            fr: "Retourner une pièce. Si les têtes, mélangent Koffing de Koga et toutes les cartes qui y sont attachées dans votre deck (après avoir fait des dégâts).",
            de: "Eine Münze drehen. Wenn Sie Köpfe haben, mischen Kogas Koffing und alle Karten, die an Ihr Deck angeschlossen sind (nachdem Sie Schaden angerichtet haben).",
            es: "Voltea una moneda. Si se dirige, baraja el koffing de Koga y todas las cartas adjuntadas en su mazo (después de hacer daño).",
            it: "Capovolgi una moneta. Se la testa, shuffle Koga Koffing e tutte le carte attaccate nel tuo mazzo (dopo aver fatto danni).",
            pt: "Vire uma moeda. Se as cabeças, embaralham o Koffing de Koga e todas as cartas anexadas a ele no seu baralho (depois de causar danos).",
          },
          damage: 30,
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
