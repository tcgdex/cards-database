import {Card} from "../../../interfaces"
import Set from "../PCG3"

const card: Card = {
      set: Set,
      name: {
                  ja: "ブレルーム",
                                                   },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [286],
      hp: 80,
      types: ["Fighting"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
                        ja: "葉の毒",
                                                                      },
          effect: {
                        ja: "Breloomに草のエネルギーが付着している場合、防御ポケモンは現在毒されています。",
                                                                      },
          damage: 20,
        },
        {
          cost: ["Fighting", "Colorless", "Colorless"],
          name: {
                        ja: "ハッスルパンチ",
                                                                      },
          effect: {
                        ja: "次のターン中、ハッスルパンチ攻撃のベースダメージは70ではなく50です。",
                                                                      },
        },
      ],

      retreat: 1,

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
