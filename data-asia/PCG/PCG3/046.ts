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
      hp: 90,
      types: ["Psychic"],
      stage: "Basic",

      abilities: [
        {
          name: {
                        ja: "フォームの変更",
                                                                      },
          effect: {
                        ja: "ターン中に（攻撃の前）、デッキを検索して別のDeoxys Exを検索し、Deoxys Exで切り替えることができます。 （Deoxys Ex、ダメージカウンター、特別な条件、およびそれに対する影響に添付されたカードは、現在新しいPokã©Mon。）にある場合は、Deoxys Exをデッキの上に置きます。その後、デッキをシャッフルします。ターンごとに1つ以上のフォーム変更Pokã©-Powerを使用することはできません。",
                                                                      },
      }],

      attacks: [
        {
          cost: ["Psychic", "Colorless", "Colorless"],
          name: {
                        ja: "サイキックシールド",
                                                                      },
          effect: {
                        ja: "対戦相手の次のターン中に、対戦相手のポケモンエクスがDeoxys Exに行うダメージを含む攻撃のすべての影響を防ぎます。",
                                                                      },
          damage: 50,
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
