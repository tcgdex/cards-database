import {Card} from "../../../interfaces"
import Set from "../PCG5"

const card: Card = {
      set: Set,
      name: {
                  ja: "マグネトン",
                                                   },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [82],
      hp: 70,
      types: ["Lightning"],
      stage: "Stage1",

      abilities: [
        {
          name: {
                        ja: "反応性充電",
                                                                      },
          effect: {
                        ja: "マグネトンが相手の攻撃によるダメージによってノックアウトされる場合、あなたが好きな方法でマグネトンからポカモンに任意の数のReactエネルギーカードを移動することができます。",
                                                                      },
      }],

      attacks: [
        {
          cost: ["Lightning", "Colorless"],
          name: {
                        ja: "複数の力",
                                                                      },
          effect: {
                        ja: "Magnetonに反応エネルギーカードが付属している場合、この攻撃は30のダメージと、各マグネマイトとマグネトン（あなたと対戦相手の両方）に対してさらに10ダメージを与えます。",
                                                                      },
        },
        {
          cost: ["Lightning", "Colorless", "Colorless", "Colorless"],
          name: {
                        ja: "磁気爆発",
                                                                      },
          damage: 60,
        },
      ],

      retreat: 1,

      variants: [
        {
  type: "normal",
  subtype: 'unlimited",
}
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
