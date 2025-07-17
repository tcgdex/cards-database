import {Card} from "../../../interfaces"
import Set from "../E2"

const card: Card = {
      set: Set,
      name: {
         en: "Houndoom - 019/092",
         ja: "猟犬-019/092",
         fr: "Houndoom - 019/092",
         de: "Houndoom - 019/092",
         es: "HOUDOOM - 019/092",
         it: "Houndaom - 019/092",
         pt: "Houndoom - 019/092",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [229],
      hp: 80,
      types: ["Fire"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless"],
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
          cost: ["Fire", "Fire", "Colorless"],
          name: {
            en: "Burn Up",
            ja: "燃え尽きます",
            fr: "Brûler",
            de: "Verbrennen",
            es: "Consumirse completamente",
            it: "Bruciare",
            pt: "Queimar",
          },
          effect: {
            en: "Flip a coin. If tails, discard all Fire Energy cards attached to Houndoom.",
            ja: "コインをひっくり返します。尾の場合は、ハウズームに取り付けられたすべての消防型カードを捨ててください。",
            fr: "Retourner une pièce. Si Tails, jetez toutes les cartes d'énergie de tir attachées à Houndoom.",
            de: "Eine Münze drehen. Wenn Schwänze, entsorgen Sie alle mit dem Houndoom befestigten Brandenergiekarten.",
            es: "Voltea una moneda. Si las colas, desechen todas las tarjetas de energía de fuego unidas a Hoodoom.",
            it: "Capovolgi una moneta. Se le code, scartare tutte le carte di energia del fuoco collegate a Houndaom.",
            pt: "Vire uma moeda. Se caudas, descarte todos os cartões de energia de incêndio anexados ao HoundOom.",
          },
          damage: 60,
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
