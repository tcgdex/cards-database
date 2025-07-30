import {Card} from "../../../interfaces"
import Set from "../PCG5"

const card: Card = {
      set: Set,
      name: {
                  ja: "ミスレアヴァス",
                                                   },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [200],
      hp: 50,
      types: ["Psychic"],
      stage: "Basic",

      abilities: [
        {
          name: {
                        ja: "深い眠り",
                                                                      },
          effect: {
                        ja: "Misdreavusがあなたのアクティブなポカモンである限り、各プレイヤーは、ターンの間に眠っている彼または彼女のポカモンのために2つのコインをひっくり返します。いずれかのコインが尾の場合、そのポカンはまだ眠っています。",
                                                                      },
      }],

      attacks: [
        {
          cost: ["Colorless"],
          name: {
                        ja: "トランスを返します",
                                                                      },
          effect: {
                        ja: "Return an Energy card attached to Misdreavus to your hand.防御ポケモンは今眠っています。",
                                                                      },
        },
        {
          cost: ["Psychic"],
          name: {
                        ja: "夢の食べる人",
                                                                      },
          effect: {
                        ja: "防御するポケモンが眠っていない場合、この攻撃は何もしません。",
                                                                      },
          damage: 30,
        },
      ],

      retreat: 1,

      variants: [
        {
  type: "normal",
  subtype: 'unlimited",
}
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
