import {Card} from "../../../interfaces"
import Set from "../PCG5"

const card: Card = {
      set: Set,
      name: {
                  ja: "マチャンプ",
                                                   },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [68],
      hp: 120,
      types: ["Fighting"],
      stage: "Stage2",

      attacks: [
        {
          cost: ["Fighting", "Colorless"],
          name: {
                        ja: "脱線",
                                                                      },
          effect: {
                        ja: "防御ポケモンに取り付けられた特別なエネルギーカードを捨てます。",
                                                                      },
          damage: 40,
        },
        {
          cost: ["Fighting", "Colorless", "Colorless"],
          name: {
                        ja: "迅速な打撃",
                                                                      },
          effect: {
                        ja: "60のダメージに加えて、MachAmpに取り付けられたReact Energyカードごとに20のダメージがさらに20件あります。",
                                                                      },
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
