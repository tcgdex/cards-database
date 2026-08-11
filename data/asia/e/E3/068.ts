import {Card} from "../../../interfaces"
import Set from "../E3"

const card: Card = {
    set: Set,
    name: {
        ja: "ミルタンク",
    },

    rarity: "Common",
    category: "Pokemon",
    dexId: [241],
    hp: 60,
    types: ["Colorless"],
    stage: "Basic",

    attacks: [
        {
            cost: ["Colorless", "Colorless"],
            name: {
                ja: "取り組む",
            },
            damage: 20,
        },
        {
            cost: ["Colorless", "Colorless"],
            name: {
                ja: "連続的なタンブル",
            },
            effect: {
                ja: "尾がなくなるまでコインをひっくり返します。この攻撃は、ヘッド数の20倍のダメージを与えます。",
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
