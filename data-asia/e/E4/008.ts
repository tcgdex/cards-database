import {Card} from "../../../interfaces"
import Set from "../E4"

const card: Card = {
      set: Set,
      name: {
         ja: "クロバット",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [169],
      hp: 90,
      types: ["Grass"],
      stage: "Stage2",

      abilities: [
        {
          type: "Ability",
          name: {
            ja: "キャリーオフ",
          },
          effect: {
            ja: "ターン中に（攻撃の前に）、コインをひっくり返すことができます。頭の場合は、相手の手を見てください。対戦相手がベビーポクモン、基本的なポクモン、または進化カードを持っている場合は、そのうち1枚を選択します。あなたの対戦相手はそのカードを彼または彼女のデッキにシャッフルします。クロバットが特別な状態の影響を受けている場合、このパワーは使用できません。",
          },
      }],

      attacks: [
        {
          cost: ["Grass", "Colorless", "Colorless"],
          name: {
            ja: "ダブルクロス",
          },
          effect: {
            ja: "2つのコインをフリップします。この攻撃は、ヘッド数の40回のダメージ倍になります。両方が尾である場合、防御するポケモンは混乱し、毒されます。",
          },
        },
      ],


      variants: [
        {
          type: "normal",
          subtype: "unlimited",
        },
      ],
};
