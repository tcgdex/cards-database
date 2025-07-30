import {Card} from "../../../interfaces"
import Set from "../PCG5"

const card: Card = {
      set: Set,
      name: {
                  ja: "ゆっくりと",
                                                   },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [346],
      hp: 100,
      types: ["Grass"],
      stage: "Stage2",

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
                        ja: "委任波",
                                                                      },
          effect: {
                        ja: "cradilyに取り付けられたReact Energyカードの数を数え、相手の進化したポケモンの数を選択します。これらのポケモンのそれぞれから最高のステージ進化カードを削除し、相手にそれらのカードを彼または彼女のデッキにシャッフルさせます。",
                                                                      },
        },
        {
          cost: ["Grass", "Colorless"],
          name: {
                        ja: "線形攻撃",
                                                                      },
          effect: {
                        ja: "対戦相手のポケモンを1つ選択します。この攻撃は、そのポケモンに30のダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
                                                                      },
        },
        {
          cost: ["Colorless", "Colorless", "Colorless"],
          name: {
                        ja: "泥ショット",
                                                                      },
          damage: 50,
        },
      ],

      retreat: 2,

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
