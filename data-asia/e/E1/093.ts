import {Card} from "../../../interfaces"
import Set from "../E1"

const card: Card = {
      set: Set,
      name: {
         en: "Clefable - 093/128",
         ja: "Clefable -093/128",
         fr: "Clefable - 093/128",
         de: "Clefable - 093/128",
         es: "Clefable - 093/128",
         it: "Clefable - 093/128",
         pt: "Clefable - 093/128",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [36],
      hp: 70,
      types: ["Colorless"],
      stage: "Stage1",

      abilities: [
        {
          name: {
            en: "Moonlight",
            ja: "月光",
            fr: "Clair de lune",
            de: "Mondlicht",
            es: "Luz de la luna",
            it: "Chiaro di luna",
            pt: "Luar",
          },
          effect: {
            en: "Once during your turn <em>(before your attack)</em>, you may put a card from your hand back on your deck. If you do, search your deck for a basic Energy card, show it to your opponent, and put it into your hand. Shuffle your deck afterward. This power can't be used if Clefable is affected by a Special Condition.",
            ja: "順番<em>（攻撃の前）</em> </em>、手からカードをデッキに戻すことができます。そうした場合は、デッキを検索して、基本的なエネルギーカードを検索し、対戦相手に見せて、手に入れてください。その後、デッキをシャッフルします。 Clefableが特別な状態の影響を受ける場合、この電力は使用できません。",
            fr: "Une fois pendant votre tour <em> (avant votre attaque) </em>, vous pouvez remettre une carte de votre main sur votre deck. Si vous le faites, recherchez votre jeu une carte d'énergie de base, montrez-la à votre adversaire et mettez-la dans votre main. Mélanger votre deck par la suite. Cette puissance ne peut pas être utilisée si Clefable est affectée par une condition spéciale.",
            de: "Einmal in Ihrem Zug <em> (vor Ihrem Angriff) </em> können Sie eine Karte von der Hand wieder auf Ihr Deck legen. Wenn Sie dies tun, suchen Sie Ihr Deck nach einer grundlegenden Energiekarte, zeigen Sie sie Ihrem Gegner an und legen Sie es in Ihre Hand. Mischen Sie anschließend Ihr Deck. Diese Leistung kann nicht angewendet werden, wenn Clefable durch einen besonderen Zustand beeinflusst wird.",
            es: "Una vez durante su turno <em> (antes de su ataque) </em>, puede volver a colocar una carta de su mano en su mazo. Si lo hace, busque en su mazo una tarjeta de energía básica, muéstrelo a su oponente y póngalo en su mano. Baraja tu mazo después. Esta potencia no se puede usar si Clefable se ve afectada por una condición especial.",
            it: "Una volta durante il tuo turno <em> (prima del tuo attacco) </em>, puoi rimettere una carta dalla mano sul mazzo. Se lo fai, cerca nel tuo mazzo una carta energetica di base, mostralo al tuo avversario e mettilo in mano. Shuffle il tuo mazzo in seguito. Questa potenza non può essere utilizzata se Clefable è influenzato da una condizione speciale.",
            pt: "Uma vez durante o seu turno <em> (antes do seu ataque) </em>, você pode colocar uma carta da sua mão de volta no baralho. Se o fizer, procure um cartão de energia básico, mostre -o ao seu oponente e coloque -o na sua mão. Afaste seu baralho depois. Esse poder não pode ser usado se o Clefable for afetado por uma condição especial.",
          },
      }],

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Doubleslap",
            ja: "doubleslap",
            fr: "Double",
            de: "Doppelklappe",
            es: "Duplana",
            it: "Doppbleslap",
            pt: "Doubleslap",
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

      retreat: 1,

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
