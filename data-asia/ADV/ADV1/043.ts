import {Card} from "../../../interfaces"
import Set from "../ADV1"

const card: Card = {
      set: Set,
      name: {
                  ja: "スレーキング",
                                                   },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [289],
      hp: 120,
      types: ["Colorless"],
      stage: "Stage2",

      abilities: [
        {
          name: {
                        ja: "怠け者",
                                                                      },
          effect: {
                        ja: "スレーキングがあなたのアクティブなポカモンである限り、あなたの対戦相手のポカモンはPokã©-Powersを使用することはできません。",
                                                                      },
      }],

      attacks: [
        {
          cost: ["Colorless", "Colorless", "Colorless", "Colorless"],
          name: {
                        ja: "批判的な動き",
                                                                      },
          effect: {
                        ja: "スレーキングに取り付けられた基本的なエネルギーカードを廃棄するか、この攻撃は何もしません。スレーキングは次のターン中に攻撃することはできません。",
                                                                      },
          damage: 100,
        },
      ],

      retreat: 3,

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
