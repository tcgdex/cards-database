import {Card} from "../../../interfaces"
import Set from "../E3"

const card: Card = {
    set: Set,
    name: {
        ja: "シードラ",
    },

    rarity: "Common",
    category: "Pokemon",
    dexId: [117],
    hp: 70,
    types: ["Water"],
    stage: "Stage1",

    attacks: [
        {
            cost: ["Water"],
            name: {
                ja: "波のスプラッシュ",
            },
            damage: 20,
        },
        {
            cost: ["Colorless", "Colorless", "Colorless"],
            name: {
                ja: "水の弾丸",
            },
            effect: {
                ja: "Seadraに取り付けられた水エネルギーの数に等しい多数のコインをひっくり返します。この攻撃は、30のダメージに加えて、各ヘッドに対してさらに10ダメージを与えます。",
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
