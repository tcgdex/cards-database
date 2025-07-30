import {Card} from "../../../interfaces"
import Set from "../E5"

const card: Card = {
    set: Set,
    name: {
        ja: "サンフロラ",
    },

    rarity: "Common",
    category: "Pokemon",
    dexId: [192],
    hp: 70,
    types: ["Grass"],
    stage: "Stage1",

    attacks: [
        {
            cost: ["Grass", "Colorless"],
            name: {
                ja: "エネルギープラント",
            },
            effect: {
                ja: "デッキを検索して、基本的なエネルギーカードを検索し、ポケモンの1枚に添付してください。その後、デッキをシャッフルします。",
            },
        },
        {
            cost: ["Grass", "Colorless", "Colorless"],
            name: {
                ja: "旅をします",
            },
            effect: {
                ja: "コインをひっくり返します。頭の場合、この攻撃は30ダメージに加えて30ダメージを与えます。",
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
