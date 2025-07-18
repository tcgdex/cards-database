import {Card} from "../../../interfaces"
import Set from "../PCG4"

const card: Card = {
      set: Set,
      name: {
         en: "Sunkern",
         ja: "サンカーン",
         fr: "Enfermer",
         de: "Gesunken",
         es: "Hundido",
         it: "Sunker",
         pt: "SUNHERN",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [191],
      hp: 40,
      types: ["Grass"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Minor Errand-Running",
            ja: "マイナーな用事が走る",
            fr: "Correction des courses mineures",
            de: "Kleiner Besorgnis",
            es: "Corriente de recados menores",
            it: "Minore commissioni",
            pt: "Pequenas recados",
          },
          effect: {
            en: "Search your deck for a basic Energy card, show it to your opponent, and put it into your hand. Shuffle your deck afterward.",
            ja: "デッキを検索して、基本的なエネルギーカードを検索し、相手に見せて、手に入れてください。その後、デッキをシャッフルします。",
            fr: "Recherchez votre jeu pour une carte d'énergie de base, montrez-la à votre adversaire et mettez-la dans votre main. Mélanger votre deck par la suite.",
            de: "Suchen Sie Ihr Deck nach einer grundlegenden Energiekarte, zeigen Sie sie Ihrem Gegner an und geben Sie sie in Ihre Hand. Mischen Sie anschließend Ihr Deck.",
            es: "Busque en su mazo una tarjeta de energía básica, muéstrela a su oponente y póngalo en su mano. Baraja tu mazo después.",
            it: "Cerca nel tuo mazzo una scheda energetica di base, mostralo al tuo avversario e mettilo in mano. Shuffle il tuo mazzo in seguito.",
            pt: "Pesquise seu baralho em busca de um cartão de energia básico, mostre -o ao seu oponente e coloque -o em sua mão. Afaste seu baralho depois.",
          },
        },
        {
          cost: ["Grass", "Colorless"],
          name: {
            en: "Rollout",
            ja: "ロールアウトする",
            fr: "Dérouler",
            de: "Ausrollen",
            es: "Despliegue",
            it: "Lancio",
            pt: "Sair da cama",
          },
          damage: 20,
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
