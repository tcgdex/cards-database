import {Card} from "../../../interfaces"
import Set from "../PCG2"

const card: Card = {
      set: Set,
      name: {
                  ja: "マイティエナ",
                                                   },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [262],
      hp: 70,
      types: ["Darkness"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
                        ja: "探してください",
                                                                      },
          effect: {
                        ja: "デッキを1枚のカードを検索し、手に入れてください。その後、デッキをシャッフルします。",
                                                                      },
        },
        {
          cost: ["Colorless", "Colorless"],
          name: {
                        ja: "引き離します",
                                                                      },
          effect: {
                        ja: "相手が手に5枚以上のカードを持っている場合、対戦相手が4枚のカードが残っているまで、相手は多数のカードを破棄します。",
                                                                      },
          damage: 30,
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
		  }
      ],
};
