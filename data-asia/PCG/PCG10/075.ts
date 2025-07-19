import {Card} from "../../../interfaces"
import Set from "../PCG10"

const card: Card = {
      set: Set,
      name: {
         en: "Flygon ex",
         ja: "Flygon Ex",
         fr: "Flygon ex",
         de: "Flygon ex",
         es: "Flygon ex",
         it: "Flygon ex",
         pt: "Flygon Ex",
      },


      category: "Pokemon",
      dexId: [330],
      hp: 150,
      types: ["Colorless"],
      stage: "Stage2",

      abilities: [
        {
          name: {
            en: "Psychic Protector",
            ja: "サイキックプロテクター",
            fr: "Protecteur psychique",
            de: "Psychischer Beschützer",
            es: "Protector psíquico",
            it: "Protettore psichico",
            pt: "Protetor psíquico",
          },
          effect: {
            en: "If Flygon ex is damaged by an opponent's attack, you may discard up to 4 cards from your hand. If you do, any damage done to Flygon ex is reduced by 10 for each card you discarded.",
            ja: "Flygon Exが対戦相手の攻撃によって破損している場合、手から最大4枚のカードを捨てることができます。もしそうなら、Flygon Exに与えられた損害は、あなたが捨てたカードごとに10削減されます。",
            fr: "Si Flygon Ex est endommagé par l'attaque d'un adversaire, vous pouvez jeter jusqu'à 4 cartes de votre main. Si vous le faites, tout dommage causé à Flygon Ex est réduit de 10 pour chaque carte que vous avez jetée.",
            de: "Wenn Flygon Ex durch den Angriff eines Gegners beschädigt wird, können Sie bis zu 4 Karten von Ihrer Hand wegwerfen. Wenn Sie es tun, wird für jede Karte, die Sie weggeworfen haben, um 10 Schäden an Flygon EX um 10 reduziert.",
            es: "Si Flygon ex está dañado por el ataque de un oponente, puede descartar hasta 4 cartas de su mano. Si lo hace, cualquier daño hecho a Flygon EX se reduce en 10 por cada tarjeta que descartó.",
            it: "Se Flygon Ex è danneggiato dall'attacco di un avversario, puoi scartare fino a 4 carte dalla tua mano. In tal caso, qualsiasi danno fatto a Flygon Ex è ridotto di 10 per ogni carta scartata.",
            pt: "Se o Flygon Ex for danificado pelo ataque de um oponente, você poderá descartar até 4 cartas da sua mão. Se o fizer, qualquer dano causado ao Flygon EX é reduzido em 10 para cada cartão que você descartou.",
          },
      }],

      attacks: [
        {
          cost: ["Colorless", "Colorless", "Colorless"],
          name: {
            en: "Slashing Strike",
            ja: "スラッシングストライク",
            fr: "Frappe de frappe",
            de: "Streik senken",
            es: "Huelga de corte",
            it: "Colpire tagli",
            pt: "Greve",
          },
          effect: {
            en: "Flip a coin. If tails, Flygon ex can't use Slashing Strike during your next turn.",
            ja: "コインをひっくり返します。テールの場合、Flygon Exは次のターン中にスラッシングストライクを使用できません。",
            fr: "Retourner une pièce. Si Tails, Flygon Ex ne peut pas utiliser de frappe de frappe lors de votre prochain tour.",
            de: "Eine Münze drehen. Wenn Schwänze, kann Flygon Ex in Ihrer nächsten Kurve keinen Slashing -Streik verwenden.",
            es: "Voltea una moneda. Si Tails, Flygon Ex no puede usar Slashing Strike durante su próximo turno.",
            it: "Capovolgi una moneta. Se le code, Flygon Ex non può usare Slashing Strike durante il tuo prossimo turno.",
            pt: "Vire uma moeda. Se as caudas, Flygon EX não pode usar o golpe de corte durante o seu próximo turno.",
          },
          damage: 70,
        },
      ],


      variants: [
        {
          type: "holo",
          subtype: "unlimited',
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
