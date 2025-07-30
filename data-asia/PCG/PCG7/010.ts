import {Card} from "../../../interfaces"
import Set from "../PCG7"

const card: Card = {
      set: Set,
      name: {
                  ja: "ラティアス（デルタ種）",
                                                   },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [380],
      hp: 70,
      types: ["Fire"],
      stage: "Basic",

      abilities: [
        {
          name: {
                        ja: "デュアルオーラ",
                                                                      },
          effect: {
                        ja: "LatiosまたはLatios Exがプレイしている限り、各プレイヤーの進化したPokã©Mon（Pokã©Mon-Exを除く）はPokã©Bodiesを使用できません。",
                                                                      },
      }],

      attacks: [
        {
          cost: ["Colorless"],
          name: {
                        ja: "スピアヘッド",
                                                                      },
          effect: {
                        ja: "カードを描きます。",
                                                                      },
        },
        {
          cost: ["Fire", "Colorless", "Colorless"],
          name: {
                        ja: "ドラゴンクロー",
                                                                      },
          damage: 40,
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
