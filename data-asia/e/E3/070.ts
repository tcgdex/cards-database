import {Card} from "../../../interfaces"
import Set from "../E3"

const card: Card = {
    set: Set,
    name: {
        ja: "タイラニター",
    },

    rarity: "Rare",
    category: "Pokemon",
    dexId: [248],
    hp: 120,
    types: ["Darkness"],
    stage: "Stage2",

    attacks: [
        {
            cost: ["Darkness"],
            name: {
                ja: "破壊的なro音",
            },
            effect: {
                ja: "コインをひっくり返します。頭の場合は、1匹の敵のポケモンに取り付けられた1枚のエネルギーカードを捨てます。",
            },
        },
        {
            cost: ["Darkness", "Colorless", "Colorless"],
            name: {
                ja: "テールスラップ",
            },
            damage: 30,
        },
        {
            cost: ["Darkness", "Darkness", "Colorless", "Colorless", "Colorless"],
            name: {
                ja: "GigaCrush",
            },
            effect: {
                ja: "各プレイヤーは、上位3枚のカードをデッキから破棄します。",
            },
            damage: 60,
        },
    ],

    retreat: 3,

    variants: [
        {
            type: "normal",
        },
    ],
};

export default card
