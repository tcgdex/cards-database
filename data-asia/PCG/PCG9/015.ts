import {Card} from "../../../interfaces"
import Set from "../PCG9"

const card: Card = {
      set: Set,
      name: {
                  ja: "ミュースター（デルタ種）",
                                                   },

      rarity: "Shiny rare",
      category: "Pokemon",
      dexId: [151],
      hp: 70,
      types: ["Water"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
                        ja: "模倣",
                                                                      },
          effect: {
                        ja: "プレイ中の対戦相手のポケモンの1人の攻撃を選択してください。模倣はその攻撃をコピーします。 Mew {{Star | This Pokemon}}がその攻撃を使用するのに必要なエネルギーがない場合、この攻撃は何もしません。 （その攻撃に必要な他のことをまだしなければなりません。）Mew {{Star | This Pokemon}）はその攻撃を実行します。",
                                                                      },
        },
        {
          cost: ["Water"],
          name: {
                        ja: "虹の波",
                                                                      },
          effect: {
                        ja: "mew {{star | this pokemon}}に添付された1つの基本エネルギーカードを選択します。この攻撃は、あなたが選んだ基本エネルギーカードと同じタイプの相手のポケモンに20のダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
                                                                      },
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "holo",
          subtype: "unlimited',
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
