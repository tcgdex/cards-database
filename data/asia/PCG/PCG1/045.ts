import {Card} from "../../../interfaces"
import Set from "../PCG1"

const card: Card = {
    set: Set,
    name: {
        ja: "スローブロ",
    },

    rarity: "Holo Rare",
    category: "Pokemon",
    dexId: [80],
    hp: 60,
    types: ["Psychic"],
    stage: "Stage1",

    abilities: [
        {
            type: "Ability",
            name: {
                ja: "奇妙な行動",
            },
            effect: {
                ja: "ターン中に（攻撃前）が好きなように、スローブロをノックアウトしない限り、ポケモンの1から1ダメージカウンターをスローブロに移動できます。 Slowbroが特別な状態の影響を受ける場合、このパワーは使用できません。",
            },
        }],

    attacks: [
        {
            cost: ["Psychic", "Colorless"],
            name: {
                ja: "PsyShock",
            },
            effect: {
                ja: "コインをひっくり返します。頭の場合、防御ポケモンは麻痺しています。",
            },
            damage: 30,
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
            stamp: ["1st edition"],
        },
    ],
};

export default card
