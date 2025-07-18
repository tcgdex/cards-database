import {Card} from "../../../interfaces"
import Set from "../PMCG3"

const card: Card = {
      set: Set,
      name: {
         en: "Magmar",
         ja: "マグマー",
         fr: "Magmar",
         de: "Magmar",
         es: "Magmar",
         it: "Magmar",
         pt: "Magmar",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [126],
      hp: 70,
      types: ["Fire"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Fire"],
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
            en: "During your opponent's next turn, if the Defending Pokemon tries to attack, your opponent flips a coin. If tails, that attack doesn't happen.",
            ja: "対戦相手の次のターン中、防御するポケモンが攻撃しようとする場合、対戦相手はコインをひっくり返します。尾の場合、その攻撃は起こりません。",
            fr: "Au cours du prochain tour de votre adversaire, si le Pokémon en défense essaie d'attaquer, votre adversaire retourne une pièce. Si les queues, cette attaque ne se produit pas.",
            de: "Während der nächsten Runde Ihres Gegners, wenn das verteidigende Pokemon versucht, anzugreifen, dreht Ihr Gegner eine Münze um. Wenn Schwänze, erfolgt dieser Angriff nicht.",
            es: "Durante el próximo turno de tu oponente, si el Pokémon defensor intenta atacar, tu oponente voltea una moneda. Si Tails, ese ataque no sucede.",
            it: "Durante il prossimo turno del tuo avversario, se il Pokemon in difesa cerca di attaccare, il tuo avversario lancia una moneta. Se la coda, quell'attacco non accade.",
            pt: "Durante o próximo turno do seu oponente, se o pokemon atual tentar atacar, seu oponente vira uma moeda. Se caudas, esse ataque não acontece.",
          },
          damage: 10,
        },
        {
          cost: ["Fire", "Fire"],
          name: {
            en: "Smog",
            ja: "スモッグ",
            fr: "Smog",
            de: "SMOG",
            es: "Niebla tóxica",
            it: "Smog",
            pt: "Fumaça",
          },
          effect: {
            en: "Flip a coin. If heads, your opponent's Active Pokemon is now Poisoned.",
            ja: "コインをひっくり返します。頭の場合、相手のアクティブなポケモンが毒されます。",
            fr: "Retourner une pièce. Si les têtes, le pokemon actif de votre adversaire est maintenant empoisonné.",
            de: "Eine Münze drehen. Wenn Sie Köpfe haben, ist das aktive Pokémon Ihres Gegners jetzt vergiftet.",
            es: "Voltea una moneda. Si se dirige, el Pokémon activo de tu oponente ahora está envenenado.",
            it: "Capovolgi una moneta. Se la testa, il Pokemon attivo del tuo avversario è ora avvelenato.",
            pt: "Vire uma moeda. Se as cabeças, o Pokémon ativo do seu oponente agora está envenenado.",
          },
          damage: 20,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
      ],
};
