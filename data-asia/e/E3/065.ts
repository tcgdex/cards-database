import {Card} from "../../../interfaces"
import Set from "../E3"

const card: Card = {
    set: Set,
    name: {
        ja: "セントレット",
    },

    rarity: "Common",
    category: "Pokemon",
    dexId: [161],
    hp: 50,
    types: ["Colorless"],
    stage: "Basic",

    attacks: [
        {
            cost: ["Colorless"],
            name: {
                ja: "スパイ",
            },
            effect: {
                ja: "対戦相手のデッキのトップ3カードを見てください。それらを同じ順序で戻します。",
            },
        },
        {
            cost: ["Colorless"],
            name: {
                ja: "二重スクラッチ",
            },
            effect: {
                ja: "2つのコインをフリップします。この攻撃は、ヘッド数の10倍のダメージを与えます。",
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
