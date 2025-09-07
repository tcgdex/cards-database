import {Card} from "../../../interfaces"
import Set from "../E3"

const card: Card = {
    set: Set,
    name: {
        ja: "exeggutor",
    },

    rarity: "Uncommon",
    category: "Pokemon",
    dexId: [103],
    hp: 80,
    types: ["Psychic"],
    stage: "Stage1",

    attacks: [
        {
            cost: ["Colorless"],
            name: {
                ja: "大きな卵の幅",
            },
            effect: {
                ja: "exeggutorに取り付けられたエネルギーの量に等しい多数のコインをひっくり返します。この攻撃は、ヘッド数の20倍のダメージを与えます。",
            },
        },
        {
            cost: ["Psychic", "Colorless", "Colorless"],
            name: {
                ja: "横卵の幅",
            },
            effect: {
                ja: "すべてのベンチポケモンに取り付けられたエネルギーの量に等しい多数のコインをひっくり返します。この攻撃は、30のダメージに加えて、各ヘッドに対してさらに10ダメージを与えます。",
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
