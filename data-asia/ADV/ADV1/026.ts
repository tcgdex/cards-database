import {Card} from "../../../interfaces"
import Set from "../ADV1"

const card: Card = {
      set: Set,
      name: {
                  ja: "mewtwo ex",
                                                   },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [150],
      hp: 100,
      types: ["Psychic"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Psychic"],
          name: {
                        ja: "エネルギー吸収",
                                                                      },
          effect: {
                        ja: "廃棄パイルからMewtwo exに最大2枚のエネルギーカードを取り付けます。",
                                                                      },
        },
        {
          cost: ["Psychic", "Psychic", "Colorless"],
          name: {
                        ja: "Psyburn",
                                                                      },
          damage: 60,
        },
      ],

      retreat: 3,

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
