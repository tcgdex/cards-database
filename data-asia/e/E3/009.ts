import {Card} from "../../../interfaces"
import Set from "../E3"

const card: Card = {
    set: Set,
    name: {
        ja: "weepinbell",
    },

    rarity: "Common",
    category: "Pokemon",
    dexId: [70],
    hp: 70,
    types: ["Grass"],
    stage: "Stage1",

    attacks: [
        {
            cost: ["Colorless"],
            name: {
                ja: "成長",
            },
            effect: {
                ja: "あなたの手からweepinbellに最大2匹の草のエネルギーカードを取り付けます。",
            },
        },
        {
            cost: ["Grass", "Colorless"],
            name: {
                ja: "ダブルレザーの葉",
            },
            effect: {
                ja: "2つのコインをフリップします。この攻撃は、ヘッド数の30回のダメージ時間を実行します。",
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
