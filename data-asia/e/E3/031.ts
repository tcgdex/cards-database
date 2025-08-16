import {Card} from "../../../interfaces"
import Set from "../E3"

const card: Card = {
      set: Set,
      name: {
         en: "Slowpoke",
         ja: "slowpoke",
         fr: "Lambin",
         de: "Langweiler",
         es: "Perezoso",
         it: "Slowpoke",
         pt: "Slowpoke",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [79],
      hp: 50,
      types: ["Water"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Fishing Tail",
            ja: "釣りの尾",
            fr: "Queue de pêche",
            de: "Fischereischwanz",
            es: "Cola de pesca",
            it: "Tavola da pesca",
            pt: "Cauda de pesca",
          },
          effect: {
            en: "Search your discard pile for a Baby Pokemon, Basic Pokemon, Evolution card, or basic Energy card, show it to your opponent, and then put it into your hand.",
            ja: "廃棄の山、ベビーポケモン、基本的なポケモン、エボリューションカード、または基本エネルギーカードを検索し、対戦相手に見せてから手に入れます。",
            fr: "Recherchez votre tas de défausse pour un bébé Pokémon, un pokemon de base, une carte d'évolution ou une carte d'énergie de base, montrez-la à votre adversaire, puis mettez-la dans votre main.",
            de: "Suchen Sie Ihren Abwurfstapel nach einem Baby -Pokemon, Basic -Pokemon, Evolutionskarte oder einer einfachen Energiekarte, zeigen Sie es Ihrem Gegner an und geben Sie sie dann in Ihre Hand.",
            es: "Busque en su pila de descarte un Pokémon Baby, Pokémon básico, una tarjeta de evolución o una tarjeta de energía básica, muéstrelo a su oponente y luego póngalo en su mano.",
            it: "Cerca il tuo mucchio di scarti per un pokemon per bambini, pokemon di base, carta di evoluzione o carta di energia di base, mostralo al tuo avversario e poi mettilo in mano.",
            pt: "Pesquise sua pilha de descarte por um bebê Pokémon, Pokémon básico, cartão de evolução ou cartão de energia básico, mostre -o ao seu oponente e depois coloque -o em sua mão.",
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
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
