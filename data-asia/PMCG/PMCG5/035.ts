import {Card} from "../../../interfaces"
import Set from "../PMCG5"

const card: Card = {
      set: Set,
      name: {
         en: "Misty's Gyarados",
         ja: "ミスティのギャラドス",
         fr: "Gyarados de Misty",
         de: "Mistys Gyarados",
         es: "Gyarados de Misty",
         it: "Misty's Gyarados",
         pt: "Gyarados de Misty",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [130],
      hp: 100,
      types: ["Water"],
      stage: "Stage1",

      abilities: [
        {
          type: "Pokemon Power",
          name: {
            en: "Rebellion",
            ja: "反乱",
            fr: "Rébellion",
            de: "Rebellion",
            es: "Rebelión",
            it: "Ribellione",
            pt: "Rebelião",
          },
          effect: {
            en: "Whenever Misty's Gyarados attacks, flip 2 coins. If both of them are tails, that attack does nothing. Instead, shuffle Misty's Gyarados and all cards attached to it into your deck. <em>(This power works even if Misty's Gyarados is Confused.)</em>",
            ja: "MistyのGyaradosが攻撃するたびに、2コインをひっくり返します。両方が尾である場合、その攻撃は何もしません。代わりに、MistyのGyaradosとすべてのカードをデッキに添付します。 <em>（MistyのGyaradosが混乱していても、このパワーは機能します。）</em>",
            fr: "Chaque fois que les gyarados de Misty's Gyarados, retournent 2 pièces. Si les deux sont des queues, cette attaque ne fait rien. Au lieu de cela, mélanger les gyarados de Misty et toutes les cartes qui y sont attachées dans votre deck. <em> (Ce pouvoir fonctionne même si les gyarados de Misty sont confus.) </em>",
            de: "Immer wenn Mistys Gyarados angreift, flip 2 Münzen. Wenn beide Schwänze sind, tut dieser Angriff nichts. Stattdessen Shuffle Mistys Gyarados und alle Karten, die an Ihr Deck angeschlossen sind. <em> (Diese Kraft funktioniert auch, wenn Mistys Gyarados verwirrt ist.) </em>",
            es: "Cada vez que ataca a Misty's Gyarados, voltee 2 monedas. Si ambos son colas, ese ataque no hace nada. En cambio, baraja los gyarados de Misty y todas las cartas adjuntas en su mazo. <em> (este poder funciona incluso si Misty's Gyarados está confundido.) </em>",
            it: "Ogni volta che Gyarados di Misty attacca, lancia 2 monete. Se entrambi sono code, quell'attacco non fa nulla. Invece, shuffle Misty di Gyarados e tutte le carte collegate ad esso nel tuo mazzo. <em> (Questo potere funziona anche se Gyarados di Misty è confuso.) </em>",
            pt: "Sempre que Gyarados de Misty ataca, flip 2 moedas. Se os dois são caudas, esse ataque não faz nada. Em vez disso, Shuffle Misty's Gyarados e todas as cartas anexadas a ele no seu baralho. <em> (esse poder funciona mesmo que Gyarados de Misty esteja confuso.) </em>",
          },
      }],

      attacks: [
        {
          cost: ["Water", "Water", "Water", "Water"],
          name: {
            en: "Tidal Wave",
            ja: "津波",
            fr: "Raz-de-marée",
            de: "Gezeitenwelle",
            es: "Marea",
            it: "Onda di marea",
            pt: "Onda de maré",
          },
          damage: 70,
        },
      ],

      retreat: 3,

      variants: [
        {
          type: "holo",
          subtype: "unlimited",
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
