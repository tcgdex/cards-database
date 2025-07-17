import {Card} from "../../../interfaces"
import Set from "../ADV1"

const card: Card = {
      set: Set,
      name: {
         en: "Linoone",
         ja: "リノーネ",
         fr: "Linoone",
         de: "Linoone",
         es: "Linoona",
         it: "Linoone",
         pt: "Linoone",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [264],
      hp: 70,
      types: ["Colorless"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Seek Out",
            ja: "探してください",
            fr: "Chercher",
            de: "Suchen",
            es: "Buscar",
            it: "Cercare",
            pt: "Procurar",
          },
          effect: {
            en: "Search your deck for up to 2 cards and put them into your hand. Shuffle your deck afterward.",
            ja: "デッキを最大2枚のカードを検索し、手に入れてください。その後、デッキをシャッフルします。",
            fr: "Recherchez votre deck jusqu'à 2 cartes et mettez-les dans votre main. Mélanger votre deck par la suite.",
            de: "Suchen Sie Ihr Deck nach bis zu 2 Karten und legen Sie sie in Ihre Hand. Mischen Sie anschließend Ihr Deck.",
            es: "Busque en su mazo hasta 2 cartas y póngalos en su mano. Baraja tu mazo después.",
            it: "Cerca nel tuo mazzo un massimo di 2 carte e mettile in mano. Shuffle il tuo mazzo in seguito.",
            pt: "Pesquise seu baralho por até 2 cartas e coloque -as em sua mão. Afaste seu baralho depois.",
          },
        },
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Continuous Headbutt",
            ja: "連続ヘッドバット",
            fr: "Coup de tête continue",
            de: "Kontinuierlicher Kopfbutt",
            es: "Cabezal continuo",
            it: "Headbutt continuo",
            pt: "Cabeça contínua",
          },
          effect: {
            en: "Flip a coin until you get tails. This attack does 40 damage times the number of heads.",
            ja: "尾がなくなるまでコインをひっくり返します。この攻撃は、ヘッド数の40回のダメージ倍になります。",
            fr: "Retournez une pièce jusqu'à ce que vous obteniez la queue. Cette attaque fait 40 dégâts de temps le nombre de têtes.",
            de: "Drehen Sie eine Münze um, bis Sie Schwänze bekommen. Dieser Angriff verursacht 40 Schadenszeiten der Anzahl der Köpfe.",
            es: "Voltea una moneda hasta que obtengas colas. Este ataque hace 40 veces el número de cabezas.",
            it: "Capovolgi una moneta fino a quando non ricevi la coda. Questo attacco fa 40 danni il numero di teste.",
            pt: "Vire uma moeda até obter caudas. Este ataque causa 40 danos vezes o número de cabeças.",
          },
        },
      ],

      retreat: 1,

};
