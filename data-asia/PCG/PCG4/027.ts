import {Card} from "../../../interfaces"
import Set from "../PCG4"

const card: Card = {
      set: Set,
      name: {
                  ja: "Politoed Ex",
                                                   },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [186],
      hp: 150,
      types: ["Water"],
      stage: "Stage2",

      attacks: [
        {
          cost: ["Water", "Colorless"],
          name: {
                        ja: "上向きのなめ",
                                                                      },
          effect: {
                        ja: "対戦相手のポケモンを1つ選択します。この攻撃は、そのポケモンに30のダメージを与えます。そのポケモンがステージ2の進化したポケモンである場合、この攻撃は代わりに50のダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
                                                                      },
        },
        {
          cost: ["Colorless", "Colorless", "Colorless"],
          name: {
                        ja: "パンチとラン",
                                                                      },
          effect: {
                        ja: "ベンチ付きポケモンの1つでPolitoed Exを切り替えます。",
                                                                      },
          damage: 40,
        },
        {
          cost: ["Water", "Water", "Colorless", "Colorless"],
          name: {
                        ja: "飲み込む",
                                                                      },
          effect: {
                        ja: "ダメージを与える前に、防御するポケモンと政治のExの残りのHPを数えます。防御するポケモンがPolitoed Exよりも残っているHPが少ない場合、この攻撃は代わりに120のダメージを与えます。",
                                                                      },
          damage: 70,
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
