import {Card} from "../../../interfaces"
import Set from "../E5"

const card: Card = {
      set: Set,
      name: {
         ja: "ノクトウル",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [164],
      hp: 70,
      types: ["Colorless"],
      stage: "Stage1",

      abilities: [
        {
          type: "Ability",
          name: {
            ja: "調査する",
          },
          effect: {
            ja: "ターン中（攻撃の前）になったら、プレイヤーのデッキのトップ2カードまたはプレーヤーの賞品の最大2枚を見ることができます。見たカードを同じ順序で置きます。 Noctowlが特別な状態の影響を受ける場合、このパワーは使用できません。",
          },
      }],

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
            ja: "トリプルスマッシュ",
          },
          effect: {
            ja: "3コインをフリップします。この攻撃は、10ダメージに加えて、各ヘッドに対してさらに10ダメージを与えます。",
          },
        },
      ],


      variants: [
        {
          type: "normal",
        },
      ],
};
