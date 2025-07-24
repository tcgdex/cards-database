import {Card} from "../../../interfaces"
import Set from "../E5"

const card: Card = {
      set: Set,
      name: {
         en: "Magcargo - 056/088",
         ja: "Magcargo -056/088",
         fr: "Magcargo - 056/088",
         de: "Magcargo - 056/088",
         es: "Magcargo - 056/088",
         it: "Magcargo - 056/088",
         pt: "Magcargo - 056/088",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [219],
      hp: 80,
      types: ["Fighting"],
      stage: "Stage1",

      abilities: [
        {
          name: {
            en: "Streaming Mantle",
            ja: "ストリーミングマントル",
            fr: "Manteau en streaming",
            de: "Streaming Mantel",
            es: "Manto de transmisión",
            it: "Mantle in streaming",
            pt: "Manto de streaming",
          },
          effect: {
            en: "When you play Magcargo from your hand to evolve your Active Pokmon, you may discard the top 3 cards of your deck and then shuffle 3 basic Energy cards from your discard pile into your deck. If you do, your opponent does the same.",
            ja: "アクティブなポクモンを進化させるために手からマグカルゴをプレイすると、デッキのトップ3カードを破棄してから、廃棄の山からデッキに3枚の基本的なエネルギーカードをシャッフルすることができます。もしそうなら、あなたの相手は同じことをします。",
            fr: "Lorsque vous jouez à Magcargo de votre main pour faire évoluer votre pokmon actif, vous pouvez jeter les 3 meilleures cartes de votre deck, puis mélanger 3 cartes d'énergie de base de votre tas de défausse dans votre deck. Si vous le faites, votre adversaire fait de même.",
            de: "Wenn Sie Magcargo von Ihrer Hand spielen, um Ihr aktives Pokmon zu entwickeln, können Sie die Top 3 -Karten Ihres Decks verwerfen und dann 3 grundlegende Energiekarten aus Ihrem Ablagerungsstapel in Ihr Deck mischen. Wenn Sie dies tun, tut Ihr Gegner dasselbe.",
            es: "Cuando juegas Magcargo de tu mano para evolucionar tu Pokmon activo, puedes descartar las 3 cartas principales de tu mazo y luego barajar 3 cartas de energía básicas de tu pila de descarte en tu mazo. Si lo haces, tu oponente hace lo mismo.",
            it: "Quando giochi a Magcargo dalla tua mano per evolvere il tuo Pokmon attivo, puoi scartare le prime 3 carte del tuo mazzo e poi svuota 3 carte di energia di base dalla tua pila di scarto nel tuo mazzo. Se lo fai, il tuo avversario fa lo stesso.",
            pt: "Quando você toca Magcargo da sua mão para evoluir seu Pokmon ativo, você pode descartar as três principais cartas do seu baralho e depois embaralhar 3 cartões básicos de energia da sua pilha de descarte no seu baralho. Se o fizer, seu oponente faz o mesmo.",
          },
      }],

      attacks: [
        {
          cost: ["Fighting", "Colorless", "Colorless"],
          name: {
            en: "Crushing Lava",
            ja: "溶岩を粉砕します",
            fr: "Lave écrasante",
            de: "Lava zerquetschen",
            es: "Lava aplastante",
            it: "Schiacciando lavica",
            pt: "Lava esmagadora",
          },
          effect: {
            en: "You may discard a Fire or Fighting basic Energy card attached to Magcargo. If you discard a Fire Energy card in this way, the Defending Pokemon is now Burned. If you discard a Fighting Energy card in this way, this attack does 40 damage plus 20 more damage.",
            ja: "Magcargoに取り付けられた火災またはファイティングベーシックエネルギーカードを捨てることができます。このように火災エネルギーカードを廃棄すると、防御するポケモンが燃やされます。このようにファイティングエネルギーカードを破棄すると、この攻撃は40ダメージに20回のダメージを与えます。",
            fr: "Vous pouvez jeter un feu ou combattre une carte d'énergie de base attachée à Magcargo. Si vous jetez une carte d'énergie de feu de cette manière, le Pokémon en défense est maintenant brûlé. Si vous jetez une carte d'énergie de combat de cette manière, cette attaque fait 40 dégâts plus 20 dégâts supplémentaires.",
            de: "Sie können ein Feuer oder eine an Magcargo befestigte Basic -Energiekarte verwerfen. Wenn Sie auf diese Weise eine Feuerergiekarte verwerfen, wird das verteidigende Pokémon jetzt verbrannt. Wenn Sie auf diese Weise eine Kampfflugzeugkarte verwerfen, verursacht dieser Angriff 40 Schaden zuzüglich 20 weitere Schäden.",
            es: "Puede descartar un incendio o combatir una tarjeta de energía básica unida a Magcargo. Si desechas una tarjeta de energía de fuego de esta manera, el Pokémon defensor ahora se quema. Si desechas una carta de energía de lucha de esta manera, este ataque hace 40 daños más 20 más de daño.",
            it: "Puoi scartare un incendio o combattere la carta di energia di base collegata a Magcargo. Se scarti una carta di energia antincendio in questo modo, il Pokemon in carica viene ora bruciato. Se scarti una carta energetica da combattimento in questo modo, questo attacco infligge 40 danni più 20 danni.",
            pt: "Você pode descartar um incêndio ou combater o cartão básico de energia anexado ao Magcargo. Se você descartar um cartão de energia de incêndio dessa maneira, o pokemon atual agora está queimado. Se você descartar um cartão de energia de combate dessa maneira, esse ataque causará 40 danos mais 20 mais danos.",
          },
        },
      ],

      retreat: 3,

      variants: [
        {
          type: "holo",
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
