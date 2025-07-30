import {Card} from "../../../interfaces"
import Set from "../PCG8"

const card: Card = {
      set: Set,
      name: {
                  ja: "Shiftry Ex",
                                                   },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [275],
      hp: 140,
      types: ["Darkness"],
      stage: "Stage2",

      abilities: [
        {
          name: {
                        ja: "暗い目",
                                                                      },
          effect: {
                        ja: "相手のPokã©MonがPokã©Powerを使用した後、そのPokã©Monに2つのダメージカウンターを入れます。",
                                                                      },
      }],

      attacks: [
        {
          cost: ["Darkness", "Colorless"],
          name: {
                        ja: "ターゲット攻撃",
                                                                      },
          effect: {
                        ja: "対戦相手のポケモンを1つ選択します。この攻撃は、そのポケモンに30のダメージを与えます。そのポケモンにはすでにダメージカウンターがある場合、この攻撃は代わりに50のダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
                                                                      },
        },
        {
          cost: ["Darkness", "Colorless", "Colorless"],
          name: {
                        ja: "ブレードアーム",
                                                                      },
          damage: 70,
        },
      ],


      variants: [
        {
          type: "holo",
          subtype: "unlimited",
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
