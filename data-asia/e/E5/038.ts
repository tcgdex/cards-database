import {Card} from "../../../interfaces"
import Set from "../E5"

const card: Card = {
      set: Set,
      name: {
         ja: "マグネトン",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [82],
      hp: 80,
      types: ["Lightning"],
      stage: "Stage1",

      abilities: [
        {
          type: "Ability",
          name: {
            ja: "エネルギーを取り付けます",
          },
          effect: {
            ja: "手からマグネトンを演奏してポケモンの1つを進化させると、他のポケモンに取り付けられた基本エネルギーカードを任意の数のマグネトンに移動できます。",
          },
      }],

      attacks: [
        {
          cost: ["Lightning", "Colorless", "Colorless"],
          name: {
            ja: "電気爆発",
          },
          effect: {
            ja: "この攻撃を使用すると、マグネトンに取り付けられたすべての稲妻エネルギーカードを破棄できます。そうした場合、この方法で削除されたエネルギーカードの量に等しいダメージカウンターを、相手のベンチでポケモンを好きなように配置します。 （たとえば、3枚のLightning Energyカードを破棄すると、対戦相手のベンチ付きポケモンの1つに1つのダメージカウンターを配置し、別のカウンターに2つのカウンターを配置できます。）",
          },
          damage: 40,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "holo",
          subtype: "unlimited",
        },
      ],
};
