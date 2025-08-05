import {Card} from "../../../interfaces"
import Set from "../PCG4"

const card: Card = {
      set: Set,
      name: {
                  ja: "Vaporeon",
                                                   },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [134],
      hp: 70,
      types: ["Water"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Water"],
          name: {
                        ja: "アクア供給",
                                                                      },
          effect: {
                        ja: "あなたはあなたの手からあなたのポケモンの1にあなたの手からの基本的なエネルギーカードを添付することができます。",
                                                                      },
          damage: 20,
        },
        {
          cost: ["Colorless", "Colorless", "Colorless"],
          name: {
                        ja: "マルチバブル",
                                                                      },
          effect: {
                        ja: "Vaporeonに3つ以上の異なるタイプの基本エネルギーカードが付属している場合、この攻撃は40ダメージに20ダメージを与え、ディフェンディングポケモンは眠っています。",
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
