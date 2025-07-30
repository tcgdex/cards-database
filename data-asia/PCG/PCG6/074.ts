import {Card} from "../../../interfaces"
import Set from "../PCG6"

const card: Card = {
      set: Set,
      name: {
                  ja: "スカルモリー",
                                                   },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [227],
      hp: 70,
      types: ["Metal"],
      stage: "Basic",

      abilities: [
        {
          name: {
                        ja: "輝くホーン",
                                                                      },
          effect: {
                        ja: "スカルモリーがあなたがプレイしている唯一のポカモンである限り、あなたの対戦相手の基本的なポカモンは攻撃できません。",
                                                                      },
      }],

      attacks: [
        {
          cost: ["Colorless"],
          name: {
                        ja: "助けを求めて泣きます",
                                                                      },
          effect: {
                        ja: "デッキを検索して、金属のポケモン（ポケモンエクスを除く）を検索し、相手に見せて、手に入れてください。その後、デッキをシャッフルします。",
                                                                      },
        },
        {
          cost: ["Metal", "Colorless"],
          name: {
                        ja: "スチール翼",
                                                                      },
          effect: {
                        ja: "対戦相手の次のターン中、攻撃によってスカルモリーに与えられた損害は20増加します（脱力感と抵抗を適用した後）。",
                                                                      },
          damage: 20,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
          subtype: "unlimited',
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
