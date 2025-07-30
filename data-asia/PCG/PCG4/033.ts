import {Card} from "../../../interfaces"
import Set from "../PCG4"

const card: Card = {
      set: Set,
      name: {
                  ja: "Electabuzz",
                                                   },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [125],
      hp: 70,
      types: ["Lightning"],
      stage: "Basic",

      abilities: [
        {
          name: {
                        ja: "進化の段階",
                                                                      },
          effect: {
                        ja: "Electabuzzが進化したポカモンである限り、特別なエネルギーカードを添付した相手のポカモンからの攻撃によってElectabuzに与えられた損害は40減少します（脱力感と抵抗を適用した後）。",
                                                                      },
      }],

      attacks: [
        {
          cost: ["Lightning", "Colorless"],
          name: {
                        ja: "二重衝撃",
                                                                      },
          effect: {
                        ja: "2つのコインをフリップします。この攻撃は、ヘッド数の10倍のダメージを与えます。いずれかのコインがヘッドである場合、防御ポケモンは麻痺しています。",
                                                                      },
        },
        {
          cost: ["Lightning", "Colorless", "Colorless", "Colorless"],
          name: {
                        ja: "光沢のある爆発",
                                                                      },
          effect: {
                        ja: "ElectaBuzzに取り付けられた3つのエネルギーを捨てます。",
                                                                      },
          damage: 70,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
