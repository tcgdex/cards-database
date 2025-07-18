import {Card} from "../../../interfaces"
import Set from "../PCG4"

const card: Card = {
      set: Set,
      name: {
         en: "Onix",
         ja: "onix",
         fr: "Onix",
         de: "Onix",
         es: "Onix",
         it: "Onix",
         pt: "Onix",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [95],
      hp: 80,
      types: ["Fighting"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Dig Deep",
            ja: "深く掘ります",
            fr: "Creuser profondément",
            de: "Tief graben",
            es: "Cavar profundamente",
            it: "Scavare in profondità",
            pt: "Cavar profundamente",
          },
          effect: {
            en: "Search your discard pile for an Energy card, show it to your opponent, and put it into your hand.",
            ja: "廃棄パイルを検索して、エネルギーカードを紹介し、相手に見せて、手に入れてください。",
            fr: "Recherchez votre tas de défausse pour une carte d'énergie, montrez-la à votre adversaire et mettez-la dans votre main.",
            de: "Suchen Sie Ihren Abwurfstapel nach einer Energiekarte, zeigen Sie sie Ihrem Gegner an und geben Sie sie in Ihre Hand.",
            es: "Busque en su pila de descarte en busca de una tarjeta de energía, muéstrela a su oponente y póngala en su mano.",
            it: "Cerca il tuo mucchio di scarti per una carta energetica, mostralo al tuo avversario e mettilo in mano.",
            pt: "Pesquise sua pilha de descarte por um cartão de energia, mostre -o ao seu oponente e coloque -o em sua mão.",
          },
        },
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Mud Slap",
            ja: "泥の平手打ち",
            fr: "Gifle de boue",
            de: "Schlammschlag",
            es: "Bofetada",
            it: "Schiaffo di fango",
            pt: "Tapa na lama",
          },
          damage: 20,
        },
      ],

      retreat: 3,

      variants: [
        {
          type: "normal",
        },
      ],
};
