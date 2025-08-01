import {Card} from "../../../interfaces"
import Set from "../PCG6"

const card: Card = {
      set: Set,
      name: {
                  ja: "同上",
                                                   },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [132],
      hp: 60,
      types: ["Psychic"],
      stage: "Basic",

      abilities: [
        {
          name: {
                        ja: "重複",
                                                                      },
          effect: {
                        ja: "ターン中（攻撃の前に）一度（攻撃の前）、デッキを別の同じように検索し、同じように切り替えることができます。 （同上に添付されたカード、ダメージカウンター、特別な条件、およびその影響は、現在新しいPokã©Mon。）になっている場合は、デッキの上にDittoを置きます。その後、デッキをシャッフルします。ターンごとに1つ以上の重複Pokã©-Powerを使用することはできません。",
                                                                      },
      }],

      attacks: [
        {
          cost: ["Colorless"],
          name: {
                        ja: "コピー",
                                                                      },
          effect: {
                        ja: "防御ポケモンの攻撃の1つを選択します。その攻撃をコピーします。この攻撃は、その攻撃を使用するのに必要なエネルギーがない場合、何もしません。 （その攻撃に必要な他のことをまだしなければなりません。）Dittoはその攻撃を実行します。",
                                                                      },
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
