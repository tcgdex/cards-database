import {Card} from "../../../interfaces"
import Set from "../PCG5"

const card: Card = {
      set: Set,
      name: {
                  ja: "Altaria Ex",
                                                   },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [334],
      hp: 100,
      types: ["Colorless"],
      stage: "Stage1",

      abilities: [
        {
          name: {
                        ja: "ミスト",
                                                                      },
          effect: {
                        ja: "ステージ2の進化したポカモン（あなたと対戦相手の両方）からの攻撃によってaltaria Exに与えられた損害は30減少します（脱力感と抵抗を適用した後）。",
                                                                      },
      }],

      attacks: [
        {
          cost: ["Colorless"],
          name: {
                        ja: "ダイビング",
                                                                      },
          damage: 20,
        },
        {
          cost: ["Water", "Lightning", "Colorless"],
          name: {
                        ja: "ドラゴンミスト",
                                                                      },
          effect: {
                        ja: "この攻撃の損傷は、抵抗、ポケの提唱、ポケボディ、または防御ポケモンに対するその他の影響の影響を受けません。",
                                                                      },
          damage: 70,
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
