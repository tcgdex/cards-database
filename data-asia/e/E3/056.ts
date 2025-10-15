import {Card} from "../../../interfaces"
import Set from "../E3"

const card: Card = {
    set: Set,
    name: {
        ja: "onix",
    },

    rarity: "Common",
    category: "Pokemon",
    dexId: [95],
    hp: 60,
    types: ["Fighting"],
    stage: "Basic",

    attacks: [
        {
            cost: ["Fighting", "Colorless"],
            name: {
                ja: "打ち砕く",
            },
            effect: {
                ja: "Onixに取り付けられたエネルギーの量に等しい多数のコインをひっくり返します。この攻撃は、ヘッド数の20倍のダメージを与えます。",
            },
        },
    ],

    retreat: 2,

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
