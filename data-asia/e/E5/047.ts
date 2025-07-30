import {Card} from "../../../interfaces"
import Set from "../E5"

const card: Card = {
      set: Set,
      name: {
         ja: "xatu",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [178],
      hp: 80,
      types: ["Psychic"],
      stage: "Stage1",

      abilities: [
        {
          type: "Ability",
          name: {
            ja: "同期性",
          },
          effect: {
            ja: "任意の技術マシンをXatuに接続できます。",
          },
      }],

      attacks: [
        {
          cost: ["Colorless", "Colorless", "Colorless"],
          name: {
            ja: "ワープホール",
          },
          effect: {
            ja: "コインをひっくり返します。頭の場合は、廃棄パイルからカードを選択し、デッキの上に置きます。",
          },
          damage: 30,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
