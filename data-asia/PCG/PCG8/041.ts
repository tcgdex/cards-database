import {Card} from "../../../interfaces"
import Set from "../PCG8"

const card: Card = {
      set: Set,
      name: {
                  ja: "ジラチEx",
                                                   },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [385],
      hp: 90,
      types: ["Psychic"],
      stage: "Basic",

      abilities: [
        {
          name: {
                        ja: "星光",
                                                                      },
          effect: {
                        ja: "対戦相手がPokã©Mon-ExまたはStage 2 EvolvedPokã©Mon in Playを持っている限り、Jirachi Exは{{e}}シールドビームまたはスーパーPSYボルトを使用するエネルギーを少なくします。",
                                                                      },
      }],

      attacks: [
        {
          cost: ["Psychic", "Colorless"],
          name: {
                        ja: "シールドビーム",
                                                                      },
          effect: {
                        ja: "対戦相手の次のターン中、対戦相手はポケモンにポケパワーを使用できません。",
                                                                      },
          damage: 30,
        },
        {
          cost: ["Psychic", "Colorless", "Colorless"],
          name: {
                        ja: "スーパーPSYボルト",
                                                                      },
          damage: 50,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "holo",
          subtype: "unlimited',
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
