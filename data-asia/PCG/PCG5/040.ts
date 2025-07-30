import {Card} from "../../../interfaces"
import Set from "../PCG5"

const card: Card = {
      set: Set,
      name: {
                  ja: "ジェンガー",
                                                   },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [94],
      hp: 100,
      types: ["Psychic"],
      stage: "Stage2",

      abilities: [
        {
          name: {
                        ja: "影の呪い",
                                                                      },
          effect: {
                        ja: "Gengarが相手の攻撃によるダメージによってノックアウトされる場合、相手のPokã©Monの1つに3つのダメージカウンターを入れることができます。",
                                                                      },
      }],

      attacks: [
        {
          cost: ["Psychic"],
          name: {
                        ja: "呪われた反応",
                                                                      },
          effect: {
                        ja: "相手のポケモンに2つのダメージカウンターを、好きなように配置します。 GengarにはReact Energy Cardが接続されている場合は、代わりに4つのダメージカウンターを入れます。",
                                                                      },
        },
        {
          cost: ["Psychic", "Psychic", "Colorless"],
          name: {
                        ja: "スーパーPSYボルト",
                                                                      },
          damage: 60,
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
