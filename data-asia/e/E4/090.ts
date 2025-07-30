import {Card} from "../../../interfaces"
import Set from "../E4"

const card: Card = {
      set: Set,
      name: {
         ja: "カブトップス",
      },

      rarity: "Secret Rare",
      category: "Pokemon",
      dexId: [141],
      hp: 90,
      types: ["Colorless"],
      stage: "Stage2",

      abilities: [
        {
          type: "Ability",
          name: {
            ja: "クリスタルタイプ",
          },
          effect: {
            ja: "手からカブトップスまでの水、稲妻、または基本エネルギーカードとの戦いをするたびに、カブトップスのタイプ（色）はターンの終わりまでそのタイプのエネルギーと同じになります。",
          },
      }],

      attacks: [
        {
          cost: ["Fighting", "Water", "Colorless"],
          name: {
            ja: "排水カット",
          },
          effect: {
            ja: "Kabutopsからダメージカウンターを取り外します。",
          },
          damage: 20,
        },
        {
          cost: ["Fighting", "Lightning", "Lightning", "Colorless"],
          name: {
            ja: "トリプルカッター",
          },
          effect: {
            ja: "3コインをフリップします。この攻撃は、ヘッド数の30回のダメージ時間を実行します。",
          },
        },
      ],

      retreat: 3,

      variants: [
        {
          type: "normal",
        },
      ],
};
