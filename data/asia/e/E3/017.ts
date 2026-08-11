import {Card} from "../../../interfaces"
import Set from "../E3"

const card: Card = {
    set: Set,
    name: {
        ja: "スキスター",
    },

    rarity: "Common",
    category: "Pokemon",
    dexId: [123],
    hp: 60,
    types: ["Grass"],
    stage: "Basic",

    attacks: [
        {
            cost: [],
            name: {
                ja: "クイックターン",
            },
            effect: {
                ja: "2つのコインをフリップします。この攻撃は、ヘッド数の10倍のダメージを与えます。",
            },
        },
        {
            cost: ["Colorless", "Colorless", "Colorless"],
            name: {
                ja: "クロスカット",
            },
            effect: {
                ja: "防御ポケモンが進化したポケモンである場合、この攻撃は20ダメージに20回のダメージを与えます。",
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
