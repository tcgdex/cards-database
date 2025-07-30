import {Card} from "../../../interfaces"
import Set from "../PCG4"

const card: Card = {
      set: Set,
      name: {
                  ja: "sudowoodo",
                                                   },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [185],
      hp: 60,
      types: ["Fighting"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
                        ja: "コピー",
                                                                      },
          effect: {
                        ja: "防御ポケモンの攻撃の1つを選択します。その攻撃をコピーします。 Sudowoodoにその攻撃を使用するのに必要なエネルギーがない場合、この攻撃は何もしません。 （あなたはまだその攻撃に必要な他のことをしなければなりません。）Sudowoodoはその攻撃を実行します。",
                                                                      },
        },
        {
          cost: ["Fighting", "Colorless", "Colorless"],
          name: {
                        ja: "空手チョップ",
                                                                      },
          effect: {
                        ja: "Sudowoodoのダメージカウンターごとに50のダメージを引いた10のダメージを引いてください。",
                                                                      },
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
