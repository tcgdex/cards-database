import {Card} from "../../../interfaces"
import Set from "../PCG6"

const card: Card = {
      set: Set,
      name: {
                  ja: "催眠",
                                                   },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [97],
      hp: 70,
      types: ["Psychic"],
      stage: "Stage1",

      abilities: [
        {
          name: {
                        ja: "結合オーラ",
                                                                      },
          effect: {
                        ja: "対戦相手は、眠っているポカンを進化させるために、手から基本的なポカモンまたはエボリューションカードをプレイすることができず、手からエネルギーカードを眠っているポケモンに取り付けることはできません。",
                                                                      },
      }],

      attacks: [
        {
          cost: ["Colorless"],
          name: {
                        ja: "スリープインデューサー",
                                                                      },
          effect: {
                        ja: "対戦相手のベンチポケモンの1つを防御ポケモンの1つに切り替えます。対戦相手は、防御するポケモンを選択して切り替えます。新しい防御ポケモンは今眠っています。",
                                                                      },
        },
        {
          cost: ["Psychic", "Colorless"],
          name: {
                        ja: "PSYSHOT",
                                                                      },
          damage: 40,
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
