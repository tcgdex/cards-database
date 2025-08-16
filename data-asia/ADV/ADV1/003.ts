import {Card} from "../../../interfaces"
import Set from "../ADV1"

const card: Card = {
      set: Set,
      name: {
                  ja: "seccepile",
                                                   },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [254],
      hp: 120,
      types: ["Grass"],
      stage: "Stage2",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
                        ja: "トカゲ毒",
                                                                      },
          effect: {
                        ja: "1つのエネルギーがシプタイルに付着している場合、防御ポケモンは眠っています。  2つのエネルギーがシプタイルに付着している場合、防御ポケモンは現在中毒になります。  3つのエネルギーがシプタイルに付着している場合、防御ポケモンは眠って毒されています。  4つ以上のエネルギーがSceptileに付着している場合、防御するポケモンは眠り、燃え、毒されています。",
                                                                      },
          damage: 20,
        },
        {
          cost: ["Grass", "Grass", "Colorless", "Colorless", "Colorless"],
          name: {
                        ja: "SolarBeam",
                                                                      },
          damage: 70,
        },
      ],

      retreat: 3,

      variants: [
        {
          type: "holo",
        },
		  {
			  type: "holo",
			  stamp: ["1st edition"]
		  },
      ],
};
