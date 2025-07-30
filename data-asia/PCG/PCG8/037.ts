import {Card} from "../../../interfaces"
import Set from "../PCG8"

const card: Card = {
      set: Set,
      name: {
                  ja: "シュペット",
                                                   },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [353],
      hp: 40,
      types: ["Psychic"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
                        ja: "上昇",
                                                                      },
          effect: {
                        ja: "シュペットから進化するカードをデッキに検索し、シュペットに置きます。 （これは進化するシュペットとしてカウントされます。）その後、デッキをシャッフルします。",
                                                                      },
        },
        {
          cost: ["Psychic", "Colorless"],
          name: {
                        ja: "取り組む",
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
