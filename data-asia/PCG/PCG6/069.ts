import {Card} from "../../../interfaces"
import Set from "../PCG6"

const card: Card = {
      set: Set,
      name: {
                  ja: "Umbreon（デルタ種）",
                                                   },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [197],
      hp: 70,
      types: ["Darkness"],
      stage: "Stage1",

      abilities: [
        {
          name: {
                        ja: "デルタムーン",
                                                                      },
          effect: {
                        ja: "対戦相手が自分の手からポカンの1つに特別なエネルギーカードを取り付けると、そのポカンに1つのダメージカウンターを置きます。 1つ以上のデルタムーンポケを使用することはできません。",
                                                                      },
      }],

      attacks: [
        {
          cost: ["Darkness", "Metal"],
          name: {
                        ja: "FEINT攻撃",
                                                                      },
          effect: {
                        ja: "対戦相手のポケモンを1つ選択します。この攻撃は、そのポケモンに30のダメージを与えます。この攻撃の損傷は、脱力感、抵抗、ポケの提唱、ポケボディ、またはそのポケモンに対するその他の影響の影響を受けません。",
                                                                      },
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
