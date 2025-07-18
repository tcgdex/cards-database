import {Card} from "../../../interfaces"
import Set from "../ADV1"

const card: Card = {
      set: Set,
      name: {
         en: "Silcoon",
         ja: "シルクーン",
         fr: "Silcoon",
         de: "Silcoon",
         es: "Silboon",
         it: "Silcoon",
         pt: "Silcoon",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [266],
      hp: 60,
      types: ["Grass"],
      stage: "Stage1",

      abilities: [
        {
          name: {
            en: "Hard Cocoon",
            ja: "ハードココン",
            fr: "Cocon dur",
            de: "Harte Kokon",
            es: "Capullo duro",
            it: "Cocoon duro",
            pt: "Casulo duro",
          },
          effect: {
            en: "During your opponent's turn, if Silcoon would be damaged by an opponent's attack (after applying Weakness and Resistance), flip a coin. If heads, reduce that damage by 30.",
            ja: "相手のターン中、シルクーンが対戦相手の攻撃によって（脱力感と抵抗を適用した後）損傷を受けた場合、コインをひっくり返します。頭の場合は、そのダメージを30に減らします。",
            fr: "Au tour de votre adversaire, si Silcoon était endommagé par l'attaque d'un adversaire (après avoir appliqué une faiblesse et une résistance), retournez une pièce. Si les têtes, réduisez ces dégâts de 30.",
            de: "Während der Kurve Ihres Gegners, wenn Silcoon durch den Angriff eines Gegners beschädigt würde (nach Auftragen von Schwäche und Widerstand), drehen Sie eine Münze. Wenn Köpfe, reduzieren Sie diesen Schaden um 30.",
            es: "Durante el turno de tu oponente, si Silcoon se dañara por el ataque de un oponente (después de aplicar debilidad y resistencia), voltee una moneda. Si se dirige, reduzca ese daño en 30.",
            it: "Durante il turno del tuo avversario, se Silcoon sarebbe danneggiato dall'attacco di un avversario (dopo aver applicato la debolezza e la resistenza), capovolgi una moneta. Se la testa, ridurre quel danno di 30.",
            pt: "Durante a vez do seu oponente, se o Silcoon fosse danificado pelo ataque de um oponente (depois de aplicar fraqueza e resistência), vire uma moeda. Se as cabeças, reduza esse dano em 30.",
          },
      }],

      attacks: [
        {
          cost: ["Grass"],
          name: {
            en: "Gooey Thread",
            ja: "グーイのスレッド",
            fr: "Fil gluant",
            de: "Gooey -Thread",
            es: "Hilo pegajoso",
            it: "Thread appiccicoso",
            pt: "Tópico pegajoso",
          },
          effect: {
            en: "The Defending Pokemon can't retreat until the end of your opponent's next turn.",
            ja: "ディフェンディングポケモンは、相手の次のターンの終わりまで退却することはできません。",
            fr: "Le Pokémon en défense ne peut pas se retirer jusqu'à la fin du prochain tour de votre adversaire.",
            de: "Das verteidigende Pokémon kann sich erst am Ende der nächsten Runde Ihres Gegners zurückziehen.",
            es: "El Pokémon defensor no puede retirarse hasta el final del próximo turno de tu oponente.",
            it: "Il Pokemon in carica non può ritirarsi fino alla fine del turno successivo del tuo avversario.",
            pt: "O Pokémon atual não pode recuar até o final do próximo turno do seu oponente.",
          },
          damage: 10,
        },
      ],

      retreat: 2,

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
