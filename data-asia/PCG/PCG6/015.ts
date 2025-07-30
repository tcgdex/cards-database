import {Card} from "../../../interfaces"
import Set from "../PCG6"

const card: Card = {
      set: Set,
      name: {
                  ja: "日当たりの良いキャストフォーム",
                                                   },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [351],
      hp: 70,
      types: ["Fire"],
      stage: "Basic",

      abilities: [
        {
          name: {
                        ja: "気質の天気",
                                                                      },
          effect: {
                        ja: "ターン中（攻撃の前に）ターン中に、キャストフォーム、雨のキャストフォーム、またはスノークラウドのキャストフォームをデッキで検索し、日当たりの良いキャストフォームで切り替えることができます。 （サニーキャスト、ダメージカウンター、特別な条件、およびその影響に添付されたカードは、現在、新しいPokã©Mon。にあります。）サニーキャストフォームはデッキに戻ります。 1ターンを1ターン以上使用することはできません。",
                                                                      },
      }],

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
                        ja: "ホロン検索",
                                                                      },
          effect: {
                        ja: "デッキを検索して、ホロンエネルギーカードを添付し、ポケモン1枚に添付してください。その後、デッキをシャッフルします。",
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
