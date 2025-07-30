import {Card} from "../../../interfaces"
import Set from "../PCG9"

const card: Card = {
      set: Set,
      name: {
                  ja: "Ledian（デルタ種）",
                                                   },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [166],
      hp: 70,
      types: ["Metal"],
      stage: "Stage1",

      abilities: [
        {
          name: {
                        ja: "うろつき",
                                                                      },
          effect: {
                        ja: "ターン中に、Pokã©Monの1つを進化させるためにLedianを手から演奏すると、デッキを1枚のカードを検索して手に入れることができます。その後、デッキをシャッフルします。",
                                                                      },
      }],

      attacks: [
        {
          cost: ["Metal", "Colorless"],
          name: {
                        ja: "メタルスター",
                                                                      },
          effect: {
                        ja: "Ledianにポケモンツールカードが取り付けられている場合は、3枚のカードを描画します。",
                                                                      },
          damage: 30,
        },
      ],


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
