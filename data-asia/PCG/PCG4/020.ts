import {Card} from "../../../interfaces"
import Set from "../PCG4"

const card: Card = {
      set: Set,
      name: {
                  ja: "ho-oh ex",
                                                   },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [250],
      hp: 110,
      types: ["Fire"],
      stage: "Basic",

      abilities: [
        {
          name: {
                        ja: "ゴールデンウィング",
                                                                      },
          effect: {
                        ja: "Ho-oh Exが相手の攻撃によるダメージによってノックアウトされた場合、あなたが好きな方法でHo-oh exに2つのエネルギーをあなたのポカモンに移動することができます。",
                                                                      },
      }],

      attacks: [
        {
          cost: ["Colorless", "Colorless", "Colorless"],
          name: {
                        ja: "レインボーバーン",
                                                                      },
          effect: {
                        ja: "Ho-Oh Exに取り付けられた各タイプの基本エネルギーカードに対して、10のダメージと20のダメージを与えます。",
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
