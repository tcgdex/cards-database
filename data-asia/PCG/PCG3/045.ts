import {Card} from "../../../interfaces"
import Set from "../PCG3"

const card: Card = {
      set: Set,
      name: {
                  ja: "Deoxys ex",
                                                   },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [386],
      hp: 110,
      types: ["Psychic"],
      stage: "Basic",

      abilities: [
        {
          name: {
                        ja: "フォームの変更",
                                                                      },
          effect: {
                        ja: "ターン中に（攻撃の前）、デッキを検索して別のDeoxys Exを検索し、Deoxys Exで切り替えることができます。 （Deoxys Ex、ダメージカウンター、特別な条件、およびそれに対する影響に添付されたカードは、現在新しいPokã©Mon。）にある場合は、Deoxys Exをデッキの上に置きます。その後、デッキをシャッフルします。  ターンごとに1つ以上のフォーム変更Pokã©-Powerを使用することはできません。",
                                                                      },
      }],

      attacks: [
        {
          cost: ["Psychic", "Colorless", "Colorless"],
          name: {
                        ja: "Psyburst",
                                                                      },
          effect: {
                        ja: "Deoxys Exに取り付けられた2つのエネルギーを捨てることができます。もしそうなら、この攻撃は50のダメージに加えて、防御ポケモンに取り付けられた各エネルギーに対して20のダメージをさらに20回かけます。",
                                                                      },
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "holo",
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
