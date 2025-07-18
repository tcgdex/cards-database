import {Card} from "../../../interfaces"
import Set from "../PCG1"

const card: Card = {
      set: Set,
      name: {
         en: "Nidorina",
         ja: "ニドリーナ",
         fr: "Nidorina",
         de: "Nidorina",
         es: "Nidorina",
         it: "Nidorina",
         pt: "Nidorina",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [30],
      hp: 80,
      types: ["Grass"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Scratch",
            ja: "傷",
            fr: "Gratter",
            de: "Kratzen",
            es: "Rascar",
            it: "Graffio",
            pt: "Arranhar",
          },
          damage: 20,
        },
        {
          cost: ["Colorless", "Colorless"],
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
            en: "Search your deck for up to 2 Evolution cards, show them to your opponent, and put them into your hand. Shuffle your deck afterward.",
            ja: "デッキを最大2枚の進化カードで検索し、相手に見せて、手に入れてください。その後、デッキをシャッフルします。",
            fr: "Recherchez votre deck jusqu'à 2 cartes d'évolution, montrez-les à votre adversaire et mettez-les dans votre main. Mélanger votre deck par la suite.",
            de: "Suchen Sie Ihr Deck nach bis zu 2 Evolutionskarten, zeigen Sie sie Ihrem Gegner an und legen Sie sie in Ihre Hand. Mischen Sie anschließend Ihr Deck.",
            es: "Busque en su mazo hasta 2 cartas de evolución, muéstrelas a su oponente y póngalas en tu mano. Baraja tu mazo después.",
            it: "Cerca nel tuo mazzo per un massimo di 2 carte di evoluzione, mostrale al tuo avversario e mettile in mano. Shuffle il tuo mazzo in seguito.",
            pt: "Pesquise seu baralho por até 2 cartas de evolução, mostre -as ao seu oponente e coloque -as em sua mão. Afaste seu baralho depois.",
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
