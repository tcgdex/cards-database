import {Card} from "../../../interfaces"
import Set from "../E3"

const card: Card = {
    set: Set,
    name: {
        ja: "exeggcute",
    },

    rarity: "Common",
    category: "Pokemon",
    dexId: [102],
    hp: 50,
    types: ["Psychic"],
    stage: "Basic",

    attacks: [
        {
            cost: ["Colorless"],
            name: {
                ja: "連続した卵の幅",
            },
            effect: {
                ja: "尾がなくなるまでコインをひっくり返します。この攻撃は、ヘッド数の10倍のダメージを与えます。",
            },
        },
        {
            cost: ["Psychic"],
            name: {
                ja: "エネルギーサポート",
            },
            effect: {
                ja: "コインをひっくり返します。頭の場合は、デッキを検索してサイキックエネルギーカードを探して、ベンチ付きポケモン1枚に取り付けます。その後、デッキをシャッフルします。",
            },
        },
    ],

    retreat: 1,

    variants: [
        {
            type: "normal",
            subtype: "unlimited",
        }, {
            type: "normal",
            stamp: ["1st edition"],
        },
    ],
};

export default card
