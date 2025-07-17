import {Card} from "../../../interfaces"
import Set from "../neo3"

const card: Card = {
      set: Set,
      name: {
         en: "Entei",
         ja: "entei",
         fr: "Entei",
         de: "Entei",
         es: "Entrei",
         it: "Entei",
         pt: "Entei",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [244],
      hp: 80,
      types: ["Fire"],
      stage: "Basic",

      abilities: [
        {
          name: {
            en: "Howl",
            ja: "ハウル",
            fr: "Hurler",
            de: "Heulen",
            es: "Aullido",
            it: "Howl",
            pt: "Uivo",
          },
          effect: {
            en: "When you play Entei from your hand, you may discard the top 5 cards of your deck. <em>(If you have fewer cards in your deck than that, discard all of them.)</em> If any of those are Fire Energy cards, attach them to any of your Fire Pokémon of your choice. Using this power ends your turn.",
            ja: "あなたがあなたの手からenteiをプレイするとき、あなたはあなたのデッキのトップ5カードを捨てることができます。 <em>（それよりもデッキにカードが少ない場合は、それらすべてを捨ててください。）</em>それらのいずれかがファイアエネルギーカードである場合は、選択したファイアポケモンのいずれかに添付してください。このパワーを使用して、順番を終了します。",
            fr: "Lorsque vous jouez à Entei de votre main, vous pouvez jeter les 5 meilleures cartes de votre deck. <em> (Si vous avez moins de cartes dans votre deck que cela, jetez tous.) </em> Si l'une d'entre elles est des cartes d'énergie de feu, attachez-les à l'un de vos pokémon de feu de votre choix. L'utilisation de cette puissance met fin à votre tour.",
            de: "Wenn Sie Entei von Ihrer Hand spielen, können Sie die Top 5 Karten Ihres Decks verwerfen. <em> (Wenn Sie weniger Karten in Ihrem Deck haben, verwerfen Sie alle.) </em>, wenn dies eines davon Feuerenergiekarten sind, fügen Sie sie an Ihrem Feuerpokémon Ihrer Wahl zu. Mit dieser Kraft endet Sie an der Reihe.",
            es: "Cuando juegas a Entei de tu mano, puedes descartar las 5 cartas principales de tu mazo. <em> (Si tienes menos cartas en tu mazo que eso, deséchalas todas). Usar esta potencia termina tu turno.",
            it: "Quando giochi Entei dalla tua mano, puoi scartare le prime 5 carte del tuo mazzo. <em> (Se hai meno carte nel tuo mazzo di così, scartarle tutte.) </em> Se una di queste sono carte di energia del fuoco, attaccale a uno qualsiasi dei tuoi Pokémon di fuoco a scelta. L'uso di questa potenza termina il tuo turno.",
            pt: "Quando você toca Entei da sua mão, você pode descartar as 5 principais cartas do seu baralho. <em> (se você tiver menos cartas no seu baralho do que isso, descarte todas elas.) Se alguma dessas forem cartas de energia de fogo, anexe -as a qualquer um dos seus Pokémon de Fire de sua escolha. Usando esse poder termina sua vez.",
          },
      }],

      attacks: [
        {
          cost: ["Fire", "Fire", "Fire"],
          name: {
            en: "Searing Flames",
            ja: "炎を焼きます",
            fr: "Flammes brûlantes",
            de: "Brennende Flammen",
            es: "Llamas abrasadoras",
            it: "Fiamme brucianti",
            pt: "Chamas queimando",
          },
          effect: {
            en: "Discard 2 Fire Energy cards attached to Entei or this attack does nothing.",
            ja: "Enteiに取り付けられた2つのファイヤーエネルギーカードを廃棄すると、この攻撃は何もしません。",
            fr: "Jetez 2 cartes d'énergie de feu attachées à l'Entei ou cette attaque ne fait rien.",
            de: "Abwerfen 2 Feuerergiekarten, die an Entei angeschlossen sind, oder dieser Angriff tut nichts.",
            es: "Descarte 2 cartas de energía de fuego unidas a Entei o este ataque no hace nada.",
            it: "Scartare 2 carte di energia antincendio attaccate a Entei o questo attacco non fa nulla.",
            pt: "Descarte 2 cartões de energia de incêndio anexados à Entei ou este ataque não faz nada.",
          },
          damage: 60,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "holo",
        },
      ],
};
