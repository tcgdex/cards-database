import {Card} from "../../../interfaces"
import Set from "../ADV2"

const card: Card = {
      set: Set,
      name: {
                  ja: "lileep",
                                                   },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [345],
      hp: 80,
      types: ["Grass"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
                        ja: "影響",
                                                                      },
          effect: {
                        ja: "オマニテ、カブト、アエロダクチル、リリープ、またはアノリスをデッキで検索し、2つをベンチに入れます。その後、デッキをシャッフルします。新しいベンチポケモンを基本的なポケモンとして扱います。",
                                                                      },
        },
        {
          cost: ["Colorless", "Colorless"],
          name: {
                        ja: "タイムスパイラル",
                                                                      },
          effect: {
                        ja: "相手が進化したポケモンをプレイしている場合は、1つを選択してコインをひっくり返します。頭の場合は、そのポケモンの最高段階の進化カードを取り外し、相手にそれを彼または彼女のデッキにシャッフルさせます。",
                                                                      },
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};

export default card
