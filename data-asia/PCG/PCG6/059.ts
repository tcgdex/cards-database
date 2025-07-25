import {Card} from "../../../interfaces"
import Set from "../PCG6"

const card: Card = {
      set: Set,
      name: {
         en: "Meowth",
         ja: "meowth",
         fr: "Miaulement",
         de: "Meowth",
         es: "Maullido",
         it: "Meowth",
         pt: "MEOWTH",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [52],
      hp: 50,
      types: ["Colorless"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Pickup Power",
            ja: "ピックアップパワー",
            fr: "Puissance de ramassage",
            de: "Pickup -Kraft",
            es: "Potencia de recogida",
            it: "Potenza di raccolta",
            pt: "Poder de coleta",
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
          cost: ["Colorless"],
          name: {
            en: "Bite",
            ja: "噛む",
            fr: "Mordre",
            de: "Beißen",
            es: "Morder",
            it: "Morso",
            pt: "Morder",
          },
          damage: 10,
        },
      ],

      retreat: 1,

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
