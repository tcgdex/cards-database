import {Card} from "../../../interfaces"
import Set from "../E3"

const card: Card = {
    set: Set,
    name: {
        ja: "キングドラ",
    },

    rarity: "Holo Rare",
    category: "Pokemon",
    dexId: [230],
    hp: 120,
    types: ["Water"],
    stage: "Stage2",

    abilities: [
        {
            type: "Ability",
            name: {
                ja: "ウォーターサイクロン",
            },
            effect: {
                ja: "ターン中（攻撃前）に好きなように、アクティブなポクモンからベンチ付きポクモンの1に水エネルギーカードを移動できます。 Kingdraが特別な状態の影響を受けている場合、このパワーは使用できません。",
            },
        }],

    attacks: [
        {
            cost: ["Water", "Water", "Colorless", "Colorless"],
            name: {
                ja: "急流",
            },
            effect: {
                ja: "コインをひっくり返します。頭の場合は、ディフェンディングポケモンに取り付けられた1つのエネルギーカードを捨ててください。",
            },
            damage: 50,
        },
    ],

    retreat: 3,

    variants: [
        {
            type: "holo",
            subtype: "unlimited",
        },
    ],
};

export default card
