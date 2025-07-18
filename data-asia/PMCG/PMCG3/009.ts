import {Card} from "../../../interfaces"
import Set from "../PMCG3"

const card: Card = {
      set: Set,
      name: {
         en: "Moltres",
         ja: "モルトレス",
         fr: "Moltres",
         de: "Moltres",
         es: "Moltros",
         it: "Moltres",
         pt: "Moltres",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [146],
      hp: 70,
      types: ["Fire"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Fire"],
          name: {
            en: "Wildfire",
            ja: "山火事",
            fr: "Incendie de forêt",
            de: "Lauffeuer",
            es: "Incendio forestal",
            it: "Incendio",
            pt: "Incêndio",
          },
          effect: {
            en: "You may discard any number of Fire Energy cards attached to Moltres when you use this attack. If you do, discard that many cards from the top of your opponent's deck.",
            ja: "この攻撃を使用すると、モルトレスに取り付けられた火災エネルギーカードを廃棄することができます。もしそうなら、相手のデッキの上部から多くのカードを捨ててください。",
            fr: "Vous pouvez éliminer n'importe quel nombre de cartes d'énergie de feu attachées à Moltres lorsque vous utilisez cette attaque. Si vous le faites, jetez autant de cartes du haut du jeu de votre adversaire.",
            de: "Sie können eine beliebige Anzahl von Brandenergiekarten verwerfen, die an Moltres angebracht sind, wenn Sie diesen Angriff verwenden. Wenn Sie dies tun, verwerfen Sie, dass viele Karten von der Spitze Ihres Gegners Deck Ihres Gegners.",
            es: "Puede descartar cualquier cantidad de cartas de energía de fuego unidas a Moltres cuando usa este ataque. Si lo haces, descarte esas cartas desde la parte superior del mazo de tu oponente.",
            it: "È possibile scartare qualsiasi numero di carte di energia del fuoco collegate ai moltres quando si utilizza questo attacco. Se lo fai, scartare quelle carte dalla parte superiore del mazzo del tuo avversario.",
            pt: "Você pode descartar qualquer número de cartões de energia de incêndio anexados a Moltres quando usa esse ataque. Se o fizer, descarte muitas cartas do topo do baralho do seu oponente.",
          },

        },
        {
          cost: ["Fire", "Fire", "Fire", "Fire"],
          name: {
            en: "Dive Bomb",
            ja: "ダイブ爆弾",
            fr: "Bombe de plongée",
            de: "Tauchbombe",
            es: "Bomba de buceo",
            it: "Immergere bomba",
            pt: "Bomba de mergulho",
          },
          effect: {
            en: "Flip a coin. If tails, this attack does nothing.",
            ja: "コインをひっくり返します。尾の場合、この攻撃は何もしません。",
            fr: "Retourner une pièce. Si Tails, cette attaque ne fait rien.",
            de: "Eine Münze drehen. Wenn Schwänze, tut dieser Angriff nichts.",
            es: "Voltea una moneda. Si Tails, este ataque no hace nada.",
            it: "Capovolgi una moneta. Se le code, questo attacco non fa nulla.",
            pt: "Vire uma moeda. Se caudas, esse ataque não faz nada.",
          },
          damage: 80,
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "holo",
        },
      ],
};
