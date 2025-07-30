import {Card} from "../../../interfaces"
import Set from "../E4"

const card: Card = {
      set: Set,
      name: {
         ja: "Umbreon",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [197],
      hp: 70,
      types: ["Darkness"],
      stage: "Stage1",

      abilities: [
        {
          type: "Ability",
          name: {
            ja: "暗い視線",
          },
          effect: {
            ja: "UmbreonがあなたのアクティブなPokmonである限り、ベンチ付きPokmon（あなたとあなたの対戦相手）はPok-Powersを使用できません。",
          },
      }],

      attacks: [
        {
          cost: ["Darkness", "Colorless"],
          name: {
            ja: "鋭い爪",
          },
          effect: {
            ja: "コインをひっくり返します。頭の場合、この攻撃は10ダメージに加えて30ダメージを与えます。",
          },
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
          subtype: "unlimited",
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
