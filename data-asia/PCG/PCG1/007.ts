import {Card} from "../../../interfaces"
import Set from "../PCG1"

const card: Card = {
      set: Set,
      name: {
         en: "NidoranF",
         ja: "nidoranf",
         fr: "Nidoranf",
         de: "Nidoranf",
         es: "Nidoranf",
         it: "Nidoranf",
         pt: "Nidoranf",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [29],
      hp: 50,
      types: ["Grass"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Look for Friends",
            ja: "友達を探してください",
            fr: "Chercher des amis",
            de: "Suchen Sie nach Freunden",
            es: "Busca amigos",
            it: "Cerca amici",
            pt: "Procure amigos",
          },
          effect: {
            en: "Reveal cards from your deck until you reveal a Basic Pokemon card. Show that card to your opponent and put it into your hand. Shuffle the other revealed cards into your deck. (If you don't reveal a Basic Pokemon, shuffle all the revealed cards back into your deck.)",
            ja: "基本的なポケモンカードを公開するまで、デッキからカードを公開してください。そのカードを相手に見せて、あなたの手に入れてください。もう一方の公開されたカードをデッキにシャッフルします。 （基本的なポケモンを明らかにしない場合は、明らかになったカードをすべてデッキに戻してください。）",
            fr: "Révenez les cartes de votre deck jusqu'à ce que vous révéliez une carte Pokémon de base. Montrez cette carte à votre adversaire et mettez-la dans votre main. Tanger les autres cartes révélées dans votre deck. (Si vous ne révèlez pas un Pokémon de base, mélanger toutes les cartes révélées dans votre deck.)",
            de: "Enthüllen Sie Karten von Ihrem Deck, bis Sie eine einfache Pokemon -Karte enthüllen. Zeigen Sie diese Karte Ihrem Gegner und stecken Sie sie in Ihre Hand. Mischen Sie die anderen enthüllten Karten in Ihr Deck. (Wenn Sie kein einfaches Pokémon offenbaren, mischen Sie alle enthüllten Karten wieder in Ihr Deck.)",
            es: "Revela las cartas desde tu mazo hasta que reveles una carta básica de Pokémon. Muestre esa carta a tu oponente y póngala en tu mano. Arrastra la otra cartas reveladas en tu mazo. (Si no revelas un Pokémon básico, baraja todas las cartas reveladas en tu mazo).",
            it: "Rivela le carte dal tuo mazzo finché non riveli una carta Pokemon di base. Mostra quella carta al tuo avversario e mettila in mano. Shuffle le altre carte rivelate nel tuo mazzo. (Se non riveli un Pokemon di base, riorganizza tutte le carte rivelate nel tuo mazzo.)",
            pt: "Revele as cartas do seu baralho até que você revele uma carta de Pokémon básica. Mostre esse cartão ao seu oponente e coloque -o em sua mão. Afastar as outras cartas reveladas em seu baralho. (Se você não revelar um Pokémon básico, embaralhe todas as cartas reveladas de volta ao seu baralho.)",
          },
        },
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Bite",
            ja: "噛む",
            fr: "Mordre",
            de: "Beißen",
            es: "Morder",
            it: "Morso",
            pt: "Morder",
          },
          damage: 20,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
