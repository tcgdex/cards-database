import {Card} from "../../../interfaces"
import Set from "../neo4"

const card: Card = {
      set: Set,
      name: {
         en: "Light Togetic",
         ja: "光から光",
         fr: "Léger togetic",
         de: "Licht togetisch",
         es: "Ligero",
         it: "Leggero togetico",
         pt: "Light Tegetic",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [176],
      hp: 60,
      types: ["Colorless"],
      stage: "Stage1",

      abilities: [
        {
          type: "Pokemon Power",
          name: {
            en: "Gift",
            ja: "贈り物",
            fr: "Cadeau",
            de: "Geschenk",
            es: "Regalo",
            it: "Regalo",
            pt: "Presente",
          },
          effect: {
            en: "When you play Light Togetic from your hand, your opponent may search his or her deck for a Pokmon Tool card, show that card to you, and put it into his or her hand. Either way, you may do the same, and then each player who searched shuffles his or her deck.",
            ja: "あなたがあなたの手から光のために光をプレイするとき、あなたの相手はあなたに彼または彼女のデッキを検索し、あなたにそのカードを見せて、それを彼または彼女の手に置くことができます。いずれにせよ、あなたは同じことをするかもしれません、そして、検索した各プレイヤーは彼または彼女のデッキをシャッフルします。",
            fr: "Lorsque vous jouez à la légèreté de votre main, votre adversaire peut rechercher son deck pour une carte à outils Pokmon, vous montrer cette carte et la mettre dans sa main. Quoi qu'il en soit, vous pouvez faire de même, puis chaque joueur qui a cherché à mélange son deck.",
            de: "Wenn Sie Light Togetic von Ihrer Hand spielen, kann Ihr Gegner sein Deck nach einer Pokmon -Werkzeugkarte durchsuchen, Ihnen diese Karte zeigen und sie in seine Hand geben. In jedem Fall können Sie dasselbe tun, und dann kann jeder Spieler, der gesucht hat, sein Deck mischt.",
            es: "Cuando juegas luz de tu mano, tu oponente puede buscar en su mazo una tarjeta de herramienta Pokmon, mostrarte esa carta y ponerla en su mano. De cualquier manera, puedes hacer lo mismo, y luego cada jugador que buscó barajas su mazo.",
            it: "Quando giochi alla luce topica dalla tua mano, il tuo avversario può cercare nel suo mazzo una carta degli strumenti Pokmon, mostrarti quella carta e metterlo nella sua mano. Ad ogni modo, puoi fare lo stesso, e quindi ogni giocatore che ha cercato mescola il suo mazzo.",
            pt: "Quando você joga levemente tútice da sua mão, seu oponente pode procurar o baralho dele ou dela por uma carta de ferramenta Pokmon, mostrar essa carta para você e colocá -la na mão dele ou dela. De qualquer maneira, você pode fazer o mesmo e, em seguida, cada jogador que revistou o baralho.",
          },
      }],

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Sweet Kiss",
            ja: "甘いキス",
            fr: "Doux baiser",
            de: "Süßer Kuss",
            es: "Dulce beso",
            it: "Dolce bacio",
            pt: "Beijo doce",
          },
          effect: {
            en: "Your opponent may draw a card.",
            ja: "対戦相手はカードを描くかもしれません。",
            fr: "Votre adversaire peut tracer une carte.",
            de: "Ihr Gegner kann eine Karte zeichnen.",
            es: "Tu oponente puede dibujar una carta.",
            it: "Il tuo avversario può disegnare una carta.",
            pt: "Seu oponente pode desenhar um cartão.",
          },
          damage: 30,
        },
      ],


      variants: [
        {
          type: "holo",
        },
      ],
};
