import {Card} from "../../../interfaces"
import Set from "../PCG3"

const card: Card = {
      set: Set,
      name: {
                  ja: "Hariyama ex",
                                                   },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [297],
      hp: 110,
      types: ["Fighting"],
      stage: "Stage1",

      abilities: [
        {
          name: {
                        ja: "指揮オーラ",
                                                                      },
          effect: {
                        ja: "Hariyama Exがあなたのアクティブなポカモンである限り、あなたの対戦相手は彼または彼女の手からスタジアムカードをプレイすることができません。",
                                                                      },
      }],

      attacks: [
        {
          cost: ["Fighting", "Colorless"],
          name: {
                        ja: "ノックオフ",
                                                                      },
          effect: {
                        ja: "対戦相手の手から1枚のカードを探して廃棄せずに選択してください。",
                                                                      },
          damage: 40,
        },
        {
          cost: ["Fighting", "Fighting", "Colorless"],
          name: {
                        ja: "ピボットスロー",
                                                                      },
          effect: {
                        ja: "対戦相手の次のターン中、攻撃によってHariyama Exに与えられた損害は10増加します（脱力感と抵抗を適用する前に）。",
                                                                      },
          damage: 80,
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "holo",
          stamp: ["1st edition"],
        },
        {
          type: "holo",
          subtype: "unlimited",
        },
      ],
};
