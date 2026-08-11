import {Card} from "../../../interfaces"
import Set from "../E3"

const card: Card = {
    set: Set,
    name: {
        ja: "幼虫",
    },

    rarity: "Common",
    category: "Pokemon",
    dexId: [246],
    hp: 40,
    types: ["Fighting"],
    stage: "Basic",

    attacks: [
        {
            cost: ["Colorless"],
            name: {
                ja: "マウンテンイーター",
            },
            effect: {
                ja: "あなたの対戦相手は彼または彼女のデッキからトップカードを捨てます。次に、Larvitarからダメージカウンターを削除します。",
            },
        },
        {
            cost: ["Fighting"],
            name: {
                ja: "上昇する突進",
            },
            effect: {
                ja: "コインをひっくり返します。頭の場合、この攻撃は10ダメージに加えて10ダメージを与えます。",
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
            subtype: "unlimited",
        }, {
            type: "normal",
            stamp: ["1st edition"],
        },
    ],
};

export default card
