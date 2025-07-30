import {Card} from "../../../interfaces"
import Set from "../E5"

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
          type: "Ability",
          name: {
            ja: "操作",
          },
          effect: {
            ja: "アクティブなポクモンを進化させるために手からジェンガーを演奏すると、廃棄の山からベンチに基本的なポクモン（ベビーポクモンを除く）を入れることができます。次に、3コインをひっくり返します。ヘッドごとに、廃棄パイルから基本的なエネルギーカードを選択し、そのポクモンに取り付けます。",
          },
      }],

      attacks: [
        {
          cost: ["Psychic", "Psychic", "Colorless", "Colorless"],
          name: {
            ja: "Hydrokinesis",
          },
          effect: {
            ja: "コインをひっくり返します。頭の場合、防御するポケモンが燃やされます。尾の場合、防御ポケモンは混乱しています。",
          },
          damage: 40,
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "normal",
        },
      ],
};
