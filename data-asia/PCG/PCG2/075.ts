import {Card} from "../../../interfaces"
import Set from "../PCG2"

const card: Card = {
      set: Set,
      name: {
                  ja: "ジラチ",
                                                   },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [385],
      hp: 60,
      types: ["Metal"],
      stage: "Basic",

      abilities: [
        {
          name: {
                        ja: "星を願っています",
                                                                      },
          effect: {
                        ja: "ターン中（攻撃の前に）一度、ジラチがあなたのアクティブなポカモンである場合、デッキのトップ5カードを見て、それらの1つを選択して、それを手に入れてください。その後、デッキをシャッフルします。ジラチと他のアクティブなポカモンは、もしあれば、今眠っています。ジラチが特別な状態の影響を受けている場合、この力は使用できません。",
                                                                      },
      }],

      attacks: [
        {
          cost: ["Metal", "Colorless"],
          name: {
                        ja: "メタリックブロー",
                                                                      },
          effect: {
                        ja: "防御するポケモンにポケボディがある場合、この攻撃は20ダメージに加えて30ダメージを与えます。",
                                                                      },
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
