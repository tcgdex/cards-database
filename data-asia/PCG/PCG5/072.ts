import {Card} from "../../../interfaces"
import Set from "../PCG5"

const card: Card = {
      set: Set,
      name: {
                  ja: "絶対",
                                                   },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [359],
      hp: 70,
      types: ["Darkness"],
      stage: "Basic",

      abilities: [
        {
          name: {
                        ja: "輝くホーン",
                                                                      },
          effect: {
                        ja: "あなたがプレイしている唯一のポカモンである限り、あなたの相手の基本的なポカモンは攻撃できません。",
                                                                      },
      }],

      attacks: [
        {
          cost: ["Colorless"],
          name: {
                        ja: "余分な電話",
                                                                      },
          effect: {
                        ja: "デッキを検索してポケモンエックスを検索し、相手に見せて、手に入れてください。その後、デッキをシャッフルします。",
                                                                      },
        },
        {
          cost: ["Darkness", "Colorless"],
          name: {
                        ja: "FEINT攻撃",
                                                                      },
          effect: {
                        ja: "対戦相手のポケモンを1つ選択します。この攻撃は、そのポケモンに20のダメージを与えます。この攻撃の損傷は、脱力感、抵抗、ポケの提唱、ポケボディ、またはそのポケモンに対するその他の影響の影響を受けません。",
                                                                      },
        },
      ],

      retreat: 1,

      variants: [
        {
  type: "normal",
  subtype: 'unlimited",
}
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
