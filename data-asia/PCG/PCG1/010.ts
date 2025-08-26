import {Card} from "../../../interfaces"
import Set from "../PCG1"

const card: Card = {
    set: Set,
    name: {
        ja: "ニドリーノ",
    },

    rarity: "Rare",
    category: "Pokemon",
    dexId: [33],
    hp: 70,
    types: ["Grass"],
    stage: "Stage1",

    attacks: [
        {
            cost: ["Colorless"],
            name: {
                ja: "二重吸い込み",
            },
            effect: {
                ja: "2つのコインをフリップします。この攻撃は、ヘッド数の20倍のダメージを与えます。",
            },
        },
        {
            cost: ["Colorless", "Colorless", "Colorless"],
            name: {
                ja: "レンド",
            },
            effect: {
                ja: "防衛ポケモンにダメージカウンターがすでにある場合、この攻撃は30のダメージと30のダメージを与えます。",
            },
        },
    ],

    retreat: 1,

    variants: [
        {
            type: "normal",
            stamp: ["1st edition"],
        },
        {
            type: "normal",
            subtype: "unlimited",
        },
    ],
};

export default card
