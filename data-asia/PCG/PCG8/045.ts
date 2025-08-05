import {Card} from "../../../interfaces"
import Set from "../PCG8"

const card: Card = {
      set: Set,
      name: {
                  ja: "Blaziken Ex",
                                                   },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [257],
      hp: 150,
      types: ["Fighting"],
      stage: "Stage2",

      attacks: [
        {
          cost: ["Fighting", "Colorless"],
          name: {
                        ja: "ドラッグします",
                                                                      },
          effect: {
                        ja: "ダメージを与える前に、対戦相手のベンチポケモンの1つを選択し、防御ポケモンの1つで切り替えることができます。対戦相手は、防御するポケモンを選択して切り替えます。",
                                                                      },
          damage: 30,
        },
        {
          cost: ["Fire", "Fighting", "Colorless", "Colorless"],
          name: {
                        ja: "燃え尽きる",
                                                                      },
          effect: {
                        ja: "ダメージを与える前に、防御ポケモンの残りのHPを数えます。そのポケモンがこの攻撃によってノックアウトされた場合、Blaziken Exは、この攻撃のダメージに等しいダメージを、防御ポケモンの残りのHPを差し引いてからです。この攻撃の損傷は、脱力感、抵抗、ポケの提唱、ポケボディ、またはそのポケモンに対するその他の影響の影響を受けません。",
                                                                      },
          damage: 100,
        },
      ],

      retreat: 2,

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
