import {Card} from "../../../interfaces"
import Set from "../E3"

const card: Card = {
      set: Set,
      name: {
         en: "Sneasel",
         ja: "スニーエル",
         fr: "Snasse",
         de: "Schnäppchen",
         es: "Sisas",
         it: "Sneasel",
         pt: "Sneasel",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [215],
      hp: 60,
      types: ["Darkness"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Darkness"],
          name: {
            en: "Rob",
            ja: "ロブ",
            fr: "Voler",
            de: "Rauben",
            es: "Robar",
            it: "Rob",
            pt: "Roubar",
          },
          effect: {
            en: "Look at your opponent's hand. Choose all Technical Machine and Pokemon Tool cards there and put them into his or her deck. Your opponent shuffles the deck afterward.",
            ja: "相手の手を見てください。そこにすべてのテクニカルマシンとポケモンのツールカードを選択し、それらを彼または彼女のデッキに入れます。あなたの対戦相手はその後デッキをシャッフルします。",
            fr: "Regardez la main de votre adversaire. Choisissez toutes les cartes à outils techniques et pokemon et placez-les dans son deck. Votre adversaire mélange le pont par la suite.",
            de: "Schauen Sie sich die Hand Ihres Gegners an. Wählen Sie dort alle technischen Maschine und Pokemon -Werkzeugkarten und geben Sie sie in sein Deck. Dein Gegner mischt danach das Deck.",
            es: "Mira la mano de tu oponente. Elija todas las cartas de herramientas técnicas de máquina y Pokémon allí y póngalas en su mazo. Tu oponente baraja la cubierta después.",
            it: "Guarda la mano del tuo avversario. Scegli tutte le carte tecniche e gli strumenti Pokemon lì e mettile nel suo mazzo. Il tuo avversario mescola il mazzo in seguito.",
            pt: "Olhe para a mão do seu oponente. Escolha todas as cartas de ferramentas técnicas e Pokémon lá e coloque -as em seu deck. Seu oponente embaralha o baralho depois.",
          },
        },
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Claw",
            ja: "爪",
            fr: "Griffe",
            de: "Klaue",
            es: "Garra",
            it: "Artiglio",
            pt: "Garra",
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
          damage: 30,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
        {
          type: "normal",
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
