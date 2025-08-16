import {Card} from "../../../interfaces"
import Set from "../neo1"

const card: Card = {
      set: Set,
      name: {
         en: "Aipom",
         ja: "aipom",
         fr: "Aipom",
         de: "Aipom",
         es: "Aipom",
         it: "Aipom",
         pt: "AIPOM",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [190],
      hp: 40,
      types: ["Colorless"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Pilfer",
            ja: "盗みます",
            fr: "Chaparder",
            de: "Stehlen",
            es: "Robar a",
            it: "Fuga",
            pt: "Pilfer",
          },
          effect: {
            en: "Shuffle Aipom and all cards attached to it into your deck. Flip a coin. If heads, shuffle a card from your discard pile into your deck.",
            ja: "Shuffle Aipomとすべてのカードがデッキに取り付けられています。コインをひっくり返します。頭の場合は、廃棄の山からカードをデッキにシャッフルします。",
            fr: "Trive Aipom et toutes les cartes qui y sont attachées dans votre deck. Retourner une pièce. Si les têtes, mélanger une carte de votre tas de défausse dans votre deck.",
            de: "Mischen Sie Aipom und alle Karten, die an Ihr Deck angeschlossen sind. Eine Münze drehen. Wenn Sie Köpfe haben, mischen Sie eine Karte von Ihrem Ablagungsstapel in Ihr Deck.",
            es: "Arrastra a Aipom y todas las cartas adjuntadas en tu mazo. Voltea una moneda. Si se dirige, baraja una carta de su pila de descarte en su mazo.",
            it: "Shuffle Aipom e tutte le carte attaccate nel tuo mazzo. Capovolgi una moneta. Se la testa, mescola una carta dal tuo mucchio di scarti nel tuo mazzo.",
            pt: "Rase a AIPOM e todas as cartas presas a ele no seu baralho. Vire uma moeda. Se a cabeça, embaralhe uma carta da sua pilha de descarte para o seu baralho.",
          },
        },
        {
          cost: ["Colorless"],
          name: {
            en: "Tail Rap",
            ja: "テールラップ",
            fr: "Rap",
            de: "Schwanzrap",
            es: "Rap de cola",
            it: "Rap di coda",
            pt: "Rap de cauda",
          },
          effect: {
            en: "Flip 2 coins. This attack does 10 damage times the number of heads.",
            ja: "2つのコインをフリップします。この攻撃は、ヘッド数の10倍のダメージを与えます。",
            fr: "Flip 2 pièces. Cette attaque fait 10 dégâts le nombre de têtes.",
            de: "2 Münzen umdrehen. Dieser Angriff verursacht 10 Schadenszeiten der Anzahl der Köpfe.",
            es: "Flip 2 monedas. Este ataque hace 10 veces el número de cabezas.",
            it: "Flip 2 monete. Questo attacco fa 10 danni volte il numero di teste.",
            pt: "Flip 2 moedas. Este ataque causa 10 danos ao número do número de cabeças.",
          },
        },
      ],


      variants: [
        {
          type: "normal",
        },
      ],
};
