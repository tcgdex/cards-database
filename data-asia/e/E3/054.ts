import {Card} from "../../../interfaces"
import Set from "../E3"

const card: Card = {
    set: Set,
    name: {
        ja: "マンキー",
    },

    rarity: "Common",
    category: "Pokemon",
    dexId: [56],
    hp: 40,
    types: ["Fighting"],
    stage: "Basic",

    attacks: [
        {
            cost: ["Fighting"],
            name: {
                ja: "マグ",
            },
            effect: {
                ja: "ダメージを与える前に、防御ポケモンに取り付けられたすべてのトレーナーカードを捨ててください。",
            },
            damage: 10,
        },
        {
            cost: ["Colorless", "Colorless"],
            name: {
                ja: "怒り",
            },
            effect: {
                ja: "この攻撃は、マンキーのダメージカウンターごとに10ダメージに加えて10ダメージを与えます。",
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
