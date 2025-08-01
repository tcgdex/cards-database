import {Card} from "../../../interfaces"
import Set from "../PCG5"

const card: Card = {
      set: Set,
      name: {
                  ja: "アグロン",
                                                   },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [306],
      hp: 110,
      types: ["Metal"],
      stage: "Stage2",

      attacks: [
        {
          cost: ["Fighting", "Colorless", "Colorless"],
          name: {
                        ja: "重い打撃",
                                                                      },
          effect: {
                        ja: "Aggronのダメージカウンターごとに70ダメージから10ダメージを差し引いた。 AggronにはReact Energy Cardが接続されている場合、この攻撃は代わりに70のダメージを与えます。",
                                                                      },
        },
        {
          cost: ["Fighting", "Metal", "Colorless", "Colorless"],
          name: {
                        ja: "バウンドクラッシュ",
                                                                      },
          effect: {
                        ja: "対戦相手のポケモンを1つ選択します。この攻撃は、そのポケモンに60のダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）次のターン中、アグロンはバウンドクラッシュを使用できません。",
                                                                      },
        },
      ],

      retreat: 4,

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
