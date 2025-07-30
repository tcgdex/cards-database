import {Card} from "../../../interfaces"
import Set from "../PCG7"

const card: Card = {
      set: Set,
      name: {
                  ja: "ペルシャ（デルタ種）",
                                                   },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [53],
      hp: 70,
      types: ["Darkness"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Darkness", "Colorless"],
          name: {
                        ja: "スクラッチと描画",
                                                                      },
          effect: {
                        ja: "ホロンがその名前に載っているスタジアムカードが機能している場合は、3枚のカードを描画します。",
                                                                      },
          damage: 30,
        },
        {
          cost: ["Metal", "Colorless"],
          name: {
                        ja: "欺く",
                                                                      },
          effect: {
                        ja: "対戦相手は彼または彼女のポケモンの1つを選択します。そのポケモンに4つのダメージカウンターを置きます。",
                                                                      },
        },
      ],


      variants: [
        {
          type: "normal",
          subtype: "unlimited',
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
