import {Card} from "../../../interfaces"
import Set from "../PCG10"

const card: Card = {
      set: Set,
      name: {
         en: "Kabuto",
         ja: "カブト",
         fr: "Kabuto",
         de: "Kabuto",
         es: "Kabuto",
         it: "Kabuto",
         pt: "Kabuto",
      },


      category: "Pokemon",
      dexId: [140],
      hp: 60,
      types: ["Fighting"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Fast Evolution",
            ja: "高速進化",
            fr: "Évolution rapide",
            de: "Schnelle Entwicklung",
            es: "Evolución rápida",
            it: "Evoluzione rapida",
            pt: "Evolução rápida",
          },
          effect: {
            en: "Search your deck for an Evolution card, show it to your opponent, and put it into your hand. Shuffle your deck afterward.",
            ja: "デッキを検索して進化カードを探し、相手に見せて、手に入れてください。その後、デッキをシャッフルします。",
            fr: "Recherchez votre jeu pour une carte d'évolution, montrez-la à votre adversaire et mettez-la dans votre main. Mélanger votre deck par la suite.",
            de: "Suchen Sie Ihr Deck nach einer Evolutionskarte, zeigen Sie es Ihrem Gegner und geben Sie es in Ihre Hand. Mischen Sie anschließend Ihr Deck.",
            es: "Busque en su mazo una tarjeta de evolución, muéstrela a su oponente y póngalo en su mano. Baraja tu mazo después.",
            it: "Cerca nel tuo mazzo una scheda di evoluzione, mostralo al tuo avversario e mettilo in mano. Shuffle il tuo mazzo in seguito.",
            pt: "Pesquise seu baralho em busca de uma carta de evolução, mostre -a ao seu oponente e coloque -o em sua mão. Afaste seu baralho depois.",
          },
        },
        {
          cost: ["Fighting", "Colorless"],
          name: {
            en: "Double Scratch",
            ja: "二重スクラッチ",
            fr: "À double égratignure",
            de: "Doppelkratzer",
            es: "Doble rasguño",
            it: "Doppio graffio",
            pt: "Arranhão duplo",
          },
          effect: {
            en: "Flip 2 coins. This attack does 20 damage times the number of heads.",
            ja: "2つのコインをフリップします。この攻撃は、ヘッド数の20倍のダメージを与えます。",
            fr: "Flip 2 pièces. Cette attaque fait 20 dégâts de temps le nombre de têtes.",
            de: "2 Münzen umdrehen. Dieser Angriff verursacht 20 Schadenszeiten der Anzahl der Köpfe.",
            es: "Flip 2 monedas. Este ataque hace 20 veces el número de cabezas.",
            it: "Flip 2 monete. Questo attacco fa 20 danni il numero di teste.",
            pt: "Flip 2 moedas. Este ataque causa 20 danos vezes o número de cabeças.",
          },
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "normal",
          subtype: "unlimited',
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
