import {Card} from "../../../interfaces"
import Set from "../PCG4"

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
      types: ["Psychic"],
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
            en: "Search your discard pile for a Basic Pokemon, Evolution card, or basic Energy card, show it to your opponent, and put it into your hand.",
            ja: "基本的なポケモン、進化カード、または基本エネルギーカードを廃棄することを検索し、対戦相手に見せて、手に入れてください。",
            fr: "Recherchez votre tas de défausse pour un pokemon de base, une carte d'évolution ou une carte d'énergie de base, montrez-la à votre adversaire et mettez-la dans votre main.",
            de: "Suchen Sie Ihren Abwurfstapel nach einer einfachen Pokemon, einer Evolutionskarte oder einer grundlegenden Energiekarte, zeigen Sie sie Ihrem Gegner an und geben Sie sie in Ihre Hand.",
            es: "Busque en su pila de descarte un Pokémon básico, una tarjeta de evolución o una tarjeta de energía básica, muéstrala a su oponente y póngalo en su mano.",
            it: "Cerca il tuo mucchio di scarti un Pokemon di base, una carta di evoluzione o una carta di energia di base, mostralo al tuo avversario e mettilo in mano.",
            pt: "Pesquise sua pilha de descarte por um Pokémon básico, cartão de evolução ou cartão de energia básico, mostre -o ao seu oponente e coloque -o em sua mão.",
          },
        },
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Trip Over",
            ja: "旅をします",
            fr: "Faire une trébuche",
            de: "Auslösen",
            es: "Tropezar",
            it: "Inciampare",
            pt: "Viaje",
          },
          effect: {
            en: "Flip a coin. If heads, this attack does 20 damage plus 10 more damage.",
            ja: "コインをひっくり返します。頭の場合、この攻撃は20ダメージに加えて10ダメージを与えます。",
            fr: "Retourner une pièce. Si la tête, cette attaque fait 20 dégâts plus 10 dégâts supplémentaires.",
            de: "Eine Münze drehen. Bei Köpfen verursacht dieser Angriff 20 Schäden plus 10 weitere Schäden.",
            es: "Voltea una moneda. Si se dirige, este ataque hace 20 daños más 10 más de daño.",
            it: "Capovolgi una moneta. Se la testa, questo attacco infligge 20 danni più 10 altri danni.",
            pt: "Vire uma moeda. Se as cabeças, esse ataque causará 20 danos mais 10 danos.",
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
