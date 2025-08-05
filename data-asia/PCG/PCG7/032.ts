import {Card} from "../../../interfaces"
import Set from "../PCG7"

const card: Card = {
      set: Set,
      name: {
                  ja: "シャルデド（デルタ種）",
                                                   },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [319],
      hp: 70,
      types: ["Fighting"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
                        ja: "脇にブラシをかけます",
                                                                      },
          effect: {
                        ja: "SharpedoにHolon Energy Cardsが接続されている場合は、見ても捨てずに相手の手から1枚のカードを選択してください。",
                                                                      },
          damage: 30,
        },
        {
          cost: ["Fighting", "Colorless", "Colorless"],
          name: {
                        ja: "迅速なターン",
                                                                      },
          effect: {
                        ja: "防御ポケモンに抵抗がある場合、この攻撃は50のダメージと30のダメージを与えます。",
                                                                      },
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
