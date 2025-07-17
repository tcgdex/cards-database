import {Card} from "../../../interfaces"
import Set from "../ADV1"

const card: Card = {
      set: Set,
      name: {
         en: "Cascoon",
         ja: "気まぐれ",
         fr: "Cascoon",
         de: "Cascoon",
         es: "Casco",
         it: "Cascoon",
         pt: "Cascon",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [268],
      hp: 70,
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
            en: "During your opponent's turn, if Cascoon would be damaged by an opponent's attack <em>(after applying Weakness and Resistance)</em>, flip a coin. If heads, reduce that damage by 30.",
            ja: "対戦相手のターン中に、対戦相手の攻撃<em>（脱力感と抵抗を適用した後）</em>によってcascoonが損傷する場合、コインをひっくり返します。頭の場合は、そのダメージを30に減らします。",
            fr: "Au tour de votre adversaire, si Cascoon était endommagé par l'attaque d'un adversaire <em> (après avoir appliqué la faiblesse et la résistance) </em>, retournez une pièce. Si les têtes, réduisez ces dégâts de 30.",
            de: "Während der Kurve Ihres Gegners, wenn Cascoon durch den Angriff eines Gegners (nach Anwendung von Schwäche und Widerstand) </em> eine Münze beschädigt wird (nach der Anwendung von Schwäche und Widerstand). Wenn Köpfe, reduzieren Sie diesen Schaden um 30.",
            es: "Durante el turno de tu oponente, si Cascoon sería dañado por el ataque de un oponente <em> (después de aplicar debilidad y resistencia) </em>, voltee una moneda. Si se dirige, reduzca ese daño en 30.",
            it: "Durante il turno del tuo avversario, se Cascoon sarebbe danneggiato dall'attacco di un avversario <em> (dopo aver applicato la debolezza e la resistenza) </em>, capovolgi una moneta. Se la testa, ridurre quel danno di 30.",
            pt: "Durante a vez do seu oponente, se o cascoon fosse danificado pelo ataque de um oponente <em> (depois de aplicar fraqueza e resistência) </em>, vire uma moeda. Se as cabeças, reduza esse dano em 30.",
          },
      }],

      attacks: [
        {
          cost: ["Grass"],
          name: {
            en: "Poison Thread",
            ja: "毒スレッド",
            fr: "Fil de poison",
            de: "Giftfaden",
            es: "Hilo venenoso",
            it: "Filo veleno",
            pt: "Tópico de veneno",
          },
          effect: {
            en: "The Defending Pokemon is now Poisoned.",
            ja: "防御ポケモンは現在中毒になっています。",
            fr: "Le Pokémon en défense est maintenant empoisonné.",
            de: "Das verteidigende Pokemon ist jetzt vergiftet.",
            es: "El Pokémon defensor ahora está envenenado.",
            it: "Il Pokemon in carica è ora avvelenato.",
            pt: "O Pokémon atual agora está envenenado.",
          },
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
