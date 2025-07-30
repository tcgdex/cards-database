import {Card} from "../../../interfaces"
import Set from "../ADV2"

const card: Card = {
      set: Set,
      name: {
                  ja: "ピチュ",
                                                   },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [172],
      hp: 40,
      types: ["Lightning"],
      stage: "Basic",

      abilities: [
        {
          name: {
                        ja: "赤ちゃんの進化",
                                                                      },
          effect: {
                        ja: "ターン中（攻撃の前に）一度、ピカチュウをピチュに手から置いて（これは進化するピチュとしてカウントされます）、ピチュからすべてのダメージカウンターを削除することができます。",
                                                                      },
      }],

      attacks: [
        {
          cost: ["Lightning"],
          name: {
                        ja: "エネルギー検索",
                                                                      },
          effect: {
                        ja: "廃棄の山を検索して、最大2枚の基本エネルギーカードを使用し、ポケモン1枚に取り付けます。この方法で添付された各エネルギーカードのポケモンに1つのダメージカウンターを置きます。",
                                                                      },
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
          subtype: "unlimited",
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
