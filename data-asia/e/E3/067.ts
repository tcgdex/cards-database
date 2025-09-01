import {Card} from "../../../interfaces"
import Set from "../E3"

const card: Card = {
    set: Set,
    name: {
        ja: "aipom",
    },

    rarity: "Common",
    category: "Pokemon",
    dexId: [190],
    hp: 50,
    types: ["Colorless"],
    stage: "Basic",

    attacks: [
        {
            cost: ["Colorless"],
            name: {
                ja: "ストレッチテール",
            },
            effect: {
                ja: "コインをひっくり返します。頭の場合は、対戦相手のベンチポケモンの1つを選択すると、この攻撃は10ダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
            },
        },
        {
            cost: ["Colorless", "Colorless"],
            name: {
                ja: "Skedaddle",
            },
            effect: {
                ja: "Aipomとすべての基本的なエネルギーカードをあなたの手に返します。ベンチ付きポケモンがない場合、この攻撃は何もしません。",
            },
            damage: 20,
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
