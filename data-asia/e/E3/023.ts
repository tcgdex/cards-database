import {Card} from "../../../interfaces"
import Set from "../E3"

const card: Card = {
    set: Set,
    name: {
        ja: "ニネタール",
    },

    rarity: "Holo Rare",
    category: "Pokemon",
    dexId: [38],
    hp: 80,
    types: ["Fire"],
    stage: "Stage1",

    attacks: [
        {
            cost: ["Fire"],
            name: {
                ja: "奇跡の尾",
            },
            effect: {
                ja: "コインをひっくり返します。頭の場合は、特別な状態を選択します（眠り、燃やし、混乱し、麻痺し、毒されます）。防御ポケモンは現在、その特別な状態の影響を受けています。",
            },
            damage: 10,
        },
        {
            cost: ["Fire", "Colorless", "Colorless"],
            name: {
                ja: "焙煎熱",
            },
            effect: {
                ja: "防御ポケモンが燃やされた場合、この攻撃は40ダメージに加えて20ダメージを与えます。",
            },
        },
    ],

    retreat: 1,

    variants: [
        {
            type: "normal",
        },
    ],
};

export default card
