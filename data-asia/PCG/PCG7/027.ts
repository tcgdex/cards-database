import {Card} from "../../../interfaces"
import Set from "../PCG7"

const card: Card = {
      set: Set,
      name: {
                  ja: "OMASTAR（デルタ種）",
                                                   },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [139],
      hp: 110,
      types: ["Psychic"],
      stage: "Stage2",

      attacks: [
        {
          cost: ["Psychic", "Colorless"],
          name: {
                        ja: "バインド",
                                                                      },
          effect: {
                        ja: "コインをひっくり返します。頭の場合、防御ポケモンは麻痺しています。",
                                                                      },
          damage: 30,
        },
        {
          cost: ["Psychic", "Colorless", "Colorless"],
          name: {
                        ja: "復geのスパイク",
                                                                      },
          effect: {
                        ja: "30のダメージに加えて、オマンテ、オマスター、カブト、カブトップス、カブトップスごとにさらに10ダメージを与えます。この方法で60以上のダメージを追加することはできません。",
                                                                      },
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
