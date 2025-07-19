import {Card} from "../../../interfaces"
import Set from "../PCG5"

const card: Card = {
      set: Set,
      name: {
         en: "Seedot",
         ja: "種子",
         fr: "Graine",
         de: "Seedot",
         es: "Seedot",
         it: "Seedot",
         pt: "Seedot",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [273],
      hp: 40,
      types: ["Grass"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Drawup Power",
            ja: "ドローアップ電源",
            fr: "Puissance de draw-up",
            de: "Zugkraft",
            es: "Potencia de extracción",
            it: "Potere di pareggio",
            pt: "Poder de empate",
          },
          effect: {
            en: "Search your deck for an Energy card, show it to your opponent, and put it into your hand. Shuffle your deck afterward.",
            ja: "デッキを検索してエネルギーカードを検索し、相手に見せて、手に入れてください。その後、デッキをシャッフルします。",
            fr: "Recherchez votre jeu pour une carte d'énergie, montrez-la à votre adversaire et mettez-la dans votre main. Mélanger votre deck par la suite.",
            de: "Suchen Sie Ihr Deck nach einer Energiekarte, zeigen Sie es Ihrem Gegner und geben Sie sie in Ihre Hand. Mischen Sie anschließend Ihr Deck.",
            es: "Busque en su mazo una tarjeta de energía, muéstrelo a su oponente y póngalo en su mano. Baraja tu mazo después.",
            it: "Cerca nel tuo mazzo una carta energetica, mostralo al tuo avversario e mettilo in mano. Shuffle il tuo mazzo in seguito.",
            pt: "Pesquise seu baralho em busca de um cartão de energia, mostre -o ao seu oponente e coloque -o em sua mão. Afaste seu baralho depois.",
          },
        },
        {
          cost: ["Grass"],
          name: {
            en: "Continuous Tumble",
            ja: "連続的なタンブル",
            fr: "Chute continue",
            de: "Kontinuierliches Sturz",
            es: "Caída continua",
            it: "Tumble continuo",
            pt: "Tumble contínuo",
          },
          effect: {
            en: "Flip a coin until you get tails. This attack does 10 damage times the number of heads.",
            ja: "尾がなくなるまでコインをひっくり返します。この攻撃は、ヘッド数の10倍のダメージを与えます。",
            fr: "Retournez une pièce jusqu'à ce que vous obteniez la queue. Cette attaque fait 10 dégâts le nombre de têtes.",
            de: "Drehen Sie eine Münze um, bis Sie Schwänze bekommen. Dieser Angriff verursacht 10 Schadenszeiten der Anzahl der Köpfe.",
            es: "Voltea una moneda hasta que obtengas colas. Este ataque hace 10 veces el número de cabezas.",
            it: "Capovolgi una moneta fino a quando non ricevi la coda. Questo attacco fa 10 danni volte il numero di teste.",
            pt: "Vire uma moeda até obter caudas. Este ataque causa 10 danos ao número do número de cabeças.",
          },
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
